const fs = require('fs')
const installData = require('./installData.js')
const { tauqueDefaultPackage } = installData

/**
 * Creates default package.json
 * @param packagePath
 */
module.exports = function createPackage (packagePath) {
  try {
    fs.writeFileSync(packagePath, JSON.stringify(tauqueDefaultPackage, null, 2))
    return tauqueDefaultPackage
  } catch (error) {
    console.log(error)
    return null
  }
}
