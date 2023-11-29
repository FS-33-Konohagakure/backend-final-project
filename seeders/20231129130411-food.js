"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Foods", [
      {
        name: "Bayam",
        image: "image 1",
        detail:
          "Bayam dapat menjadi menu bagi Anda yang ingin menurunkan berat badan dengan tubuh yang terpenuhi nutrisinya.Jenis sayuran satu ini memiliki kandungan serat yang tinggi, serta asam lemak omega 3 dan asam folat yang baik untuk mengurangi resiko penyakit jantung, stroke, dan pengeroposan tulang.Untuk melengkapi nutrisinya, bayam dapat Anda padukan dengan telur.",
        kategoriId: 1,
      },
      {
        name: "Paprika",
        image: "image 2",
        detail:
          "Merah, kuning, maupun hijau, paprika tidak pernah salah dipadukan dengan telur.Dengan kandungan vitamin C yang tinggi, mengonsumsi sayuran ini membantu tubuh untuk mengubah karbohidrat menjadi sumber energi lebih cepat.Selain itu, riset menunjukkan bahwa vitamin C dapat mendorong otot untuk menghasilkan asam lemak yang cocok untuk pembentukan otot serta pemulihan otot yang cedera.",
        kategoriId: 1,
      },
      {
        name: "Brokoli",
        image: "image 3",
        detail:
          "Brokoli sudah lama dikenal sebagai sayuran sehat yang kaya manfaat.Manfaat brokoli ini tak lain berkat kandungan nutrisi di dalamnya yang sangat beragam.Kendati tidak semua orang menyukainya, brokoli dianjurkan untuk tetap rutin dikonsumsi sebagai bagian dari menu harian Anda.Brokoli mengandung aneka nutrisi yang baik untuk kesehatan tubuh, seperti serat, protein, karbohidrat kompleks, air, dan mineral kalium, magnesium, kalsium, fosfor, zinc, serta zat besi.Selain itu, brokoli juga kaya akan vitamin A, vitamin B, folat, vitamin C, vitamin E, dan vitamin K.",
        kategoriId: 1,
      },
      {
        name: "Wortel",
        image: "image 4",
        detail:
          "Wortel merupakan sayuran berwarna oranye yang banyak digemari, karena rasanya yang enak dan manfaat wortel yang melimpah.Wortel bisa dimakan mentah, direbus, atau digoreng, dibuat jus, atau campuran puding.Manfaat wortel didapat dari kandungan beta - karoten di dalamnya, yang berguna sebagai antioksidan.Selain beta - karoten, manfaat wortel juga didapat dari kandungan serat, vitamin K, dan kalium.Wortel mengandung serat makanan yang bisa memperbaiki kondisi saluran pencernaan yang terganggu seperti diare atau konstipasi.",
        kategoriId: 1,
      },
      {
        name: "Kol Merah",
        image: "image 5",
        detail:
          "Kol merah ini kaya akan fitokimia, nutrisi, antioksidan, vitamin.Sayuran ini pun kaya akan serat dan mineral yang terdiri dari thiamin, folat, kalsium, magnesium, mangan, riboflavin, zat besi, kalium, vitamin A, vitamin E, vitamin C, vitamin K dan vitamin B.Kol merah dikenal memiliki 10 kali lebih banyak vitamin A daripada kol hijau.Satu cangkir kubis merah cincang memiliki 51 mg vitamin C sementara kol hijau memiliki 37 mg vitamin C.Kol merah juga mengandung dua kali lipat jumlah zat besi dibandingkan dengan kol hijau.",
        kategoriId: 1,
      },
      {
        name: "Buncis",
        image: "image 6",
        detail:
          "Manfaat buncis untuk kesehatan sangat beragam.Sayuran dengan harga terjangkau dan mudah ditemukan ini mengandung gizi yang baik untuk meningkatkan daya tahan tubuh, menurunkan berat badan, serta mencegah sejumlah penyakit.Manfaat buncis diperoleh dari kandungan nutrisi di dalamnya.Buncis terkenal sebagai makanan sumber serat, folat, magnesium, dan vitamin C yang baik untuk tubuh.",
        kategoriId: 1,
      },
      {
        name: "Pare",
        image: "image 7",
        detail:
          "Di balik rasanya yang pahit, ada segudang manfaat pare untuk kesehatan.Manfaat tersebut berasal dari kandungan nutrisi di dalamnya yang menjadikan pare baik untuk mengendalikan kadar kolesterol, menurunkan berat badan, dan menjaga daya tahan tubuh.Pare diketahui kaya akan serat dan mengandung makronutrisi, yaitu karbohidrat, protein, dan lemak.Selain itu, pare juga mengandung beragam vitamin dan mineral, seperti vitamin A, vitamin C, folat, dan zat besi.",
        kategoriId: 1,
      },
      {
        name: "Semangka",
        image: "image 8",
        detail:
          "Meski rasa manis buah semangka dapat meningkatkan kadar gula darah Anda, buah yang kaya akan air ini menjadi cara yang baik untuk menghidrasi tubuh Anda di pagi hari.Selain itu, semangka  seperti buah dan sayuran berwarna merah lainnya adalah salah satu sumber zat likopen terbaik yang bagus untuk menjaga kesehatan mata, jantung, serta mencegah kanker.",
        kategoriId: 2,
      },
      {
        name: "Kiwi",
        image: "image 9",
        detail:
          "Kiwi dapat menjadi sumber vitamin C, selain jeruk, dan memenuhi beberapa nutrisi lain yang dibutuhkan tubuh Anda, khususnya sistem pencernaan.Sebuah studi menemukan bahwa mengonsumsi dua buah kiwi setiap hari selama satu bulan dapat mengatasi sembelit pada usus.",
        kategoriId: 2,
      },
      {
        name: "Melon",
        image: "image 10",
        detail:
          "Buah - buahan dapat menjadi makanan penutup dalam setiap waktu makan, termasuk sarapan.Buah melon memiliki kandungan kalori yang rendah dengan kadar vitamin C dan vitamin A yang tinggi.Selain itu, kandungan air yang tinggi di dalam buah ini akan menjaga kelembapan kulit dan membuat Anda merasa kenyang sepanjang pagi.",
        kategoriId: 2,
      },
      {
        name: "Pepaya",
        image: "image 11",
        detail:
          "Manfaat pepaya adalah berkat kandungan nutrisinya yang memberikan banyak kebaikan bagi tubuh, mulai dari menjaga kesehatan kulit hingga jantung.Selain itu, banyak manfaat pepaya lainnya yang dapat diperoleh dengan mengonsumsi buah ini secara rutin.Beberapa manfaat lainnya yaitu menjaga kesehatan mata, memelihara kesehatan rambut dan kuku, melancarkan pencernaan, memulihkan kulit yang terbakar sinar matahari, menjaga kesehatan jantung, menjaga kesehatan kulit, dan meningkatkan sistem kekebalan tubuh.",
        kategoriId: 2,
      },
      {
        name: "Mangga",
        image: "image 12",
        detail:
          "Mangga mengandung sekitar 2 gram serat dalam setiap 100 gramnya.Inilah yang menjadikan mangga sebagai buah kaya serat.Selain serat, mangga juga mengandung senyawa polifenol yang dapat meningkatkan pertumbuhan bakteri baik dan menghambat bakteri jahat dalam usus.Hal ini tentunya baik untuk kesehatan saluran cerna dan kekebalan tubuh.Selain itu, mangga juga mengandung senyawa antiradang yang dapat mengurangi risiko terjadinya berbagai penyakit, termasuk penyakit jantung koroner dan stroke.",
        kategoriId: 2,
      },
      {
        name: "Pisang",
        image: "image 13",
        detail:
          "Pisang tidak hanya enak, tetapi juga kaya akan senyawa potasium dan triptofan, menjadikannya salah satu makanan terbaik untuk dimakan di malam hari.Triptofan, seperti yang dinyatakan sebelumnya, adalah protein esensial yang berperan dalam relaksasi.Beberapa pisang sebelum makan dapat meningkatkan kualitas tidur.Plus, pisang mengandung vitamin dan kaya akan antioksidan.Mereka juga mengandung senyawa yang mampu membuat buang air besar lebih mudah.",
        kategoriId: 2,
      },
      {
        name: "Jeruk",
        image: "image 14",
        detail:
          "Selain dikenal kaya vitamin C yang dapat meningkatkan sistem kekebalan tubuh, jeruk juga kaya akan serat yang dapat meningkatkan kesehatan pencernaan.Dengan mengonsumsi 1 buah jeruk berukuran sedang, Anda sudah bisa mendapatkan 3 gram serat.Meskipun ada beragam manfaat jeruk untuk kesehatan, buah kaya serat ini sebaiknya tidak dikonsumsi secara berlebih oleh penderita GERD maupun sakit maag.Kandungan asam dalam jeruk mungkin akan mengiritasi lambung dan membuat kondisi tersebut menjadi makin parah.",
        kategoriId: 2,
      },
      {
        name: "Alpukat",
        image: "image 15",
        detail:
          "Buah satu ini memiliki perpaduan lengkap akan kandungan lemak baik, air, dan serat yang membuat Anda akan merasa kenyang lebih lama dan membuat alpukat cocok untuk dijadikan menu sarapan.Selain itu, alpukat dapat Anda padukan dengan roti tawar dan telur rebus, atau Anda dapat membuat jus alpukat dengan sedikit madu sebagai pemanis.",
        kategoriId: 2,
      },
      {
        name: "Nanas",
        image: "image 16",
        detail:
          "Ada banyak manfaat buah nanas bagi kesehatan, mulai dari meningkatkan imun, membantu diet, hingga mencegah kanker.Hal ini adalah berkat kandungan nutrisi yang melimpah di dalam buah tropis ini, seperti antioksidan, serat, vitamin, dan mineral.Manfaat buah nanas juga bisa dirasakan pada kesehatan tubuh secara umum, karena buah ini mampu memperkuat daya tahan tubuh, mengontrol kolesterol, dan menjaga tekanan darah.",
        kategoriId: 2,
      },
      {
        name: "Lemon",
        image: "image 17",
        detail:
          "Di balik rasanya yang asam, ada banyak sekali manfaat lemon yang sayang untuk dilewatkan.Lemon mengandung beragam nutrisi yang menjadikannya baik untuk kesehatan, mulai dari meningkatkan daya tahan tubuh hingga mencegah penyakit jantung.Beberapa manfaat lainnya yaitu menyehatkan saluran pencernaan, mencegah anemia, menjaga kesehatan kulit, dan menjaga berat badan.",
        kategoriId: 2,
      },
      {
        name: "Ubi",
        image: "https://i.ibb.co/hmxNYfn/ubi-2.jpg",
        detail:
          "Umbi-umbian yang kaya akan nutrisi membuat makanan satu ini disebut sebagai superfood, karena selain kandungan nutrisinya, ubi juga membantu Anda untuk membakar lemak. Ubi memiliki kandungan serat fiber dan memiliki indeks glikemik yang rendah sehingga sistem pencernaan akan menyerap lebih lama serta membuat Anda merasa kenyang dalam waktu yang lebih panjang. Anda dapat mengolah ubi dengan direbus, dikukus, maupun diiris tipis-tipis untuk membuat keripik ubi yang dipanggang maupun menggunakan air fryer sehingga kandungan nutrisi tetap terjaga.",
        kategoriId: 3,
      },
      {
        name: "Quinoa",
        image: "image 19",
        detail:
          "Sumber karbohidrat yang sudah ada sejak 5000 tahun ini kembali menjadi tren pilihan dalam menu- menu makanan sehat.Namun, tidak banyak orang yang menyertakan quinoa dalam menu sarapannya.Quinoa sendiri memiliki kandungan protein, serat fiber, dan lemak sehingga cocok Anda jadikan sumber energi di pagi hari.",
        kategoriId: 3,
      },
      {
        name: "Kacang Kenari",
        image: "image 20",
        detail:
          "Kacang kenari memiliki kandungan asam lemak omega 3 yang lebih banyak dari salmon, polifenol untuk mengatasi peradangan, serta menjadi sumber protein bagi kekuatan otot.Sedangkan, pada jenis kacang - kacangan lain hanya memiliki satu atau dua kandungan dari ketiga nutrisi dalam kacang kenari.",
        kategoriId: 3,
      },
      {
        name: "Sereal",
        image: "image 21",
        detail:
          "Sereal adalah sumber serat yang bagus.Seperti gandum juga mengandung jumlah melatonin yang mengesankan, yang meningkatkan kualitas tidur.Sebelum tidur, semangkuk sereal panas dan bahkan mungkin biji - bijian utuh adalah pilihan yang baik.Mereka tidak mengandung banyak kalori dan kemungkinan besar tidak akan membuat tetap terjaga.",
        kategoriId: 3,
      },
      {
        name: "Yogurt",
        image: "image 22",
        detail:
          "Yogurt juga merupakan sumber kalsium yang kaya.Kalsium merupakan mineral penting bagi tubuh.Hal ini diperlukan untuk pertumbuhan tulang dan gigi, dan otot rangka, polos, dan jantung membutuhkannya untuk kontraksi otot terjadi.Tubuh juga membutuhkan kalsium untuk memproduksi melatonin dari triptofan.Yogurt juga mengandung kasein.Kasein dipercaya dapat mengurangi rasa lapar di pagi hari.Yogurt tanpa pemanis adalah camilan yang enak dan salah satu makanan terbaik untuk dimakan di malam hari.",
        kategoriId: 3,
      },
      {
        name: "Madu",
        image: "image 23",
        detail:
          "Madu dipanen dari lebah bergizi dan tidak mengandung banyak kalori.Hal ini diketahui mampu meningkatkan produksi melatonin dalam tubuh seseorang.Madu juga mengandung gula sehat, seperti fruktosa dan glukosa, dan dapat memiliki efek yang sehat pada kadar gula tubuh.Madu adalah salah satu makanan terbaik untuk dimakan larut malam.",
        kategoriId: 3,
      },
      
      {
        name: "Jahe",
        image: "image 24",
        detail:
          "Dengan kandungan yang menghangatkan tubuh, jahe juga mengandung zat yang mencegah peradangan dalam tubuh, membantu penurunan berat badan, dan membuat Anda merasa lebih rileks dengan kehangatannya.Anda dapat kombinasikan jahe dengan jus buah atau sayur, seperti wortel dan apel, atau dapat memarut jahe di oatmeal atau smoothies Anda.",
        kategoriId: 3,
      },
      {
        name: "Roti Gandum",
        image: "image 25",
        detail:
          "Roti gandum mengandung lebih banyak serat dan nutrisi dibandingkan roti tawar putih, serta menjadi alternatif yang baik jika pencernaan Anda sedang mengalami gangguan seperti asam lambung yang tinggi maupun penyakit maag.",
        kategoriId: 4,
      },
      {
        name: "Salad Pasta",
        image: "https://i.ibb.co/SmXBrdg/salad-pasta.png",
        detail:
          "Serupa dengan salad sayuran biasa, hanya saja ditambahkan dengan pasta sebagai sumber karbohidrat utama.Untuk pilihan yang lebih sehat, gunakan pasta gandum yang lebih tinggi kandungan seratnya tapi lebih rendah kalori bila dibandingkan dengan pasta biasa.",
        kategoriId: 4,
      },
      {
        name: "Tumis Ayam dan Kacang Panjang",
        image: "image 27",
        detail:
          "Menu makan siang sehat ini cocok bagi Anda yang ingin masak lebih praktis dengan bahan yang mudah ditemukan.Anda bisa mendapatkan asupan protein dari potongan dada ayam, dengan tambahan asupan vitamin dan serat dari kacang panjang.",
        kategoriId: 4,
      },
      {
        name: "Bola Bola Daging",
        image: "image 28",
        detail:
          "Bagi Anda yang ingin makan siang spesial tapi tetap lezat, menu ini bisa jadi pilihan yang tepat.Anda juga bisa menyajikan menu ini bersama lauk pendamping seperti sayur- sayuran dan karbohidrat pilihan seperti nasi merah atau nasi hitam.",
        kategoriId: 4,
      },
      
      {
        name: "Telur",
        image: "https://i.ibb.co/HDDptpv/telur.jpg",
        detail:
          "Telur adalah sumber protein yang bagus dan tidak mengandung banyak kalori.Sebagai camilan larut malam, telur adalah pilihan yang tepat.Mereka mudah dimasak dan dapat dipadukan dengan berbagai jenis makanan ringan.Telur juga mengandung triptofan, yang seperti yang pasti sudah diketahui dapat meningkatkan kualitas tidur seseorang.",
        kategoriId: 5,
      },
      {
        name: "Ikan",
        image: "image 30",
        detail:
          "Ikan berlemak seperti salmon, tuna, dan mackerel dianggap pilihan yang sehat karena mengandung cukup banyak Vitamin D.Ikan berlemak juga mengandung asam lemak omega- 3. Asam lemak omega - 3 adalah kelompok asam lemak sehat yang dapat berfungsi sebagai agen anti - inflamasi dan baik untuk otak.Asam lemak omega - 3 terbukti mampu meningkatkan jumlah serotonin yang diproduksi oleh sistem saraf sehingga membuat tidur lebih nyenyak.Berarti, ikan tidak akan membuat kamu tetap terjaga! Ikan juga mengandung minyak nutrisi yang baik untuk tubuh dan kulit.",
        kategoriId: 5,
      },
      {
        name: "Daging Sapi",
        image: "image 31",
        detail: "Ada banyak manfaat daging sapi untuk kesehatan dan tumbuh kembang anak.Ini karena daging sapi dikenal sebagai sumber protein yang baik, serta mengandung aneka nutrisi lain, seperti vitamin dan mineral.Berkat manfaatnya tersebut, tak heran jika daging sapi sering termasuk dalam menu makanan sehat untuk anak.Kandungan gizi pada daging sapi cukup melimpah, di antaranya protein, lemak, vitamin B, vitamin E, selenium, zat besi, zinc, fosfor, kalsium, kolin, dan kalium.Aneka nutrisi tersebut sangat dibutuhkan oleh anak untuk menjaga kesehatan serta mendukung proses tumbuh kembangnya.",
        kategoriId: 5
      },
      {
        name: "Daging Domba",
        image: "image 32",
        detail: "Daging domba menjadi salah satu sumber protein hewani dengan cita rasa lezat.Tetapi terdapat kandungan lemak jenuh dan kolesterol tinggi pada daging domba.Hal ini tentu membuat sebagian orang perlu berhati- hati, terutama penderita tekanan darah tinggi(hipertensi) dan penyakit jantung.Batasi konsumsi daging domba sebanyak sekali atau dua kali per minggu.Selain itu, Anda juga perlu memperhatikan teknik pengolahan dari daging domba yang Anda konsumsi.",
        kategoriId: 5
      },
      {
        name: "Daging Kambing",
        image: "image 33",
        detail: "Daging kambing yang sering diolah menjadi satai atau sop ini tidak hanya enak, tetapi juga menyehatkan karena banyak kandungan gizinya.Manfaat daging kambing ini bisa diperoleh asalkan dimasak dengan cara yang benar.Dalam 100 gram daging kambing, setidaknya terdapat 150 kalori, 27 gram protein, dan 15 gram lemak.Tak hanya itu, daging kambing juga mengandung kalium, vitamin B12, zat besi, magnesium, selenium, dan omega- 3.",
        kategoriId: 5
      },
      {
        name: "Ayam",
        image: "image 34",
        detail: "Manfaat daging ayam yang paling banyak dikenal adalah membangun massa otot dan menurunkan berat badan.Manfaat ini dapat diperoleh karena daging ayam tinggi protein.Namun, pastikan Anda mengolahnya dengan benar agar manfaat yang diperoleh bisa maksimal.Selain dari kandungan proteinnya yang tinggi, manfaat daging ayam juga dapat diperoleh dari kandungan nutrisi lain, seperti selenium, fosfor, vitamin B6, vitamin B12, dan kalium.",
        kategoriId: 5
      },
      {
        name: "Bebek",
        image: "image 35",
        detail: "Tak hanya telur bebek, daging bebek dianggap sebagai makanan yang sehat karena mengandung berbagai nutrisi, seperti protein, lemak, serta beragam jenis vitamin dan mineral, yang dibutuhkan oleh tubuh.Daging ini juga bisa menjadi pilihan bagi orang yang kurang suka dengan daging ayam.Daging bebek pun mengandung asam lemak omega- 3, vitamin B kompleks, khususnya vitamin B3(niasin) dan vitamin B12(kobalamin), folat, dan kolin.",
        kategoriId: 5
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Foods", null, {});
  },
};
