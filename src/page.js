const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

const root = process.cwd();
const isRoot = fs.existsSync(path.resolve(root, 'src'));
module.exports = async (pathName) => {
  const postRoot = path.resolve(root, 'components');
  const template = '<template><div></div></template><script>export default{}</script>';
  fs.ensureDirSync(path.resolve(postRoot));
  const allList = fs.readdirSync(path.resolve(postRoot)).map((name) => name.split('.vue')[0]);
  // name exist
  if (~allList.indexOf(pathName)) {
    console.log(chalk.red(`\nFile ${pathName}.md already exist!\n`));
    process.exit(2);
  }
  fs.outputFile(path.resolve(postRoot, `${pathName}.vue`), template, 'utf8', (err) => {
    if (err) throw err;
    console.log(chalk.green(`\nCreate new blog ${chalk.cyan(`${pathName}.md`)} done!\n`));
  });
};
