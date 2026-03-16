import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import gradient from 'gradient-string';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sportfiGradient = gradient(['#10b981', '#059669', '#047857']);

export const createCommand = async (appName: string, options: { template: string }) => {
  console.log('\n' + sportfiGradient.multiline([
    '  ⚽ SportFi Kit',
    '  Build your fan engagement apps faster.'
  ].join('\n')) + '\n');

  const targetDir = path.resolve(process.cwd(), appName);
  const sourcePath = path.resolve(__dirname, '../../templates', options.template);
  const buildPath = path.resolve(__dirname, '../../../templates', options.template);
  const templateDir = fs.existsSync(sourcePath) ? sourcePath : buildPath;

  if (fs.existsSync(targetDir)) {
    console.error(chalk.red(`\n  ✖ Error: Directory ${appName} already exists.`));
    process.exit(1);
  }

  if (!fs.existsSync(templateDir)) {
    const templatesDir = fs.existsSync(sourcePath) ? path.dirname(sourcePath) : path.dirname(buildPath);
    const availableTemplates = fs.readdirSync(templatesDir).filter(f => fs.statSync(path.join(templatesDir, f)).isDirectory());
    
    console.error(chalk.red(`\n  ✖ Error: Template "${options.template}" not found.`));
    console.log('\n' + chalk.bold('  Available templates:'));
    availableTemplates.forEach(t => console.log(`    - ${chalk.cyan(t)}`));
    console.log('\n');
    process.exit(1);
  }

  const spinner = ora({
    text: `Scaffolding project in ${chalk.bold(appName)} using ${chalk.cyan(options.template)}...`,
    color: 'green'
  }).start();

  try {
    await fs.copy(templateDir, targetDir);

    // Update package.json name
    const pkgPath = path.join(targetDir, 'package.json');
    if (fs.existsSync(pkgPath)) {
      const pkg = await fs.readJson(pkgPath);
      pkg.name = appName;
      await fs.writeJson(pkgPath, pkg, { spaces: 2 });
    }

    spinner.succeed(chalk.green(`Project ${chalk.bold(appName)} is ready!`));
    
    console.log('\n' + chalk.bold('  Next steps:'));
    console.log(`    1. ${chalk.cyan(`cd ${appName}`)}`);
    console.log(`    2. ${chalk.cyan('npm install')}`);
    console.log(`    3. ${chalk.cyan('npm run dev')}`);
    console.log('\n  ' + sportfiGradient('Happy hacking! 🚀') + '\n');

  } catch (err) {
    spinner.fail(chalk.red('Failed to create project.'));
    console.error(err);
  }
};
