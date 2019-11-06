<template>
  <div>
    <h1>My Book</h1>
    <div class="container">
      <div class="card-deck">
        <my-card 
          v-for="(book,index) in $store.state.books"
          :bookDetail="book"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyCard from '../components/MyCard.vue'

export default {
  name: 'home',
  components: {
    MyCard,
  }
}
</script>

<style lang="css">
  .container{
    margin-top: 50px;
  }
  h1{
    margin-top:50px;
  }
</style>