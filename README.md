# backend-final-project
Tugas Final Project Skilvul

## **Getting Started**
Untuk memulai pembuatan backend, siapkan software berikut:
1. Node.js
2. MySQL or MongoDB
3. Sequelize-cli (jika menggunakan MySQL)
4. Mongoose (jika menggunakan MongoDB)
Pada aplikasi ini, yang digunakan adalah MySQL sebagai dialect database.
   
## **Installation**
1. Install pacakage.json :
   ```markdown
   $ npm init -y
   ```
2. Install Express
   ```markdown
   $ npm install express
   ```
3. Install drive database yang akan digunakan, aplikasi ini menggunakan MySQL
   ```markdown
   $ npm install --save MySQL
   ```
4. Install nodemon untuk mempermudah dalam menjalankan kode.
   ```markdown
   $ npm i -D nodemon
   ```
5. Install Sequelize
   ```markodwn
   $ npm install --save sequelize
   ```
6. Installing CLI
   ```markdown
   $ npm install --save-dev sequelize-cli
   ```
7. Install bcrypt untuk mengubah data password menjadi kode hash.
   ```markodwn
   $ npm install bcrypt
   ```
9. Install json web token, untuk melakukan authorization dengan token.
   ```markdown
   $ npm i jsonwebtoken
   ```
10. Install json web token decode
    ```markdown
    $ npm install jwt-decode
    ```
    
## **Set Up Server Connection**
1. Buatlah file dengan nama `App.js`, kemudian pada file `package.json` bagian script tambahkan kode       berikut:
   ```javascript
   {
     "scripts": {
       "start": "node app.js",
       "dev": "nodemon app.js",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
   }
   ```
2. Buatlah server pada file `app.js`, dengan menulis kode berikut:
   ```javascript
   const express = require("express");
   const app = express();

   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
     console.log("server running on port : " + PORT);
   });
   ```
3. Untuk memulai menjalankan kode, gunakan command berikut:
   `$ npm start` //untuk memulai menjalankan server
   `$ npm run dev` //untuk setiap kali menghubungkan server
   
## **Menjalankan Sequelize**
Setelah melakukan Installing Sequelize `$ npm install --save sequelize` dan Installing CLI `$ npm install --save-dev sequelize-cli`, hasilnya adalah:
   - Membuat file `index.js` dalam folder `models`, untuk menyimpan model dari projek
   - Membuat file `config`, berupa cli untuk menghubungkan dengan database
   - Membuat folder `migrations`
   - Membuat folder `seeders`
     
1. Initialization CLI
   ```markdown
   $ npx sequelize-cli init
   ```
2. Testing connection di dalam file `app.js`
   ```javascript
   async function testConnection() {
     try {
       await db.Sequelize.authenticate;
       console.log("Connection has been established succesfully.");
       console.log("All models were synchronized succesfully.");
     } catch (error) {
       console.error("Unable to connect to the database", error);
     }
   }

   testConnection();
   ```
3. Menghubungkan dengan database pada file `config.js`
   ```javascript
   module.exports = {
     development: {
       username: " ", //sesuaikan dengan database
       password: " ", //sesuaikan dengan database
       database: " ", //sesuaikan dengan database
       host: " ", //sesuaikan dengan database
       dialect: "mysql",
     },
     test: {
       username: "root",
       password: null,
       database: "database_test",
       host: "127.0.0.1",
       dialect: "mysql",
     },
     production: {
       username: "root",
       password: null,
       database: "database_production",
       host: "127.0.0.1",
       dialect: "mysql",
     },
   };
   ```
## **Migration & Seeder**
1. Membuat Model dan Migration menggunakan sequelize dari `Users`
   ```markdown
   $ npx sequelize-cli model:generate --name Users --attributes username:string,email:string,password:string,role:string
   ```
2. Membuat Model dan Migration menggunakan sequelize dari `Dokters`
   ```markdowm
   $ npx sequelize-cli model:generate --name Dokters --attributes name:string,image_normal:string,image_crop:string,spesialisasi:string,pengalaman:integer,str:integer,hospital:string,biaya:integer,alumnus:string,info:string,jadwal_hari:string,jadwal_jam:string,kategoriId:integer
   ```
3. Membuat Model dan Migration menggunakan sequelize dari `Foods`
   ```markdown
   npx sequelize-cli model:generate --name Foods --attributes name:string,image:string,detail:string,kategoriId:integer
   ```
4. Jalankan Migration
   ```markdown
   $ npx sequelize-cli db:migrate
   ```
5. Isi model dari migration yang telah dibuat dengan data pada Seeder.
   ```markdown
   $ npx sequelize-cli seed:generate --name user
   ```
   ```markdown
   $ npx sequelize-cli seed:generate --name dokter
   ```
   ```markdown
   $ npx sequelize-cli seed:generate --name food
   ```
6. Jalankan Seeder
   ```markdown
   $ npx sequelize-cli db:seed:all
   ```
   
## **Authetication & Authorization**
Dari awal telah disajikan untuk melakukan Installing bcrypt  `$ npm install bcrypt`, Installing json web token `npm i jsonwebtoken` dan Installing json web token encode ` $ npm install jwt-decode` digunakan dalam proses Authetication & Authorization.



   
   

