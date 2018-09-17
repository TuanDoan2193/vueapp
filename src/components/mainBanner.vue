<template>
  <div class="mx-auto main-container">
    <div class="banner-content">
      <h1>It is time to unlock your creativity.</h1>
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro provident mollitia assumenda ad iusto quaerat ratione modi quia, apensur diread.</p>
    </div>
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
  min-height: 100%;
  width: 100%;
  z-index: 1;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgb(255, 255, 255, 0)
    ),
    url("../assets/background.jpeg"); /* W3C */
  margin-bottom: 0;
}
.banner-content {
  position: relative;
  top: 30%;
  width: 75%;
  left: 10%;
  color: #fff;
}
.banner-content h1 {
  font-size: 6.5rem;
  line-height: 6.5rem;
}
hr {
  border: none;
  height: 0.7rem;
  /* Set the hr color */
  color: #fff; /* old IE */
  background-color: #fff; /* Modern Browsers */
  width: 15%;
  margin: 4rem 0 3rem 0;
}
.banner-content p {
  width: 80%;
  display: block;
  font-size: 1.5rem;
}
@media (max-width: 1200px) {
  .banner-content h1 {
    font-size: 5rem;
  }
}
@media (max-width: 992px) {
  .banner-content h1 {
    font-size: 4rem;
    display: block;
  }
}
@media (max-width: 768px) {
  .banner-content h1 {
    display: none;
  }
  .banner-content p {
    display: none;
  }
  hr {
    display: none;
  }
}
</style>