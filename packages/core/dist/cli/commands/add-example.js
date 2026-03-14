"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExampleCommand = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const addExampleCommand = async (exampleName) => {
    const currentDir = process.cwd();
    const srcDir = path_1.default.join(currentDir, 'src');
    // Resolve templates from the package root
    // - In source: packages/core/cli/commands/add-example.ts -> ../../templates
    // - In build: packages/core/dist/cli/commands/add-example.js -> ../../../templates
    const sourcePath = path_1.default.resolve(__dirname, '../../templates', exampleName);
    const buildPath = path_1.default.resolve(__dirname, '../../../templates', exampleName);
    const templateDir = fs_extra_1.default.existsSync(sourcePath) ? sourcePath : buildPath;
    if (!fs_extra_1.default.existsSync(srcDir)) {
        console.error(chalk_1.default.red('Error: src/ directory not found. Please run this in the root of a React project.'));
        process.exit(1);
    }
    if (!fs_extra_1.default.existsSync(templateDir)) {
        console.error(chalk_1.default.red(`Error: Example "${exampleName}" not found.`));
        process.exit(1);
    }
    try {
        const targetPath = path_1.default.join(srcDir, 'examples', exampleName);
        console.log(chalk_1.default.blue(`Copying example code to ${targetPath}...`));
        await fs_extra_1.default.copy(templateDir, targetPath);
        console.log(chalk_1.default.green(`\n✅ Example "${exampleName}" added successfully to your src/examples directory!`));
    }
    catch (err) {
        console.error(chalk_1.default.red('Failed to add example:'), err);
    }
};
exports.addExampleCommand = addExampleCommand;
