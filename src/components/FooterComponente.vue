<template>
        <footer>
            <div class="componentes-header-footer-container">
                 <a href="/"><img class="componentes-header-footer-logo-img" src="../assets/logo-dindin-white.png"></a>
                <div class="componente-footer-container">
                    <a href="/"><h2 class="componentes-header-footer-title">dindin</h2></a>
                    <a href="/"><p class="footer-description">educação financeira</p></a>
                </div>
            </div>
        </footer> 
      
</template>
<script>


export default {
  name: "FooterComponente",
  props: {
    msg: String,
  },  
};

</script>

<style scoped>
.componentes-header-footer-container{
  position: relative;
  bottom: 0;
  background-color: #419488;
}
.componentes-header-footer-title{
    height: 58px;
}
.footer-description{
    position: relative;
    font-style: normal;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    font-weight: 100;
}
</style>
