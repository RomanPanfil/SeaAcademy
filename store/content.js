export const state = () => ({
  content: 1,
  navId: null
})

export const getters = {
  get: (state) => {
    return state.content
  },
  getNavId: (state) => {
    return state.navId
  }
}
export const actions = {
  set ({ commit }, data) {
    commit('setContent', data)
  },
  setNavId ({ commit }, data) {
    commit('setNavIdMutations', data)
  }
}

export const mutations = {
  setContent (state, data) {
    state.content = data
  },
  setNavIdMutations (state, data) {
    state.navId = data
  }
}
