<template>
    <div class="ebook">
        <ebook-title></ebook-title>
        <ebook-reader></ebook-reader>
        <ebook-menu></ebook-menu>
    </div>
</template>

<script>
    import EbookReader from '../../components/ebook/EbookReader.vue'
    import EbookTitle from '../../components/ebook/EbookTitle'
    import EbookMenu from '../../components/ebook/EbookMenu'
  export default {
    name: 'ebook',
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu
    }
  }
</script>
<style scoped>
    .icon{
        font-size: 30px;
        color: red;
    }
</style>
