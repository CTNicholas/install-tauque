import spawn from 'cross-spawn'

export default async function installTauque (manager) {
  return new Promise((resolve, reject) => {
    let command = ''
    let args = ''

    if (manager === 'yarn') {
      command = 'yarnpkg'
      args = ['add', 'tauque']
    }

    if (manager === 'pnpm') {
      command = 'pnpm'
      args = ['add', 'tauque']
    }

    if (manager === 'npm') {
      command = 'npm'
      args = ['install', 'tauque']
    }

    const child = spawn(command, args, {
      stdio: 'inherit',
      env: { ...process.env, ADBLOCK: '1', DISABLE_OPENCOLLECTIVE: '1' }
    })
    child.on('close', (code) => {
      if (code !== 0) {
        reject({ command: `${command} ${args.join(' ')}` })
        return
      }
      resolve()
    })
  })
}
