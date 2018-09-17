<template>
  <div>
    <div class="main-container">
      <div class="divide">
        <h2 class="text-center">Where do you want to travel?</h2>
      </div>

      <div class="container padding">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src="../assets/japan.png" alt="" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title text-center">Japan</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum in aut tenetur a? Optio?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="../assets/japan.png" alt="" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title text-center">Japan</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum in aut tenetur a? Optio?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="../assets/japan.png" alt="" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title text-center">Japan</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum in aut tenetur a? Optio?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container padding">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src="../assets/japan.png" alt="" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title text-center">Japan</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum in aut tenetur a? Optio?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="../assets/japan.png" alt="" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title text-center">Japan</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum in aut tenetur a? Optio?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="../assets/japan.png" alt="" class="card-img-top">
              <div class="card-body">
                <h4 class="card-title text-center">Japan</h4>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum in aut tenetur a? Optio?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  height: 100%;
  background-color: #fff;
}
.padding {
  padding-bottom: 1rem;
}
.divide {
  height: 15vh;
  line-height: 15vh !important;
  background-color: #333;
  width: 100%;
  color: #fff;
  padding-top: 2.4rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  margin-bottom: 4rem;
}
.card-body {
  background-color: rgb(245, 243, 243);
  padding-bottom: 1rem;
}
@media (max-width: 768px) {
  .divide h2 {
    font-size: 1.6rem;
  }
  .card {
    margin-bottom: 1rem;
  }
}
</style>