<template>
  <div class="adm">
    <Header />
    <Painel />
    <Footer />
  
  </div>
</template>

<script>
import Header from "@/components/HeaderComponente.vue";
import Footer from "@/components/FooterComponente.vue";
import Painel from "@/components/PainelComponente.vue";


export default {
  name: "Adm",
  components: {
    Header,
    Footer,
    Painel,
  },
};
</script>
