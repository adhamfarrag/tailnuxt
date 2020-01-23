<template>
  <div>
    <CoinHeader />
    <nuxt />
    <CoinFooter />
  </div>
</template>

<script>
import CoinHeader from '~/components/CoinHeader.vue';
import CoinFooter from '~/components/CoinFooter.vue';
export default {
  components: {
    CoinHeader,
    CoinFooter
  }
}
</script>

<style>

</style>
