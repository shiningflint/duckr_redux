import { ref, firebaseAuth, provider } from 'helpers/constants'

export default function auth() {
  return firebaseAuth().signInWithPopup(provider)
}

export function logout() {
  return firebaseAuth().signout()
}

export function saveUser(user) {
  return ref.child(`users/${user.uid}`)
  .set(user)
  .then(() => user)
}
