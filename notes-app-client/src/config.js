export default {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-application-files'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://jwsshewh47.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_qMPoz6WOX',
    APP_CLIENT_ID: '68vo24svl0e97o7iqd402pkb9k',
    IDENTITY_POOL_ID: 'us-east-2:9cda7a5d-a5f6-4ba4-8a8a-331cded975a2'
  }
};
