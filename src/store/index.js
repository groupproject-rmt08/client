import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text1: '',
    text2: '',
    stateTeam: {
      team1Ready: false,
      user1: '',
      point1: 0,
      team2Ready: false,
      user2: '',
      point2: 0,
      gameState: false
    }
  },
  mutations: {
    reply_tombol1 (state, message) {
      state.text1 = message
    },
    reply_tombol2 (state, message) {
      state.text2 = message
    },
    set_state_1 (state, teamState) {
      state.stateTeam.team1Ready = teamState
    },
    set_state_2 (state, teamState) {
      state.stateTeam.team2Ready = teamState
    }
  },
  actions: {
    SOCKET_init (context, teamState) {
      context.commit('set_state_1', teamState.team1Ready)
      if (teamState.team1Ready) {
        context.commit('reply_tombol1', 'Team 1 ready')
      }
      context.commit('set_state_2', teamState.team2Ready)
      if (teamState.team2Ready) {
        context.commit('reply_tombol2', 'Team 2 ready')
      }
    },
    SOCKET_reply_tombol1 (context, teamState) {
      context.commit('reply_tombol1', 'Team 1 ready')
      context.commit('set_state_1', teamState.team1Ready)
    },
    SOCKET_reply_tombol2 (context, teamState) {
      context.commit('reply_tombol2', 'Team 2 ready')
      context.commit('set_state_2', teamState.team2Ready)
    },
    SOCKET_backToMenu (context, teamState) {
      context.commit('reply_tombol1', '')
      context.commit('set_state_1', teamState.team1Ready)
      context.commit('reply_tombol2', '')
      context.commit('set_state_2', teamState.team2Ready)
    },
    SOCKET_resetTeam1 (context) {
      context.commit('reply_tombol1', '')
      context.commit('set_state_1', false)
    },
    SOCKET_resetTeam2 (context) {
      context.commit('reply_tombol2', '')
      context.commit('set_state_2', false)
    }
  },
  modules: {
  }
})
