const express = require("express");
const router = express.Router();
const InventoryItem = require("../../models/inventory_item");



//get all inventory items of a suppiler
router.get('/:supplier', (req, res, next)=> {
    InventoryItem.find({supplier: req.body.supplier}), (err,InventoryItem)=>{
        if(err){
            res.json(err);
        }
        else {
            res.json(InventoryItem);
        }
        }   
});

router.post("/", (req, res, next) => {
    try {

        const inventoryItem = new InventoryItem({
            item: req.body.item,
            unitprice:req.body.unitprice,
            manufacturer:req.body.manufacturer,
            category:req.body.category,
            quantity:req.body.quantity,
            totalValue:req.body.totalValue
        })
        inventoryItem.save((err, result) => {
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
router.put('/updateitems/:id', (req, res, next)=>{
    user.findOneAndUpdate({_id:req.params.id},{$set:{
        item: req.body.item,
    }}, (err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'Successfully Updated',obj:result});
        }
    });
});

module.exports = router;