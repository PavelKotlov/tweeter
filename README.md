<h1 align="center">Tweeter</h1>

#### 🔗 Tweeter
Tweeter is a simple, single-page Twitter clone.

[![made-with-Node](https://img.shields.io/badge/Made%20with-Node.js%20-success)](https://nodejs.org/en/)
[![made-with-express](https://img.shields.io/badge/Made%20with-Express.js%20-black)](https://expressjs.com/)
[![made-with-bcrypt](https://img.shields.io/badge/Made%20with-Bcrypt.js%20-blue)](https://www.npmjs.com/package/bcrypt)
[![made-with-cookie-session](https://img.shields.io/badge/Made%20with-Cookie_Session%20-blue)](https://www.npmjs.com/package/cookie-session)
[![made-with-ejs](https://img.shields.io/badge/Made%20with-EJS%20-yellow)](https://ejs.co/)
[![made-with-chai](https://img.shields.io/badge/Made%20with-Chai%20-red)](https://www.chaijs.com/)
[![made-with-mocha](https://img.shields.io/badge/Made%20with-Mocha%20-brown)](https://mochajs.org/)
[![made-with-morgan](https://img.shields.io/badge/Made%20with-Morgan%20-yellow)](https://www.npmjs.com/package/morgan)
[![made-with-nodemon](https://img.shields.io/badge/Made%20with-Nodemon.js%20-success)](https://nodemon.io/)
[![made-with-bootstrap](https://img.shields.io/badge/Made%20with-Bootstrap%20-purple)](https://getbootstrap.com/docs/4.2/getting-started/introduction/)

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
- Register, login, and logout users.
- View, create, edit, and delete short URLs.
- User passwords and sessions are encrypted.
 
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
| `GET`                | `/`                              | Gets index page and redirects to login page, unless logged in then to urls page         |
| `GET`                | `/users`                         | Gets urls page if user is logged in, else redirects to login page                       |
| `GET`                | `/users/login`                   | Gets login page, unless logged in then redirects to urls page                           |
| `GET`                | `/users/logout`                  | Gets login page and sets session to null                                                |
| `GET`                | `/users/register`                | Gets registration page, unless logged in then redirects to urls page                    |
| `POST`               | `/users/login`                   | Verifies user credentials and if succesful starts a session                             |
| `POST`               | `/users/register`                | Creates a new user, starts a session, and redirects to urls page                        |
| `GET`                | `/urls`                          | Gets urls index page and all the urls for the authorized user                           |
| `GET`                | `/urls/new`                      | Gets urls new page for the authorized user                                              |
| `GET`                | `/urls/:id`                      | Gets urls show page for a specific url for the authorized user                          |
| `GET`                | `/u/:id`                         | Edits a card for a specific topic for the authorized user                               |
| `POST`               | `/urls`                          | Create a new short URL and redirect to the urls show page                               |
| `POST`               | `/urls/:id`                      | Edits a short URL for the authorized user                                               |
| `POST`               | `/urls/:id/delete`               | Delete a short URL for the authorized user                                              |

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
