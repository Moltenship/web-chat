import { createStore } from 'vuex'
import { getRooms, sendMessage, getMessage, joinRoom, leaveRoom }  from '@/api/socket'
import { getUsername, setUsername } from '@/api/localstorage'
import { SET_USERNAME, SET_ROOMS, ADD_MESSAGE, REMOVE_MESSAGES,  SET_CURRENT_ROOM } from './mutation-types'

export default createStore({
  state: {
    rooms: [],
    username: '',
    messages: [],
    currentRoom: '',
  },
  mutations: {
    [SET_ROOMS](state, payload) {
      state.rooms = payload
    },
    [SET_USERNAME](state, payload) {
      state.username = payload
      setUsername(payload)
    },
    [ADD_MESSAGE](state, message) {
      state.messages.push(message)
    },
    [SET_CURRENT_ROOM](state, room) {
      state.currentRoom = room
    },
    [REMOVE_MESSAGES](state) {
      state.messages = []
    },
  },
  actions: {
    fetchRooms({ commit }) {
      getRooms(data => commit('SET_ROOMS', data))
    },
    loadUsername({ commit }) {
      const username = getUsername()
      if (username) {
        commit('SET_USERNAME', username)
      }
    },
    selectRoom({ getters, commit }, payload) {
      if (getters.currentRoom) {
        leaveRoom(getters.currentRoom, () => {
          commit('REMOVE_MESSAGES')
        })
      }
      joinRoom(payload, (payload) => {
        commit('SET_CURRENT_ROOM', payload)
      })
    } ,
    fetchMessages({ commit }) {
      getMessage(messageData => commit('ADD_MESSAGE', messageData))
    },
    addMessage({ getters, commit }, message) {
      sendMessage(getters.username, message, message => commit('ADD_MESSAGE', message))
    },
  },
  modules: {
  },
  getters: {
    allRooms(state) {
      return state.rooms
    },
    username(state) {
      return state.username
    },
    currentRoom(state) {
      return state.currentRoom
    },
    chatMessages(state) {
      return state.messages
    },
  },
})
