// Animasi logo saat halaman dibuka
window.addEventListener('load', () => {
  const logoImg = document.getElementById('logo-img');
  logoImg.style.opacity = '1';
  logoImg.style.transform = 'translateY(0)';
});

//kasus card
const cases = [
{
    title: "Junko Furuta",
    subtitle: "Japan, 1988 — A tragedy that shocked the nation.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Junko_Furuta.jpg/250px-Junko_Furuta.jpg",
    content: `
      <h3>👧 Profil Korban</h3>
      <p>Junko Furuta adalah siswi SMA berusia 16 tahun dari Misato, Saitama. Ia dikenal sebagai anak baik, rajin, dan populer di sekolahnya.</p>

      <h3>🔪 Kronologi Kejadian</h3>
      <ul>
        <li>25 November 1988: Diculik oleh empat remaja laki-laki.</li>
        <li>Disiksa selama 44 hari di rumah kosong di Adachi, Tokyo.</li>
        <li>Jasad dimasukkan ke dalam drum semen dan dibuang.</li>
      </ul>

      <h3>⚖️ Kontroversi Hukum</h3>
      <ul>
        <li>Pelaku dihukum ringan karena masih remaja.</li>
        <li>Beberapa kembali melakukan kejahatan setelah bebas.</li>
      </ul>

      <h3>🩸 Dampak Sosial</h3>
      <ul>
        <li>Kisah Junko diabadikan dalam film dan dokumenter.</li>
        <li>Simbol kekejaman yang tak termaafkan.</li>
      </ul>

      <a href="https://en.wikipedia.org/wiki/Murder_of_Junko_Furuta" target="_blank" class="external-btn">
        🔗 Baca Selengkapnya
      </a>
`},
{
    title: "Alison Botha",
    subtitle: "South Africa, 1994 — From horror to hope.",
    image: "https://m.media-amazon.com/images/M/MV5BOTQyNjkwMTY1NV5BMl5BanBnXkFtZTgwNDY4OTA5ODE@._V1_.jpg",
    content: `
      <h3>🧍 Profil Korban</h3>
      <p>Alison Botha adalah wanita berusia 27 tahun dari Port Elizabeth, Afrika Selatan. Ia dikenal sebagai pribadi ceria dan penuh semangat.</p>

      <h3>🔪 Kronologi Kejadian</h3>
      <ul>
        <li>18 Desember 1994: Diculik oleh dua pria saat baru pulang ke rumah.</li>
        <li>Diperkosa, ditikam lebih dari 30 kali, dan lehernya digorok.</li>
        <li>Pelaku meninggalkannya dengan asumsi ia sudah tewas.</li>
      </ul>

      <h3>💪 Keajaiban Bertahan Hidup</h3>
      <ul>
        <li>Alison merangkak ke jalan utama sambil menahan luka parah.</li>
        <li>Diselamatkan oleh mahasiswa kedokteran dan selamat.</li>
      </ul>

      <h3>🩸 Dampak dan Inspirasi</h3>
      <ul>
        <li>Menjadi simbol kekuatan dan harapan.</li>
        <li>Kisahnya diangkat ke film dan dokumenter.</li>
      </ul>

      <a href="https://en.wikipedia.org/wiki/Alison_Botha" target="_blank" class="external-btn">
        🔗 Baca Selengkapnya
      </a>
    `
},
{
  title: "Eric Smith",
  subtitle: "New York, 1993 — The 13-year-old who shocked the nation.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOHWe7JGO4eixYDXe0qbDbcmkVHsxwnEtAQ&s",
  content: `
    <h3>🧒 Profil Pelaku</h3>
    <p>Eric Smith adalah remaja 13 tahun dari Savona, New York. Ia dikenal sebagai anak pendiam yang sering dibully karena penampilannya.</p>

    <h3>🔪 Kronologi Kejadian</h3>
    <ul>
      <li>2 Agustus 1993: Eric bertemu Derrick Robie (4 tahun) di taman saat menuju summer camp.</li>
      <li>Eric memancing Derrick ke area sepi, lalu menyerangnya secara brutal dengan batu dan tangan kosong.</li>
      <li>Ia juga melakukan tindakan sadis lainnya yang tidak bisa dijelaskan di sini karena sensitivitasnya.</li>
    </ul>

    <h3>⚖️ Proses Hukum</h3>
    <ul>
      <li>Eric mengaku kepada ibunya seminggu setelah kejadian.</li>
      <li>Ia diadili sebagai orang dewasa dan dijatuhi hukuman 9 tahun hingga seumur hidup.</li>
      <li>Setelah 27 tahun, ia dibebaskan bersyarat pada 2022.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini memicu debat besar tentang sistem hukum anak di AS.</li>
      <li>Publik terpecah antara rasa simpati dan kemarahan terhadap pelaku muda.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Eric_Smith_(murderer)" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Nurin Jazlin Jazimin",
  subtitle: "Malaysia, 2007 — Tragedi pasar malam yang mengguncang negeri.",
  image: "https://upload.wikimedia.org/wikipedia/id/a/ad/Nurin-jazlin.jpg",
  content: `
    <h3>👧 Profil Korban</h3>
    <p>Nurin Jazlin adalah anak perempuan berusia 8 tahun dari Wangsa Maju, Kuala Lumpur. Ia dikenal sebagai anak ceria dan rajin, namun mengidap penyakit ginjal dan tekanan darah tinggi sejak lahir.</p>

    <h3>🕯️ Kronologi Hilang</h3>
    <ul>
      <li>20 Agustus 2007: Nurin pamit ke pasar malam untuk membeli jepit rambut, namun tak pernah kembali.</li>
      <li>Kesaksian menyebutkan ia diculik oleh pria tak dikenal menggunakan van putih.</li>
      <li>Upaya pencarian besar-besaran dilakukan oleh keluarga, media, dan warga.</li>
    </ul>

    <h3>🩸 Penemuan dan Fakta Mengejutkan</h3>
    <ul>
      <li>17 September 2007: Sebuah tas olahraga ditemukan di depan toko di Petaling Jaya berisi jasad anak perempuan.</li>
      <li>Tes DNA mengonfirmasi bahwa itu adalah Nurin Jazlin.</li>
      <li>Hasil otopsi menunjukkan penyiksaan brutal selama hampir sebulan, termasuk luka dalam akibat benda asing.</li>
    </ul>

    <h3>⚖️ Dampak dan Reaksi Publik</h3>
    <ul>
      <li>Kasus ini disebut sebagai salah satu pembunuhan anak paling kejam dalam sejarah Malaysia.</li>
      <li>Publik mengecam lemahnya pengawasan dan perlindungan anak.</li>
      <li>Polisi menangkap beberapa tersangka, namun pelaku utama belum teridentifikasi secara pasti hingga kini.</li>
    </ul>

    <a href="https://id.wikipedia.org/wiki/Nurin_Jazlin_Jazimin" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Naoyuki Kanno",
  subtitle: "Japan, 1989 — Tewas di septic tank sekolah, misteri yang belum terpecahkan.",
  image: "https://media.zcreators.id/crop/0x0:0x0/x/photo/p2/44/2024/08/15/6192587309296238924-749190677.jpg", 
  content: `
    <h3>🧍 Profil Korban</h3>
    <p>Naoyuki Kanno adalah pria berusia 26 tahun dari Desa Miyakoji, Fukushima. Ia dikenal sebagai pribadi pendiam dan aktif secara sosial, bahkan sempat menentang isu tenaga nuklir di daerahnya.</p>

    <h3>🕯️ Kronologi Penemuan</h3>
    <ul>
      <li>28 Februari 1989: Seorang guru SD melihat wajah manusia di kloset sekolah saat hendak ke toilet.</li>
      <li>Setelah diperiksa, ditemukan jasad pria meringkuk di dalam septic tank sempit berdiameter hanya 36 cm.</li>
      <li>Kondisi tubuh: telanjang dada, hanya mengenakan celana panjang, tanpa tanda kekerasan.</li>
    </ul>

    <h3>⚖️ Investigasi dan Spekulasi</h3>
    <ul>
      <li>Polisi menyimpulkan kematian akibat hipoksia dan hipotermia, bukan pembunuhan.</li>
      <li>Namun publik meragukan: mustahil tubuh setinggi 170 cm bisa masuk sendiri ke ruang sempit itu.</li>
      <li>Teori berkembang: dari insiden mengintip, gangguan psikologis, hingga motif politik.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini menjadi salah satu misteri kematian paling aneh di Jepang.</li>
      <li>Media dan netizen terus membahasnya sebagai contoh “kematian yang tidak masuk akal”.</li>
    </ul>

    <a href="https://fadami.indozone.id/x-filez/444981064/misteri-kematian-naoyuki-kanno-tewas-di-lubang-septic-tank-sempit-yang-belum-terpecahkan" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Ahmad Suradji",
  subtitle: "Indonesia, 1986–1997 — Dukun pembunuh 42 wanita demi kesaktian.",
  image: `https://images.hukumonline.com/frontend/lt650d6a90ada8b/lt650d6ba199a58.jpg`,
  content: `
    <h3>🧙 Profil Pelaku</h3>
    <p>Ahmad Suradji, juga dikenal sebagai Dukun AS atau Nasib Kelewang, adalah seorang petani dan dukun dari Desa Sei Semayang, Deli Serdang, Sumatera Utara. Ia hanya menamatkan pendidikan hingga SD dan dikenal sering membawa kelewang saat bertani.</p>

    <h3>🔪 Modus dan Ritual</h3>
    <ul>
      <li>Suradji mengaku mendapat bisikan gaib dari mendiang ayahnya untuk menyempurnakan ilmu sakti dengan membunuh 70 wanita dan menghisap air liur mereka.</li>
      <li>Ia membunuh 42 wanita yang datang sebagai pasien untuk ritual pengasihan atau penglaris.</li>
      <li>Korban diminta membawa sesajen, lalu dikubur setengah badan dan dicekik hingga tewas.</li>
      <li>Mayat dikuburkan di ladang tebu dekat rumahnya.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Eksekusi</h3>
    <ul>
      <li>Ditangkap pada April 1997 setelah jasad Sri Kemala Dewi ditemukan dan saksi mengarah ke rumah Suradji.</li>
      <li>Polisi menemukan tumpukan pakaian dan perhiasan korban di rumahnya.</li>
      <li>Divonis mati pada April 1998 dan dieksekusi oleh regu tembak pada 10 Juli 2008 pukul 22.00 WIB.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini mengguncang Indonesia dan dunia sebagai pembunuhan berantai paling sadis di Asia Tenggara.</li>
      <li>Difilmkan dengan judul <em>Kisah Nyata Dukun AS (Misteri Kebun Tebu)</em>.</li>
      <li>Menjadi simbol gelapnya praktik dukun dan kepercayaan mistis ekstrem.</li>
    </ul>

    <a href="https://id.wikipedia.org/wiki/Dukun_AS" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Burari Deaths",
  subtitle: "India, 2018 — 11 anggota keluarga tewas dalam ritual bunuh diri massal.",
  image:`https://archive.siasat.com/wp-content/uploads/2018/07/burari-deaths.jpg`,
  content: `
    <h3>🏠 Profil Keluarga</h3>
    <p>Keluarga Chundawat tinggal di Burari, New Delhi. Mereka dikenal sebagai keluarga biasa yang menjalankan toko kelontong dan kayu lapis. Tidak ada tanda-tanda gangguan mental ekstrem sebelum kejadian.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>1 Juli 2018: Sebelas anggota keluarga ditemukan tewas di rumah mereka.</li>
      <li>Sepuluh orang tergantung dalam formasi melingkar di langit-langit, dengan tangan terikat dan mata tertutup.</li>
      <li>Satu orang lansia ditemukan tewas di kamar terpisah akibat pencekikan.</li>
    </ul>

    <h3>📜 Catatan Ritual</h3>
    <ul>
      <li>Polisi menemukan 11 buku catatan berisi instruksi ritual yang ditulis oleh Lalit Bhatia, salah satu anggota keluarga.</li>
      <li>Catatan menunjukkan delusi spiritual: Lalit percaya dirinya dirasuki arwah ayahnya dan harus memimpin ritual untuk keselamatan keluarga.</li>
      <li>Ritual disebut sebagai “tanda pengorbanan” untuk mencapai moksha atau pembebasan jiwa.</li>
    </ul>

    <h3>⚖️ Investigasi dan Spekulasi</h3>
    <ul>
      <li>Polisi menyimpulkan kematian sebagai bunuh diri massal yang dimotivasi oleh delusi bersama (shared psychosis).</li>
      <li>Publik dan media berspekulasi tentang sekte, kekuatan gaib, dan pengaruh supranatural.</li>
      <li>Netflix merilis dokumenter berjudul <em>House of Secrets: The Burari Deaths</em> yang mengungkap sisi psikologis dan sosial kasus ini.</li>
    </ul>

    <a href="https://id.wikipedia.org/wiki/Kematian_Burari" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Andrei Romanovich Chikatilo",
  subtitle: "Uni Soviet, 1978–1990 — Pencabik Rostov, pembunuh berantai yang memakan korbannya.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrMSTOWKmF6kVDkIiyWBHwK7me_T_FEsoTA&s`,
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Andrei Chikatilo lahir pada 16 Oktober 1936 di Ukraina. Masa kecilnya penuh trauma: kelaparan, ejekan, dan gangguan medis yang memengaruhi kehidupan seksualnya. Ia tumbuh menjadi pribadi tertutup dan menyimpan dorongan sadis yang kelak meledak.</p>

    <h3>🔪 Modus dan Kejahatan</h3>
    <ul>
      <li>Antara 1978–1990, Chikatilo membunuh setidaknya 53 korban, mayoritas anak-anak dan wanita muda.</li>
      <li>Ia memancing korban ke tempat sepi, lalu menyerang dengan kekerasan ekstrem: mutilasi, pencabikan, dan kanibalisme.</li>
      <li>Beberapa korban ditemukan tanpa organ tubuh seperti mata, payudara, atau rahim.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Hukuman</h3>
    <ul>
      <li>Ditangkap pada 1990 setelah penyelidikan panjang dan kesalahan penangkapan sebelumnya.</li>
      <li>Diadili dan dinyatakan bersalah atas 52 pembunuhan.</li>
      <li>Dieksekusi oleh regu tembak pada 14 Februari 1994 di penjara Novocherkassk.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini mengguncang Uni Soviet dan dunia, memicu reformasi dalam sistem investigasi kriminal Rusia.</li>
      <li>Chikatilo dijuluki “Pencabik Merah” dan menjadi simbol horor era Soviet.</li>
      <li>Kisahnya diangkat dalam buku, dokumenter, dan film sebagai studi psikopat ekstrem.</li>
    </ul>

    <a href="https://id.wikipedia.org/wiki/Andrei_Chikatilo" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Jailyn Candelario",
  subtitle: "Amerika Serikat, 2023 — Bayi 16 bulan tewas ditinggal ibunya liburan.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1L8rLlTneOHwBx-EQQ028HGPc2FcZ8xVGcA&s`,
  content: `
    <h3>👶 Profil Korban</h3>
    <p>Jailyn adalah bayi perempuan berusia 16 bulan dari Cleveland, Ohio. Ia tinggal bersama ibunya, Kristel Candelario, yang berusia 32 tahun.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>Juni 2023: Kristel meninggalkan Jailyn sendirian di rumah selama 10 hari untuk berlibur ke Puerto Rico dan Detroit bersama kekasihnya.</li>
      <li>Jailyn ditemukan tewas di dalam playpen, dikelilingi urin, kotoran, dan selimut kotor.</li>
      <li>Autopsi menunjukkan kelaparan dan dehidrasi parah. Berat tubuhnya turun drastis sejak kunjungan dokter terakhir.</li>
    </ul>

    <h3>⚖️ Proses Hukum</h3>
    <ul>
      <li>Kristel ditangkap pada 17 Juni 2023 dan mengaku bersalah atas pembunuhan berencana.</li>
      <li>Pada Maret 2024, ia dijatuhi hukuman penjara seumur hidup tanpa kemungkinan pembebasan bersyarat.</li>
      <li>Hakim menyebut tindakannya sebagai “pengkhianatan terbesar terhadap ikatan ibu dan anak.”</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini mengguncang publik dan memicu diskusi tentang kesehatan mental, pengawasan anak, dan tanggung jawab orang tua.</li>
      <li>Foto-foto liburan Kristel viral dan memicu kemarahan netizen.</li>
    </ul>

    <a href="https://fajar.co.id/2024/03/27/kisah-tragis-jailyn-di-balik-10-hari-liburan-ibunya-kristel-candelario/" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Issei Sagawa",
  subtitle: "Prancis & Jepang, 1981 — Membunuh, memakan, lalu bebas.",
  image:`https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Gnaw_Their_Tongues_-_Issei_Sagawa.jpg/250px-Gnaw_Their_Tongues_-_Issei_Sagawa.jpg`,
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Issei Sagawa lahir di Kobe, Jepang, tahun 1949. Sejak kecil ia mengalami gangguan fisik dan mental, serta menunjukkan ketertarikan terhadap kanibalisme. Ia sempat mencoba mencari bantuan psikiater, namun tidak ditindaklanjuti secara serius.</p>

    <h3>🔪 Kronologi Kejadian</h3>
    <ul>
      <li>Juni 1981: Saat kuliah di Paris, Sagawa mengundang mahasiswi Belanda bernama Renée Hartevelt ke apartemennya.</li>
      <li>Ia menembak Renée di leher, memperkosanya, lalu memakan bagian tubuhnya selama tiga hari.</li>
      <li>Ia mencoba membuang jasad korban di taman Bois de Boulogne, namun tertangkap oleh polisi.</li>
    </ul>

    <h3>⚖️ Kontroversi Hukum</h3>
    <ul>
      <li>Pengadilan Prancis menyatakan Sagawa tidak layak diadili karena gangguan mental, dan menempatkannya di rumah sakit jiwa.</li>
      <li>Ia kemudian dideportasi ke Jepang, namun otoritas Jepang menyatakan ia waras dan tidak bisa dituntut ulang karena dakwaan di Prancis telah digugurkan.</li>
      <li>Hasilnya: Sagawa bebas dan hidup sebagai selebriti kontroversial di Jepang.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini memicu kemarahan global dan perdebatan tentang celah hukum internasional.</li>
      <li>Sagawa menulis buku, tampil di acara TV, dan bahkan membintangi film dewasa.</li>
      <li>Ia meninggal dunia pada 24 November 2022 akibat pneumonia, di usia 73 tahun.</li>
    </ul>

    <a href= "https://en-m-wikipedia-org.translate.goog/wiki/Issei_Sagawa?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Lacey Fletcher",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSb0UG06QAhHbEg1_yv7D51YwMCVp5wjU9Q&s`,
  subtitle: "AS, 2022 — 12 tahun terkurung di sofa, tubuhnya membusuk dan menyatu.",
  content: `
    <h3>🧍 Profil Korban</h3>
    <p>Lacey Ellen Fletcher adalah wanita berusia 36 tahun dari Slaughter, Louisiana. Ia didiagnosis autisme dan mengalami penurunan kognitif sejak usia 24 tahun, membuatnya tidak mampu meninggalkan rumah.</p>

    <h3>🕯️ Kronologi Penemuan</h3>
    <ul>
      <li>3 Januari 2022: Petugas medis menemukan Lacey tewas di ruang tamu rumahnya, duduk di sofa kulit yang telah menyatu dengan tubuhnya.</li>
      <li>Ia ditemukan dalam kondisi mengenaskan: luka terbuka, tubuh dipenuhi kotoran, dan bagian tubuhnya dimakan serangga serta tikus.</li>
      <li>Diperkirakan ia telah duduk di posisi itu selama lebih dari 12 tahun tanpa perawatan medis.</li>
    </ul>

    <h3>⚖️ Penelantaran dan Hukuman</h3>
    <ul>
      <li>Orang tuanya, Sheila dan Clay Fletcher, mengaku tidak ingin menjadi “caregiver” dan membiarkan Lacey hidup dalam kondisi menyedihkan.</li>
      <li>Mereka sering meninggalkan rumah untuk liburan, sementara Lacey dibiarkan kelaparan dan membusuk.</li>
      <li>Pada Maret 2024, keduanya dijatuhi hukuman 20 tahun penjara setelah menerima plea deal atas dakwaan pembunuhan karena penelantaran.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini mengguncang publik dan memicu diskusi tentang hak-hak penyandang disabilitas dan tanggung jawab keluarga.</li>
      <li>Disebut sebagai salah satu kasus penelantaran paling ekstrem dalam sejarah Amerika Serikat.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Killing_of_Lacey_Fletcher" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Papin Sisters",
  subtitle: "Prancis, 1933 — Dua saudara membunuh majikan mereka secara brutal.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4i1fFqUbDdZb1Vbm1ljMKmwcqD7Kx_j4_Q&s`,
  content: `
    <h3>👭 Profil Pelaku</h3>
    <p>Léa dan Christine Papin adalah dua saudara perempuan yang bekerja sebagai pembantu rumah tangga untuk keluarga Lancelin di Le Mans, Prancis. Mereka dikenal pendiam dan tertutup, bekerja selama tujuh tahun tanpa banyak interaksi sosial.</p>

    <h3>🔪 Kronologi Kejadian</h3>
    <ul>
      <li>Février 1933: Christine dan Léa tiba-tiba menyerang ibu dan anak perempuan majikan mereka saat sedang bersih-bersih rumah.</li>
      <li>Mereka mencungkil mata korban, memukul dengan palu, dan memotong tubuh menggunakan pisau dapur.</li>
      <li>Setelah pembunuhan, mereka mengunci diri di kamar dan ditemukan oleh polisi berbaring bersama alat pembunuhan yang berlumuran darah.</li>
    </ul>

    <h3>⚖️ Proses Hukum</h3>
    <ul>
      <li>Christine menunjukkan tanda gangguan mental berat dan mencoba mencungkil matanya sendiri di penjara.</li>
      <li>Léa dinyatakan lebih pasif dan mendapat hukuman lebih ringan.</li>
      <li>Christine meninggal di rumah sakit jiwa pada 1937, sementara Léa bebas setelah beberapa tahun dan hidup anonim.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini memicu diskusi besar tentang represi kelas, psikosis kolektif, dan eksploitasi pekerja rumah tangga.</li>
      <li>Diangkat dalam berbagai karya sastra, teater, dan film, termasuk oleh Jean Genet dan film <em>La Cérémonie</em>.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Papin_sisters" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Hinterkaifeck Murders",
  subtitle: "Jerman, 1922 — Satu keluarga dibantai, pelaku tak pernah ditemukan.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0pma8ren0Jair60ir7rGkQX9X6rnaF9D0w&s`,
  content: `
    <h3>🏡 Profil Lokasi dan Korban</h3>
    <p>Hinterkaifeck adalah sebuah peternakan terpencil di Bavaria, Jerman. Penghuninya: Andreas Gruber (63), istrinya Cäzilia (72), anak Viktoria (35), cucu Cäzilia (7), Josef (2), dan pembantu baru Maria Baumgartner.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>31 Maret 1922: Semua anggota keluarga ditemukan tewas, sebagian besar dibantai dengan kapak.</li>
      <li>Empat korban ditemukan di lumbung, dua lainnya di dalam rumah.</li>
      <li>Mayat ditemukan beberapa hari setelah pembunuhan, sebagian sudah mulai membusuk.</li>
    </ul>

    <h3>🧪 Petunjuk Aneh</h3>
    <ul>
      <li>Beberapa hari sebelum kejadian, Andreas melaporkan jejak kaki misterius di salju menuju rumah, tapi tidak ada jejak keluar.</li>
      <li>Suara-suara aneh dan surat misterius juga sempat muncul.</li>
      <li>Setelah pembunuhan, rumah tetap dihuni: hewan diberi makan, makanan dimasak, dan asap terlihat dari cerobong.</li>
    </ul>

    <h3>⚖️ Investigasi dan Spekulasi</h3>
    <ul>
      <li>Lebih dari 100 orang diinterogasi, tapi tidak ada yang ditetapkan sebagai tersangka resmi.</li>
      <li>Teori berkembang: dari pembunuhan keluarga, mantan tentara, hingga ritual okultisme.</li>
      <li>Kasus ini tetap tidak terpecahkan hingga hari ini dan menjadi legenda kriminal Jerman.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Hinterkaifeck_murders" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Jolly Joseph",
  subtitle: "India, 2002–2016 — Meracuni 6 anggota keluarga demi warisan.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgLTGwl7CQVDTf1pHTCfrLI7RYQE_zsxjGQ&s`,
  content: `
    <h3>👩 Profil Pelaku</h3>
    <p>Jolly Joseph adalah ibu rumah tangga dari Kerala, India. Ia dikenal sebagai wanita ramah dan religius, aktif di komunitas gereja. Tapi di balik citra itu, ia menyimpan rencana pembunuhan berantai selama 14 tahun.</p>

    <h3>☠️ Kronologi Pembunuhan</h3>
    <ul>
      <li>2002: Suaminya, Roy Thomas, tewas akibat keracunan sianida. Dinyatakan sebagai bunuh diri.</li>
      <li>2008: Mertuanya, Tom Thomas, meninggal mendadak setelah minum kopi.</li>
      <li>2011: Ibu mertua, Annamma, tewas setelah makan sup.</li>
      <li>2014: Suster mertua, Vilyamma, tewas setelah menghadiri pemakaman.</li>
      <li>2016: Sepupu dan anak kecil dari keluarga juga tewas mendadak.</li>
    </ul>

    <h3>🧪 Motif dan Penyelidikan</h3>
    <ul>
      <li>Jolly ingin menguasai rumah dan warisan keluarga Thomas.</li>
      <li>Ia memalsukan surat warisan dan mengaku sebagai dosen universitas padahal bukan.</li>
      <li>Setelah kematian terakhir, keluarga curiga dan polisi membuka kembali semua kasus lama.</li>
      <li>Hasil forensik menunjukkan pola keracunan sianida di semua korban.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Dampak</h3>
    <ul>
      <li>Jolly ditangkap pada 2019 dan mengaku melakukan semua pembunuhan.</li>
      <li>Kasus ini mengguncang India karena pelaku adalah wanita biasa yang tak pernah dicurigai.</li>
      <li>Media menyebutnya “India’s Black Widow.”</li>
    </ul>

    <a href="https://www.bbc.com/news/world-asia-india-49928560" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Ferin Diah Anjani",
  subtitle: "Indonesia, 2018 — Dibunuh kenalan Facebook, jasad dibakar di hutan.",
  image:`https://asset-2.tribunnews.com/tribunnews/foto/bank/images/ferin-anjani_20180808_183933.jpg`,
  content: `
    <h3>🧍 Profil Korban</h3>
    <p>Ferin Diah Anjani adalah pramuniaga muda asal Semarang. Ia dikenal aktif di media sosial dan berteman dengan banyak orang secara online.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>Juli 2018: Ferin bertemu dengan KA, pria yang dikenalnya lewat Facebook.</li>
      <li>KA mengajak Ferin ke hotel, lalu membunuhnya dengan tujuan merampas mobil korban.</li>
      <li>Jasad Ferin dibawa ke hutan jati Todanan, Blora, dan dibakar untuk menghilangkan jejak.</li>
      <li>Mayat ditemukan hangus terbakar pada 1 Agustus 2018.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Fakta Tambahan</h3>
    <ul>
      <li>KA ditangkap dan mengaku juga pernah membunuh perempuan lain pada 2011.</li>
      <li>Motif utama: perampokan dan pelampiasan dendam pribadi.</li>
      <li>Kasus ini memicu kekhawatiran tentang bahaya pertemanan online tanpa verifikasi.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini viral di media sosial dan jadi peringatan tentang kejahatan berbasis medsos.</li>
      <li>Netizen menyerukan edukasi digital dan perlindungan perempuan dari predator online.</li>
    </ul>

    <a href="https://kumparan.com/berita-heboh/5-kasus-pembunuhan-paling-menghebohkan-yang-bermula-dari-media-sosial-1542967679250054543" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Vina & Eky (Cirebon)",
  subtitle: "Indonesia, 2016 — Dibunuh geng motor, kasusnya penuh misteri.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHXehs-4pVPR1ttwhdt2lrRlBaZY5694UrA&s`,
  content: `
    <h3>🧍 Profil Korban</h3>
    <p>Vina dan Eky adalah sepasang remaja asal Cirebon yang ditemukan tewas di flyover Talun pada 27 Agustus 2016. Awalnya dikira kecelakaan, tapi ternyata mereka jadi korban kekerasan geng motor.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>Vina dan Eky dikejar oleh geng motor saat malam hari.</li>
      <li>Mereka ditangkap, dipukuli, dan Vina diduga diperkosa oleh beberapa pelaku.</li>
      <li>Jasad mereka ditemukan dalam kondisi mengenaskan di pinggir jalan.</li>
    </ul>

    <h3>⚖️ Penyelidikan dan Kontroversi</h3>
    <ul>
      <li>Polisi menangkap 8 pelaku, namun satu orang bernama Pegi Setiawan sempat buron selama 8 tahun.</li>
      <li>Mei 2024: Pegi ditangkap, tapi publik mempertanyakan bukti dan prosedur hukum.</li>
      <li>Kasus ini viral karena dianggap penuh kejanggalan dan dugaan rekayasa.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini memicu gerakan #JusticeForVina dan sorotan terhadap sistem hukum Indonesia.</li>
      <li>Diangkat dalam film <em>Vina: Sebelum 7 Hari</em> yang makin memperluas perhatian publik.</li>
      <li>Netizen membongkar ulang kronologi dan menuntut keadilan yang transparan.</li>
    </ul>

    <a href="https://www.kompas.id/artikel/celaka-duabelas" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Gabriel Kuhn & Daniel Petry",
  subtitle: "Brasil, 2007 — Persahabatan online berujung mutilasi brutal.",
  image:`https://media.licdn.com/dms/image/sync/v2/D4E27AQHRFzwzmX2mXw/articleshare-shrink_800/articleshare-shrink_800/0/1731955102596?e=2147483647&v=beta&t=AaB-fae67t9-G9yKoMvZTJzCzvrjZciyuLc3kaZ4Tr4`,
  content: `
    <h3>🧑‍💻 Profil Korban dan Pelaku</h3>
    <p>Gabriel Kuhn (12) dan Daniel Petry (16) adalah dua remaja dari Blumenau, Brasil, yang berteman lewat game online <em>Tibia</em>. Mereka sering bermain dan saling meminjam uang virtual.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>Gabriel meminjam 20.000 koin dari Daniel tapi menolak mengembalikannya.</li>
      <li>Daniel marah, mendatangi rumah Gabriel, lalu memukuli dan memperkosa korban.</li>
      <li>Ia membunuh Gabriel, lalu mencoba menyembunyikan jasad dengan memotong kaki korban agar muat di kotak.</li>
      <li>Jasad ditemukan oleh keluarga Gabriel dalam kondisi mengenaskan.</li>
    </ul>

    <h3>⚖️ Proses Hukum</h3>
    <ul>
      <li>Daniel ditangkap dan mengaku melakukan pembunuhan karena “dihina dan dipermalukan.”</li>
      <li>Karena masih di bawah umur, ia hanya dijatuhi hukuman 3 tahun penjara remaja.</li>
      <li>Setelah bebas, keberadaan Daniel tidak diketahui secara pasti dan jadi bahan spekulasi online.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini viral di forum-forum internet dan jadi simbol bahaya konflik digital yang berujung nyata.</li>
      <li>Foto-foto forensik menyebar luas dan memicu kontroversi tentang etika penyebaran konten sadis.</li>
      <li>Netizen menyebut kasus ini sebagai salah satu pembunuhan remaja paling brutal di era digital.</li>
    </ul>

    <a href="https://www.liputan6.com/hot/read/5597456/10-kasus-pembunuhan-mengerikan-yang-pernah-terjadi-di-dunia-beberapa-masih-jadi-misteri" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Setagaya Family Murders",
  subtitle: "Jepang, 2000 — Satu keluarga dibantai, pelaku tinggal di TKP semalaman.",
  image:`https://i.redd.it/r4ctquxma94f1.jpeg`,
  content: `
    <h3>🏠 Profil Korban</h3>
    <p>Keluarga Miyazawa tinggal di Setagaya, Tokyo: Mikio (ayah), Yasuko (ibu), Niina (anak perempuan), dan Rei (anak laki-laki). Mereka dikenal sebagai keluarga biasa yang ramah dan aktif di komunitas.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>30 Desember 2000: Seluruh keluarga dibunuh secara brutal di rumah mereka.</li>
      <li>Rei dicekik terlebih dahulu, lalu Mikio ditusuk berkali-kali saat mencoba melawan.</li>
      <li>Yasuko dan Niina dibunuh di lantai atas dengan kekerasan ekstrem.</li>
      <li>Pelaku tinggal di rumah semalaman: makan es krim, menggunakan komputer, bahkan buang air di toilet tanpa disiram.</li>
    </ul>

    <h3>🧪 Bukti dan Misteri</h3>
    <ul>
      <li>DNA pelaku ditemukan, tapi tidak cocok dengan database manapun.</li>
      <li>Pelaku meninggalkan pakaian, pisau, dan jejak darah di seluruh rumah.</li>
      <li>Diduga berasal dari Korea Selatan atau campuran Asia Tenggara berdasarkan analisis DNA dan barang bawaan.</li>
    </ul>

    <h3>⚖️ Status Kasus</h3>
    <ul>
      <li>Meski banyak bukti, pelaku belum tertangkap hingga hari ini.</li>
      <li>Kasus ini jadi salah satu pembunuhan paling misterius dan belum terpecahkan di Jepang.</li>
      <li>Setiap tahun, polisi Tokyo memperbarui informasi publik untuk mencari petunjuk baru.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Setagaya_family_murder" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Armin Meiwes",
  subtitle: "Jerman, 2001 — Membunuh dan memakan korban yang setuju.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREw2P7Q-zDz7H7BXnfHQ_vHdWPO_kGdK3RA&s`,
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Armin Meiwes adalah pria asal Rotenburg, Jerman, yang memiliki fantasi kanibalisme sejak kecil. Ia aktif di forum internet bertema ekstrem dan mencari “sukarelawan” untuk dimakan.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>2001: Armin bertemu Bernd Brandes, pria yang secara sukarela ingin dimakan.</li>
      <li>Mereka bertemu di rumah Armin, lalu Bernd menyetujui amputasi alat kelaminnya, yang kemudian dimasak dan dimakan bersama.</li>
      <li>Setelah itu, Armin membunuh Bernd dan menyimpan bagian tubuhnya di freezer untuk dikonsumsi selama berbulan-bulan.</li>
    </ul>

    <h3>⚖️ Proses Hukum</h3>
    <ul>
      <li>Armin ditangkap setelah kasusnya terungkap lewat forum online.</li>
      <li>Awalnya dihukum 8 tahun karena dianggap pembunuhan atas permintaan korban.</li>
      <li>Namun, setelah banding, ia dijatuhi hukuman penjara seumur hidup pada 2006.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini memicu debat hukum dan etika: apakah seseorang boleh “menyerahkan diri” untuk dibunuh?</li>
      <li>Diangkat dalam film, dokumenter, dan bahkan opera karena keanehannya.</li>
      <li>Armin disebut sebagai “Rotenburg Cannibal” dan jadi simbol ekstremnya dunia digital gelap.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Armin_Meiwes" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Jennifer Pan",
  subtitle: "Kanada, 2010 — Merancang pembunuhan orang tua demi cinta dan kebebasan.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheX1jW6cO7J4KD31R1qOezFxqoy8TtMkqhQ&s`,
  content: `
    <h3>👧 Profil Pelaku</h3>
    <p>Jennifer Pan adalah anak dari keluarga Vietnam-Kanada yang sangat disiplin. Ayahnya, Hann Pan, dan ibunya, Bich Ha, menuntut prestasi akademik tinggi dan melarang pacaran.</p>

    <h3>🕯️ Kronologi Kejadian</h3>
    <ul>
      <li>Jennifer menjalin hubungan dengan Daniel Wong, yang tidak disetujui orang tuanya.</li>
      <li>Ia memalsukan nilai, ijazah, dan kehidupan kuliah selama bertahun-tahun agar tidak ketahuan.</li>
      <li>November 2010: Jennifer menyewa tiga pria untuk membunuh orang tuanya di rumah mereka.</li>
      <li>Ibunya tewas ditembak, ayahnya selamat meski tertembak di wajah dan bahu.</li>
    </ul>

    <h3>⚖️ Penyelidikan dan Hukuman</h3>
    <ul>
      <li>Awalnya Jennifer berpura-pura sebagai korban perampokan.</li>
      <li>Polisi menemukan kejanggalan dalam rekaman 911 dan interogasi.</li>
      <li>Jennifer dan para pelaku dijatuhi hukuman penjara seumur hidup tanpa pembebasan bersyarat selama 25 tahun.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini memicu diskusi tentang tekanan keluarga, kontrol orang tua, dan kesehatan mental remaja.</li>
      <li>Diangkat dalam dokumenter dan podcast kriminal karena kompleksitas psikologisnya.</li>
      <li>Jennifer disebut sebagai “anak berprestasi palsu” yang hidup dalam kebohongan ekstrem.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Jennifer_Pan" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Yoo Young-chul",
  subtitle: "Korea Selatan, 2003–2004 — Membunuh 20 orang karena dendam sosial.",
  image:`https://media.gettyimages.com/id/51081271/photo/yoo-young-chul-a-33-year-old-former.jpg?s=1024x1024&w=gi&k=20&c=BP32GkaQkzZ9AbHZa7CU3c8m2PcAlR-Nu7wBN5Dp9Bg=`,
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Yoo Young-chul adalah pria Korea Selatan yang mengaku membunuh 20 orang dalam rentang satu tahun. Ia memiliki masa lalu kelam: pernah dipenjara, hidup miskin, dan menyimpan dendam terhadap orang kaya dan wanita.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban pertamanya adalah lansia kaya yang tinggal sendirian. Ia membunuh mereka dengan palu.</li>
      <li>Setelah itu, ia beralih ke pekerja seks yang ia panggil ke apartemennya, lalu membunuh dan memutilasi mereka.</li>
      <li>Beberapa jasad dikubur di bukit, sebagian dibuang di toilet umum.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Pengakuan</h3>
    <ul>
      <li>Ditangkap pada Juli 2004 setelah polisi melacak panggilan dari ponsel korban.</li>
      <li>Yoo mengaku membunuh 20 orang, tapi hanya 11 yang bisa dibuktikan secara forensik.</li>
      <li>Ia menyatakan bahwa “orang kaya tidak pantas hidup” dan “wanita hanya membawa masalah.”</li>
      <li>Dijatuhi hukuman mati, tapi eksekusi belum dilakukan karena Korea Selatan moratorium hukuman mati sejak 1997.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini mengguncang Korea Selatan dan memicu reformasi sistem pengawasan terhadap pekerja seks dan lansia.</li>
      <li>Yoo disebut sebagai “monster modern” dan jadi simbol ekstrem dari dendam sosial.</li>
      <li>Diangkat dalam dokumenter dan drama kriminal Korea.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Yoo_Young-chul" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Tamara Samsonova",
  subtitle: "Rusia, 2000–2015 — Nenek pembunuh yang menulis catatan harian mutilasi.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRaksApEa2BwVCLlF2C_SgJ43kadTwyRPYg&s`,
  content: `
    <h3>👵 Profil Pelaku</h3>
    <p>Tamara Samsonova adalah wanita lansia asal St. Petersburg, Rusia. Ia dikenal sebagai tetangga yang ramah, tapi diam-diam menyimpan sisi gelap yang mengerikan.</p>

    <h3>🔪 Kronologi Kejadian</h3>
    <ul>
      <li>2015: Tamara membunuh Valentina Ulanova, teman serumahnya, dengan racun lalu memutilasi tubuhnya menggunakan gergaji dapur.</li>
      <li>Ia membuang potongan tubuh ke jalanan dan sungai, sebagian ditemukan oleh warga.</li>
      <li>Polisi menemukan catatan harian Tamara yang berisi detail pembunuhan, termasuk korban sebelumnya yang diduga mencapai 11 orang.</li>
    </ul>

    <h3>🧠 Motif dan Psikologi</h3>
    <ul>
      <li>Tamara diduga mengalami gangguan mental dan delusi, tapi tetap sadar saat melakukan pembunuhan.</li>
      <li>Ia menulis dalam bahasa Rusia, Inggris, dan Jerman, menunjukkan kecerdasan dan perencanaan.</li>
      <li>Motifnya tidak selalu jelas—kadang karena konflik kecil, kadang hanya karena “tidak suka” korban.</li>
    </ul>

    <h3>⚖️ Penahanan dan Status</h3>
    <ul>
      <li>Ditangkap pada 2015 dan dinyatakan tidak layak diadili karena gangguan jiwa.</li>
      <li>Ditempatkan di rumah sakit jiwa dengan pengawasan ketat.</li>
      <li>Media menyebutnya sebagai “Granny Ripper” dan membandingkannya dengan pembunuh berantai pria.</li>
    </ul>

    <a href="https://en.wikipedia.org/wiki/Tamara_Samsonova" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya
    </a>
  `
},
{
  title: "Wowon Erawan",
  subtitle: "Indonesia, 2016–2023 — Serial killer yang mengaku bisa menggandakan uang secara gaib.",
  image:``,
  content: `
    <h3>🔮 Profil Pelaku</h3>
    <p>Wowon Erawan adalah pria asal Cianjur yang dikenal sebagai “dukun pengganda uang.” Bersama dua rekannya, ia membunuh setidaknya 9 orang yang percaya pada janji mistik dan ritual gaib.</p>

    <h3>🕯️ Modus dan Ritual</h3>
    <ul>
      <li>Wowon mengaku bisa menggandakan uang lewat ritual spiritual.</li>
      <li>Korban diminta menyerahkan uang dan mengikuti “syarat gaib.”</li>
      <li>Jika korban mulai curiga atau gagal ritual, mereka diracun atau dicekik.</li>
      <li>Beberapa korban adalah istri dan anak-anaknya sendiri.</li>
    </ul>

    <h3>🧠 Psikologi dan Kepercayaan</h3>
    <ul>
      <li>Wowon diyakini benar-benar percaya pada kekuatan supranatural yang ia pelajari.</li>
      <li>Ia menggabungkan manipulasi spiritual dengan kekerasan ekstrem.</li>
      <li>Mirip dengan kasus “Dukun Usep” tahun 2007 yang juga membunuh demi ritual penggandaan uang.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Dampak</h3>
    <ul>
      <li>Wowon ditangkap pada Januari 2023 setelah jasad korban ditemukan di rumahnya di Bekasi.</li>
      <li>Kasus ini viral dan memicu diskusi tentang kepercayaan mistik dan manipulasi spiritual di masyarakat.</li>
      <li>Kriminolog menyebut ini sebagai “serial killer supranatural” yang lahir dari struktur sosial yang masih menghargai status paranormal.</li>
    </ul>

    <a href="https://news.detik.com/berita/d-6527082/analisa-kriminolog-ui-soal-pemicu-banyaknya-korban-serial-killer-wowon-cs" target="_blank" class="external-btn">
      🔗 Baca Analisa Kriminolog UI
    </a>
  `
},
{
  title: "Harold Shipman",
  subtitle: "Inggris, 1975–1998 — Dokter yang membunuh lebih dari 200 pasien.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30PA5IOTagYeevJYyFhqHLQcr--L9FKDHKQ&s`,
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Harold Shipman adalah dokter umum asal Inggris yang dikenal ramah dan profesional. Tapi di balik jas putihnya, ia menyimpan rahasia kelam: membunuh pasiennya secara sistematis selama lebih dari dua dekade.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban utamanya adalah wanita lansia yang tinggal sendiri.</li>
      <li>Shipman menyuntik mereka dengan dosis diamorfin (morphine) yang mematikan.</li>
      <li>Ia lalu memalsukan surat wasiat korban agar dirinya jadi ahli waris.</li>
      <li>Korban ditemukan dalam posisi duduk dan berpakaian rapi—tidak seperti orang sakit parah.</li>
    </ul>

    <h3>⚖️ Penyelidikan dan Hukuman</h3>
    <ul>
      <li>1998: Putri korban terakhir curiga dan melaporkan ke polisi.</li>
      <li>Autopsi mengungkap kadar morphine tinggi, dan surat wasiat palsu.</li>
      <li>Shipman dijatuhi hukuman penjara seumur hidup atas 15 pembunuhan, tapi penyelidikan menyimpulkan total korban bisa mencapai 218 orang.</li>
      <li>Ia bunuh diri di sel penjara pada 2004, tanpa pernah mengakui satu pun pembunuhan.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini mengguncang sistem medis Inggris dan memicu reformasi besar dalam pengawasan dokter.</li>
      <li>Shipman jadi simbol pengkhianatan kepercayaan dan pembunuhan berantai paling mematikan dalam sejarah modern.</li>
    </ul>

    <a href="https://nationalgeographic.grid.id/read/133995855/kisah-pembunuhan-berantai-paling-menegangkan-sepanjang-sejarah-dunia" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya di National Geographic
    </a>
  `
},
{
  title: "Ted Bundy",
  subtitle: "Amerika Serikat, 1974–1978 — Pembunuh berantai yang memikat dan membantai.",
  image:`https://images.axios.com/-LoO8zPaNQqhFCWZCvxDKMx0PGs=/2024/02/24/1708738645952.png`,
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Ted Bundy adalah pria cerdas, tampan, dan karismatik—sempat kuliah hukum dan aktif di politik. Tapi di balik citra itu, ia adalah pembunuh berantai yang mengaku membunuh lebih dari 30 wanita muda di berbagai negara bagian AS.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Bundy memikat korban dengan berpura-pura cedera atau minta bantuan.</li>
      <li>Setelah korban mendekat, ia menyerang, menculik, memperkosa, dan membunuh mereka.</li>
      <li>Beberapa jasad ditemukan di hutan, gunung, dan bahkan ada yang tidak pernah ditemukan.</li>
      <li>Ia sering kembali ke lokasi pembunuhan untuk melakukan necrophilia.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Pengadilan</h3>
    <ul>
      <li>Bundy sempat kabur dari penjara dua kali dan melakukan pembunuhan tambahan saat buron.</li>
      <li>Ditangkap kembali dan diadili dalam kasus pembantaian di Florida.</li>
      <li>Ia dijatuhi hukuman mati dan dieksekusi di kursi listrik pada 1989.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus Bundy memicu reformasi sistem pelacakan pelaku lintas negara bagian di AS.</li>
      <li>Diangkat dalam film, dokumenter, dan buku—termasuk <em>“The Ted Bundy Tapes”</em> di Netflix.</li>
      <li>Bundy jadi simbol pembunuh berantai yang “tidak terlihat jahat” secara fisik, tapi sangat berbahaya.</li>
    </ul>

    <a href="https://nationalgeographic.grid.id/read/133995855/kisah-pembunuhan-berantai-paling-menegangkan-sepanjang-sejarah-dunia" target="_blank" class="external-btn">
      🔗 Baca Selengkapnya di National Geographic
    </a>
  `
},
{
  title: "Richard Ramirez",
  subtitle: "Amerika Serikat, 1984–1985 — Pembunuh berantai bertema satanik yang meneror California.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa88CK_LEgCXLnEgJFfLFQ80edLFF_m4ed-w&s`,
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Richard Ramirez adalah pria muda asal Texas yang pindah ke California dan memulai rangkaian pembunuhan brutal. Ia terobsesi dengan satanisme, kekerasan, dan kekuasaan atas korban.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Ramirez menyerang korban secara acak—mulai dari anak-anak, lansia, hingga pasangan muda.</li>
      <li>Ia masuk ke rumah korban pada malam hari, membunuh dengan senjata api, pisau, atau benda tumpul.</li>
      <li>Beberapa korban diperkosa, disiksa, dan dipaksa berdoa kepada “Satan.”</li>
      <li>Ia meninggalkan simbol pentagram di TKP sebagai tanda ritualistik.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Pengadilan</h3>
    <ul>
      <li>Ditangkap pada 1985 setelah warga mengenalinya dari poster buronan dan memukulinya di jalan.</li>
      <li>Diadili atas 13 pembunuhan, 5 percobaan pembunuhan, 11 pemerkosaan, dan 14 perampokan.</li>
      <li>Dijatuhi hukuman mati, tapi meninggal karena kanker di penjara pada 2013.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini bikin warga California ketakutan selama berbulan-bulan.</li>
      <li>Ramirez jadi simbol pembunuh berantai dengan motif satanik dan psikologis ekstrem.</li>
      <li>Diangkat dalam dokumenter Netflix <em>“Night Stalker: The Hunt for a Serial Killer”</em>.</li>
    </ul>

    <a href="https://www.kapanlagi.com/showbiz/film/internasional/7-serial-dokumenter-netflix-yang-mengangkat-kisah-nyata-pembunuh-berantai-bikin-bulu-kuduk-berdiri-93703c.html" target="_blank" class="external-btn">
      🔗 Lihat dokumenternya di Netflix
    </a>
  `
},
{
  title: "Heriberto Seda",
  subtitle: "Amerika Serikat, 1990–1993 — Membunuh berdasarkan zodiak dan kirim kode ke polisi.",
  image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tr7CaCnn4VHTU-sRKlaOWzR25uVGMEXkBViiPnRGHmkpZhoUmhAVvelnMU5HBX5WQoA&usqp=CAU`,
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Heriberto Seda adalah pria penyendiri dari New York yang terobsesi dengan astrologi dan pembunuh legendaris Zodiac Killer. Ia percaya bahwa bintang dan waktu menentukan siapa yang harus mati.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Seda memilih korban berdasarkan tanda zodiak mereka.</li>
      <li>Ia menyerang secara acak di New York City, membunuh 3 orang dan melukai 5 lainnya.</li>
      <li>Setiap serangan diikuti dengan surat ejekan ke polisi dan media, berisi kode rahasia dan simbol astrologi.</li>
      <li>Ia menggunakan senjata rakitan agar peluru tidak bisa dilacak.</li>
    </ul>

    <h3>📜 Simbol dan Kode</h3>
    <ul>
      <li>Pesan dikirim dalam bentuk sandi bendera maritim internasional.</li>
      <li>Polisi bahkan konsultasi ke astronom profesional untuk memprediksi waktu serangan berikutnya.</li>
      <li>Suratnya menyatakan bahwa ia “melayani Tuhan” dan membunuh sesuai perintah langit.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Hukuman</h3>
    <ul>
      <li>Ditangkap setelah kasus kekerasan dalam keluarga, di mana ia menulis simbol yang sama seperti di surat pembunuhan.</li>
      <li>Dijatuhi hukuman penjara seumur hidup tanpa pembebasan bersyarat.</li>
      <li>Kasusnya sempat bikin publik percaya Zodiac Killer pindah ke Pantai Timur.</li>
    </ul>

    <a href="https://kumparan.com/selidik/heriberto-seda-pembunuh-berantai-yang-terobsesi-dengan-astrologi-dan-kematian-1unVQRJFr22" target="_blank" class="external-btn">
      🔗 Baca kisah lengkapnya di Kumparan
    </a>
  `
},
{
  title: "Pedro Rodrigues Filho",
  subtitle: "Brasil, 1967–2003 — Membunuh lebih dari 70 orang, sebagian besar kriminal.",
  image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1605672989/lg_d9d70f-2.Pedro-Rodrigues-Filho_wf4dxd.jpg",
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Pedro Rodrigues Filho, dijuluki “Pedrinho Matador,” adalah pembunuh berantai asal Brasil yang mengaku membunuh lebih dari 100 orang—tapi sebagian besar adalah penjahat lain. Ia mulai membunuh sejak usia 14 tahun.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban pertamanya adalah wakil wali kota yang memecat ayahnya karena tuduhan pencurian.</li>
      <li>Ia membunuh ayahnya sendiri di penjara karena telah membunuh ibunya.</li>
      <li>Selama dipenjara, ia membunuh puluhan narapidana lain yang dianggap “tidak layak hidup.”</li>
      <li>Ia mengklaim dirinya sebagai “pembersih” dunia kriminal.</li>
    </ul>

    <h3>⚖️ Penahanan dan Status</h3>
    <ul>
      <li>Dipenjara selama lebih dari 30 tahun, lalu dibebaskan pada 2007.</li>
      <li>Setelah bebas, ia jadi YouTuber dan bicara soal masa lalunya.</li>
      <li>Ditangkap lagi pada 2011 karena ancaman kekerasan, lalu dibebaskan kembali.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini memicu debat tentang moralitas pembunuhan terhadap sesama kriminal.</li>
      <li>Pedrinho jadi simbol “vigilante” ekstrem yang hidup di luar hukum.</li>
      <li>Diangkat dalam dokumenter dan jadi legenda urban di Brasil.</li>
    </ul>

    <a href="https://www.inilah.com/kasus-pembunuhan-tersadis-di-dunia" target="_blank" class="external-btn">
      🔗 Lihat daftar kasus tersadis lainnya
    </a>
  `
},
{
  title: "Luis Alfredo Garavito",
  subtitle: "Kolombia, 1992–1999 — Membunuh lebih dari 140 anak laki-laki.",
  image: "https://upload.wikimedia.org/wikipedia/id/7/75/Luis_Garavito.jpg",
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Luis Alfredo Garavito adalah pria Kolombia yang dikenal sebagai “La Bestia” (Si Monster). Ia berpura-pura jadi pendeta, guru, atau orang miskin untuk mendekati anak-anak jalanan dan menculik mereka.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban utamanya adalah anak laki-laki berusia 6–16 tahun dari keluarga miskin.</li>
      <li>Ia menyiksa, memperkosa, dan membunuh mereka secara brutal—kadang dengan pisau, kadang dengan benda tumpul.</li>
      <li>Jasad korban ditemukan dalam posisi yang sama: tangan terikat, luka di leher, dan tanda penyiksaan ekstrem.</li>
      <li>Garavito mencatat semua pembunuhan dalam buku catatan pribadi.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Hukuman</h3>
    <ul>
      <li>Ditangkap pada 1999 setelah penyelidikan forensik menemukan pola pembunuhan dan bukti DNA.</li>
      <li>Garavito mengaku membunuh 147 anak, tapi diperkirakan total korban bisa lebih dari 300.</li>
      <li>Dijatuhi hukuman 1.853 tahun penjara, tapi hukum Kolombia membatasi maksimum 40 tahun.</li>
      <li>Ia bisa bebas lebih cepat karena “berkelakuan baik,” yang memicu kemarahan publik.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini mengguncang Kolombia dan dunia, memicu reformasi hukum pidana dan perlindungan anak.</li>
      <li>Garavito jadi simbol predator ekstrem yang beroperasi di tengah masyarakat tanpa terdeteksi.</li>
      <li>Diangkat dalam dokumenter kriminal dan jadi studi kasus psikologi kriminal ekstrem.</li>
    </ul>

    <a href="https://www.inilah.com/kasus-pembunuhan-tersadis-di-dunia" target="_blank" class="external-btn">
      🔗 Lihat daftar kasus tersadis lainnya
    </a>
  `
},
{
  title: "Ed Gein",
  subtitle: "Amerika Serikat, 1947–1957 — Menguliti mayat dan membuat kerajinan dari tubuh manusia.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2LRMDFAYMVen4y3dkO-LVWTtrWcrhDECeQ&s",
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Edward Theodore Gein, dikenal sebagai “The Butcher of Plainfield,” adalah pembunuh berantai dan pencuri mayat asal Wisconsin. Ia hidup terisolasi dan sangat terpengaruh oleh ibunya yang religius dan dominan.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Gein hanya divonis atas dua pembunuhan: Mary Hogan (1954) dan Bernice Worden (1957).</li>
      <li>Setelah ditangkap, polisi menemukan rumahnya penuh dengan potongan tubuh manusia: topeng dari kulit wajah, mangkuk dari tengkorak, dan bahkan pakaian dari kulit manusia.</li>
      <li>Ia juga mengaku sering membongkar kuburan dan mengambil mayat wanita yang mirip ibunya.</li>
    </ul>

    <h3>🧠 Kondisi Mental dan Hukuman</h3>
    <ul>
      <li>Gein dinyatakan mengalami gangguan jiwa dan tidak layak diadili pada awalnya.</li>
      <li>Pada 1968, ia dinyatakan cukup sehat untuk diadili dan dinyatakan bersalah atas pembunuhan Worden.</li>
      <li>Namun, ia tetap dikirim ke rumah sakit jiwa dan meninggal di sana pada 1984 karena kanker.</li>
    </ul>

    <h3>🎥 Dampak Budaya</h3>
    <ul>
      <li>Kasus Gein menginspirasi karakter fiksi seperti Norman Bates (*Psycho*), Leatherface (*Texas Chainsaw Massacre*), dan Buffalo Bill (*Silence of the Lambs*).</li>
      <li>Ia jadi simbol horor psikologis dan obsesi terhadap tubuh manusia dalam budaya pop.</li>
    </ul>

    <a href="https://id.wikipedia.org/wiki/Ed_Gein" target="_blank" class="external-btn">
      🔗 Baca detail lengkap di Wikipedia
    </a>
  `
},
{
  title: "Charles Edmund Cullen",
  subtitle: "Amerika Serikat, 1988–2003 — Perawat yang membunuh lebih dari 40 pasien secara diam-diam.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIRd819GdWqQsoGjhHQt-1ugbOLxYLr6epw&s",
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Charles Cullen adalah perawat asal New Jersey yang bekerja di lebih dari 9 rumah sakit. Ia tampak tenang dan profesional, tapi diam-diam membunuh pasien dengan menyuntikkan obat mematikan seperti digoxin dan insulin.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban utamanya adalah pasien lansia dan kritis yang sedang dirawat intensif.</li>
      <li>Ia menyuntikkan dosis obat yang mematikan ke IV atau langsung ke tubuh pasien.</li>
      <li>Motifnya kabur—kadang ia mengaku ingin “mengakhiri penderitaan,” tapi banyak korban tidak dalam kondisi terminal.</li>
      <li>Diperkirakan membunuh lebih dari 40 orang, tapi beberapa ahli percaya jumlahnya bisa mencapai 300.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Hukuman</h3>
    <ul>
      <li>Ditangkap pada 2003 setelah penyelidikan internal rumah sakit menemukan pola kematian mencurigakan.</li>
      <li>Mengaku bersalah atas 29 pembunuhan dan dijatuhi hukuman penjara seumur hidup tanpa pembebasan bersyarat.</li>
      <li>Kasusnya memicu reformasi besar dalam sistem pelaporan rumah sakit dan pengawasan tenaga medis.</li>
    </ul>

    <h3>🎥 Dampak Budaya</h3>
    <ul>
      <li>Diangkat dalam film Netflix <em>The Good Nurse</em> (2022) yang dibintangi Eddie Redmayne dan Jessica Chastain.</li>
      <li>Kasus ini jadi simbol pengkhianatan profesi dan bahaya sistem medis yang tidak transparan.</li>
    </ul>

    <a href="https://www.noice.id/info-terbaru/kasus-pembunuh-berantai-dunia-paling-sadis-selain-jack-the-ripper/" target="_blank" class="external-btn">
      🔗 Baca detail lengkap di Noice
    </a>
  `
},
{
  title: "Alexander Pichushkin",
  subtitle: "Rusia, 1992–2006 — Membunuh 49 orang demi mengisi papan catur.",
  image: "https://www.reuters.com/resizer/v2/PYQNI6VVEVLZPDQL6KQDSETTLU.jpg?auth=2d8e4d6896dce1e78fcadf33d193aa53900ddae56a52556e1472e2e2b9b804d5&width=1424&quality=80",
    content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Alexander Pichushkin adalah pria asal Moskow yang dijuluki “The Chessboard Killer.” Ia punya obsesi untuk membunuh sebanyak 64 orang—jumlah kotak di papan catur. Ia menganggap pembunuhan sebagai bentuk kekuasaan dan pembuktian diri.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban utamanya adalah pria tunawisma atau lansia yang diajak minum vodka di taman.</li>
      <li>Setelah mabuk, korban dipukul dengan palu di kepala, lalu dimasukkan botol vodka ke dalam tengkorak yang retak.</li>
      <li>Ia mencatat setiap pembunuhan di papan catur pribadinya, satu kotak untuk satu korban.</li>
      <li>Beberapa korban dibuang ke saluran air atau taman Bitsevsky Park.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Hukuman</h3>
    <ul>
      <li>Ditangkap pada 2006 setelah korban terakhir ditemukan dengan catatan pribadi milik Pichushkin.</li>
      <li>Mengaku membunuh 61 orang, tapi hanya 49 yang terbukti secara hukum.</li>
      <li>Dijatuhi hukuman penjara seumur hidup dan dikurung di sel isolasi.</li>
    </ul>

    <h3>🩸 Dampak Sosial</h3>
    <ul>
      <li>Kasus ini mengguncang Rusia dan memicu diskusi tentang gangguan psikologis ekstrem.</li>
      <li>Pichushkin jadi simbol pembunuh berantai dengan motif obsesif dan sistemik.</li>
      <li>Diangkat dalam dokumenter kriminal dan studi psikologi forensik.</li>
    </ul>

    <a href="https://www.noice.id/info-terbaru/kasus-pembunuh-berantai-dunia-paling-sadis-selain-jack-the-ripper/" target="_blank" class="external-btn">
      🔗 Baca detail lengkap di Noice
    </a>
  `
},
{
  title: "Jack the Ripper",
  subtitle: "Inggris, 1888 — Pembunuh misterius yang mengincar wanita di Whitechapel.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZhjfpVBBG-eJwmHUYkIRPHad8rsAUrkYnA&s",
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Jack the Ripper adalah nama samaran untuk pembunuh berantai yang beraksi di distrik Whitechapel, London. Identitasnya tidak pernah terungkap, dan kasusnya jadi salah satu misteri kriminal paling terkenal di dunia.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban utamanya adalah wanita pekerja seks yang dibunuh secara brutal.</li>
      <li>Tubuh korban dimutilasi, organ dalam diambil, dan beberapa korban ditemukan dengan luka yang sangat presisi—seolah dilakukan oleh seseorang dengan pengetahuan anatomi.</li>
      <li>Surat-surat misterius dikirim ke polisi dan media, mengaku dari “Jack the Ripper.”</li>
    </ul>

    <h3>🕵️ Penyelidikan dan Teori</h3>
    <ul>
      <li>Polisi Inggris melakukan investigasi besar-besaran, tapi tidak pernah menemukan pelakunya.</li>
      <li>Lebih dari 100 tersangka diajukan, termasuk dokter, bangsawan, dan bahkan artis panggung.</li>
      <li>Teori konspirasi berkembang: mulai dari ritual Freemason, pembunuhan politik, hingga gangguan mental ekstrem.</li>
    </ul>

    <h3>🎥 Dampak Budaya</h3>
    <ul>
      <li>Kasus ini menginspirasi ratusan buku, film, dan serial—termasuk <em>From Hell</em> dan <em>Ripper Street</em>.</li>
      <li>Jack the Ripper jadi simbol pembunuh berantai misterius yang tak terjamah hukum.</li>
      <li>Masih jadi bahan studi forensik dan sejarah kriminal hingga hari ini.</li>
    </ul>

    <a href="https://www.inews.id/news/internasional/5-kasus-pembunuhan-paling-mengerikan-di-dunia-salah-satunya-ryan-jombang" target="_blank" class="external-btn">
      🔗 Lihat daftar kasus mengerikan lainnya
    </a>
  `
},
{
  title: "Aileen Wuornos",
  subtitle: "Amerika Serikat, 1989–1990 — Membunuh tujuh pria, mengaku membela diri.",
  image:"https://m.media-amazon.com/images/M/MV5BYmI0YjgwMDktZjNkOS00MGFlLWJiNzgtMTg3YWI5MzA0Y2VmXkEyXkFqcGc@._V1_.jpg",
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>Aileen Wuornos adalah mantan pekerja seks yang membunuh tujuh pria di Florida. Ia mengklaim bahwa semua pembunuhan dilakukan untuk membela diri dari pemerkosaan, tapi bukti di lapangan menunjukkan pola pembunuhan berantai.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban adalah pria yang ia temui saat bekerja di jalanan atau bar.</li>
      <li>Ia menembak mereka dengan pistol dan mencuri barang-barang mereka.</li>
      <li>Motifnya kabur: antara pembelaan diri, trauma masa kecil, dan dendam terhadap pria.</li>
      <li>Beberapa korban ditemukan di hutan atau pinggir jalan dengan luka tembak.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Hukuman</h3>
    <ul>
      <li>Ditangkap pada 1991 setelah temannya bekerja sama dengan polisi.</li>
      <li>Mengaku bersalah atas tujuh pembunuhan dan dijatuhi hukuman mati.</li>
      <li>Dieksekusi dengan suntikan mati pada 2002.</li>
    </ul>

    <h3>🎥 Dampak Budaya</h3>
    <ul>
      <li>Diangkat dalam film <em>Monster</em> (2003) yang dibintangi Charlize Theron dan memenangkan Oscar.</li>
      <li>Kasus ini memicu debat tentang trauma, gender, dan keadilan dalam sistem hukum.</li>
      <li>Aileen jadi simbol kompleks antara korban dan pelaku dalam dunia kriminal.</li>
    </ul>

    <a href="https://id.wikipedia.org/wiki/Aileen_Wuornos" target="_blank" class="external-btn">
      🔗 Baca detail lengkap di Wikipedia
    </a>
  `
},
{
  title: "John Wayne Gacy",
  subtitle: "Amerika Serikat, 1972–1978 — Membunuh 33 anak laki-laki sambil tampil sebagai badut.",
  image:"https://m.media-amazon.com/images/S/pv-target-images/bb39cb85861e5bcf5febc226e36093055a8d7f3d95531c27701edaa85c82655a._SX1080_FMjpg_.jpg",
  content: `
    <h3>🧠 Profil Pelaku</h3>
    <p>John Wayne Gacy adalah pria asal Chicago yang dikenal sebagai “Killer Clown.” Ia aktif di komunitas, sering tampil sebagai badut bernama Pogo, dan bahkan sempat bertemu dengan tokoh politik. Tapi di balik itu, ia adalah pembunuh berantai yang mengincar anak laki-laki dan remaja pria.</p>

    <h3>🔪 Modus dan Korban</h3>
    <ul>
      <li>Korban dipancing dengan tawaran kerja atau hiburan, lalu dibawa ke rumahnya.</li>
      <li>Ia menyiksa, memperkosa, dan membunuh korban dengan cara dicekik atau disuntik.</li>
      <li>Sebagian besar jasad korban dikubur di bawah rumahnya, di ruang crawl space.</li>
      <li>Korban berusia antara 14–21 tahun, banyak dari mereka adalah anak jalanan atau pekerja paruh waktu.</li>
    </ul>

    <h3>⚖️ Penangkapan dan Hukuman</h3>
    <ul>
      <li>Ditangkap pada 1978 setelah penyelidikan hilangnya seorang remaja mengarah ke rumah Gacy.</li>
      <li>Ditemukan 29 jasad di bawah rumahnya, dan 4 lainnya di sungai.</li>
      <li>Dijatuhi hukuman mati dan dieksekusi dengan suntikan mati pada 1994.</li>
    </ul>

    <h3>🎥 Dampak Budaya</h3>
    <ul>
      <li>Kasus Gacy menginspirasi karakter horor seperti Pennywise dan jadi simbol “monster bertopeng.”</li>
      <li>Diangkat dalam dokumenter Netflix <em>Conversations with a Killer: The John Wayne Gacy Tapes</em>.</li>
      <li>Kasus ini memicu diskusi tentang predator sosial dan pentingnya pengawasan komunitas.</li>
    </ul>

    <a href="https://www.inilah.com/kasus-pembunuhan-tersadis-di-dunia" target="_blank" class="external-btn">
      🔗 Baca daftar kasus tersadis lainnya
    </a>
  `
},
];

