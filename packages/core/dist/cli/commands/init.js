import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
export const initCommand = async () => {
    const currentDir = process.cwd();
    const pkgPath = path.join(currentDir, 'package.json');
    if (!fs.existsSync(pkgPath)) {
        console.error(chalk.red('Error: package.json not found. Run "npm init" first or navigate to a project root.'));
        process.exit(1);
    }
    try {
        // Add dependencies
        const pkg = await fs.readJson(pkgPath);
        pkg.dependencies = pkg.dependencies || {};
        pkg.dependencies['sportfi-kit'] = '^1.0.0';
        pkg.dependencies['wagmi'] = 'latest';
        pkg.dependencies['viem'] = 'latest';
        pkg.dependencies['@reown/appkit-wagmi'] = 'latest';
        await fs.writeJson(pkgPath, pkg, { spaces: 2 });
        console.log(chalk.green('✅ Added sportfi-kit to dependencies.'));
        console.log(chalk.yellow('Remember to run "npm install" to update your node_modules.'));
    }
    catch (err) {
        console.error(chalk.red('Failed to initialize:'), err);
    }
};
