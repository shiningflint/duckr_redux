export default function auth() {
  return new Promise((resolve, reject) => {
    const failSuccessFlag = true
    setTimeout(() => {
      failSuccessFlag === true
        ? resolve({
            name: 'Adam Christopher',
            avatar: 'https://image.flaticon.com/icons/svg/0/93.svg',
            uid: 'adumkeristoper',
          })
        : reject()
    }, 2000)
  })
}
