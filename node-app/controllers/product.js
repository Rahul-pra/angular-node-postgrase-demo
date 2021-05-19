const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

/**
 * Add Product
 * @param {*} req 
 * @param {*} res 
 */

exports.addProduct = (req, res) => {
    Product.create(req.body)
        .then(task => {
            res.status(200).send({
                status: true,
                message: "Product Added successfully!",
                data: task
            });
        })
        .catch(err => {
            res.status(500).send({ status: false, message: err.message });
        });
};

/**
 * get Products
 * @param {*} req 
 * @param {*} res 
 */
exports.getProducts = (req, res) => {
    Product.findAll({
        order: [
            ['createdAt', 'DESC'],
        ],
    })
        .then(tasks => {
            res.status(200).send({
                status: true,
                data: tasks
            });
        })
        .catch(err => {
            res.status(500).send({ status: false, message: err.message });
        });
};


/**
 * edit Products
 * @param {*} req 
 * @param {*} res 
 */
exports.editProduct = (req, res) => {

    let data = req.body

    let query = {
        where: { id: req.params.id },
        returning: true,
    }

    Product.update(data, query).then(updatedTask => {
        res.status(200).send({
            status: true,
            data: updatedTask,
            message: "Subtask updated successfully!",
        });
    })
        .catch(err => {
            res.status(500).send({ status: false, message: err.message });
        });
};
