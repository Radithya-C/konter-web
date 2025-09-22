// Animasi logo saat halaman dibuka
window.addEventListener('load', () => {
  const logoImg = document.getElementById('logo-img');
  logoImg.style.opacity = '1';
  logoImg.style.transform = 'translateY(0)';
});

// Data kasus misteri
const cases = [
  {
   title : 'Brandon Swanson',
subtitle : 'Hilang Tanpa Jejak di Malam Gelap',
Image : '',
content : `Pada malam 14 Mei 2008, Brandon Swanson, seorang mahasiswa berusia 19
 tahun dari Minnesota, Amerika Serikat, mengalami kecelakaan ringan saat mengemudi.
  Ia menelepon orang tuanya dan mengatakan akan berjalan menuju kota terdekat. Selama 47 menit, 
  ia berbicara di telepon sambil berjalan di kegelapan. Tiba-tiba, ia berkata "Oh, SHIT" dan panggilan terputus.
   Sejak saat itu, Brandon tidak pernah ditemukan.
Pencarian besar-besaran dilakukan, termasuk menggunakan anjing pelacak dan drone, 
namun tidak ada jejak Brandon yang ditemukan. Lokasi terakhirnya pun membingungkan, karena ia ternyata berada jauh dari
 tempat yang ia kira. Hingga kini, kasus ini tetap menjadi salah satu misteri hilangnya orang yang paling membingungkan di Amerika.
Apakah Brandon jatuh ke sungai? Apakah ia bertemu seseorang di jalan? Atau ada sesuatu yang lebih gelap terjadi malam itu? 
Tidak ada yang tahu. Misteri Brandon Swanson tetap menggantung, menantang logika dan teknologi pencarian modern.`
  }
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const detailContainer = document.getElementById('detail-container');

// Fitur search + klik untuk tampilkan detail
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  detailContainer.innerHTML = '';

  const filtered = cases.filter(item => item.title.toLowerCase().includes(query));
  filtered.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    li.style.cursor = 'pointer';
    li.addEventListener('click', () => {
      detailContainer.innerHTML = `
        <div class="mystery-detail">
          <h2>${item.title}</h2>
          <p class="subtitle">${item.subtitle}</p>
          <p>${item.content}</p>
          <p class="note">⚠️ Kasus ini belum terpecahkan. Informasi terbatas dan penuh teka-teki.</p>
        </div>
      `;
      window.scrollTo({ top: detailContainer.offsetTop, behavior: 'smooth' });
    });
    searchResults.appendChild(li);
  });
});

const wave = document.querySelector('.wave');
let position = 0;

function animateWave() {
  position -= 0.5;
  wave.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateWave);
}

animateWave();