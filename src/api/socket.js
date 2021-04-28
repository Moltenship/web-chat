import { socket } from './index'

export default function getRooms(callback) {
  socket.on('getRooms', (data) => {
    callback(data)
  })
}