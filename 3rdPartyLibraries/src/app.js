"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const product_model_1 = require("./product.model");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const products = [
    { title: "A carpet", price: 29.99 },
    { title: "A book", price: 10.99 },
];
const newProd = new product_model_1.Product("asdasd", 5.99);
(0, class_validator_1.validate)(newProd).then((errors) => {
    if (errors.length > 0) {
        console.log("VALIDATION ERRORS");
        console.log(errors);
    }
    else {
        console.log(newProd.getInformation());
    }
});
// const p1 = new Product("A book", 12.99);
const loadedProducts = (0, class_transformer_1.plainToClass)(product_model_1.Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
console.log("newProd", newProd);
