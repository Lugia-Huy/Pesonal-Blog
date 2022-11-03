<template>
    <!-- Navbar  -->
    <nav id="navbar" class="navbar fixed-top navbar-expand-md navbar-dark p-md-2">
        <div class="container-fluid">
            <a class="navbar-brand abs" href="/">Quang Huy</a>

            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--
            <button class="navbar-toggler" type="button">
                <span style="font-size:30px;cursor:pointer" v-on:click="show()">&#9776;</span>
            </button>
            -->
            <div class="navbar-collapse collapse" id="collapseNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/allery">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about" data-bs-toggle="collapse">About</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <div class="social-group">
                        <li class="nav-item ">
                            <div class="social-icon">
                                <a class="nav-link" href="https://www.instagram.com/quanghuy_neyugn/" target="_blank">
                                    <span>
                                        <i class="fa-brands fa-instagram"></i>
                                    </span>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="social-icon">
                                <a class="nav-link" href="https://www.facebook.com/quanghuy.nguyenthanh/"
                                    target="_blank">
                                    <span>
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </span>
                                </a>
                            </div>
                        </li>
                    </div>
                    <li class="nav-item">
                        <div class="btn-contact">
                            <a class="nav-link" href="/contact">Contact</a>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- mobile menu
            <div v-if="isHidden" id="myNav" class="overlay">
                <a href="#" class="closebtn" v-on:click="hidden()">&times;</a>
                <div class="overlay-content">
                    <a href="#">Home</a>
                    <a href="#">Gallery</a>
                    <a href="#">About</a>
                    <br>
                    <div class="social-mb">
                        <div class="social-icon">
                            <a class="nav-link" href="https://www.instagram.com/quanghuy_neyugn/" target="_blank">
                                <span>
                                    <i class="fa-brands fa-instagram"></i>
                                </span>
                            </a>
                        </div>
                        <div class="social-icon">
                            <a class="nav-link" href="https://www.facebook.com/quanghuy.nguyenthanh/" target="_blank">
                                <span>
                                    <i class="fa-brands fa-facebook-f"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="btn-contact">
                        <a class="nav-link" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
             -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MainHeader',
    data() {
        return {
            isHidden: false,
        }
    },
    mounted() {
        var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                nav.classList.add('bg-dark', 'shadow');
            } else {
                nav.classList.remove('bg-dark', 'shadow');
            }
        });

    },
}
</script>
<style scoped>
* {
    scroll-behavior: smooth;
}

.container-fluid {
    margin-left: 30px;
    margin-right: 30px;
    padding: 15px;
}

#collapseNavbar ul li {
    padding: 10px;
}

.navbar .container-fluid .navbar-brand.abs {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    pointer-events: auto;
    text-align: center;
    font-family: Gilda Display, serif;
    font-size: 37px;
    font-weight: 400;
    letter-spacing: 0.1em;
    box-sizing: inherit;
    transition: all 0.25s ease-in-out;
    text-decoration: none;
    color: #ffffff !important;
    fill: #ffffff !important;
    display: block;
    font-weight: lighter;
    letter-spacing: 3px;
}

.navbar .container-fluid a.navbar-brand.abs:hover {
    color: #8d8d8d !important;
    fill: #8d8d8d !important;
}

.nav-item .nav-link {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    letter-spacing: 3px;
    pointer-events: auto;
    font-family: Gilda Display, serif;
    font-weight: 400;
    white-space: nowrap;
    line-height: 1.8em;
    box-sizing: inherit;
    font-size: 19px;
    letter-spacing: 0em;
    text-indent: 0em;
    color: #ffffff !important;
    fill: #ffffff !important;
    text-decoration: none;
    backface-visibility: hidden;
    padding: .05em 0;
    display: inline-flex;
    align-items: center;
    transition: none;
    border-top: 2px solid transparent;
}

li {
    /* you can change these variables to control the border */
    --border-color: rgb(255, 255, 255);
    --border-width: 1.5px;
    --bottom-distance: 0px;
    /* you can increase this */

    color: rgb(255, 255, 255);
    display: inline-block;
    background-image: linear-gradient(var(--border-color), var(--border-color));
    background-size: 0% var(--border-width);
    background-repeat: no-repeat;
    transition: background-size 0.3s;
}

li a.nav-link {
    background-position: 0 calc(100% - var(--bottom-distance))
}

li:hover {
    background-size: 100% var(--border-width);
    bottom: 0px;
}

.nav-item .social-icon a {
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    pointer-events: auto;
    backface-visibility: hidden;
    transition: all 0.25s ease-in-out 0s;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: 0em;
    padding: 20px 0px;
    text-indent: 0em;
    color: #ffffff !important;
    fill: #ffffff !important;
    position: relative;
    display: block;
    box-sizing: content-box;
    line-height: 0;
    text-align: center;
}

.nav-item .btn-contact a.nav-link {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    pointer-events: auto;
    white-space: nowrap;
    box-sizing: inherit;
    transition: all 0.25s ease-in-out;
    text-decoration: none;
    text-align: center;
    font-size: 19px;
    font-family: Inter, sans-serif;
    font-weight: normal;
    padding: 1.4em 2.4em;
    max-width: 179px;
    text-align: center;
    min-width: 140px;
    max-height: 66px;
    letter-spacing: 0em;
    background: none;
    border-radius: 0;
    letter-spacing: 3px;
    border: 1px solid #ffffff;
    color: #ffffff !important;
    fill: #ffffff !important;
}

.overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #000000;
    display: block;
    transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
    color: #9e9e9e;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}

@media screen and (max-height: 450px) {
    .overlay a {
        font-size: 20px
    }

    .overlay .closebtn {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
}

/**/
@media screen and (min-width: 991px) {
    .navbar-brand.abs {
        position: absolute;
        width: auto;
        left: 50%;
        font-size: 37px;
        transform: translateX(-50%);
        text-align: center;
        font-family: Gilda Display, serif;
        letter-spacing: 3px;
        font-weight: lighter;
    }

    .nav-item .social-icon a {
        padding: 20px 0px;
    }
}


@media screen and (max-width: 991px) {
    .navbar-brand.abs {
        font-size: 37px;
        font-family: Gilda Display, serif;
        letter-spacing: 3px;
        font-weight: lighter;
        transform-origin: 100% 50%;
    }

    .nav-item .social-icon a {
        padding: 5px 0px;
    }

    .nav-item .social-icon {
        max-width: 20px;
        display: inline;
    }
}
</style>
