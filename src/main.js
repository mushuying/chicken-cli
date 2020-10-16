#!/usr/bin/env node
/**
 *  as a startup file
 */

const program = require('commander');
const pkg = require('../package.json');

program
  .version(`chicken-cli ${pkg.version}`, '-v -version')
  .usage('<command> [options]');

program
  .command('create <app-name>')
  .description('create project')
  .action(() => {
    require('./create.js')(process.argv.slice(3));
  });

program
  .command('add')
  .description('chicken-cli add pages')
  .action(() => {
    require('./page.js')(process.argv.slice(3));
  });

program
  .command('reomobe')
  .description('chicken-cli remobe pages')
  .action(() => {
    require('./remove.js')(process.argv.slice(3));
  });
// program
//   .command('build')
//   .description('build project')
//   .action(() => {
//
//   });

//   program
//   .command('dev')
//   .description('dev project')
//   .action(() => {
//
//   });
//   program
//   .command('online')
//   .description('online project')
//   .action(() => {
//
//   });

program.program.parse(process.argv);
