import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    //const authProvider = new firebase.auth.GithubAuthProvider();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
