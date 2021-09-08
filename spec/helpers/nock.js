const nock = require( 'nock' )

nock( 'https://dsalazar.cl' )
  .post( '/shipping/api/events/jenkins/job' )
  .reply( 200, ( url, req ) => req )
