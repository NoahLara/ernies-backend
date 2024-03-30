import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { EntityManager, Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = new Customer(createCustomerDto);
    return await this.entityManager.save(customer);
  }

  async findAll() {
    return await this.customersRepository.find();
  }

  async findOne(customer_id: string) {
    return await this.customersRepository.findOneBy({ customer_id });
  }

  async update(customer_id: string, updateCustomerDto: UpdateCustomerDto) {
    let customer = await this.customersRepository.findOneBy({ customer_id });
  
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
  
    this.customersRepository.merge(customer, updateCustomerDto);
  
    return await this.customersRepository.save(customer);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
