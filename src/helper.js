	
import { authorize } from 'react-native-app-auth'
    const config = {
		redirectUrl: 'com.myapp://oauth2redirect/reddit',
		clientId: 'NV0fz4WStvaz48_41QzdfA',
		clientSecret: '', // empty string - needed for iOS
		scopes: [
			'identity',
			'edit',
			'subscribe',
			'save',
			'submit',
			'read',
			'modconfig',
			'account',
			'vote',
			'flair',
			'mysubreddits',
		  ],
		serviceConfiguration: {
		  authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
		  tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
		},
		customHeaders: {
		  token: {
			Authorization: 'Basic ZmNhZll0Nl9PaHJsUUVONk5UVHlVUQ==',
		  },
		},
	  };
   

    export const getToken = ()=>{
        const login_response =  authorize(config);
        try{
            if (login_response) {
                return login_response
            }
        }catch(e){
            return e
        }

    }