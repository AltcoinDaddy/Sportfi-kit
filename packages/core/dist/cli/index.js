#!/usr/bin/env node
import { cac } from 'cac';
import chalk from 'chalk';
import { createCommand } from './commands/create';
import { initCommand } from './commands/init';
import { addExampleCommand } from './commands/add-example';
const cli = cac('sportfi-kit');
cli
    .command('create <app-name>', 'Scaffold a new SportFi mini-app')
    .option('--template <template>', 'Template to use (basic, prediction-market, fan-token-gate, live-poll)', { default: 'basic' })
    .action(async (appName, options) => {
    console.log(chalk.hex('#059669')(`\n⚽ SportFi Kit: Creating "${appName}"...`));
    await createCommand(appName, options);
});
cli
    .command('init', 'Add SportFi Kit to an existing project')
    .action(async () => {
    console.log(chalk.hex('#059669')(`\n🛠️ SportFi Kit: Initializing in current directory...`));
    await initCommand();
});
cli
    .command('add-example <name>', 'Add a SportFi example to your project')
    .action(async (name) => {
    console.log(chalk.hex('#059669')(`\n💡 SportFi Kit: Adding example "${name}"...`));
    await addExampleCommand(name);
});
cli.help();
cli.version('1.0.0');
cli.parse();
