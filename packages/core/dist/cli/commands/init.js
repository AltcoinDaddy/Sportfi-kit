"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCommand = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const initCommand = async () => {
    const currentDir = process.cwd();
    const pkgPath = path_1.default.join(currentDir, 'package.json');
    if (!fs_extra_1.default.existsSync(pkgPath)) {
        console.error(chalk_1.default.red('Error: package.json not found. Run "npm init" first or navigate to a project root.'));
        process.exit(1);
    }
    try {
        // Add dependencies
        const pkg = await fs_extra_1.default.readJson(pkgPath);
        pkg.dependencies = pkg.dependencies || {};
        pkg.dependencies['sportfi-kit'] = '^1.0.0';
        pkg.dependencies['wagmi'] = 'latest';
        pkg.dependencies['viem'] = 'latest';
        pkg.dependencies['@reown/appkit-wagmi'] = 'latest';
        await fs_extra_1.default.writeJson(pkgPath, pkg, { spaces: 2 });
        console.log(chalk_1.default.green('✅ Added sportfi-kit to dependencies.'));
        console.log(chalk_1.default.yellow('Remember to run "npm install" to update your node_modules.'));
    }
    catch (err) {
        console.error(chalk_1.default.red('Failed to initialize:'), err);
    }
};
exports.initCommand = initCommand;
