"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Dokters", [
      {
        name: "Dr. I Made Kartika",
        images: {
          normal: "https://i.ibb.co/mHdPt32/dokter-kandungan1.jpg",
          crop: "https://i.ibb.co/ZS56Myr/biaya-dokter-kandungan1.jpg",
        },
        spesialisasi: "Kandungan",
        pengalaman: 15,
        str: 4521068907341231,
        hospital: "Rumah Sakit Sentosa",
        biaya: 50000,
        alumnus: "Universitas Kedokteran Kandungan",
        info: "Dr.I Made Surya adalah seorang spesialis Kandungan berpengalaman dengan lebih dari 15 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Sentosa.",
        jadwal: {
          hari: "Senin - Selasa",
          jam: "08:00 - 10:00",
        },
        kategoriId: 1,
      },
      {
        name: "Dr. Putri Amelia",
        images: {
          normal: "https://i.ibb.co/BLCDQQW/dokter-kandungan2.jpg",
          crop: "https://i.ibb.co/bPd0YhN/biaya-dokter-kandungan2.jpg",
        },
        spesialisasi: "Kandungan",
        pengalaman: 12,
        str: 3125902456789012,
        hospital: "Rumah Sakit Bhakti Medika",
        biaya: 55000,
        alumnus: "Universitas Kedokteran Kandungan",
        info: "Dr.Putri Amelia adalah seorang spesialis Kandungan berpengalaman dengan lebih dari 12 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Bhakti Medika.",
        jadwal: {
          hari: "Senin - Selasa",
          jam: "11:00 - 13:00",
        },
        kategoriId: 1,
      },
      {
        name: "Dr. Jessica Milea",
        images: {
          normal: "https://i.ibb.co/RB22RNS/dokter-kandungan3.jpg",
          crop: "https://i.ibb.co/p3CnXZZ/biaya-dokter-kandungan3.jpg",
        },
        spesialisasi: "Kandungan",
        pengalaman: 20,
        str: 6789543210678934,
        hospital: "Rumah Sakit Permata Cipta",
        biaya: 60000,
        alumnus: "Universitas Kedokteran Kandungan",
        info: "Dr.Jessica Milea adalah seorang spesialis Kandungan berpengalaman dengan lebih dari 20 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Permata Cipta.",
        jadwal: {
          hari: "Senin - Selasa",
          jam: "14:00 - 16:00",
        },
        kategoriId: 1,
      },
      {
        name: "Dr.Dewi Ratnasari",
        images: {
          normal: "https://i.ibb.co/rHKvVhS/dokter-anak1.jpg",
          crop: "https://i.ibb.co/d2qmqNh/biaya-dokter-anak1.jpg",
        },
        spesialisasi: "Dokter Anak",
        pengalaman: 10,
        str: 2390578163410927,
        hospital: "Rumah Sakit Citra Medika",
        biaya: 55000,
        alumnus: "Universitas Kedokteran Anak",
        info: "Dr.Dewi Ratnasari adalah seorang spesialis Dokter Anak berpengalaman dengan lebih dari 10 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Citra Medika.",
        jadwal: {
          hari: "Rabu - Kamis",
          jam: "08:00 - 10:00",
        },
        kategoriId: 2,
      },
      {
        name: "Dr.Rizki Pratama",
        images: {
          normal: "https://i.ibb.co/Wg4shbg/dokter-anak2.jpg",
          crop: "https://i.ibb.co/g97ncfG/biaya-dokter-anak2.jpg",
        },
        spesialisasi: "Dokter Anak",
        pengalaman: 18,
        str: 8901234567012354,
        hospital: "Rumah Sakit Medistra",
        biaya: 45000,
        alumnus: "Universitas Kedokteran Anak",
        info: "Dr.Rizki Pratama adalah seorang spesialis Dokter Anak berpengalaman dengan lebih dari 18 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Medistra.",
        jadwal: {
          hari: "Rabu - Kamis",
          jam: "11:00 - 13:00",
        },
        kategoriId: 2,
      },
      {
        name: "Dr. Siti Nurhaliza",
        images: {
          normal: "https://i.ibb.co/gZPVm8f/dokter-anak3.jpg",
          crop: "https://i.ibb.co/TkzrGFq/biaya-dokter-anak3.jpg",
        },
        spesialisasi: "Dokter Anak",
        pengalaman: 14,
        str: 7890123456789321,
        hospital: "Rumah Sakit Kasih Sayang",
        biaya: 50000,
        alumnus: "Universitas Kedokteran Anak",
        info: "Dr.Siti Nurhaliza adalah seorang spesialis Dokter Anak berpengalaman dengan lebih dari 14 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Kasih Sayang.",
        jadwal: {
          hari: "Rabu - Kamis",
          jam: "14:00 - 16:00",
        },
        kategoriId: 2,
      },
      {
        name: "Dr. Hendra Wijaya",
        images: {
          normal: "https://i.ibb.co/48dd68R/dokter-gigi1.jpg",
          crop: "https://i.ibb.co/PcbBB2b/biaya-dokter-gigi1.jpg",
        },
        spesialisasi: "Dokter Gigi",
        pengalaman: 10,
        str: 5432109876321098,
        hospital: "Rumah Sakit Hermina",
        biaya: 55000,
        alumnus: "Universitas Kedokteran Gigi",
        info: "Dr.Hendra Wijaya adalah seorang spesialis Dokter Gigi berpengalaman dengan lebih dari 10 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Hermina.",
        jadwal: {
          hari: "Jumat - Sabtu",
          jam: "09:00 - 11:00",
        },
        kategoriId: 3,
      },
      {
        name: "Dr. Dian Purnama",
        images: {
          normal: "https://i.ibb.co/WtrFCD4/dokter-gigi2.jpg",
          crop: "https://i.ibb.co/QndYS6f/biaya-dokter-gigi2.jpg",
        },
        spesialisasi: "Dokter Gigi",
        pengalaman: 16,
        str: 1234567890123456,
        hospital: "Rumah Sakit Puri Medika",
        biaya: 60000,
        alumnus: "Universitas Kedokteran Gigi",
        info: "Dr.Dian Purnama adalah seorang spesialis Dokter Gigi berpengalaman dengan lebih dari 16 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Puri Medika.",
        jadwal: {
          hari: "Jumat - Sabtu",
          jam: "12:00 - 14:00",
        },
        kategoriId: 3,
      },
      {
        name: "Dr. Tri Utami",
        images: {
          normal: "https://i.ibb.co/DYZjQnQ/dokter-gigi3.jpg",
          crop: "https://i.ibb.co/6gJ6jm9/biaya-dokter-gigi3.jpg",
        },
        spesialisasi: "Dokter Gigi",
        pengalaman: 13,
        str: 4321098765432109,
        hospital: "Rumah Sakit Sejahtera",
        biaya: 45000,
        alumnus: "Universitas Kedokteran Gigi",
        info: "Dr.Tri Utami adalah seorang spesialis Dokter Gigi berpengalaman dengan lebih dari 13 tahun praktik medis.Saat ini beliau praktik di Rumah Sakit Sejahtera.",
        jadwal: {
          hari: "Jumat - Sabtu",
          jam: "15:00 - 17:00",
        },
        kategoriId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Dokters", null, {});
  },
};
