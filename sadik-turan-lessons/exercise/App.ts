import { Product } from "./product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result: any;

// result = _productService.getProducts();
// result = _productService.getById(2);

let product: Product = new Product(2,'IPhoneX','Telefon',9000);

// _productService.deleteProduct(_productService.getById(2))
_productService.saveProduct(product);

result = _productService.getProducts();

console.log(result);
