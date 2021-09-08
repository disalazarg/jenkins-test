const pkg   = require( '../package' )
const R     = require( 'ramda' )
const axios = require( 'axios' )

const url   = 'https://dsalazar.cl/shipping/api/events/jenkins/job'
async function run() {
  let data  = R.pipe(
    R.pick([ 'name', 'version' ]),
    R.assoc( 'description', 'Test run of my custom Jenkins job' )
  )( pkg )

  return axios
    .post( url, data )
    .then( d => d.data )
}

module.exports = { run }
