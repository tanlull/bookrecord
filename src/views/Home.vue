<template>
  <div class="container">
    <h1>My Book</h1>
    <div class="card-deck">
      <my-card v-for="(book,ind) in $store.state.books" :bookDetail="book" :index="ind"/>
    </div>
  </div>
</template>

<script>
import MyCard from "../components/MyCard";

export default {
  name: "home",
  components: {
    MyCard
  }
};
</script>

<style lang="css">
.container {
  margin-top: 50px;
}
h1 {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>