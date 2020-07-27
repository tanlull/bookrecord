<template>
  <div>
<<<<<<< HEAD
    <h1>MY HOME PAGE</h1>
=======
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
>>>>>>> parent of fb34a74... done
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