import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
          email: 'john@email'
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
          email: 'maria@email'
        },
      ];
    
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
