<template>
  <form @submit.prevent="swiftFunc({
      name,
      description,
      date,
      author,
      rating,
      cover
    })">
    <div class="form-group">
      <label>Book name</label>
      <input v-model="name" type="text" class="form-control" placeholder="Enter book name" />
    </div>
    <div class="form-group">
      <label>Book Description</label>
      <textarea
        v-model="description"
        type="text"
        class="form-control"
        placeholder="Enter book description"
      ></textarea>
    </div>
    <div class="form-group">
      <label>Finished Date</label>
      <input v-model="date" type="date" class="form-control" />
    </div>
    <div class="form-group">
      <label>Book Author</label>
      <input v-model="author" type="text" class="form-control" placeholder="Book Author" />
    </div>
    <div class="form-group">
      <label>Book Rating</label>
      <input v-model="rating" type="number" class="form-control" placeholder="Book Rating" />
    </div>
    <div class="form-group">
      <label>Book Cover</label>
      <input v-model="cover" type="text" class="form-control" placeholder="Book Image URL" />
    </div>
    <button type="submit" class="btn btn-primary">{{textButton}}</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Form",
  data: function() {
    if(this.$route.params&&this.$route.params.id) return {...this.$store.state.books[this.$route.params.id]}
    else return {
      name: "",
      description: "",
      date: "",
      author: "",
      rating: 10,
      cover: "https://images-na.ssl-images-amazon.com/images/I/41qE-aQnOWL.jpg",
    };
  },
  methods: {
    ...mapActions([
      "addBook",
      "editBook"
    ]),
    customEditBook(book){
      this.editBook({index:this.$route.params.id,data:book})
    }
  },
  computed:{
    textButton(){
      if(this.$route.path == "/add-book") return "ADD BOOK"
      else return "EDIT BOOK"
    },
    swiftFunc(){
      if(this.$route.path == "/add-book") return this.addBook
      else return this.customEditBook
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  width: 100%;
  display: block;
  text-align: left;
}
</style>
