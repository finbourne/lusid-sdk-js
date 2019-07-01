// Require the LUSID client and libraries
import {client} from './clientBuilder'

describe('Collect Metatdata', () => {
  it('Should fetch the LUSID version information', (done) => {
    client.api.applicationMetadata.getLusidVersions()
    .then((result) => {
      console.log(result.body)
      done()
    })
    .catch((err) => console.log(err.response.statusCode, err.response.statusMessage))
  })
})

export {};
