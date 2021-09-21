const fs = require('fs')
const installData = require('./installData.js')
const { tauqueScripts } = installData

/**
 * Merges scripts with current package.json content and returns as object
 * @returns {{}} - package.json content
 */
module.exports = function editPackage (packagePath) {
  let loadedJson = {}
  try {
    loadedJson = JSON.parse(fs.readFileSync(packagePath))
    if (!loadedJson.scripts) {
      loadedJson.scripts = tauqueScripts
    } else {
      if (loadedJson.scripts.dev && loadedJson.scripts.dev !== tauqueScripts.dev) {
        loadedJson.scripts.tauquedev = tauqueScripts.dev
      } else {
        loadedJson.scripts.dev = tauqueScripts.dev
      }
      if (loadedJson.scripts.build && loadedJson.scripts.build !== tauqueScripts.build) {
        loadedJson.scripts.tauque = tauqueScripts.build
      } else {
        loadedJson.scripts.build = tauqueScripts.build
      }
    }
  } catch (err) {
    console.log(err)
  }
  return loadedJson
}
