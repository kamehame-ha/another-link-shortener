<a name="readme-top"></a>




<br />
<div align="center">
  <a href="https://github.com/kamehame-ha/another-link-shortener">
    <img src="/github-assets/logo.svg" width="90px" height="90px" alt="Logo">
  </a>

<h3 align="center">Another Link Shortener</h3>

  <p align="center">
    Simple <strong>open-source</strong> url shortener
    <br />
    <br />
    <a href="https://github.com/kamehame-ha/another-link-shortener">View Demo</a>
    ·
    <a href="https://github.com/kamehame-ha/another-link-shortener/issues">Report Bug</a>
    ·
    <a href="https://github.com/kamehame-ha/another-link-shortener/issues">Request Feature</a>
  </p>
</div>




<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>





## About the project
Here's clean coded link shortener! Enjoi using it : )
### Built with
* ![Nuxt.js](https://shields.io/badge/Nuxt.js-black?style=for-the-badge&logo=Nuxt.js)
* ![Axios](https://shields.io/badge/Axios-black?style=for-the-badge&logo=Axios)
* ![Express](https://shields.io/badge/Express-black?style=for-the-badge&logo=Express)
* ![MongoDB](https://shields.io/badge/MongoDB-black?style=for-the-badge&logo=MongoDB)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Getting started
Now i will show you how to prepare this project for use


### Prerequisites
* NodeJS - [Check it](https://nodejs.org/en/) (Minimum knowledge needed)
* Nuxt.js - [Check it](https://nuxtjs.org/) (Minimum knowledge needed)
* MongoDB - [Check it](https://www.mongodb.com/) (Cluster needed)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Installation
1. Clone repo
```sh
git clone https://github.com/kamehame-ha/another-link-shortener.git
```

2. Install modules
```sh
npm i
```

3. Change domain & connection string to yours
```js
// api/index.js

try {
    mongoose.connect(`<YOUR_CONNECTION_STRING>`).then( // <- Put your connection string
        console.log('Database connected!')
    )
} catch(e) {
    console.log('Cannot connect to database')
}

const link = require('./models/url.js')

const domain = 'http://localhost' // <- Put your domain
```

4. Start development server or build for production
```js
Development:
npm run dev -- --<port> // default is 3000

Production:
npm run build
npm run start -- --<port> // default is 3000
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Contributing
**Feel free to improve this project on your own and don't forget to leave a star**

But if you have idea how i can improve this please open issue

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Contact

Discord - **kameHame HA#5545** - `kameHame HA#5545`

Project Link: [https://github.com/kamehame-ha/another-link-shortener](https://github.com/kamehame-ha/another-link-shortener)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
