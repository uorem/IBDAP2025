<script >
</script>

<template>
  <router-view></router-view>
    <el-backtop :right="100" :bottom="100"/>
</template>


<style >
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
    height: 100%;
    width: 100%;
}
html,body{
    position: absolute;
    margin:0;
    padding:0;
    border:0;
    height: 100%;
    width: 100%;
}
</style>
