import { socket } from './index'

export function getRooms(commit) {
  socket.emit('getRooms')
  socket.on('getRooms', (data) => {
    commit(data)
  })
}

export function sendMessage(username, message, commit) {
  socket.emit('message', { username, message })
  commit({ username, message })
}

export function getMessage(commit) {
  socket.on('chatMessage', ({ username, message }) => {
    commit({ username, message })
  })
}

export function joinRoom(room, commit) {
  socket.emit('joinRoom', room)
  commit(room)
}

export function leaveRoom(room, commit) {
  socket.emit('leaveRoom', room)
  commit(room)
}