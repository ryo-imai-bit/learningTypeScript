import { Command } from 'commander';

function main() {
  const program = new Command();
  program.parse(process.argv);
  const filepath = program.args[0];
  console.log(filepath);
}

main();
