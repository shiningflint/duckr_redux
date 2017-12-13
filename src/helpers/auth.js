export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Adam Christopher',
        avatar: 'https://image.flaticon.com/icons/svg/0/93.svg',
        uid: 'adumkeristoper',
      })
    }, 2000)
  })
}
