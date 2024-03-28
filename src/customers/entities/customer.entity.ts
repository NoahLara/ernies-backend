import { createHash } from 'crypto';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryColumn()
  customer_id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  active: boolean;

  constructor(customer: Partial<Customer>) {
    Object.assign(this, customer);
  }

  @BeforeInsert()
  generateUserId() {
    // Generate an unique hash
    const hash = createHash('sha256')
      .update(Date.now().toString())
      .digest('hex');

    // taking first 8 letters from hash
    this.customer_id = hash.substring(0, 8);
  }
}
