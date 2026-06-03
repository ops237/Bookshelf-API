# Bookshelf API

Bookshelf API adalah layanan RESTful API untuk mengelola koleksi buku digital. Proyek ini dikembangkan menggunakan **Node.js** dan **Express.js** dengan fokus pada *clean code*, validasi input yang ketat, dan manajemen data yang efisien.

## 🚀 Fitur Utama

* **CRUD Operations**: Manajemen buku lengkap (Create, Read, Update, Delete).
* **Advanced Filtering**: Filter pencarian buku berdasarkan nama, status baca (`reading`), dan status kelengkapan (`finished`).
* **Data Validation**: Validasi *request body* untuk menjaga integritas data di setiap *endpoint*.
* **RESTful Design**: Mengikuti standar HTTP *response code* dan struktur JSON yang konsisten.

## 🛠 Tech Stack

* **Runtime**: Node.js (LTS)
* **Framework**: Express.js
* **Library**: `nanoid` (untuk generate unique ID)
* **Environment**: JavaScript (ES Modules)

## 📋 API Endpoints

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `POST` | `/books` | Menambahkan buku baru |
| `GET` | `/books` | Mengambil seluruh daftar buku |
| `GET` | `/books/:id` | Mengambil detail buku spesifik |
| `PUT` | `/books/:id` | Memperbarui detail buku |
| `DELETE` | `/books/:id` | Menghapus buku dari koleksi |

## 📦 Cara Menjalankan Project

1. **Clone repository ini**:
```bash
   git clone https://github.com/ops237/Bookshelf-API
```
2. **Masuk ke direktori project**:
```bash
   cd bookshelf-api
```
3. **Install dependencies**:
```bash
   npm install
```
4. **Jalankan server**:
```bash
   npm run start
```
---

## 👨‍💻 Penulis

**Irfan Maulana Saputra**
*Fullstack Developer | Backend Engineer*

- GitHub: [github.com/ops237](https://github.com/ops237)
- Web: [Wabotku.site](https://wabotku.site)
