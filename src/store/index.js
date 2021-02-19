import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text1: '',
    text2: '',
    userId: '',
    team: '',
    counting: true,
    stateTeam: {
      team1Ready: false,
      user1: '',
      point1: 0,
      team2Ready: false,
      user2: '',
      point2: 0,
      gameState: false,
      difference: 0,
      winner: ''
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
    },
    enableCount (state, payload) {
      state.counting = payload
    },
    setWinner (state, winner) {
      state.stateTeam.winner = winner
    },
    setDifference (state, difference) {
      state.stateTeam.difference = difference
    },
    setPoint1 (state, point) {
      state.stateTeam.point1 = point
    },
    setPoint2 (state, point) {
      state.stateTeam.point2 = point
    },
    setTeam (state, team) {
      state.team = team
    },
    setUserId (state, payload) {
      state.userId = payload
    },
    setStateTeam (state, payload) {
      state.stateTeam = payload
    },
    setGameState (state, payload) {
      state.stateTeam.gameState = payload
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
      if (teamState.user1 === this.state.userId) {
        context.commit('setTeam', 'team 1')
      }
      context.commit('set_state_1', teamState.team1Ready)
    },
    SOCKET_reply_tombol2 (context, teamState) {
      context.commit('reply_tombol2', 'Team 2 ready')
      if (teamState.user2 === this.state.userId) {
        context.commit('setTeam', 'team 2')
      }
      context.commit('set_state_2', teamState.team2Ready)
    },
    SOCKET_backToMenu (context, teamState) {
      context.commit('reply_tombol1', '')
      context.commit('set_state_1', teamState.team1Ready)
      context.commit('reply_tombol2', '')
      context.commit('set_state_2', teamState.team2Ready)
      context.commit('setStateTeam', teamState)
    },
    SOCKET_resetTeam1 (context) {
      context.commit('reply_tombol1', '')
      context.commit('set_state_1', false)
      context.commit('setPoint1', 0)
    },
    SOCKET_resetTeam2 (context) {
      context.commit('reply_tombol2', '')
      context.commit('set_state_2', false)
      context.commit('setPoint2', 0)
    },
    SOCKET_enableCount (context, { stateTeam, counting }) {
      context.commit('setPoint1', stateTeam.point1)
      context.commit('setPoint2', stateTeam.point2)
      context.commit('enableCount', counting)
      context.commit('setDifference', stateTeam.difference)
    },
    SOCKET_setWinner (context, payload) {
      context.commit('setWinner', payload.winner)
    },
    setUserId (context, payload) {
      context.commit('setUserId', payload)
    },
    enableCount (context, payload) {
      context.commit('enableCount', payload)
    },
    setGameState (context, payload) {
      context.commit('setGameState', payload)
    },
    setTeam (context, payload) {
      context.commit('setTeam', payload)
    }
  },
  modules: {
  }
})
