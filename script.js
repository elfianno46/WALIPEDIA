// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


// DATA PENJELASAN WALISONGO
const dataWalisongo = {
    "Sunan Gresik": {
        namaAsli: "Maulana Malik Ibrahim",
        wilayah: "Gresik, Jawa Timur",
        gambar: "assets/images/gresik.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Maulana Malik Ibrahim dikenal sebagai Sunan Gresik dan sering dianggap sebagai salah satu pelopor utama penyebaran Islam di Jawa. Asal-usul dan tempat kelahirannya masih diperdebatkan oleh para ahli sejarah. Ada pendapat yang menyebutkan bahwa ia berasal dari wilayah Arab, Gujarat di India, atau kawasan Persia.<br><br>
            Sejak muda, ia dikenal mendalami agama Islam. Ketika datang ke Jawa, ia berdakwah di tengah masyarakat yang sebagian besar masih menganut kepercayaan Hindu dan Buddha. Ia juga menjalin hubungan dengan masyarakat melalui perdagangan dan kegiatan sosial.<br><br>
            Sunan Gresik mengajarkan Islam dengan pendekatan yang bijaksana. Ia berusaha membantu masyarakat, membangun hubungan baik dengan penduduk setempat, serta mengenalkan ajaran Islam melalui kehidupan sehari-hari. Pendekatan tersebut membantu masyarakat mengenal Islam secara bertahap.<br><br>
            <strong>Wafat:</strong><br>
            Sunan Gresik wafat pada 8 April 1419 M menurut tanggal yang dicatat dalam Ensiklopedia Islam. Ia dimakamkan di Gresik, Jawa Timur. Makamnya hingga kini dikenal sebagai salah satu tempat bersejarah yang berkaitan dengan perkembangan Islam di Jawa.<br><br>
            <strong>Keteladanan:</strong><br>
            Bijaksana dalam berdakwah, peduli kepada masyarakat, dan mampu menyesuaikan cara berkomunikasi dengan keadaan lingkungan.`
    },
    "Sunan Ampel": {
        namaAsli: "Raden Rahmat",
        wilayah: "Ampel Denta, Surabaya",
        gambar: "assets/images/ampel.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Sunan Ampel dikenal sebagai salah satu tokoh penting dalam perkembangan pendidikan Islam di Jawa. Dalam sejumlah sumber, ia disebut sebagai putra Maulana Malik Ibrahim dan Dewi Candrawulan. Namun, silsilah keluarga dalam tradisi sejarah Walisongo memiliki beberapa versi.<br><br>
            Setelah dewasa, Sunan Ampel menetap di wilayah Ampel Denta, Surabaya. Di sana, ia mendirikan pesantren yang menjadi pusat pendidikan agama Islam. Para santri tidak hanya belajar ilmu agama, tetapi juga dipersiapkan untuk menyebarkan Islam ke berbagai daerah.<br><br>
            Beberapa tokoh yang dikaitkan dengan jaringan pendidikan Sunan Ampel adalah Sunan Bonang, Sunan Drajat, dan Sunan Giri. Ia juga memiliki hubungan dengan Raden Patah, tokoh yang dikenal sebagai pendiri sekaligus sultan pertama Kesultanan Demak.<br><br>
            Sunan Ampel turut berperan dalam perkembangan masyarakat Muslim di Jawa dan dikaitkan dengan pembangunan Masjid Agung Demak. Ia menekankan pentingnya menjalankan ajaran Islam dan membangun kehidupan masyarakat yang berlandaskan nilai-nilai agama.<br><br>
            Salah satu ajaran yang terkenal dalam tradisi dakwahnya adalah Moh Limo, yang secara populer dijelaskan sebagai ajakan menjauhi lima perilaku buruk. Perincian ajaran tersebut dikenal melalui tradisi masyarakat dan perlu dibedakan dari catatan sezaman.<br><br>
            <strong>Wafat:</strong><br>
            Sunan Ampel wafat pada 1481 M dan dimakamkan di kawasan Masjid Ampel, Surabaya. Kawasan tersebut berkembang menjadi pusat kegiatan keagamaan dan ziarah.<br><br>
            <strong>Keteladanan:</strong><br>
            Mengutamakan pendidikan, membimbing generasi penerus, serta membangun jaringan dakwah melalui ilmu dan kerja sama.`
    },
    "Sunan Bonang": {
        namaAsli: "Raden Makhdum Ibrahim",
        wilayah: "Tuban dan sekitarnya",
        gambar: "assets/images/bonang.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Sunan Bonang dikenal sebagai ulama yang menggunakan seni dan kebudayaan sebagai sarana dakwah. Ia merupakan putra Sunan Ampel dan dikenal dengan nama Raden Makhdum Ibrahim.<br><br>
            Dalam riwayat tradisional, Sunan Bonang belajar agama kepada ayahnya sebelum memperdalam pengetahuan Islam ke Pasai, Aceh. Setelah kembali ke Jawa, ia mengembangkan dakwah dan pendidikan agama di kawasan Tuban.<br><br>
            Sunan Bonang memanfaatkan musik tradisional, gamelan, tembang, dan kesenian yang dekat dengan kehidupan masyarakat. Melalui pendekatan tersebut, pesan mengenai keimanan, akhlak, dan penghambaan kepada Allah disampaikan dengan cara yang lebih mudah diterima.<br><br>
            Ia juga dikenal melalui tradisi sastra keagamaan yang dikaitkan dengannya, seperti Suluk Sunan Bonang. Karya-karya suluk umumnya membahas ajaran spiritual, hubungan manusia dengan Allah, dan upaya memperbaiki diri.<br><br>
            Selain berdakwah, Sunan Bonang berperan dalam pendidikan para santri dan pengembangan jaringan ulama. Pengaruhnya membantu penyebaran Islam di kawasan pesisir utara Jawa.<br><br>
            <strong>Wafat:</strong><br>
            Sunan Bonang diperkirakan wafat sekitar 1525 M berdasarkan salah satu rujukan ensiklopedia. Ia dikenal dimakamkan di Tuban, meskipun terdapat tradisi dan keterangan masyarakat yang berbeda mengenai lokasi makamnya.<br><br>
            <strong>Keteladanan:</strong><br>
            Kreatif dalam menyampaikan ilmu, menghargai kebudayaan setempat, dan menggunakan seni untuk menyampaikan pesan yang bermanfaat.`
    },
    "Sunan Giri": {
        namaAsli: "Raden Paku",
        wilayah: "Giri, Gresik",
        gambar: "assets/images/giri.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Sunan Giri dikenal sebagai ulama, pendidik, dan tokoh yang memiliki pengaruh besar dalam penyebaran Islam di Jawa. Dalam tradisi sejarah, ia disebut sebagai putra Maulana Ishak dan memiliki hubungan erat dengan lingkungan pendidikan Sunan Ampel.<br><br>
            Ketika masih muda, Raden Paku belajar di Pesantren Ampel Denta. Ia kemudian dikisahkan memperdalam pengetahuan agama bersama Raden Makhdum Ibrahim. Tradisi juga menceritakan perjalanan mereka ke Pasai untuk mempelajari ilmu agama dan tasawuf.<br><br>
            Setelah kembali ke Jawa, Sunan Giri mendirikan pusat pendidikan Islam di daerah Giri, Gresik. Pesantren tersebut berkembang menjadi tempat belajar para santri dari berbagai daerah.<br><br>
            Pengaruh dakwah Sunan Giri tidak terbatas di Jawa. Jaringan pendidikannya dikaitkan dengan penyebaran Islam ke Madura, Bawean, dan beberapa wilayah di Indonesia bagian timur, termasuk kawasan Maluku.<br><br>
            Sunan Giri juga dikenal sebagai pendidik yang memperhatikan pembelajaran anak-anak. Dalam tradisi masyarakat, namanya dikaitkan dengan permainan dan tembang anak yang mengandung pesan moral. Ia turut berpengaruh dalam kehidupan politik Kesultanan Demak.<br><br>
            <strong>Wafat:</strong><br>
            Sunan Giri diperkirakan wafat sekitar 1506 M. Ia dimakamkan di kawasan Giri, Gresik. Pusat dakwah yang dibangunnya menjadi salah satu bagian penting dari sejarah pendidikan Islam di Nusantara.<br><br>
            <strong>Keteladanan:</strong><br>
            Mengutamakan pendidikan, mengembangkan ilmu pengetahuan, dan memperluas manfaat dakwah melalui para murid.`
    },
    "Sunan Drajat": {
        namaAsli: "Raden Qasim",
        wilayah: "Drajat dan Lamongan",
        gambar: "assets/images/drajat.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Sunan Drajat dikenal sebagai salah satu wali yang sangat memperhatikan kesejahteraan masyarakat. Dalam tradisi silsilah, ia merupakan putra Sunan Ampel.<br><br>
            Sejak muda, Sunan Drajat memperoleh pendidikan agama dalam lingkungan keluarga dan jaringan pesantren. Dalam perjalanan dakwahnya, ia menetap di daerah yang sekarang dikenal sebagai Desa Drajat, Kabupaten Lamongan.<br><br>
            Ia mengajarkan Islam dengan menekankan kepedulian sosial. Menurut berbagai riwayat, Sunan Drajat membantu orang miskin, anak yatim, dan masyarakat yang mengalami kesulitan. Baginya, dakwah tidak cukup hanya menyampaikan ajaran agama, tetapi juga harus diwujudkan melalui tindakan nyata.<br><br>
            Ia juga memanfaatkan seni dan tembang Jawa sebagai sarana menyampaikan nasihat. Namanya sering dikaitkan dengan tembang Pangkur dalam tradisi dakwah Walisongo.<br><br>
            Pendekatan tersebut membuat ajaran tentang gotong royong, kepedulian, kerja keras, dan saling membantu menjadi bagian penting dari warisan dakwahnya.<br><br>
            <strong>Wafat:</strong><br>
            Sunan Drajat diperkirakan wafat pada pertengahan abad ke-16. Tahun wafat yang tepat belum dapat dipastikan dari sumber-sumber yang tersedia. Ia dimakamkan di kawasan Desa Drajat, Lamongan, Jawa Timur.<br><br>
            <strong>Keteladanan:</strong><br>
            Menolong sesama, peduli kepada masyarakat yang kesulitan, dan membuktikan ajaran agama melalui perbuatan nyata.`
    },
    "Sunan Kalijaga": {
        namaAsli: "Raden Mas Syahid",
        wilayah: "Tuban, Demak, dan Jawa Tengah",
        gambar: "assets/images/kalijaga.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Sunan Kalijaga merupakan salah satu tokoh Walisongo yang terkenal karena menggunakan kesenian dan kebudayaan Jawa sebagai sarana dakwah. Dalam tradisi sejarah, ia dikenal sebagai putra Raden Sahur, seorang pejabat di wilayah Tuban.<br><br>
            Riwayat hidup Sunan Kalijaga memiliki berbagai versi. Salah satu cerita yang populer menyebutkan bahwa ketika muda, Raden Said melihat banyak kesenjangan sosial di masyarakat. Ia kemudian bertemu dengan Sunan Bonang dan mengalami perubahan hidup hingga akhirnya mendalami agama Islam.<br><br>
            Setelah menjadi ulama, Sunan Kalijaga berdakwah ke berbagai daerah. Ia dikenal menggunakan wayang kulit, gamelan, tembang, seni ukir, dan kesenian lainnya untuk menyampaikan nilai-nilai Islam.<br><br>
            Pendekatannya dilakukan dengan menyesuaikan pesan dakwah dengan kebiasaan masyarakat. Dengan cara tersebut, masyarakat dapat mengenal ajaran Islam tanpa harus langsung meninggalkan seluruh bentuk kebudayaan yang telah mereka kenal.<br><br>
            Sunan Kalijaga juga dikaitkan dengan perkembangan seni wayang bercorak Islam serta keterlibatannya dalam pembangunan Masjid Agung Demak. Selain berdakwah kepada masyarakat, ia dikenal memiliki hubungan dengan lingkungan Kesultanan Demak.<br><br>
            <strong>Wafat:</strong><br>
            Sunan Kalijaga dikenal dimakamkan di Kadilangu, Kabupaten Demak. Akan tetapi, tahun kelahirannya dan tahun wafatnya memiliki perbedaan dalam berbagai sumber. Karena itu, tanggal tertentu sebaiknya tidak ditulis sebagai fakta pasti tanpa rujukan yang jelas.<br><br>
            <strong>Keteladanan:</strong><br>
            Kreatif, bijaksana, menghargai kebudayaan, dan mampu menyampaikan ajaran agama dengan cara yang dekat dengan kehidupan masyarakat.`
    },
    "Sunan Kudus": {
        namaAsli: "Ja'far Shadiq",
        wilayah: "Kudus, Jawa Tengah",
        gambar: "assets/images/kudus.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Sunan Kudus dikenal sebagai ulama yang memiliki pengetahuan luas dalam bidang agama Islam. Dalam tradisi silsilah Walisongo, ia disebut sebagai putra Raden Usman Haji, seorang pendakwah yang dikaitkan dengan wilayah Jipang Panolan.<br><br>
            Sejak muda, Ja'far Shadiq dikenal sebagai tokoh yang mendalami ilmu agama. Ia mempelajari berbagai bidang, termasuk fikih, tauhid, hadis, tafsir, dan ilmu yang berkaitan dengan pemikiran keagamaan.<br><br>
            Dalam perjalanan dakwahnya, Sunan Kudus berpusat di wilayah Kudus dan sekitarnya. Ia tidak hanya menyampaikan ajaran agama, tetapi juga berperan dalam kehidupan pemerintahan dan pertahanan Kesultanan Demak.<br><br>
            Salah satu peninggalan yang paling terkenal adalah Masjid Menara Kudus. Bangunan tersebut memperlihatkan perpaduan unsur arsitektur yang berkembang di lingkungan masyarakat Jawa pada masa itu.<br><br>
            Sunan Kudus juga dikenal melalui tradisi dakwah yang menghargai kondisi sosial dan budaya masyarakat. Cerita yang sering disampaikan adalah anjuran untuk menghormati kebiasaan masyarakat setempat, termasuk tradisi yang berkaitan dengan penghormatan terhadap sapi.<br><br>
            <strong>Wafat:</strong><br>
            Sunan Kudus diperkirakan wafat sekitar 1550 M menurut salah satu rujukan ensiklopedia. Ia dimakamkan di kompleks Masjid Menara Kudus, Jawa Tengah, yang sampai sekarang menjadi tempat bersejarah dan pusat kegiatan keagamaan.<br><br>
            <strong>Keteladanan:</strong><br>
            Mendalami ilmu pengetahuan, bersikap bijaksana, serta memperhatikan kondisi budaya masyarakat dalam menyampaikan ajaran agama.`
    },
    "Sunan Muria": {
        namaAsli: "Raden Umar Said",
        wilayah: "Gunung Muria, Kudus",
        gambar: "assets/images/muria.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Sunan Muria merupakan salah satu tokoh Walisongo yang dikenal karena berdakwah di pedesaan dan wilayah yang jauh dari pusat pemerintahan. Dalam tradisi sejarah, ia disebut sebagai putra Sunan Kalijaga.<br><br>
            Menurut penelitian yang diterbitkan melalui repositori UIN Walisongo pada 2018, Sunan Muria kemungkinan lahir pada 1450-an. Perkiraan ini didasarkan pada penafsiran mengenai usianya ketika terlibat dalam kegiatan di Masjid Demak.<br><br>
            Sunan Muria memilih wilayah Gunung Muria dan desa-desa di sekitarnya sebagai pusat dakwah. Ia berinteraksi langsung dengan masyarakat biasa, termasuk petani, nelayan, dan pedagang.<br><br>
            Dalam berdakwah, ia menggunakan pendekatan yang sederhana dan dekat dengan kehidupan masyarakat. Selain mengajarkan agama, ia membantu masyarakat memahami nilai kejujuran, kerja keras, kesederhanaan, dan ketaatan kepada Allah.<br><br>
            Sunan Muria juga dikaitkan dengan penggunaan kesenian dan tembang Jawa, seperti Sinom dan Kinanthi, sebagai sarana menyampaikan nasihat. Pendekatannya memperlihatkan bahwa dakwah dapat dilakukan melalui pendidikan, interaksi sosial, dan kebudayaan.<br><br>
            <strong>Wafat:</strong><br>
            Tahun wafat Sunan Muria belum dapat dipastikan secara meyakinkan. Ia dikenal dimakamkan di kawasan Gunung Muria, Kabupaten Kudus, Jawa Tengah.<br><br>
            <strong>Keteladanan:</strong><br>
            Rendah hati, sederhana, dekat dengan masyarakat kecil, dan bersedia berdakwah hingga ke wilayah terpencil.`
    },
    "Sunan Gunung Jati": {
        namaAsli: "Syarif Hidayatullah",
        wilayah: "Cirebon, Banten, dan Jawa Barat",
        gambar: "assets/images/gunung-jati.jpg",
        penjelasan: `
            <br><br><strong>Kelahiran dan perjalanan hidup:</strong><br>
            Sunan Gunung Jati dikenal sebagai tokoh Walisongo yang memiliki peran penting dalam perkembangan Islam di Jawa Barat. Ia juga dikenal sebagai pendiri Kesultanan Cirebon.<br><br>
            Dalam tradisi sejarah Cirebon, Syarif Hidayatullah disebut sebagai putra Nyai Rara Santang dan Syarif Abdullah. Nyai Rara Santang sendiri dikaitkan dengan keluarga Prabu Siliwangi dari Kerajaan Pajajaran.<br><br>
            Menurut riwayat yang berkembang, Syarif Hidayatullah mempelajari agama Islam sebelum datang ke Jawa untuk berdakwah. Setelah tiba di Cirebon, ia bekerja sama dengan Pangeran Cakrabuana dalam mengembangkan wilayah tersebut.<br><br>
            Syarif Hidayatullah kemudian berperan dalam perkembangan Cirebon menjadi kesultanan Islam. Dari wilayah itu, dakwah Islam meluas ke berbagai daerah di Jawa Barat, termasuk Kuningan, Majalengka, dan Banten.<br><br>
            Ia tidak hanya berperan sebagai ulama, tetapi juga sebagai pemimpin politik. Hubungan antara kegiatan dakwah, perdagangan, dan pemerintahan menjadi bagian penting dalam perkembangan masyarakat Muslim di wilayah tersebut.<br><br>
            Dalam berbagai sumber sejarah, Sunan Gunung Jati juga dikaitkan dengan perkembangan kekuasaan Islam di Banten dan peristiwa penaklukan Sunda Kelapa pada abad ke-16.<br><br>
            <strong>Wafat:</strong><br>
            Sunan Gunung Jati diperkirakan wafat pada 1570 M dan dimakamkan di kawasan Gunung Jati, Cirebon, Jawa Barat. Pengaruhnya tetap terlihat dalam perkembangan tradisi keagamaan, pemerintahan, dan kebudayaan masyarakat Cirebon.<br><br>
            <strong>Keteladanan:</strong><br>
            Memiliki kepemimpinan, membangun kerja sama, dan mengembangkan dakwah melalui pendidikan, hubungan sosial, serta pemerintahan.`
    }
};


// MODAL DETAIL WALISONGO
const modal = document.getElementById("detailModal");
const modalImg = document.getElementById("modalImage");

function showDetail(name, realName, location, method) {
    document.getElementById("modalName").textContent = name;
    
    // Mengecek apakah nama wali ada di dalam object
    if (dataWalisongo[name]) {
        document.getElementById("modalRealName").textContent = dataWalisongo[name].namaAsli;
        document.getElementById("modalLocation").textContent = dataWalisongo[name].wilayah;
        document.getElementById("modalMethod").innerHTML = dataWalisongo[name].penjelasan;
        
        // Memasukkan gambar sesuai tokoh
        modalImg.src = dataWalisongo[name].gambar;
        modalImg.style.display = "block"; 
    } else {
        document.getElementById("modalRealName").textContent = realName;
        document.getElementById("modalLocation").textContent = location;
        document.getElementById("modalMethod").textContent = method;
        
        // Sembunyikan gambar jika data tidak ditemukan
        modalImg.style.display = "none";
    }

    // Memunculkan modal ke layar
    modal.classList.add("active");
}

function closeDetail() {
    modal.classList.remove("active");
}

// Tutup modal jika klik area luar
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeDetail();
    }
});

// Tutup modal dengan ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeDetail();
    }
});