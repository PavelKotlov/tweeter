<h1 align="center">Tweeter</h1>

#### 🔗 Tweeter
Tweeter is a simple, single-page Twitter clone.

[![made-with-Node](https://img.shields.io/badge/Made%20with-Node.js%20-success)](https://nodejs.org/en/)
[![made-with-express](https://img.shields.io/badge/Made%20with-Express.js%20-black)](https://expressjs.com/)
[![made-with-jquery](https://img.shields.io/badge/Made%20with-jQuery%20-blue)](https://jquery.com/)
[![made-with-ajax](https://img.shields.io/badge/Made%20with-AJAX%20-blue)]()
[![made-with-body-parser](https://img.shields.io/badge/Made%20with-Body_Parser%20-red)](https://www.npmjs.com/package/body-parser)
[![made-with-chance](https://img.shields.io/badge/Made%20with-Chance%20-red)](https://www.npmjs.com/package/chance)
[![made-with-md5](https://img.shields.io/badge/Made%20with-MD5%20-black)](https://www.npmjs.com/package/md5)
[![made-with-nodemon](https://img.shields.io/badge/Made%20with-Nodemon.js%20-success)](https://nodemon.io/)
[![made-with-html](https://img.shields.io/badge/Made%20with-HTML%20-orange)](https://developer.mozilla.org/en-US/docs/Web/html)
[![made-with-css](https://img.shields.io/badge/Made%20with-CSS%20-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript%20-yellow)](https://developer.mozilla.org/en-US/docs/Web/javascript)

## Table of Content
- [🔗 Tweeter](#-tweeter)
- [Table of Content](#table-of-content)
- [🌟 Features](#-features)
- [🚀 Getting Started](#-getting-started)
- [⚫ Endpoints](#-endpoints)
- [🧱 Main Structure](#-main-structure)
- [📦 Tech Stack (Dependencies)](#-tech-stack-dependencies)
  - [🔨 Dependencies](#-Dependencies)
  - [🧰 Development Dependencies](#-development-dependencies)
- [⚠️ Disclaimer](#️-disclaimer)

## 🌟 Features
- Create tweets under 140 characters.
- Hide and show new tweet input box.
- Return to top button when scrolling page.
 
## 🚀 Getting Started
1. Fork repository.
2. Install all dependencies using the `npm install` command.
3. Run the server using the `npm start` command.
4. Visit http://127.0.0.1:8080 or [localhost:8080](http://localhost:8080) in your browser (port defaults to 8080).
5. Tweet away.

## ⚫ Endpoints
- Base URL : http://127.0.0.1:8080

| <b> Http method </b> | path                             | Description                                                                             |
| :------------------: | :------------------------------: | :-------------------------------------------------------------------------------------: |
| `GET`                | `/`                              | Gets index page and retrieves all the posts of a user                                   |
| `POST`               | `/`                              | Creates a new post and adds it to all displayed posts                                   |

## 🧱 Main Structure
```sh
├─── .github                # note to students
├─── public                 
│  ├─── images              # contains proflie pic
│  ├─── scripts             # contains client side scripts
│  ├─── styles              # contains all the css files
│  ├─── vendor              # contains css normalization and jquery scripts
│  ├─── index.html          # main page
├─── server             
│  ├─── data-files          # mock tweets
│  ├─── lib                 
│  |  ├─── util             # contains all the helper functions
│  ├─── routes              # app routes
│  ├─── index.js            # the main driver of the app includes all the routes and server configs
├─── .gitignore
├─── README.md
├─── package-lock.json
└─── package.json
```

## 📦 Tech Stack (Dependencies)

### 🔨 Dependencies
- [Express.js](https://www.npmjs.com/package/express)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [Chance](https://www.npmjs.com/package/chance)
- [MD5](https://www.npmjs.com/package/md5)

### 🧰 Development Dependencies
- [Nodemon](https://www.npmjs.com/package/nodemon)

## ⚠️ Disclaimer
- This is a project for [LHL web development bootcamp](https://www.lighthouselabs.ca/) and is not meant for production use.

---
## Screenshoots

![Desktop-View](https://user-images.githubusercontent.com/107829745/222691623-0ab9838a-4fd3-4b90-a2ed-5cfb345864e9.JPG)
![Desktop-View-error](https://user-images.githubusercontent.com/107829745/222691628-cc08fde7-761e-4290-81f4-84131e3f8477.JPG)
![Tablet-View](https://user-images.githubusercontent.com/107829745/222691631-9ff5e95c-c5fa-45a4-89fa-d937abe97df4.JPG)
![Tablet-View-error](https://user-images.githubusercontent.com/107829745/222691634-91406b07-b178-4765-ac0e-2bb89bdabc33.JPG)
![XSS-Attack](https://user-images.githubusercontent.com/107829745/222691637-fda3493a-cdaa-4f21-9da3-ce8e719506b7.JPG)
