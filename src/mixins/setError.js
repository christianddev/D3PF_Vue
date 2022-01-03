import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('error', {
      setError: 'SET_ERROR'
    }),
    setApiErr (params) {
      this.setError(params)
    }
  }
}
