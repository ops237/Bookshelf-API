Bookshelf API
Bookshelf API adalah sebuah layanan RESTful API backend yang dirancang untuk mengelola koleksi buku digital. Project ini dibangun dengan Node.js dan Express.js, menerapkan praktik clean code, validasi input yang ketat, dan pengelolaan data in-memory yang efisien.
🚀 Fitur Utama
CRUD Operations: Manajemen buku lengkap (Create, Read, Update, Delete).
Advanced Filtering: Mendukung filter pencarian berdasarkan nama, status baca (reading), dan status kelengkapan buku (finished).
Data Validation: Validasi request body untuk memastikan integritas data (menangani kasus missing field atau logika halaman yang tidak valid).
RESTful Design: Mengikuti standar HTTP response code dan struktur JSON yang konsisten.
🛠 Tech Stack
Runtime: Node.js (LTS)
Framework: Express.js
Dependency: nanoid (untuk generate unique ID)
Environment: JavaScript (ES Modules)
📋 API Endpoints
Method
Endpoint
Deskripsi
POST
/books
Menambahkan buku baru ke koleksi
GET
/books
Mengambil seluruh daftar buku
GET
/books/:id
Mengambil detail buku spesifik
PUT
/books/:id
Memperbarui detail buku
DELETE
/books/:id
Menghapus buku dari koleksi

📦 Cara Menjalankan Project
Clone repository ini:
git clone https://github.com/ops237/Bookshelf-API


Masuk ke direktori project:
cd bookshelf-api


Install dependencies:
npm install


Jalankan server:
# Production mode
npm run start


👨‍💻 Penulis
Irfan Maulana Saputra
Fullstack Developer | Backend Engineer
GitHub Profile
Wabotku.site
Project ini dibuat sebagai bagian dari submission Dicoding Indonesia (Back-End Developer).
