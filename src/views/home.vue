<template>
  <div class="mx-auto main-container">
    <navigation></navigation>
    <mainBanner></mainBanner>
    <dropdown></dropdown>
    <divideSection></divideSection>
    <appFooter></appFooter>
  </div>
 
</template>

<script>
import navigation from "@/components/navigation.vue";
import mainBanner from "@/components/mainBanner.vue";
import dropdown from "@/components/dropdown.vue";
import divideSection from "@/components/divideSection.vue";
import appFooter from "@/components/appFooter.vue";
export default {
  components: {
    navigation,
    mainBanner,
    dropdown,
    divideSection,
    appFooter
  },
  data: function() {
    return {
      count: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  height: 100%;
  width: 95%;
}
</style>
