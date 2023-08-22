const mongoose = require('mongoose')

const mhsSchema = new mongoose.Schema({
    nim:{
        required: true,
        type: string
    },
    nama : string,
    angkatan : string,
    prodi : string,
})
module.exports = mongoose.model('mahasiswa',mhsSchema)