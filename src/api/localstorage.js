function getUsername() {
  let username = localStorage.getItem('username')
  return username ? username : ''
}

function setUsername(username) {
  localStorage.setItem('username', username)
}

export { getUsername, setUsername }