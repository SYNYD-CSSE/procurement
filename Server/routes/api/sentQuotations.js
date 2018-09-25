const express = require("express");
const router = express.Router();
const sentQuotation = require("../../models/sentQuotation");


router.get("/", (req, res, next) => {
 
    sentQuotation
     .find()
     .populate('supplier', 'name -_id')
     .populate('order', 'orderDate -_id')
     .then(result => {
         res.status(200)
             .json(result);
     })
 
     .catch(error => {
         console.log(error);
     })
 });
router.post("/", (req, res, next) => {
    try {
        const newQuote = new sentQuotation({
            supplier: req.body.supplier,
            order: req.body.order,
            sentItemsList: req.body.sentItemsList
        });
        newQuote.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                });
            }
            res.status(201).json({
                message: "Quotation sent",
                result
            });
        });
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;