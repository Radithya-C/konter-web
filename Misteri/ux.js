// Animasi logo saat halaman dibuka
window.addEventListener('load', () => {
  const logoImg = document.getElementById('logo-img');
  logoImg.style.opacity = '1';
  logoImg.style.transform = 'translateY(0)';
});

// Data kasus misteri
const cases = [
  {
    title: "Nozomi 176",
    subtitle: "Japan, 1995 — A high-speed train, a sudden silence.",
    content: `
      Pada tanggal 27 November 1995, kereta peluru Nozomi 176 yang melaju dari Hakata menuju Tokyo tiba-tiba berhenti di tengah perjalanan tanpa penjelasan. Penumpang melaporkan suara aneh sebelum sistem komunikasi terputus. Tidak ada korban jiwa, namun penyebab gangguan tersebut tidak pernah diumumkan secara resmi.

      Beberapa teori bermunculan: gangguan elektromagnetik, sabotase, bahkan eksperimen militer rahasia. Pemerintah Jepang menutup laporan investigasi, memicu spekulasi dan konspirasi yang terus berkembang hingga hari ini.
    `
  },
  {
    title: "Unit 731",
    subtitle: "Manchuria — Science turned sinister.",
    content: `
      Unit militer rahasia Jepang yang melakukan eksperimen biologi kejam terhadap manusia selama Perang Dunia II. Banyak data eksperimen disembunyikan dan tidak pernah dipublikasikan secara resmi.
    `
  },
  {
  title: "Judul Kasus",
  subtitle: "Deskripsi singkat atau lokasi + tahun",
  content: `Penjelasan detail tentang kasus, teori, atau misteri yang mau kamu tampilkan.`
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