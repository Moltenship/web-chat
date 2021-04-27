import { createStore } from 'vuex'
import { socket }  from '@/api/index'

export default createStore({
  state: {
    rooms: [],
  },
  mutations: {
    SET_ROOMS(state, payload) {
      state.rooms = payload
    },    
  },
  actions: {
    fetchRooms({ commit }) {
      socket.on('getRooms', (data) => {
        commit('SET_ROOMS', data)
      })
    },
  },
  modules: {
  },
  getters: {
    allRooms(state) {
      return state.rooms
    },
  },
})
