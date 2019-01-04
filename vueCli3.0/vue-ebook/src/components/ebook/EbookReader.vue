<template>
    <div class="ebook-read">
        <div id="read"></div>
    </div>
</template>
<script>
  import { ebookMixin } from '../../utils/mixin'
  import { getFontFamily, saveFontFamily, getFontSize, saveFontSize, getTheme, saveTheme } from '../../utils/localStorage'
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    mixins: [ebookMixin],
    mounted() {
      console.log(this.menuVisible)
      const fileName = this.$route.params.fileName
      this.setFileName(fileName).then(() => {
        this.initEpub()
      })
    },
    methods: {
      prevPage () {
        if (this.rendition) {
          this.rendition.prev().then(() => {
            // _this.refreshLocation()
          })
          this.hideTitleAndMenu()
        }
      },
      nextPage () {
        if (this.rendition) {
          this.rendition.next().then(() => {
            // this.refreshLocation()
          })
          this.hideTitleAndMenu()
        }
      },
      toggleTitleAndMenu () {
        if (this.menuVisible) {
          this.setSettingVisible(-1)
          this.setFontFamilyVisible(false)
        }
        console.log(this.menuVisible)
        // this.$store.dispatch('setMenuVisible', !this.menuVisible)
        this.setMenuVisible(!this.menuVisible)
      },
      hideTitleAndMenu() {
        // this.$store.dispatch('setMenuVisible', false)
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      },
      initFontSize() {
        let fontSize = getFontSize(this.fileName)
        if (!fontSize) {
          saveFontSize(this.fileName, this.defaultFontSize)
        } else {
          this.rendition.themes.fontSize(fontSize)
          this.setDefaultFontSize(fontSize)
        }
      },
      initFontFamily() {
        let font = getFontFamily(this.fileName)
        if (!font) {
          saveFontFamily(this.fileName, this.defaultFontFamily)
        } else {
          this.rendition.themes.font(font)
          this.setDefaultFontFamily(font)
        }
      },
      initTheme() {
        const _this = this
        this.themeList.forEach(theme => {
          _this.rendition.themes.register(theme.name, theme.style)
        })
        if (getTheme(this.fileName)) {
          this.currentBook.rendition.themes.select(getTheme(this.fileName))
        } else {
          this.currentBook.rendition.themes.select(this.defaultTheme)
          saveTheme(this.fileName, this.defaultTheme)
        }
        this.setDefaultTheme(getTheme(this.fileName))
      },
      initRendition() {
        const _this = this
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        this.rendition.display().then(() => {
          console.log('电子书渲染完成')
        })
        this.rendition.hooks.content.register(function(contents, view) {
          Promise.all([
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
          ]).then(() => {
            _this.initTheme()
            _this.initFontFamily()
            _this.initFontSize()
            _this.initGlobalStyle()
          })
          _this.initGesture(contents)
        })
      },
      initGesture(contents) {
        const el2 = contents.document.documentElement
        el2.addEventListener('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        el2.addEventListener('touchend', event => {
          const offsetx = event.changedTouches[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          if (time < 500 && offsetx > 40) {
            this.prevPage()
          } else if (time < 500 && offsetx < -40) {
            this.nextPage()
          } else {
            this.toggleTitleAndMenu()
          }
          event.preventDefault()
          event.stopPropagation()
        })
      },
      initEpub () {
        const url = `${process.env.VUE_APP_RES_URL}/2018_Book_AgileProcessesInSoftwareEngine.epub`
        this.book = new Epub(url)
        this.setCurrentBook(this.book)
        this.initRendition()
        this.book.ready.then(() => {
          return this.book.locations.generate(750 * (window.innerWidth / 375) * (getFontSize(this.fileName) / 16))
        }).then(locations => {
          // console.log(locations)
          this.setBookAvailable(true)
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
