import express from 'express'
import { nanoid } from 'nanoid'
const router = express.Router()
let db = []

router.post('/books', (req, res) => {
    const { name, year = 0, author = "", summary = "", publisher = "", pageCount = 0, readPage = 0, reading = false } = req?.body || {}
    if (!name) return res.status(400).json({
        status: "fail",
        message: "Gagal menambahkan buku. Mohon isi nama buku"
    })
    if (readPage > pageCount) return res.status(400).json({
        status: "fail",
        message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
    })
    let fwdb = { name, year, author, summary, publisher, pageCount, readPage, reading }
    fwdb.id = nanoid()
    fwdb.finished = false
    if (pageCount === readPage) {
        fwdb.finished = true
    }
    fwdb.insertedAt = new Date().toISOString()
    fwdb.updatedAt = new Date().toISOString()
    db.push(fwdb)
    res.status(201).json({
        status: "success",
        message: "Buku berhasil ditambahkan",
        data: {
            bookId: fwdb.id
        }
    })
})

router.get('/books', (req, res) => {
    const formatBuku = db.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
    }));
    res.status(200).json({
        status: "success",
        data: { books: formatBuku }
    })
})

router.get('/books/:id', (req, res) => {
    let { id } = req.params
    const book = db.find((b) => b.id === id);
    if (!book) return res.status(404).json({
        status: "fail",
        message: "Buku tidak ditemukan"
    })
    res.status(200).json({
        status: "success",
        data: {
            book: book
        }
    })
})

router.put('/books/:id', (req, res) => {
    let { id } = req.params;
    const index = db.findIndex((b) => b.id === id);

    if (index === -1) return res.status(404).json({
        status: "fail",
        message: "Gagal memperbarui buku. Id tidak ditemukan"
    });

    const {
        name, year, author, summary, publisher, pageCount, readPage, reading
    } = req?.body || {};

    if (!name) return res.status(400).json({
        status: "fail",
        message: "Gagal memperbarui buku. Mohon isi nama buku"
    });

    if (readPage > pageCount) return res.status(400).json({
        status: "fail",
        message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
    });

    db[index] = {
        ...db[index], 
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        finished: pageCount === readPage,
        updatedAt: new Date().toISOString()
    };
    res.status(200).json({
        status: "success",
        message: "Buku berhasil diperbarui"
    });
});

router.delete("/books/:id", (req, res) => {
    let { id = "" } = req.params || ""
    const book = db.find((b) => b.id === id);
    if (!book) return res.status(404).json({
        status: "fail",
        message: "Buku gagal dihapus. Id tidak ditemukan"
    })
    db = db.filter(item => item.id !== id);
    res.status(200).json({
        status: "success",
        message: "Buku berhasil dihapus"
    })
})

export default router