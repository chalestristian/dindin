<template>
  <header>
    <div class="componentes-header-footer-container">
      <a href="/"><img class="componentes-header-footer-logo-img" src="../assets/logo-dindin-white.png"></a> <!-- link to index -->
      <h2 class="componentes-header-footer-title"><a href="/">dindin</a></h2>
        <div class="menu-header-conteiner">
          <p class="menu-items"><a href="/">CURSOS</a></p> <!-- link to cursos -->
          <p class="menu-items"><a href="/paineladm">PAINEL ADMINISTRATIVO</a></p> <!-- link to painel -->
        </div>
    </div>
  </header>
</template>

<script>
export default {name:"HeaderComponente",props:{ msg: String,},};
</script>

<style>

/*Puting some default*/

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
*{ 
  border:0;
  padding: 0;
  margin:0;
  vertical-align: baseline;
  box-sizing: border-box;
  font-weight: inherit;
  font-family: 'Ubuntu', sans-serif;
}
a{
  text-decoration: none;
  color: white;
}

/*Header Componente*/
.componentes-header-footer-container{
    position: relative;
    align-items: center;
    display: flex;
    width:100%;
    height: 117px;
    background: #2E948A;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
}
.menu-header-conteiner{
    position:relative;
    display: flex;
    margin-left:auto;
    margin-right: 40px;
}
.componentes-header-footer-logo-img{
    position: relative;
    margin-left:82px;
    height: 71px;
}
.componentes-header-footer-title{ 
    position: relative;
    margin-left: 11px;
    width: auto;
    height: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    color: #FFFFFF;
}
.menu-items{
    position: relative;
    margin-left:42px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #FDFDFD;
}

/*Responsive 1 */

@media (max-width: 499px){
.componentes-header-footer-container{
  display: block; 
  height: 185px;
}
.menu-header-conteiner{
    display: block;
    margin-left:auto;
    margin-right: 0px;
    
}
.componentes-header-footer-logo-img{
  margin-top: 5px;
  margin-left: 0px;
  height: 50px;
}
.componentes-header-footer-title{ 
    display: inline-block;
    margin-left: 2px;   
    bottom: 3px;
    font-size: 40px;   
}
.menu-items{
  margin-top: 10px;
}
}
/*Responsive 2 */

@media (max-width: 599px){

.componentes-header-footer-container{

  height: 200px;
}
.componentes-header-footer-logo-img{
  margin-top: 5px;
  margin-left: 5px;
  height: 40px;
}
.componentes-header-footer-title{  
    margin-left: 2px;   
    font-size: 30px;   
}
.menu-items{
    position: relative;
    margin-left:10px;
    font-size: 20px;
    letter-spacing: 1.5px;
  
}
}

/*Responsive 3 */

@media (max-width: 750px){

.componentes-header-footer-logo-img{
  margin-top: 5px;
  margin-left: 5px;
  height: 60px;
}
.componentes-header-footer-title{  
    margin-left: 2px;   
    font-size: 50px;   
}
.menu-header-conteiner{
  display:block;
}
.menu-items{
  font-size: 20px;
  padding: 25px 0px 0px 0px;
  margin: auto 10px;
}
}

</style>
