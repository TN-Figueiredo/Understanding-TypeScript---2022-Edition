import "reflect-metadata";
import { Product } from "./product.model";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

const newProd = new Product("asdasd", 5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product("A book", 12.99);

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

console.log("newProd", newProd);
