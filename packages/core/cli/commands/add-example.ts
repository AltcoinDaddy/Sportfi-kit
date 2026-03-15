import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import gradient from 'gradient-string';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sportfiGradient = gradient(['#10b981', '#059669', '#047857']);

export const addExampleCommand = async (exampleName: string) => {
  const currentDir = process.cwd();
  const srcDir = path.join(currentDir, 'src');
  
  const sourcePath = path.resolve(__dirname, '../../templates', exampleName);
  const buildPath = path.resolve(__dirname, '../../../templates', exampleName);
  const templateDir = fs.existsSync(sourcePath) ? sourcePath : buildPath;

  if (!fs.existsSync(srcDir)) {
    console.error(chalk.red('\n  ✖ Error: src/ directory not found. Please run this in the root of a React project.'));
    process.exit(1);
  }

  if (!fs.existsSync(templateDir)) {
    console.error(chalk.red(`\n  ✖ Error: Example "${exampleName}" not found.`));
    process.exit(1);
  }

  const spinner = ora({
    text: `Adding ${chalk.cyan(exampleName)} example to your project...`,
    color: 'green'
  }).start();

  try {
    const targetPath = path.join(srcDir, 'examples', exampleName);
    await fs.copy(templateDir, targetPath);
    
    spinner.succeed(chalk.green(`Example ${chalk.bold(exampleName)} added to src/examples!`));
    console.log('\n  ' + sportfiGradient('Ready to build your next fan experience! 🚀') + '\n');
  } catch (err) {
    spinner.fail(chalk.red('Failed to add example.'));
    console.error(err);
  }
};
