<template>
  <div class="container">
    <transition name="url">
    <div v-if="show" class="info-tab">
      <img @click="show = false" src="../assets/x.svg" alt="">
      <p class="url">{{ shortUrl }}</p>
      <p class="comment">Copy your url and use it anywhere...</p>
    </div>
    </transition>
    <div class="name-section">
      <h3 class="small">Welcome to</h3>
      <h1 class="big">Another Link Shortener</h1>
    </div>
    <div class="shortener">
      <p class="note" v-bind:style='{"color": infoColor}'>{{ info }}</p>
      <input type="text" v-model="urlData" placeholder="Paste here...">
      <div class="bts">
        <button @click="saveUrl()" class="shorten">Shorten</button>
        <!-- <button @click="checkUrl()" class="check">Check</button> -->
      </div>
    </div>
  </div>
</template>

<script>
const validUrl = require('valid-url')

export default {
  name: 'main-page',
  head: {
    title: 'Another Link Shortener',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/kmt3lct.css' }
    ]
  },
  data () {
    return {
      info: 'Paste link to shorten, or check your shortened url',
      infoColor: '#fff',
      urlData: '',
      show: false,
      shortUrl: ''
    }
  },
  methods: {
    random (number) {
      let randomValues = ''
      const stringValues = '1234567890ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ1234567890'
      const sizeOf = stringValues.length

      for (let q = 0; q < number; q++) {
        randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOf))
      }
      return randomValues
    },
    saveUrl () {
      if (this.urlData !== '') {
        if (validUrl.isUri(this.urlData)) {
          this.info = 'Url is valid, attempting to shorten it'
          this.infoColor = '#00ff00'

          const code = this.random(5)

          try {
            this.info = 'Loading...'
            this.infoColor = '#fff'

            this.$axios.post('/save', {
              url: this.urlData,
              code
            }).then((res) => {
              this.shortUrl = res.data
              this.show = true

              this.info = 'Link has been shortened succesfully'
              this.infoColor = '#00ff00'

              return setTimeout(() => {
                this.info = 'Paste link to shorten, or check your shortened url'
                this.infoColor = '#fff'
              }, 2000)
            })
          } catch (e) {
            this.info = 'Error occurred while shortening url'
            this.infoColor = '#ff0000'

            setTimeout(() => {
              this.info = 'Paste link to shorten, or check your shortened url'
              this.infoColor = '#fff'
            }, 2000)
          }
        } else {
          this.info = 'This url is not valid, try again!'
          this.infoColor = '#ff0000'

          return setTimeout(() => {
            this.info = 'Paste link to shorten, or check your shortened url'
            this.infoColor = '#fff'
          }, 2000)
        }
      } else {
        this.info = "I can't shorten empty url!"
        this.infoColor = '#ff0000'

        return setTimeout(() => {
          this.info = 'Paste link to shorten, or check your shortened url'
          this.infoColor = '#fff'
        }, 2000)
      }
    }
  }
}
</script>

<style>
@keyframes url-in {
  0% { opacity: 0; transform: translateY(-95px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes url-out {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-95px); }
}
body {
  background: #161616;
  font-family: proxima-nova, sans-serif;
  margin: 0;
  padding: 0;
}

.url-enter-active {
  animation: url-in 400ms;
}

.url-leave-active {
  animation: url-out 400ms;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container .info-tab {
  position: fixed;
  top: 25px;
  background: #111111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 70px;
  min-width: 250px;
  border-radius: 12px;
  border: 2px rgb(104, 218, 113) solid;
  transition: 400ms;
}

.container .info-tab img {
  position: absolute;
  right: 7px;
  top: 7px;
  cursor: pointer;
}

.container .info-tab .url {
  margin: 0;
  padding: 0 15px;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  color: rgb(104, 218, 113);
}

.container .info-tab .comment {
  margin: 5px 0 0 0;
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  color: #fff;
}

.container .name-section {

}

.container .name-section .small {
  margin: 0 0 3px 0;
  padding: 0;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}

.container .name-section .big {
  margin: 0;
  padding: 0;
  color: rgb(104, 218, 113);
  font-size: 42px;
  font-weight: 700;
  line-height: 30px;
}

.container .shortener {
  margin: 20px 0 0 0;
  width: 440px;
  height: 250px;
  border-radius: 12px;
  border: 2px rgb(104, 218, 113) solid;
  background: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container .shortener .note {
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
}

.container .shortener input[type=text] {
  margin: 30px 0 0 0;
  outline: none;
  border: none;
  background: none;
  border-bottom: 1px rgb(104, 218, 113) solid;
  color: #fff;
  width: 300px;
  padding: 0 10px;
  font-family: proxima-nova, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
}

.container .shortener .bts {
  margin: 30px 0 0 0;
  display: flex;
  justify-content: center;
  width: 250px;
}

.container .shortener .bts button {
  font-family: proxima-nova, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  background: rgb(104, 218, 113);
  border: 2px rgb(104, 218, 113) solid;
  border-radius: 10px;
  padding: 8px 12px;
  color: #111111;
  transition: 400ms;
  cursor: pointer;
}

.container .shortener .bts button:hover {
  background: #111111;
  color: rgb(104, 218, 113);
}
</style>
