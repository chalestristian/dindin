<template>
  <main>
    <section class="content">
      <div class="info">
        <h1>
          Investimento <br />
          para iniciantes
        </h1>
        <p id="texto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
      <img src="../assets/imgs-lista-cursos/imagemdois.png" />
    </section>
    <section class="videos">
      <div class="video">
        <video width="462" height="261" controls>
          <source src="assets/media/doogg.mp4" type="video/mp4" />
          <source src="assets/media/doogg.ogg" type="video/ogg" />
        </video>
        <div class="video_description">
          <h2>Aula 1</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. <br />
            <br />
            Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt.
          </p>
        </div>
      </div>
      <div class="linha"></div>
    </section>
    <section class="videos">
      <div class="video">
        <video width="462" height="261" controls>
          <source src="assets/media/doogg.mp4" type="video/mp4" />
          <source src="assets/media/doogg.ogg" type="video/ogg" />
        </video>
        <div class="video_description">
          <h2>Aula 2</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. <br />
            <br />
            Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt.
          </p>
        </div>
      </div>
      <div class="linha"></div>
    </section>
    <section class="videos">
      <div class="video">
        <video width="462" height="261" controls>
          <source src="assets/media/doogg.mp4" type="video/mp4" />
          <source src="assets/media/doogg.ogg" type="video/ogg" />
        </video>
        <div class="video_description">
          <h2>Aula 3</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. <br />
            <br />
            Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt.
          </p>
        </div>
      </div>
      <div class="linha"></div>
    </section>
  </main>
</template>
<script>
export default {
  name: "AulasComponente",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.video_description h2 {
  text-align: left;

  position: relative;
  height: 69px;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 69px;
  text-transform: capitalize;
  color: #ff4081;
}

.content {
  position: relative;
  display: flex;
  margin-top: 90px;
  margin-bottom: 90px;
  margin-left: 112px;
}

.content .info {
  text-align: left;
  position: relative;
  margin-left: 53px;
}

.content .info #texto {
  position: relative;
  width: 461px;
  height: 186px;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}

.content img {
  position: relative;
  width: 380px;
  margin-left: 88px;
}

.info h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  color: #ff4081;
}

.content p {
  width: 85%;
  font-size: auto;
  margin-top: 32px;
}
.video_description p {
  text-align: left;
}
.linha {
  position: relative;
  margin-left: 98px;
  width: 85%;
  height: 5px;
}
.videos {
  position: relative;
  width: auto;
  height: 100%;
  background: #f7f7f7;
  background-size: cover;
}
.video_description {
  position: relative;
  margin-left: 76px;
  margin-bottom: 75px;
}
.video {
  position: relative;
  display: flex;
  margin-left: 213px;
}
video {
  max-width: 900px;
}
.video .video_description,
video {
  margin-top: 75px;
}
.video h2 {
  position: relative;
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #ff4081;
}
.video p {
  position: relative;
  margin-top: 26px;
  width: 70%;
  height: 195px;
  font-style: normal;
  font-weight: auto;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #000000;
}
</style>
