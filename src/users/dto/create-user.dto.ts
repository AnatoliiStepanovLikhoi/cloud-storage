import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'mango@mail.com',
  })
  email: string;
  @ApiProperty({
    default: 'Alex',
  })
  fullName: string;
  @ApiProperty({
    default: '12345',
  })
  password: string;
}
