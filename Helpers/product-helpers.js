var db = require('../config/connection')
var collection = require('../config/collections')
var ObjectId = require('mongodb').ObjectId
module.exports = {

    getAllProducts: () => {
        return new Promise(async (resolve, reject) => {
            await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray().
                then((products) => {
                    resolve(products)
                })

        })
    },

    getOneProduct: (productId) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({ _id: ObjectId(productId) }).then((response) => {
                resolve(response)
            })
        })
    },
   


}
