import { execSync } from 'child_process'

export default async function installTauque (manager) {
  let cmd = 'npm install tauque'

  if (manager === 'yarn') {
    cmd = 'yarn add tauque'
  }

  if (manager === 'pnpm') {
    cmd = 'pnpm add tauque'
  }

  execSync(cmd)
}
