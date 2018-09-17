<template>
  <div class="main-container">
    <hr/>
    <div class="container">
      <div class="signature">
        LUXUS <p>| Result through design and technology</p>
      </div>
      <ul class=" ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"> <i class="fas fa-search"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
        </li>
      </ul>
      </div>
      <hr/>
    </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  position: absolute;
  width: 95%;
  height: 20%;
  background-color: #fff;
}
hr {
  border: none;
  height: 0.2rem;
  /* Set the hr color */
  color: rgb(131, 125, 125); /* old IE */
  background-color: rgb(131, 125, 125); /* Modern Browsers */
  width: 95%;
}
.signature {
  font-size: 2rem;
  font-weight: 500;
  color: rgb(33, 94, 175);
  display: inline-block;
}
.signature p {
  display: inline-block;
  font-size: 1.5rem;
  color: #333;
}
ul {
  float: right;
}
ul li {
  list-style-type: none;
  display: inline-block;
}
@media (max-width: 992px) {
  .signature p {
    display: none;
  }
}
</style>