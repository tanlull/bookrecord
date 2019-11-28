import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    addBook(state, payload) {
      state.books.push(payload)
    },
    editBook(state, payload) {
      state.books[payload.index] = payload.data
    },
    deleteBook(state, payload) {
      state.books.splice(payload, 1)
    }
  },
  actions: {
    addBook({ commit }, payload) {
      commit("addBook", payload)
    },
    editBook({ commit }, payload) {
      commit("editBook", payload)
    },
    deleteBook({ commit }, payload) {
      commit("deleteBook", payload)
    }
  },
  modules: {
  }
})
