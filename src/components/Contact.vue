<template>
   <!-- Scroll top -->
   <button type="button" class="btn btn-lg" id="btn-back-to-top" @click="scrollToTop()">
      <span class="scroll-top-btn">
         <i class="fa-regular fa-circle-up fa-2x"></i>
      </span>
   </button>
   <!-- About Container -->
   <section id="about" style="margin-top: 100px; padding-bottom: 60px;">
      <h4>GET IN TOUCH</h4>
      <hr>
      <img src="@/assets/fall-guy.png" class="img-thumbnail" alt="..." />

      <div class="info">
         <h5>
            Hi, if you need to contact me you can go through the links to the social network I am using below.
         </h5>
         <div class="social-group">
            <div class="row">
               <div class="col-4"></div>
               <a class="col-1" href="https://www.facebook.com/quanghuy.nguyenthanh/" target="_blank">
                  <span>
                     <i class="fa-brands fa-facebook-f  fa-2x"></i>
                  </span>
               </a>
               <a class="col-1" href="https://www.facebook.com/quanghuy.nguyenthanh/" target="_blank">
                  <span>
                     <i class="fa-brands fa-instagram  fa-2x"></i>
                  </span>
               </a>
               <a class="col-1" href="https://www.facebook.com/quanghuy.nguyenthanh/" target="_blank">
                  <span>
                     <i class="fa-brands fa-github  fa-2x"></i>
                  </span>
               </a>
               <a class="col-1" href="https://www.facebook.com/quanghuy.nguyenthanh/" target="_blank">
                  <span>
                     <i class="fa-brands fa-linkedin fa-2x"></i>
                  </span>
               </a>
               <div class="col-4"></div>
            </div>
         </div>
      </div>
   </section>
</template>
  
<script>
export default {
   name: 'Contact',
   data() {
      return {
         images: {},
      }
   },
   mounted() {
   },
   created() {
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

html {
   scroll-behavior: smooth;
}

body {
   font-family: 'Open Sans', sans-serif;
   line-height: 1.5;
}

/* Center website */
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
   font-size: 24px;
   line-height: 1.2em;
   letter-spacing: 0.8em;
   fill: #000;
   text-align: center;
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

.img-thumbnail {
   width: 100%;
}

.social-group {
   margin-top: 30px;
}

.info {
   margin-top: 30px;
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

@media screen and (max-width: 600px) {
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

   section#about div.info div.social-group {
      max-width: 20px;
      display: inline;
   }

}
</style>