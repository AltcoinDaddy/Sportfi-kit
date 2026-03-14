"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommand = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const createCommand = async (appName, options) => {
    const targetDir = path_1.default.resolve(process.cwd(), appName);
    // Resolve templates from the package root
    // - In source: packages/core/cli/commands/create.ts -> ../../templates
    // - In build: packages/core/dist/cli/commands/create.js -> ../../../templates
    const sourcePath = path_1.default.resolve(__dirname, '../../templates', options.template);
    const buildPath = path_1.default.resolve(__dirname, '../../../templates', options.template);
    const templateDir = fs_extra_1.default.existsSync(sourcePath) ? sourcePath : buildPath;
    if (fs_extra_1.default.existsSync(targetDir)) {
        console.error(chalk_1.default.red(`Error: Directory ${appName} already exists.`));
        process.exit(1);
    }
    if (!fs_extra_1.default.existsSync(templateDir)) {
        console.error(chalk_1.default.red(`Error: Template "${options.template}" not found.`));
        process.exit(1);
    }
    try {
        console.log(chalk_1.default.blue(`Scaffolding project from ${options.template} template...`));
        await fs_extra_1.default.copy(templateDir, targetDir);
        // Update package.json name
        const pkgPath = path_1.default.join(targetDir, 'package.json');
        if (fs_extra_1.default.existsSync(pkgPath)) {
            const pkg = await fs_extra_1.default.readJson(pkgPath);
            pkg.name = appName;
            await fs_extra_1.default.writeJson(pkgPath, pkg, { spaces: 2 });
        }
        console.log(chalk_1.default.green(`\n✅ Project "${appName}" created successfully!`));
        console.log(`\nNext steps:`);
        console.log(`  cd ${appName}`);
        console.log(`  npm install`);
        console.log(`  npm run dev\n`);
    }
    catch (err) {
        console.error(chalk_1.default.red('Failed to create project:'), err);
    }
};
exports.createCommand = createCommand;
