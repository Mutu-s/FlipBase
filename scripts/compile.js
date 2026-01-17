const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔨 Compiling FlipBase contract...')

try {
  // Compile contract
  execSync('npx hardhat compile', { stdio: 'inherit' })
  
  // Check if ABI file exists
  const abiPath = path.join(__dirname, '..', 'artifacts', 'contracts', 'FlipBase.sol', 'FlipBase.json')
  
  if (fs.existsSync(abiPath)) {
    console.log('✅ Contract compiled successfully!')
    console.log(`📄 ABI file: ${abiPath}`)
  } else {
    console.log('⚠️  ABI file not found. Please run: npx hardhat compile')
  }
} catch (error) {
  console.error('❌ Compilation failed:', error.message)
  process.exit(1)
}
