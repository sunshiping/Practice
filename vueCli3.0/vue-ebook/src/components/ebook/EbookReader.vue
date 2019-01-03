<template>
    <div class="ebook-read">
        <div id="read"></div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    computed: {
      ...mapGetters([
        'fileName',
        'menuVisible'
      ])
    },
    mounted() {
      const fileName = this.$route.params.fileName
      this.$store.dispatch('setFileName', fileName).then(() => {
        this.initEpub()
      })
    },
    methods: {
      prevPage () {
        if (this.rendition) {
          this.rendition.prev().then(() => {
            // _this.refreshLocation()
          })
          // _this.hideTitleAndMenu()
        }
      },
      nextPage () {
        if (this.rendition) {
          this.rendition.next().then(() => {
            // this.refreshLocation()
          })
          // this.hideTitleAndMenu()
        }
      },
      toggleTitleAndMenu () {
        if (this.menuVisible) {
          // _this.setSettingVisible(-1)
          // _this.setFontFamilyVisible(false)
        }
        console.log(this.menuVisible)
        this.$store.dispatch('setMenuVisible', !this.menuVisible)
        // this.setMenuVisible(!this.menuVisible)
      },
      initEpub () {
        const _this = this
        const url = '/2018_Book_AgileProcessesInSoftwareEngine.epub'
        this.book = new Epub(url)
        console.log(this.book)
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        this.rendition.display()
        console.log(this.rendition)
        this.rendition.hooks.content.register(function(contents, view) {
          const el2 = contents.document.documentElement
          el2.addEventListener('touchstart', event => {
            // debugger
            this.touchStartX = event.changedTouches[0].clientX
            this.touchStartTime = event.timeStamp
          })
          el2.addEventListener('touchend', event => {
            // debugger
            const offsetx = event.changedTouches[0].clientX - this.touchStartX
            const time = event.timeStamp - this.touchStartTime
            console.log(offsetx, time)
            if (time < 500 && offsetx > 40) {
              _this.prevPage()
            } else if (time < 500 && offsetx < -40) {
              _this.nextPage()
            } else {
              _this.toggleTitleAndMenu()
            }
            event.preventDefault()
            event.stopPropagation()
          })
        })
        // this.rendition.on('touchstart', event => {
        //   console.log(111111111)
        //   this.touchStartX = event.changedTouches[0].clientX
        //   this.touchStartTime = event.timeStamp
        // })
        // this.rendition.on('touchend', event => {
        //   const offsetx = event.changedTouches[0].clientX - this.touchStartX
        //   const time = event.timeStamp - this.touchStartTime
        //   console.log(offsetx, time)
        // })
      }
    }
  }
</script>
