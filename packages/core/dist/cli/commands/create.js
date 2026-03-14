import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
export const createCommand = async (appName, options) => {
    const targetDir = path.resolve(process.cwd(), appName);
    // Resolve templates from the package root
    // - In source: packages/core/cli/commands/create.ts -> ../../templates
    // - In build: packages/core/dist/cli/commands/create.js -> ../../../templates
    const sourcePath = path.resolve(__dirname, '../../templates', options.template);
    const buildPath = path.resolve(__dirname, '../../../templates', options.template);
    const templateDir = fs.existsSync(sourcePath) ? sourcePath : buildPath;
    if (fs.existsSync(targetDir)) {
        console.error(chalk.red(`Error: Directory ${appName} already exists.`));
        process.exit(1);
    }
    if (!fs.existsSync(templateDir)) {
        console.error(chalk.red(`Error: Template "${options.template}" not found.`));
        process.exit(1);
    }
    try {
        console.log(chalk.blue(`Scaffolding project from ${options.template} template...`));
        await fs.copy(templateDir, targetDir);
        // Update package.json name
        const pkgPath = path.join(targetDir, 'package.json');
        if (fs.existsSync(pkgPath)) {
            const pkg = await fs.readJson(pkgPath);
            pkg.name = appName;
            await fs.writeJson(pkgPath, pkg, { spaces: 2 });
        }
        console.log(chalk.green(`\n✅ Project "${appName}" created successfully!`));
        console.log(`\nNext steps:`);
        console.log(`  cd ${appName}`);
        console.log(`  npm install`);
        console.log(`  npm run dev\n`);
    }
    catch (err) {
        console.error(chalk.red('Failed to create project:'), err);
    }
};
