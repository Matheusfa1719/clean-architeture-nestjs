import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashServices {
  async encrypt(value: string) {
    const saltOrRounds = await bcrypt.genSalt(10);
    return await bcrypt.hash(value, saltOrRounds);
  }

  async compare(value: string, hash: string) {
    return await bcrypt.compare(value, hash);
  }
}
