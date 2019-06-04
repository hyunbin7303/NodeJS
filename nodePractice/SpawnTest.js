const { spawn } = require('child_process')
const child = spawn('ls', ['-a', '-l']);

// spawn as array using its second argument.
//spawn returns a ChildProcess object.
// ChildProcess inherits from EventEmitter


child.on('exit', code => {
  console.log(`Exit code is : ${code}`);
})
