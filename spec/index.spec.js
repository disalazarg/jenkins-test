const lib = require( '../lib' )

describe( 'jenkins-test', () => {
  it( 'can be tested', async () => {
    expect( 2 + 2 ).toEqual( 4 )
  })

  it( 'has a run/0 function', async () => {
    expect( lib.run ).toBeDefined()
    expect( lib.run ).toBeInstanceOf( Function )
  })
})
