const path = require('path');
const fs = require('fs').promises;
const chalk = require('chalk');

const root = process.cwd();
const isRoot = fs.existsSync(path.resolve(root, 'src'));
const postRoot = path.resolve(root, 'components');
module.exports = async (pathName) => {
  const allList = fs.readdirSync(path.resolve(postRoot)).map((name) => name.split('.vue')[0]);
  // name exist
  if (~allList.indexOf(pathName)) {
    rmdir(pathName);
  }

  async function rmdir(p) {
    const statObj = await fs.stat(p);
    if (statObj.isDirectory()) {
      let dirs = await fs.readdir(p);
      // 等待子目录删除完毕后 删除自己
      dirs = dirs.map((dir) => rmdir(path.join(p, dir)));
      await Promise.all(dirs);
      await fs.rmdir(p);
    } else {
      await fs.unlink(p);
    }
  }
};
