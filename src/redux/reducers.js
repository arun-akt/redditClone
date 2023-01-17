const loading = false;
const success = false;
const cmssuccess = false;

const reducer = (state = { loading, success, cmssuccess }, action) => {
	switch (action.type) {
		case 'LOGIN_USER_SUCCESS':
			return { ...state, loading: false, login_response: action.login_response }
		case 'LOGIN_USER_SUCCESS':
			return { ...state, loading: false, posts_response: action.posts_response }
		default:	
			return state;				
			
	}
}
export default reducer;