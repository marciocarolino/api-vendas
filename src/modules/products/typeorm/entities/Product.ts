import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'price', type: 'decimal' })
  price: number;

  @Column({ name: 'quantity' })
  quantity: number;

  @Column({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}

export default Product;
