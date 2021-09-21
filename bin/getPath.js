const path = require('path')

// Gets CWD
module.exports = function getPath (p) {
  return path.resolve(process.env.INIT_CWD || path.resolve('../../', __dirname), p)
}
