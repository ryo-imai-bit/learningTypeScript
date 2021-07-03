import { Command } from 'commander';
import * as fs from 'fs/promises';
import md2HTML from './md2HTML';

async function main() {
  const program = new Command();
  // gfmオプションを定義する
  program.option('--gfm', 'GFMを有効にする');
  program.parse(process.argv);
  const filepath = program.args[0];
  const options = program.opts();

  let content;
  try {
    content = await fs.readFile(`input/${filepath}`, 'utf-8');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  const html = md2HTML(content, {
    gfm: options.gfm ?? false,
  });

  console.log(html);
}

export default main;

main();
