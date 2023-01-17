import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  // splash Css
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 50,
    alignSelf: 'center',
  },
  // Splash Css End

  // Login Css
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  LogincentreContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    marginHorizontal: 30
  },
  loginLinesLogin: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',

    alignSelf: 'center'
  },
  button: {
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: 5
  },
  //Login css End

  // posts css
  cardPosts: {
    position: 'relative'
  },
  rowDirect: {
    flexDirection: 'row'
  },
  colDirect: {
    flexDirection: 'column'
  },
  cardName: {
    color: '#000',
    fontSize: 16,
  },
  cardNameSub: {

    color: '#000',
    fontSize: 14,
  },
  iconStyle: {
    color: '#000',
    fontSize: 18
  }

  // posts css End
})
export default styles;
