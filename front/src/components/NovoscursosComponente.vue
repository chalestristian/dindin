<template>
            
<main>
            <section class="formulario">
                <forms>
                    <h3 id="formulario_titulo">Novo Curso</h3>
                    <section class="aula">
                        <input type="text" name="titulo" placeholder="Titulo">
                        <input type="image" name="Upload" placeholder="Upload">
                        <input type="text" name="professor" placeholder="Professor">
                        <input class="desc" type="text" name="descrição" placeholder="Descrição" minlength="100" maxlength="1000">
                    </section>
                    <section class="aula">
                        <h3>Aula 1</h3>
                        <input type="text" name="titulo_aula" placeholder="Titulo da aula">
                        <input type="text" name="link" placeholder="Link da aula">
                        <input class="desc" type="text" name="descrição_aula" placeholder="Descrição da aula">
                    </section>
                    <section class="aula">
                        <h3>Aula 2</h3>
                        <input type="text" name="titulo_aula" placeholder="Titulo da aula">
                        <input type="text" name="link" placeholder="Link da aula">
                        <input class="desc" type="text" name="descrição_aula" placeholder="Descrição da aula">
                    </section>
                    <button type="submit">Salvar</button>
                </forms>
            </section>
        </main>
  
      
</template>
<script>

export default {
  name: "NovocursoComponente",
  props: {
    msg: String,
  },  
};

</script>

<style scoped>



.formulario{
    margin-left:83px;
}

#formulario_titulo{
    position: relative;
    margin-top:93px;
    margin-bottom:37px;
    width: 512px;
    height: 40px;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 40px;
    color: #FF4081;
}

.formulario button{
    position: relative;
    margin-top:43px;
    margin-bottom:163px;
    width: 233px;
    height: 51px;
    background: #2E948A;
    border-radius: 62px;
    color:#FFFFFF;
}


</style>
