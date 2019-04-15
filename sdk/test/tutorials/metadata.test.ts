// Require the LUSID client and libraries
import {client} from './clientBuilder'

client.api.applicationMetadata.getLusidVersions().then((result) => {
  console.log(result.body)})

export {};
