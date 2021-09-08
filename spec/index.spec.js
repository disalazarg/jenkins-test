const lib = require( '../lib' )

describe( 'jenkins-test', () => {
  it( 'can be tested', async () => {
    expect( 2 + 2 ).toEqual( 4 )
  })

  it( 'has a run/0 function', async () => {
    expect( lib.run ).toBeDefined()
    expect( lib.run ).toBeInstanceOf( Function )
  })

  it( 'can be run', async () => {
    let result = await lib.run()

    expect( result ).toBeInstanceOf( Object )
    expect( result.name ).toEqual( 'jenkins-test' )
  })
})
