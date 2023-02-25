import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import Product from '../../../modules/products/typeorm/entities/Product';

class ListproductService {
  async findProduct(): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);
    const products = await productRepository.findProduct();
    return products;
  }
}

export default ListproductService;
