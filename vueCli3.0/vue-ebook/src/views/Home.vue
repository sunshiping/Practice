<template>
    <div class="home">
        <span class="icon icon-bookmark"></span>
        <span class="icon icon-clock"></span>
    </div>
</template>

<script>
  // import Epub from 'epubjs'
  // global.ePub = Epub
  export default {
    name: 'home',
    // mounted () {
    //   this.book = new Epub('/2018_Book_AgileProcessesInSoftwareEngine.epub')
    //   console.log(this.book)
    //   this.book.renderTo('read', {
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   }).display()
    // }
  }
</script>
<style scoped>
    .icon{
        font-size: 30px;
        color: red;
    }
</style>
