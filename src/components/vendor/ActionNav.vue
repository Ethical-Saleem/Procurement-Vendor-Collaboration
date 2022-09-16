<template>
  <div class="d-sm-flex navbar-secondary bidNav justify-content-between">
    <div class="nav-text mx-2 mb-2 py-1">
      <h6 class="navbar-text text-dark fw-bold">{{ title }}</h6>
    </div>
    <div class="d-flex">
      <slot name="countdown"></slot>
    </div>
    <div class="buttons ms-auto mx-2 mb-2">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'action-nav',
  props: ['title']
}
</script>

<style scoped>
.bidNav {
  background-color: rgb(218, 218, 218);
}
@media(max-height: 750px) {
  .bidNav {
    max-height: 150px;
  }
  .bidNav .nav-text {
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px
  }
  .bidNav .buttons {
    margin-left: 10px;
  }
}
@media(min-height: 768px) {
  .bidNav .nav-text {
    margin-top: 10px;
  }
}
</style>
