function getUsername() {
  let username = localStorage.getItem('username')
  if (username) {
    return username
  } else {
    return ''
  }
}

function setUsername(username) {
  localStorage.setItem('username', username)
}

export { getUsername, setUsername }