<template>
 <div class="header-for-bg">
  <div class="background-header position-relative">
    <img :src="img" class="img-fluid w-100" alt="header-bg">
  </div>
</div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    img: {
      type: String,
      default: ''
    },
  }
}
</script>
