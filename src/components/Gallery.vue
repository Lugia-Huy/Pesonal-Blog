<template>
   <!-- Scroll top -->
   <button type="button" class="btn btn-lg" id="btn-back-to-top" @click="scrollToTop()">
      <span class="scroll-top-btn">
         <i class="fa-regular fa-circle-up fa-2x"></i>
      </span>
   </button>

   <section id="showcase">
      <div class="container main">
         <h4>LASTEST WORK</h4>
         <hr>
         <h1 style="color: #000;">Gallery</h1>
         <!-- Portfolio Gallery Grid -->
         <!-- Photo Grid -->
         <div class="row">
            <!-- render list image get from flickr api
            <div class="column" v-for="photo in images_col2" :key="photo.id">
               <img :src="'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret +'.jpg'" style="width:100%" loading="lazy">
            </div>
            -->
            <div class="column">
               <img src="https://live.staticflickr.com/65535/52473156172_3f736beb00_h.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52474116395_0c8609b783_h.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52473654001_75657d8d1a_k.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52474198623_1f0c3d9c89_k.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52473936789_4bca28edd7_k.jpg" style="width:100%"
                  loading="lazy">
            </div>
            <div class="column">
               <img src="https://live.staticflickr.com/65535/52473654021_c57e9bd140_h.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52474116475_64c17e337a_k.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52473936694_2fea5f22ed_h.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52473654681_0d214fefe8_k.jpg" style="width:100%"
                  loading="lazy">
            </div>
            <div class="column">
               <img src="https://live.staticflickr.com/65535/52473654471_25df802380_k.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52474116485_47e90b7279_k.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52473654131_8d283602d4_h.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52474116525_37867cccc7_k.jpg" style="width:100%"
                  loading="lazy">
               <img src="https://live.staticflickr.com/65535/52473936704_1f7a5637c3_k.jpg" style="width:100%"
                  loading="lazy">
            </div>
         </div>
      </div>
   </section>
</template>
  
<script>
import axios from 'axios';

export default {
   name: 'Gallery',
   data() {
      return {
         images: [],
         images_col1: [],
         images_col2: [],
         images_col3: [],
         total: 0,
      }
   },
   mounted() {
      this.getAllImage();
   },
   created() {
      //
   },

   methods: {
      scrollToTop() {
         window.scrollTo(0, 0);
      },

      getAllImage() {
         let uri = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6e8dff27a17aeef7351681a353814e72&user_id=196851691%40N04&format=json&nojsoncallback=1';

         axios.get(uri).then((response) => {
            this.images = response.photos.photo;
            this.total = response.photos.total;
            this.images_col1 = this.images.slice(0, this.total / 3);
            this.images_col2 = this.images.slice(this.total / 3 + 1, this.total / 3 * 2);
            this.images_col3 = this.images.slice(this.total / 3 * 2 + 1, this.total);
         });
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

   #showcase {
      margin-top: 50px;
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

   .showcase {
      margin-top: 50px;
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

#showcase {
   margin-top: 150px;
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
</style>