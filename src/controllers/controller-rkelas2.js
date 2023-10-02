const config = require('../configs/database');
const mysql = require('mysql');
const connection = mysql.createConnection(config);
connection.connect();

const getDataRkelas2 = async (req,res) => {
    const data = await new Promise((resolve,reject) => {
        connection.query('SELECT * FROM lantai1_rkelas2', function(error,rows){
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
const addDataRkelas2 = async(req,res) => {
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
        connection.query('INSERT INTO lantai1_rkelas2 SET ?;',[data],function(error,rows){
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
const editDataRkelas2 = async(req,res) => {
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
        connection.query('UPDATE lantai1_rkelas2 SET ? WHERE id = ?;', [dataEdit,id],function(error,rows){
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
const deleteDataRkelas2 = async(req,res) => {
    let id = req.params.id;
    const result = await new Promise((resolve,reject) => {
        connection.query('DELETE FROM lantai1_rkelas2 WHERE id = ?;',[id],function(error,rows){
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
    getDataRkelas2,
    addDataRkelas2,
    editDataRkelas2,
    deleteDataRkelas2
}