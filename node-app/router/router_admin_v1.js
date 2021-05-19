/*********************************************************************************************************** */
//                                  This is API Router for APP                                     //
/********************************************************************************************************* */


const apiEndpint = "/api/v1";
const productController = require('../controllers/product')




module.exports.set = (app) => {
    app.post(apiEndpint + '/addProduct', productController.addProduct);
    app.get(apiEndpint + '/getproducts', productController.getProducts);
}

