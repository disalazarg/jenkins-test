const nock = require( 'nock' )
const cfg  = require( 'config' )

nock( cfg.base_url )
  .post( cfg.path )
  .reply( 200, ( url, req ) => req )
