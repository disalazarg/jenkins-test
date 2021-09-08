const { run } = require( './lib' )

run()
  .then( JSON.stringify )
  .then( console.log )
  .catch( console.error )
  .then( process.emit( "SIGTERM" ))
