import { createStore } from 'vuex'

import state from '@/store/state.js'
import getters from '@/store/getters.js'
import mutations from '@/store/actions.js'
import actions from '@/store/mutations.js'

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
