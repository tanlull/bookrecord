<template>
  <form
    @submit.prevent="btnFunc({
          name,
          description,
          date,
          author,
          rating,
          cover,
        })"
  >
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
      <input v-model="rating" type="text" class="form-control" placeholder="Book Rating" />
    </div>
    <div class="form-group">
      <label>Book Cover</label>
      <input v-model="cover" type="text" class="form-control" placeholder="Book Image URL" />
    </div>
    <button type="submit" class="btn btn-primary">{{btnText}}</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Form",
  data: function() {
    return this.$route.params && this.$route.params.id
      ? { ...this.$store.state.books[this.$route.params.id] }
      : {
          name: "",
          description: "",
          date: "",
          author: "",
          rating: 0,
          cover: ""
        };
  },
  methods: {
    ...mapActions(["addBook", "editBook"]),
    editBookByIndex(data){
        this.editBook({data,index:this.$route.params.id})
    }
  },
  computed: {
    btnText() {
      if (this.$route.path == "/add-book") return "ADD BOOK";
      else return "EDIT BOOK";
    },
    btnFunc() {
      if (this.$route.path == "/add-book") return this.addBook;
      else return this.editBookByIndex;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
