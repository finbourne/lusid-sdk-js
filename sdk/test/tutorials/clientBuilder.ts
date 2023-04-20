import { AuthenticationMethod, LusidClient, Source } from '../../client/client'


if (process.env["FBN_ACCESS_TOKEN"]) {
  var authMethod = AuthenticationMethod.PersonalAccessToken
} else {
  var authMethod = AuthenticationMethod.RefreshingToken
};

export var client = new LusidClient(
  [Source.Environment, 'FBN_TOKEN_URL'],
  [Source.Environment, 'FBN_USERNAME'],
  [Source.Environment, 'FBN_PASSWORD'],
  [Source.Environment, 'FBN_CLIENT_ID'],
  [Source.Environment, 'FBN_CLIENT_SECRET'],
  [Source.Environment, 'FBN_LUSID_API_URL'],
  authMethod,
  [Source.Environment, 'FBN_ACCESS_TOKEN'],
)
