<template>
  <main>
    <section class="content_painel">
      <div>
        <h1>Painel Administrativo</h1>
        <p>Educação financeira é tudo de bom</p>
      </div>
    </section>
    <section>
      <table cellspacing="0" cellpadding="0">
        <tr id="table_head">
          <th>Curso</th>
          <th id="ação">Ação</th>
        </tr>
        <tr>
          <td><p>Investimento Para Inciantes</p></td>
          <td>
            <button class="edit">editar</button>
            <button class="exclude">excluir</button>
          </td>
        </tr>
        <tr>
          <td>Poupando E Rendendo</td>
          <td>
            <button class="edit">editar</button>
            <button class="exclude">excluir</button>
          </td>
        </tr>
        <tr>
          <td>Independencia Financeira</td>
          <td class="botão">
            <button class="edit">editar</button>
            <button class="exclude">excluir</button>
          </td>
        </tr>
        <tr>
          <td>Novo curso</td>
          <td>
            <button
              onclick="location.href='/novocurso'"
              class="edit"
              type="button"
            >
              adicionar
            </button>
          </td>
        </tr>
      </table>
    </section>
  </main>
</template>
<script>
export default {
  name: "PainelComponente",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.content_painel {
  position: relative;
  display: flex;
  margin-top: 90px;
  margin-left: 112px;
}

.content_painel h1 {
  position: relative;
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 63px;
  color: #ff4081;
}

.content_painel p {
  margin-top: 0px;
  text-align: left;
  font-weight: 100;
}

table {
  position: relative;
  margin-left: 112px;
  margin-top: 122px;
  margin-bottom: 220px;
  border: 1px solid #989898;
  border-bottom: none;
  width: 50%;
}

table th,
td {
  text-align: left;
  text-indent: 5%;
  padding: 7px;
  margin: 10px;
  font-weight: bold;
}

table th {
  font-size: larger;
  font-weight: bolder;
  border-bottom: 1px solid #989898;
  background: #ebebeb;
}

table td {
  border-bottom: 1px solid #989898;
  font-size: normal;
  width: 60%;
}

table td .edit {
  position: relative;
  width: 87px;
  height: 22px;
  background: #f8c23a;
  color: #ffffff;
  font-weight: normal;
}

table td .exclude {
  position: relative;
  margin-left: 12px;
  width: 87px;
  height: 22px;
  background: #f8513a;
  color: #ffffff;
  font-weight: normal;
}
</style>
