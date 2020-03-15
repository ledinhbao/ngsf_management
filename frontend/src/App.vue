<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Nhà Đầu Tư</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
#app {
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding-left: 30px;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
