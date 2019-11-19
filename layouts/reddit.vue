<template>
  <div>
    <RedditHeader />
    <nuxt />
  </div>
</template>

<script>
import RedditHeader from '~/components/RedditHeader.vue';
export default {
  components: {
    RedditHeader
  }
}
</script>