import { Request, Response } from 'express';
import ListproductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';

export default class ProductsController {
  public async index(request: Request, response: Response) {
    const listProducts = new ListproductService();

    const products = listProducts.findProduct();

    return response.json(products);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;
    const showProduct = new ShowProductService();

    const product = showProduct.execute({ id });

    return response.json(product);
  }
}
