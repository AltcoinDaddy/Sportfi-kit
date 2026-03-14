#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const chalk_1 = __importDefault(require("chalk"));
const create_js_1 = require("./commands/create.js");
const init_js_1 = require("./commands/init.js");
const add_example_js_1 = require("./commands/add-example.js");
const cli = (0, cac_1.cac)('sportfi-kit');
cli
    .command('create <app-name>', 'Scaffold a new SportFi mini-app')
    .option('--template <template>', 'Template to use (basic, prediction-market, fan-token-gate, live-poll)', { default: 'basic' })
    .action(async (appName, options) => {
    console.log(chalk_1.default.hex('#059669')(`\n⚽ SportFi Kit: Creating "${appName}"...`));
    await (0, create_js_1.createCommand)(appName, options);
});
cli
    .command('init', 'Add SportFi Kit to an existing project')
    .action(async () => {
    console.log(chalk_1.default.hex('#059669')(`\n🛠️ SportFi Kit: Initializing in current directory...`));
    await (0, init_js_1.initCommand)();
});
cli
    .command('add-example <name>', 'Add a SportFi example to your project')
    .action(async (name) => {
    console.log(chalk_1.default.hex('#059669')(`\n💡 SportFi Kit: Adding example "${name}"...`));
    await (0, add_example_js_1.addExampleCommand)(name);
});
cli.help();
cli.version('1.0.0');
cli.parse();
