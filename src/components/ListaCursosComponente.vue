<template>
<main>
  <section class="herader-title">
    <h2>Cursos</h2>
    <p>Educação financeira é tudo de bom</p>
  </section>
  <section class="componente-listacursos-container">
    <img class="componente-listacursos-img" src="../assets/imgs-lista-cursos/imagemum.png"> <!--link to cursos page-->
    <div class="componente-listacursos-descricao">
      <h3>{{title}}</h3>
        <p>{{description}}</p>
      <button onclick="location.href='cursos'" type="button">começar agora</button> <!--link to cursos page-->
    </div>
    </section>      
    <div class="separador"></div> 

      <section class="componente-listacursos-container">
    <img class="componente-listacursos-img" src="../assets/imgs-lista-cursos/imagemdois.png"> <!--link to cursos page-->
    <div class="componente-listacursos-descricao">
      <h3>{{title}}</h3>
        <p>{{description}}</p>
      <button onclick="location.href='cursos'" type="button">começar agora</button> <!--link to cursos page-->
    </div>
    </section>      
    <div class="separador"></div> 

      <section class="componente-listacursos-container">
    <img class="componente-listacursos-img" src="../assets/imgs-lista-cursos/imagemtres.png"> <!--link to cursos page-->
    <div class="componente-listacursos-descricao">
      <h3>{{title}}</h3>
        <p>{{description}}</p>
      <button onclick="location.href='cursos'" type="button">começar agora</button> <!--link to cursos page-->
    </div>
    </section>      
    <div class="separador"></div> 

 
</main>


</template>

<script>
export default {
  data() {   
        return {
            title: "Investimento para iniciantes",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. " 
        }
    }
  }; 
 </script>

<style scoped>
.herader-title{
  text-align: left;
  margin:82px 0 0  82px;
}
.herader-title h2{
    position: relative;
    height: 69px;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 69px;
    text-transform: capitalize;
    color: #FF4081;
}
.herader-title p{
  font-family: Ubuntu;
  font-weight: 500;  
  font-size: 20px;
  color: #555555;
}
.componente-listacursos-container{
    position:relative;
    display:flex;
    margin: 90px 0 90px 0px;
    padding: 0 10px 0 20px; /* AJUSTAR RESPONSIVIDADE */
}
.componente-listacursos-descricao{
    text-align:left;
    position:relative;
    margin: auto 0;
    max-width: 1406px;
    min-width: 480px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
}
.componente-listacursos-img{
    position:relative;
    width:380px;
    margin-left:88px;
}
.componente-listacursos-descricao h3{
    position: relative;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    color: #FF4081;
}
.componente-listacursos-descricao p{
    width: 85%;
    font-size:auto;
    margin-top:32px;
}
.componente-listacursos-descricao button{
    position: relative;
    margin-top:39px;
    width: 233px;
    height: 51px;
    background: #2E948A;
    border-radius: 62px;
    color: #FFFFFF;
    font-size: 20px;
}
.componente-listacursos-descricao button:hover{
    background:#296963;
    color:#ebfffd;
}
.separador{
    position: relative;
    margin-left:98px;
    width: 85%;
    height: 5px;
    background: #C4C4C4;
}




/*Responsive 1 */

@media (max-width: 499px){
.herader-title{  
  text-align: center;
  margin: 50px auto;
}
.componente-listacursos-container{
  display: block;
  margin: 0px;
  padding: 0px;
}
.componente-listacursos-img{
  width:60%;
  margin: 20px auto;
}
h2, h3, p{
  text-align: center;
  margin: 10px auto;
}
.separador{
    text-align: center;
    margin-left: 10%;
    width: 80%;
}
.componente-listacursos-descricao{
    text-align:center;
    position: relative;
    margin: 0px;
    min-width: 200px;
}
.componente-listacursos-descricao button{
    position: relative;
    display: inline-block;
    margin: 40px auto;
    width: 233px;
    height: 51px;
}


}
/*Responsive 2 */

@media (min-width: 500px) and (max-width: 974px){

.herader-title{  
  text-align: center;
  margin: 50px auto;


}
.componente-listacursos-container{
  display: block;
  margin: 0px;
  padding: 0px;
}
.componente-listacursos-img{
  max-width:50%;

  margin: 20px auto;
}
h2, h3, p{
  text-align: center;
  margin: 10px auto;
}
.separador{
    text-align: center;
    margin-left: 10%;
    width: 80%;
}

.componente-listacursos-descricao button{
    position: relative;
    margin: 40px 0px 40px 30% ;
 
    width: 233px;
    height: 51px;
}

}

</style>
