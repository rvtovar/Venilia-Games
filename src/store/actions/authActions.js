import firebase from 'firebase/app'

export const logIn = (credentials) => {
    return (dispatch,getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type:'LOGIN_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type:'LOGIN_ERROR',
                err
            })
        })
    }
}

export const logOut = () => {
    return (dispatch,getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'LOGOUT_SUCCESS'
            })
        })
    }
}


export const signUp = (newUser) => {
    return (dispatch,getState) => {
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firebase.firestore().collection('users')
                .doc(res.user.uid).set({
                    userName: newUser.userName,
                    givenName: newUser.givenName,
                })
        }).then(() => {
            dispatch({
                type:'SIGNUP_SUCCESS'
            })
        }).catch((err) => {
            dispatch({
                type: 'SIGNUP_ERROR',
                err
            })
        })
    }
}