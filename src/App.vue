<template>
  <MainHeader />
  <router-view />
  <div align="center" class="footer">
    ©
    <!-- -->2022
    <!-- --> Nguyen Thanh Quang Huy. All Rights Reserved.
  </div>
</template>

<script>
import MainHeader from './components/layout/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MainHeader
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
