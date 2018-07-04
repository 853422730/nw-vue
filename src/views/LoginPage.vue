<template>
  <div>
    <p>登录页面</p>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    data() {
      return {

      };
    },
    mounted: function () {
      document.addEventListener('dragover', function (event) {
        event.preventDefault();
        return false;
      }, false);
      document.addEventListener('drop', function (event) {
        event.preventDefault();
        return false;
      }, false);
    },
    methods: {

    }
  }
</script>

<style lang="scss">

</style>
