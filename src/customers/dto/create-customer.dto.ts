import {
  IsBoolean,
  IsEmail,
  IsLatLong,
  IsLatitude,
  IsLongitude,
  IsString,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  address: string;

  @IsEmail()
  email: string;

  @IsString()
  telephone: string;

  @IsLatitude()
  latitude: string;

  @IsLongitude()
  longitude: string;

  @IsBoolean()
  active: boolean;
}
