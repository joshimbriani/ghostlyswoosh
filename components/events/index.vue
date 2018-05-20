<template>
  <div class="copy">
    <h1>Events</h1>
  </div>
</template>

<script>
import siteData from '../../build/data/data.json'
import Marked from 'marked'
export default {
  data () {
    return {
      siteData: siteData,
      newItem: 'Data binding',
      newDynamic: []
    }
  },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      md: function (val) {
          return Marked(val)
      }
  },
  computed: {
    rawdescription: function(){
      return Marked(siteData.description)
    }
  },
  methods: {
    addItem() {
      this.newDynamic.push(this.newItem);
      this.newItem = '';
    }
  }
}
</script>