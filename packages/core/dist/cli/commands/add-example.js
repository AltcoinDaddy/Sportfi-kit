import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
export const addExampleCommand = async (exampleName) => {
    const currentDir = process.cwd();
    const srcDir = path.join(currentDir, 'src');
    // Resolve templates from the package root
    // - In source: packages/core/cli/commands/add-example.ts -> ../../templates
    // - In build: packages/core/dist/cli/commands/add-example.js -> ../../../templates
    const sourcePath = path.resolve(__dirname, '../../templates', exampleName);
    const buildPath = path.resolve(__dirname, '../../../templates', exampleName);
    const templateDir = fs.existsSync(sourcePath) ? sourcePath : buildPath;
    if (!fs.existsSync(srcDir)) {
        console.error(chalk.red('Error: src/ directory not found. Please run this in the root of a React project.'));
        process.exit(1);
    }
    if (!fs.existsSync(templateDir)) {
        console.error(chalk.red(`Error: Example "${exampleName}" not found.`));
        process.exit(1);
    }
    try {
        const targetPath = path.join(srcDir, 'examples', exampleName);
        console.log(chalk.blue(`Copying example code to ${targetPath}...`));
        await fs.copy(templateDir, targetPath);
        console.log(chalk.green(`\n✅ Example "${exampleName}" added successfully to your src/examples directory!`));
    }
    catch (err) {
        console.error(chalk.red('Failed to add example:'), err);
    }
};
