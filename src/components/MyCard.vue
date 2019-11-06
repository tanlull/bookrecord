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
      <div class="small-box">
        <router-link :to="'/edit-book/'+index" class="btn btn-primary">EDIT</router-link>
        <a href="#" @click="deleteBook(index)" class="btn btn-danger">DELETE</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MyCard",
  props: ["bookDetail","index"],
  methods: {
    ...mapActions(["deleteBook"])
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
