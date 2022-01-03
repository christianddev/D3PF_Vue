export default {
  methods: {
    goToHero (heroId) {
      const { region, battleTag } = this.$route.params
      this.$router.push({ name: 'Hero', params: { region, battleTag, heroId } })
    }
  }
}