// Elemen 
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const detailContainer = document.getElementById('detail-container');

// Fitur search + klik untuk tampilkan detail
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  detailContainer.innerHTML = '';

  const filtered = cases.filter(item => item.title.toLowerCase().startsWith(query));

  filtered.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    li.style.cursor = 'pointer';

    li.addEventListener('click', () => {
      const realIndex = cases.indexOf(item);
      renderCase(realIndex);
    });

    searchResults.appendChild(li);
  });
});

// Fungsi render detail kasus + navigasi
function renderCase(index) {
  const item = cases[index];
  detailContainer.innerHTML = `
    <div class="mystery-detail">
      <h2>${item.title}</h2>
      <p class="subtitle">${item.subtitle || ''}</p>
      ${item.image ? `<img src="${item.image}" alt="${item.title}" class="case-image" />` : ''}
      ${item.content}
      <p class="note">⚠️ Kasus ini mengandung konten sensitif dan penuh kontroversi.</p>

      <div class="nav-buttons">
        ${index > 0 ? `<button class="nav-btn" onclick="renderCase(${index - 1})">⬅️ Kasus Sebelumnya</button>` : ''}
        ${index < cases.length - 1 ? `<button class="nav-btn" onclick="renderCase(${index + 1})">➡️ Kasus Berikutnya</button>` : ''}
      </div>
    </div>
  `;

  window.scrollTo({ top: detailContainer.offsetTop, behavior: 'smooth' });
}

// Reveal animasi saat scroll 
function revealCasesOnScroll() {
  const cards = document.querySelectorAll('.case-card');
  const windowHeight = window.innerHeight;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 50) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealCasesOnScroll);
window.addEventListener('load', revealCasesOnScroll);

// Music
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

music.volume = 1; 
music.muted = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔊 Play";
  } else {
    music.play();
    musicBtn.textContent = "🔇 Stop";
  }
  isPlaying = !isPlaying;
});

const darkToggle = document.getElementById("dark-toggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
