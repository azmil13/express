const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

const getDataFrontOffice = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT * FROM lantai1_frontoffice', function(error,rows){
            if(rows) {
                resolve(rows)
            } else{
                reject([]);
            }
        });
    });
    if (data) {
        res.send({
            success: true,
            message: 'Berhasil ambil data',
            data: data
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal ambil data!',
        });
    }
}
//menambah data
const addDataFrontOffice = async(req,res) => {
    let data = {
        no : req.body.no,
        nama_barang : req.body.nama_barang,
        merek : req.body.merek,
        tipe : req.body.tipe,
        model : req.body.model,
        ruangan : req.body.ruangan,
        jumlah : req.body.jumlah,
        tahun_peroleh : req.body.tahun_peroleh,
        nilai_peroleh : req.body.nilai_peroleh,
        nilai_perbaikan : req.body.nilai_perbaikan,
        no_inventaris : req.body.no_inventaris,
        kondisi : req.body.kondisi,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('INSERT INTO lantai1_frontoffice SET ?;',[data],function(error,rows){
            if (rows) {
                resolve(true)
            }else{
                reject(false)
            }
        });
    });
    if(result){
        res.send({
            success : true,
            message : 'Berhasil menambah data!'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal menambah data'
        });
    }
}
//mengubah data
const editDataFrontOffice = async(req,res) => {
    let id = req.params.id;

    let dataEdit= {
        no : req.body.no,
        nama_barang : req.body.nama_barang,
        merek : req.body.merek,
        tipe : req.body.tipe,
        model : req.body.model,
        ruangan : req.body.ruangan,
        jumlah : req.body.jumlah,
        tahun_peroleh : req.body.tahun_peroleh,
        nilai_peroleh : req.body.nilai_peroleh,
        nilai_perbaikan : req.body.nilai_perbaikan,
        no_inventaris : req.body.no_inventaris,
        kondisi : req.body.kondisi,
    }
    const result = await new Promise((resolve,reject) => {
        connection.query('UPDATE lantai1_frontoffice SET ? WHERE id = ?;', [dataEdit,id],function(error,rows){
            if(rows) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    });
    if(result){
        res.send({
            success: true,
            message: 'Berhasil edit data'
        });
    } else{
        res.send({
            success: false,
            message: 'Gagal edit data'
        });
    }
}
//menghapus data
const deleteDataFrontOffice = async(req,res) => {
    let id = req.params.id;
    const result = await new Promise((resolve,reject) => {
        connection.query('DELETE FROM lantai1_frontoffice WHERE id = ?;',[id],function(error,rows){
            if(rows){
                resolve(true)
            } else{
                reject(false)
            }
        });
    });
    if(result){
        res.send({
            success: true,
            message: 'Berhasil Hapus Data'
        });
    } else {
        res.send({
            success: false,
            message: 'Gagal Hapus Data'
        });
    }
}
module.exports = {
    getDataFrontOffice,
    addDataFrontOffice,
    editDataFrontOffice,
    deleteDataFrontOffice
}