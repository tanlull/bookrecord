<template>
  <div class="container">
    <div class="box">
      <h2>Please add book</h2>
      <my-form />
    </div>
  </div>
</template>

<script>
import MyForm from "../components/MyForm.vue";

export default {
  name: "AddBook",
  components: {
    MyForm
  }
};
</script>

<style lang="css">
.box {
  width: 400px;
  margin: 30px auto;
}
.box h2{
    margin: 30px 0;
}
label {
  display: block;
  text-align: left;
}
</style>
