# Website Portofolio Tailwind CSS
Website portofolio yang dibangun menggunakan HTML, CSS, JavaScript, dan Tailwind CSS. Proyek ini dikembangkan berdasarkan tutorial yang disampaikan oleh Pak Sandika di [Channel YouTube-nya](https://www.youtube.com/@sandhikagalihWPU). Tutorial lengkapnya dapat teman - teman lihat pada [tautan ini](https://www.youtube.com/watch?v=8Ea4oq8qFtM&t=816s&pp=ygUSd3B1IHRhaWx3aW5kIHBvcnRv).

## Daftar Isi
- [Pendahuluan](#pendahuluan)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Penjelasan Singkat](#penjelasan-singkat)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)


## Pendahuluan
Website ini dirancang sebagai portofolio pribadi untuk menampilkan proyek-proyek, keterampilan, dan pengalaman yang telah saya miliki dalam bidang programming. Website ini adalah aplikasi satu halaman (Single Page Application) atau biasa disebut Landing Page yang terdiri dari beberapa bagian, seperti Tentang Saya, Portofolio, Blog, Tech dan Kontak.


## Teknologi yang Digunakan
Proyek ini dibangun menggunakan teknologi-teknologi berikut:

- **HTML5**
- **CSS3** 
- **Tailwind CSS**
- **JavaScript**
- **Git**
- **GitHub**

## Penjelasan Singkat
Di dalam proyek ini, terdapat beberapa file dan folder. Berikut adalah penjelasan singkat mengenai isi dari direktori proyek:

- **`index.html`**:
  Ini adalah file utama dari website portofolio yang berisi struktur HTML. File ini memuat semua konten utama..

- **`robots.txt`**:
  File ini digunakan untuk mengatur akses crawler mesin pencari ke halaman-halaman tertentu di website Teman - teman. Dengan konfigurasi di `robots.txt`, Teman - teman bisa menentukan halaman mana yang diizinkan atau tidak diizinkan untuk diindeks oleh mesin pencari seperti Google.

- **`tailwind.config.js`**:
  File konfigurasi ini digunakan untuk mengatur Tailwind CSS. Teman - teman bisa menyesuaikan tema, warna, tipografi, dan breakpoints di sini agar sesuai dengan kebutuhan desain proyek Teman - teman.

- **`src/`**:
  Direktori ini berisi aset-aset yang digunakan oleh website, seperti gambar, ikon, dan file CSS serta JavaScript.

- **`review/`**:
  Di dalam folder ini, terdapat dua website tambahan yang saya buat berdasarkan referensi dari video tutorial Pak Sandhika Galih di YouTube. Kedua website tersebut adalah:
  - **Website Wedding**
  - **Website Coffee Shop**

Untuk mempelajari lebih lanjut tentang bagaimana kedua website ini dibangun, Teman - teman bisa menonton video tutorial yang saya ikuti:
- [Website Wedding - Tutorial oleh Pak Sandhika Galih](https://www.youtube.com/watch?v=1lCKoLKTzRk&pp=ygULd3B1IHdlZGRpbmc%3D)
- [Website Coffee Shop - Tutorial oleh Pak Sandhika Galih](https://www.youtube.com/watch?v=MCVkMmYL-aY&pp=ygUJd3B1IGNvZmVl)


## Instalasi
Teman - teman dipersilakan untuk menggunakan dan memodifikasi kode ini sesuai kebutuhan Teman - teman. Saya berharap proyek ini bisa membantu Teman - teman dalam belajar dan mengembangkan website portofolio pribadi Teman - teman. Berikut langkah - langkahnya

1. Download zip dan extract atau jika punya git bisa clone repository:
   ```bash 
   git clone https://github.com/RizqullahY/raflyasligalek.git 
   ```
2. Menginstall dependensi:
   ```bash 
   npm install
   ```
3. Bila ingin mengubah style - style tailwind, pada direktori yang sama dengan index.html jalankan:
   ```bash 
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```



