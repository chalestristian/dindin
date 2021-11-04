<template>
  <div class="index">
    <Header />
    <ListaCursos />
    <Footer />
  
  </div>
</template>

<script>
import Header from "@/components/HeaderComponente.vue";
import Footer from "@/components/FooterComponente.vue";
import ListaCursos from "@/components/ListaCursosComponente.vue";


export default {
  name: "Index",
  components: {
    Header,
    Footer,
    ListaCursos,

  },
};
</script>
