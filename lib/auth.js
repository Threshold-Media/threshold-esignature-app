import React, { useState, useEffect, useContext, createContext } from 'react'
import { initFirebase, auth } from './firebase'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
//import { createUser } from './db'
import { signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth'


const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

const formatUser = async (user) => {
  const token = await user.getIdToken()
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    //stripeRole: await getStripeRole(),
    token
  }
}

function useProvideAuth() {
  initFirebase()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [passwordError, setPasswordError] = useState(null)
  const [resetSent, setResetSent] = useState(false)
  const router = useRouter()

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser)
      const { token, ...userWithoutToken } = user

      //createUser(user.uid, userWithoutToken)
      setUser(user)

      cookie.set('threshold-media-app-auth', true, {
        expires: 1 / 24
      })

      setLoading(false)
      return user
    } else {
      setUser(false)
      cookie.remove('threshold-media-app-auth')

      setLoading(false)
      return false
    }
  }

  const logInWithEmailAndPassword = async (email, password) => {
    setLoading(true)
    setPasswordError(null)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      handleUser(response.user)
      router.push('/dashboard/email-signature-generator')
    } catch (err) {
      if (err.code === "auth/") {
        setPasswordError('The password you entered is incorrect.')
      } else {
        setPasswordError('Please enter a vaild password.')
      }
    }
  }
  
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email)
      setResetSent(true)
      console.log('Password reset link sent!')
    } catch (err) {
      setResetSent(false)
      console.error(err)
      alert(err.message)
    }
  }
  
  const signout = async () => {
    router.push('/')

    await signOut(auth)
    setUser(false)
    return await handleUser(false)
  }

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser)
    return () => unsubscribe()
  }, [])

  return {
    user,
    loading,
    logInWithEmailAndPassword,
    sendPasswordReset,
    signout,
    passwordError,
    resetSent,
    setResetSent
  }

}

// const googleProvider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, 'users'), where('uid', '==', user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, 'users'), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: 'google',
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, 'users'), {
//       uid: user.uid,
//       name,
//       authProvider: 'local',
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };