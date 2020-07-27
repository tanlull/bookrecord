<template>
  <div>
    <h1>My Home Page</h1>
    <div class="container">
      <div class="card-columns">
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

export default {
  name: 'home',
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