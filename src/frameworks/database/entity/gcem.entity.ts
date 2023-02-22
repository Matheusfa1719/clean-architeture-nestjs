import { Days } from 'src/core/shared/enums';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Gcem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ enum: Days })
  meeting_day: Days;

  @Column()
  meeting_time: string;

  @OneToOne(() => User)
  @JoinColumn()
  leaderId: string;

  @OneToOne(() => User)
  @JoinColumn()
  supervisorId: string;

  @OneToOne(() => User)
  @JoinColumn()
  areaId: string;
}
