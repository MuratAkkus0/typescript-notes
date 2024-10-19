"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
// result = _productService.getProducts();
// result = _productService.getById(2);
var product = new product_1.Product(2, 'IPhoneX', 'Telefon', 9000);
// _productService.deleteProduct(_productService.getById(2))
_productService.saveProduct(product);
result = _productService.getProducts();
console.log(result);
