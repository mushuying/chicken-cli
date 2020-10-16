const downloadGit = `${process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']}.template`;
module.exports = {
  downloadGit,
};
