import {db, auth, FirebaseTimestamp} from '../../firebase/index';
import {push} from 'connected-react-router';

export const signIn = (email, password) =>{
  return async (dispatch) => {
    
    if (email === '' || password === '') {
        alert('You need to input your email adress.')
        return false
    }
   
    return auth.signInWithEmailAndPassword(email, password)
        .then(result => {
            const user = result.user
            if (user) {
                const uid = user.uid;
                db.collection('users').doc(uid).get().then(snapshot => {
                  const data = snapshot.data()
                })
            }
          })
  }
}

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
      
      if(email === '' || password === '' || confirmPassword === '') {
          alert('You need to fill the requirement.');
          return false
      }

      if (password !== confirmPassword) {
          alert('This is not match with password. Try again.')
          return false
      }
      if (password.length < 6) {
          alert('You need input 6 characters at least.')
          return false
      }

      return auth.createUserWithEmailAndPassword(email, password)
          .then(result => {
              
              const user = result.user;
              if (user) {
                  const uid = user.uid;
                  const timestamp = FirebaseTimestamp.now();

                  const userInitialData = {
                      customer_id: "",
                      created_at: timestamp,
                      email: email,
                      role: "customer",
                      uid: uid,
                      updated_at: timestamp,
                      username: username
                  };

                  db.collection('users').doc(uid).set(userInitialData).then(() => {
                    dispatch(push('/'))
                  })

                }
              })             
  }
}
