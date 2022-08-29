<template>
  <div class="row comment-row">
    <h6 class="user fw-bold">Jane Cooper</h6>
    <p class="content mb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi impedit consequuntur veritatis aperiam reprehenderit molestiae magni enim perferendis quae inventore,
      quia labore, consectetur hic saepe deserunt possimus esse vero ipsum?
    </p>
    <p class="date-time mb-0">
      02 January, 2022
      <span>12:45PM</span>
    </p>
  </div>
  <hr>
  <div class="row comment-row">
    <h6 class="user fw-bold">Devon Lane</h6>
    <p class="content mb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi impedit consequuntur veritatis aperiam reprehenderit molestiae magni enim perferendis quae inventore,
      quia labore, consectetur hic saepe deserunt possimus esse vero ipsum?
    </p>
    <p class="date-time mb-0">
      02 January, 2022
      <span>12:45PM</span>
    </p>
  </div>
  <hr>
  <div class="row comment-row">
    <h6 class="user fw-bold">Eleanor Pena</h6>
    <p class="content mb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi impedit consequuntur veritatis aperiam reprehenderit molestiae magni enim perferendis quae inventore,
      quia labore, consectetur hic saepe deserunt possimus esse vero ipsum?
    </p>
    <p class="date-time mb-0">
      02 January, 2022
      <span>12:45PM</span>
    </p>
  </div>
  <hr>
  <div class="row comment-row">
    <h6 class="user fw-bold">Savannah Nguyen</h6>
    <p class="content mb-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi impedit consequuntur veritatis aperiam reprehenderit molestiae magni enim perferendis quae inventore,
      quia labore, consectetur hic saepe deserunt possimus esse vero ipsum?
    </p>
    <p class="date-time mb-0">
      02 January, 2022
      <span>12:45PM</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CommentsModal'
}
</script>

<style scoped>
.comment-row {
  margin-bottom: 15px;
}
.comment-row p.content {
  font-size: 14px;
}
.comment-row p.date-time {
  font-size: 12px;
}
</style>
