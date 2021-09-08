const pkg   = require( '../package' )
const cfg   = require( 'config' )
const R     = require( 'ramda' )
const axios = require( 'axios' )

const url   = `${cfg.base_url}${cfg.path}`

async function run() {
  let data  = R.pipe(
    R.pick([ 'name', 'version' ]),
    R.assoc( 'description', cfg.description )
  )( pkg )

  return axios
    .post( url, data )
    .then( d => d.data )
}

module.exports = { run }
