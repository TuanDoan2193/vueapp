<template>
  <div class="mx-auto">
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Luxus</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars"></i>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Recipes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Seasonal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item search">
        <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
      </li>
    </ul>
   
    </div>
  </nav>
</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fas.fa-bars {
  color: #fff !important;
}
.navbar-brand {
  font-size: 2rem;
  padding-left: 2rem;
}
.navbar {
  height: 10vh;
  box-sizing: border-box;
  background-color: rgba(222, 222, 222, 0.1) !important;
  position: absolute;
  width: 95%;
}

.nav-item a {
  margin-right: 1.5rem;
  font-size: 1.2rem;
  color: rgb(216, 210, 210) !important;
}
.nav-item a:hover {
  color: #fff !important;
  transition: ease-out all 0.5s;
}
@media (max-width: 992px) {
  .nav-item a {
    background-color: rgba(222, 222, 222, 0.1) !important;
    padding-left: 5rem;
  }
  .nav-item a:hover {
    background-color: rgba(222, 222, 222, 0.4) !important;
  }
  .search {
    display: none;
  }
}
</style>
