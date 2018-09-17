<template>
  <div id="app">
  
    <router-view/>
   
  </div>
</template>
<script>
export default {
  name: "App",
  data: function() {
    return {
      count: 0
    };
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 0;
  background-color: #000;
  z-index: -4;
}
#app {
  height: 100%;
}
</style>
