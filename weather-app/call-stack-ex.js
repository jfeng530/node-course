// Node.js Call Stack

// starts off with main() getting pushed
// then 'Starting...' gets pushed and removed as function is completed
// 'setTimeout 2000' gets pushed onto stack and then into Node API
  // not part of JS programming language, NodeJS creates an implementation of setTimeout using C++
  // provides it to NodeJS script to use
  // really registering an event with NodeJS API (event-callback pair)

  // NodeJS uses other threads in C++ to manage events (ex. NodeJS API) => non-blocking nature of NodeJS
// 'setTimeout 0' gets pushed onto stack and then into Node API
// Callback Queue 
  // 'setTimeout 0' gets sent to Callback Queue, ready to be executed
  // Event Loop looks at Call Stack, checks to see if it's empty
    // if it's empty, it executes from Callback Queue
    // if not, it waits till Call Stack is empty
// 'Finishing...' gets pushed and removed as function is completed
// main.js is removed
// since this is asynchronous, Event Loop starts
// moves callback function pushed to stack
// 'setTimeout 0' pushed to stack and removed
// callback function removed
// same for 'setTimeout 2000'


console.log('Starting...')

setTimeout(() => {
  console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
  console.log('0 Second Timer')
}, 0)

console.log('Stopping...')