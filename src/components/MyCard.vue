<template>
  <div class="card">
    <img :src="bookDetail.cover" class="card-img-top" alt />
    <div class="card-body">
      <h5 class="card-title">{{bookDetail.name}}</h5>
      <p class="card-text">{{bookDetail.description}}</p>
      <p class="card-text">
        <small class="text-muted">{{bookDetail.author}}</small>
      </p>
      <div class="small-box">
        <small class="text-small">{{bookDetail.date}}</small>
        <small class="text-small rating">{{bookDetail.rating}}</small>
      </div>
<<<<<<< HEAD
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{bookDetail.name}}</h5>
          <p class="card-text">{{bookDetail.description}}</p>
          <p class="card-text">
            <small class="text-muted">By {{bookDetail.author}}</small>
          </p>
          <div class="small-box">
            <small class="text-small">DATE: {{bookDetail.date}}</small>
            <small class="text-small rating"> RATING: <b>{{bookDetail.rating}}</b></small>
          </div>
          <div class="small-box">
            <router-link class="btn btn-primary">EDIT</router-link>
            <a href="#" class="btn btn-danger">DELETE</a>
          </div>
        </div>
=======
      <div class="small-box">
        <router-link :to="'/edit-book/'+index" class="btn btn-primary">EDIT</router-link>
        <a href="#" @click="deleteBook(index)" class="btn btn-danger">DELETE</a>
>>>>>>> parent of fb34a74... done
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCard",
  props: ["bookDetail","index"],
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.small-box {
  display: flex;
  justify-content: space-between;
  margin: 16px;
}
.text-small {
  font-size: 14px;
}
.rating {
  font-size: 16px;
  color: red;
}
</style>
