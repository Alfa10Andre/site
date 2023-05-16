<template>
  <div id="bread">
    <!-- <div ref="breadcrumbs">Home</div> -->
    <v-breadcrumbs
      v-if="crumbs.length > 0"
      :large="true"
      :dark="true"
      :items="crumbs"
      divider=">"
    >
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  computed: {
    crumbs() {
      const fullPath = this.$route.path

      const params = fullPath.replace('_', '-').substring(1).split('/')
      // params.pop()
      const crumbs = []
      let path = ''

      params.forEach((param, index, { length }) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)

        if (match.name !== 'index') {
          let text = path.split('/');
          text = text[text.length - 1].toUpperCase()
          if (index === length - 1) {
            crumbs.push({
              text,
              replace: true,
              disabled: true,
            })
          } else {
            let text = path.split('/');
              text = text[text.length - 1].toUpperCase()
            crumbs.push({
              text,
              disabled: false,
              replace: true,
              href: path + '',
            })
          }
        }
      })

      return crumbs
    },
  },
}
</script>

<style>
#bread div {
  color: #fff !important;
  padding: 0 20px;
}

.v-breadcrumbs__item {
  color: #fff !important;
}
</style>
