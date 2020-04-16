import firebase from 'firebase/app'

// export const usernameCheck = async (username='', data={}) => {
//     console.log(username)
//     const response = await fetch({
//         method: 'GET',
//         url: `https://us-central1-venilia-games.cloudfunctions.net/userNameCheck/?`,
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           body: JSON.stringify(data)
//       })

//       return response.text()
// }
  


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
            const user = firebase.auth().currentUser
            user.updateProfile({
                displayName: newUser.username
            })
            return firebase.firestore().collection('users')
                .doc(res.user.uid).set({
                    username: newUser.username,
                    name: newUser.name,
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

// export const signUp = (newUser) => {
//     return (dispatch, getState) => {
//         firebase.auth().createUserWithEmailAndPassword(
//             newUser.email,
//             newUser.password
//         ).then(() => {
//             let user = firebase.auth().currentUser
//             return user
//         }).then((user) => {
//             return user.updateProfile({
//                 displayName:  newUser.username,
//                 photoURL: ''
//             })
//         }).then(() => {
//                 dispatch({
//                     type:'SIGNUP_SUCCESS'
//                 })
//         }).catch((err) => {
//             dispatch({
//                 type: 'SIGNUP_ERROR'
//             })
//         })
//     }
// }