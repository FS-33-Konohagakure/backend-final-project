# backend-final-project
Tugas Final Project Skilvul

## **DOKUMENTASI API**
1. Pertama koneksikan host database menggunakan data berikut:
   ```markdown
   username: "freedb_virani",
   password: "6u#U@BfDZy&6Az*",
   database: "freedb_kesehatan",
   host: "sql.freedb.tech",
   dialect: "mysql",
   ```
2. Kemudian setelah host database terhubung, default route akan menunjukkan pesan
   "Selamat datang di aplikasi Konsultasi Dokter dan Informasi Kesehatan Bersama SEHATIN"
3. Kemudian untuk Registrasi menggunakan alamat route `POST ("/auth.regis")` dengan mengisikan body sebagai berikut:
   ```markdown
   {
   "username": "",
   "email": "",
   "password": "",
   "role": "admin" / "user"
   }
   ```
4. Setelah berhasil registrasi, kemudian dapat melakukan Login menggunakan data yang sudah tersimpan di dalam database dengan alamat route `POST ("/auth.login")`
   ```markdown
   {
   "username": "",
   "email": "",
   "password": "",
   "role": "admin" / "user"
   }
   ```
5. Kemudian setelah berhasil melakukan login akan mendapatkan token. **Token** ini akan diberikan ke dalam **header**.
6. Fitur-fitur yang ada dalam aplikasi ini
   USER
   - mendapatkan seluruh data user route `GET ("users/")`
   - mendapatkan data user berdasarkan id route `GET ("users/:id")`
   - menambahkan data user (dengan registrasi)
   - mengedit data user berdasarkan id route `PUT ("users/:id")`
   - menghapus data user berdasarkan id route `DELETE ("users/:id")`
  
   DOKTER
   - mendapatkan seluruh data dokter route `GET ("dokters/")`
   - mendapatkan data dokter berdasarkan id route `GET ("dokters/:id")`
   - menambahkan data dokter route `POST ("dokters/")`
   - mengedit data dokter berdasarkan id route `PUT ("dokters/:id")`
   - menghapus data dokter berdasarkan id route `DELETE ("dokters/:id")`
  
   FOOD
   - mendapatkan seluruh data food route `GET ("foods/")`
   - mendapatkan data food berdasarkan id route `GET ("foods/:id")`
   - menambahkan data food route `POST ("foods/")`
   - mengedit data food berdasarkan id route `PUT ("foods/:id")`
   - menghapus data food berdasarkan id route `DELETE ("foods/:id")`
     
8. Dalam aplikasi ini, ada 2 role ( admin dan user)
   Untuk fitur-fitur dibawah ini, yang memiliki hak akses hanya **admin**, sehingga role 'user' tidak dapat menggunakan akses fitur-fitur ini.
   DOKTERS
   - menambahkan data dokter dengan route `GET ("dokters/")`
   - mengedit data dokter route `PUT ("dokters/:id")`
   - menghapus data dokter route DELETE `("dokters/:id")`
     
   FOODS
   - menambahkan data food dengan route `GET ("foods/")`
   - mengedit data food route `PUT ("foods/:id")`
   - menghapus data food route `DELETE ("foods/:id")`
     
9. Untuk melakukan edit data atau menambahkan data **Dokter**, dapat menggunakan format berikut:
    ```markdown
    "name": "string",
    "image_normal": "string",
    "image_crop": "string",
    "spesialisasi": "Dokter Anak" / "Dokter Kandungan" / "Dokter Gigi"
    "pengalaman": integer,
    "str": integer,
    "hospital": "string",
    "biaya": integer,
    "alumnus": "string",
    "info": "string",
    "jadwal_hari": "hari - hari",
    "jadwal_jam": "00:00 - 00:00",
    "kategoriId": integer,
    ```
    
12. Untuk melakukan edit data atau menambahkan data **Food**, dapat menggunakan format berikut:
    ```markdown
    "name": "string",
    "image": "string",
    "detail": "string",
    "kategoriId": (integer),
    ```
    
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



   
   

