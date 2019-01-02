<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    const getters = {
      a: () => 1,
      b: () => 2,
      c: () => 3
    }
    function fn(keys) {
     const data = {}
     keys.forEach(key => {
       if (getters.hasOwnProperty(key)) {
         data[key] = getters[key]
       }
     })
      return data
    }
  export default {
      computed: {
        ...mapGetters(['test']),
        ...fn(['a', 'b', 'c'])
      },
    mounted() {
      // this.$store.dispatch('setTest', 13).then(() => {
      //   console.log(this.test)
      // })
      console.log(this.a, this.b, this.c)
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>
<style lang="scss">
    @import "./assets/styles/global.scss";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-size: px2rem(20);
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
