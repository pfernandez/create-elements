#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function init() {
  let projectName = process.argv[2];

  if (!projectName) {
    const rl = readline.createInterface({ input, output });
    projectName = await rl.question('Project name: (my-elements-app) ');
    rl.close();

    projectName = projectName.trim() || 'my-elements-app';
  }

  const targetDir = path.resolve(process.cwd(), projectName);
  const templateDir = path.resolve(__dirname, 'template');

  if (fs.existsSync(targetDir) && fs.readdirSync(targetDir).length > 0) {
    console.error(`✖ Error: Directory "${projectName}" is not empty.`);
    process.exit(1);
  }

  console.log(`\nScaffolding project in ${targetDir}...`);

  try {
    fs.cpSync(templateDir, targetDir, { recursive: true });

    const gitignorePath = path.join(targetDir, 'gitignore');
    if (fs.existsSync(gitignorePath)) {
      fs.renameSync(gitignorePath, path.join(targetDir, '.gitignore'));
    }

    console.log(`\n✔ Done! To get started:`);
    console.log(`  cd ${projectName}`);
    console.log(`  npm install\n`);
  } catch (err) {
    console.error('✖ Error copying template:', err.message);
    process.exit(1);
  }
}

init().catch(console.error);

