const express = require("express");
const router = express.Router();
const Supplier = require("../../models/supplier");
var autoIncrement = require('mongoose-auto-increment');


//GET ALL
router.get("/", (req, res, next) => {
 
   Supplier
    .find()
    .then(result => {
        res.status(200)
            .json(result);
    })

    .catch(error => {
        console.log(error);
    })
});

router.get('/:id', (req, res, next)=> {
    Supplier.findOne({supplierId : req.params.id}, (err,Supplier)=>{
        if(err){
            res.json(err);
        }
        else {
            res.json(Supplier);
        }
    });
});

router.post("/", (req, res, next) => {
    try {

        const supplier = new Supplier({
            name: req.body.name,
            address: req.body.address,
            email:req.body.email,
            phone:req.body.phone,
            status:req.body.status,
            inventoryItemsList:req.body.inventoryItems
        })
        supplier.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }
            res.status(201).json({
                message: "Supplier Added",
                result
            });
        });
    } catch (error) {
        console.log(error);
    }
});
router.put('/supplier/update/:id', (req, res, next)=>{
    Supplier.findOneAndUpdate({supplierId:req.params.id},{$set:{
            name: req.body.name,
            address: req.body.address,
            email:req.body.email,
            phone:req.body.phone,
            status:req.body.status,
            itemsList:req.body.itemsList,
            rating:req.body.rating
    }}, (err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Successfully Updated',obj:result});
        }
    });
});

router.put('/supplier/update/rating/:id', (req, res, next)=>{
    Supplier.findOneAndUpdate({supplierId:req.params.id},{$set:{
            rating:req.body.rating
    }}, (err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Successfully Updated',obj:result});
        }
    });
});
router.put('/supplier/status/:id', (req, res, next)=>{
    Supplier.findOneAndUpdate({supplierId:req.params.id},{$set:{
        status: req.body.status,
    }}, (err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Successfully Updated Status',obj:result});
        }
    });
});

router.delete('/:id', (req, res, next) => {
    Supplier.remove({
        supplierId: req.params.id
    }, (err, item) => {
        if (err) return res.json(err);
        res.json({
            msg: "Supplier deleted",
        });
    });
});
module.exports = router;