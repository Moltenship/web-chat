import { createStore } from 'vuex'
import { socket }  from '@/api/index'
import getRooms  from '@/api/socket'
import { getUsername, setUsername } from './localstorage'
import { SET_USERNAME, SET_ROOMS } from './mutation-types'

export default createStore({
  state: {
    rooms: [],
    username: '',
  },
  mutations: {
    [SET_ROOMS](state, payload) {
      state.rooms = payload
    },
    [SET_USERNAME](state, payload) {
      state.username = payload
      setUsername(payload)
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
  },
})
