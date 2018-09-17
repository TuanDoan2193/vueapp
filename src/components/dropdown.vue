<template>
  <div class="mx-auto main-container">
  <div class="form-group browse-box">
    <select class="form-control " name="category" id="category" v-model="category">
      <option :value="null" disabled selected>Browse by</option>
      <option v-for="category in category_options" v-bind:value="category.id" v-bind:key="category.id">{{category.text}}</option>
    </select>
  </div>
  
  </div>
 
</template>

<script>
export default {
  data: function() {
    return {
      heading: "Vue Select Cascade",
      category: null,
      category_options: [
        {
          text: "Meal types",
          id: 1
        },
        {
          text: "Ingredient",
          id: 2
        },
        {
          text: "World cuisine",
          id: 3
        },
        {
          text: "Cooking style",
          id: 4
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  background-color: #fff;
  z-index: 2;
  height: 40%;
  width: 100%;
}
.browse-box {
  width: 60%;
  padding-top: 15vh;
  margin: 0 auto 0 auto;
}
select {
  line-height: 4rem;
  height: 4rem;
}
option[value=""][disabled][selected] {
  display: none;
}

option:hover {
  background-color: #333 !important;
}
</style>