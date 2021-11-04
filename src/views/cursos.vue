<template>
  <div class="cursos">
    <Header />
    <AulasComponente />
    <Footer />
    
  </div>
</template>

<script>
import Header from "@/components/HeaderComponente.vue";
import Footer from "@/components/FooterComponente.vue";
import AulasComponente from "@/components/AulasComponente.vue";

export default {
  name: "Cursos",
  components: {
    Header,
    Footer,
    AulasComponente,
  },
};
</script>
