<template>
  <div class="novocurso">
    <Header />
    <Novoscursos />
    <Footer />
  
  </div>
</template>

<script>
import Header from "@/components/HeaderComponente.vue";
import Footer from "@/components/FooterComponente.vue";
import Novoscursos from "@/components/NovoscursosComponente.vue";


export default {
  name: "Novocurso",
  components: {
    Header,
    Footer,
    Novoscursos,
  },
};
</script>
