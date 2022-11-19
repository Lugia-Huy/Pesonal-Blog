<template>
  <!-- Scroll top -->
  <button class="btn btn-lg" id="btn-back-to-top" style="border: none;" @click="scrollToTop()">
    <span class="scroll-top-btn">
      <i class="fa-regular fa-circle-up fa-2x"></i>
    </span>
  </button>
  <!-- Video Container -->
  <section class="showcase" id="banner">
    <div class="video-container">
      <video src="@/assets/video/banner-video.mp4" autoplay muted loop></video>
    </div>
    <div class="content">
      <h1>Photography</h1>
      <hr style="color: #fff;">
      <h3>Welcome to my blog, hope you enjoyed with my hobbies</h3>
      <a href="#about" class="btn">A B O U T M E</a>
    </div>
  </section>

  <!-- About Container -->
  <section id="about" style="padding-top: 165px; padding-bottom: 60px;">
    <div class="row">
      <div class="col-5">
        <img src="@/assets/fall-guy.png" class="img-thumbnail"
          alt="..." />
      </div>
      <div class="col-1"></div>
      <div class="info col-6" style="text-align: left;">
        <h4>ABOUT ME</h4>
        <h2>
          Hi, I'm Nguyen Thanh Quang Huy.
          <br>
          A fresher developer based in Ho Chi Minh.
        </h2>

        <p class="intro">
          I love photography, I like to put things around me in my photos and this is where I share my photos with everyone.
        </p>

        <div class="about-page" style="margin-top:45px;">
          <a href="/gallery" style="color: #fff; background-color: #000; padding: 20px;">More</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Gallery Grid -->
  <section id="showcase">
    <div class="container main">
      <h4>LASTEST WORK</h4>
      <hr>
      <h1 style="color: #000;">SHOWCASE</h1>
      <!-- Photo Grid -->
      <div class="row">
        <div class="column">
          <img src="https://live.staticflickr.com/65535/52473156172_3f736beb00_h.jpg" style="width:100%" loading="lazy">
          <img src="https://live.staticflickr.com/65535/52474116395_0c8609b783_h.jpg" style="width:100%" loading="lazy">
          <img src="https://live.staticflickr.com/65535/52473654001_75657d8d1a_k.jpg" style="width:100%" loading="lazy">
        </div>
        <div class="column">
          <img src="https://live.staticflickr.com/65535/52473654021_c57e9bd140_h.jpg" style="width:100%" loading="lazy">
          <img src="https://live.staticflickr.com/65535/52474116475_64c17e337a_k.jpg" style="width:100%" loading="lazy">
          <img src="https://live.staticflickr.com/65535/52473936704_1f7a5637c3_k.jpg" style="width:100%" loading="lazy">
        </div>
        <div class="column">
          <img src="https://live.staticflickr.com/65535/52473654471_25df802380_k.jpg" style="width:100%" loading="lazy">
          <img src="https://live.staticflickr.com/65535/52473654681_0d214fefe8_k.jpg" style="width:100%" loading="lazy">
          <img src="https://live.staticflickr.com/65535/52473936694_2fea5f22ed_h.jpg" style="width:100%" loading="lazy">
        </div>
      </div>
      <div class="more-btn">
        <a href="/gallery">More</a>
      </div>
    </div>
  </section>

  <!-- footer -->
  <section id="footer">
    <hr>
    <h2>Follow Me On Social Media</h2>
      <div class="social" style="padding: 15px;">
      <a href="https://www.instagram.com/quanghuy_neyugn/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
      <a href="https://facebook.com/quanghuy.nguyenthanh/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
      <a href="https://github.com/Lugia-Huy" target="_blank"><i class="fab fa-github fa-2x"></i></a>
      <a href="https://www.linkedin.com/in/huy-nguyen-thanh-quang-73488a165/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
    </div>
  </section>
</template>
 
<script>
export default {
  name: 'Home',
  mounted() {
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
}
</script>
 
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

:root {
  --primary-color: #3a4052;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
}

.main {
  max-width: 1700px;
  margin: auto;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

h1 {
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-align: center;
  box-sizing: inherit;
  fill: #000000;
  font-family: Gilda Display, serif;
  font-weight: 400;
  line-height: 1.2em;
  letter-spacing: 0em;
  font-size: 76px;
  margin: 0.5em 0;
  word-wrap: break-word;
  margin-top: 0;
  color: #fff;
  border-color: rgba(255, 255, 255, 0.5);
}

hr {
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

h4 {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: #000;
  font-size: 14px;
  line-height: 1.2em;
  letter-spacing: 0.8em;
  fill: #000;
}
.img-thumbnail{
  width: 542px; 
  height: 574px; 
  object-fit: cover;
  border-bottom-left-radius: 80px;
  border-top-right-radius: 80px;
}

.row {
  display: -ms-flexbox;
  /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap;
  /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

.column {
  -ms-flex: 33%;
  /* IE10 */
  flex: 33%;
  max-width: 33%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

@media screen and (max-width: 931px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }

  h1 {
    font-size: 40px;
  }

  h3 {
    font-size: 17px;
  }

  section#about div {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }

  section#about div.info h4 {
    text-align: center;
    margin-top: 20px;
  }

  section#about div.info div.about-page {
    text-align: center;
  }
}

section {
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 30px;
}

section#footer {
  margin-top: 40px;
  margin-bottom: 0px;
  padding: 0px;
}

button#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: red;
}

.showcase {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 0 20px;
}

section#showcase div.main div.more-btn a{
  background-color: #000;
  color: #fff;
  max-width: 150px;
  max-height: 50px;
  padding: 10px 30px;
  display: block;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 5px;
}

section#showcase .main .more-btn{
  position: relative;
  margin-top: 40px;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-container video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-container:after {
  content: '';
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}

.content {
  z-index: 2;
}

.btn {
  display: inline-block;
  padding: 10px 30px;
  background: var(--primary-color);
  color: #fff;
  border-radius: 5px;
  border: solid #fff 1px;
  margin-top: 25px;
  max-width: 135px;
  opacity: 0.7;
}

.btn:hover {
  transform: scale(0.98);
}

#about {
  padding: 40px;
  text-align: center;
}

#about p {
  font-size: 1.2rem;
  max-width: 600px;
  text-align: justify;
}

#about h2 {
  margin: 30px 0;
  color: var(--primary-color);
}

.social a {
  margin: 0 5px;
}
</style>