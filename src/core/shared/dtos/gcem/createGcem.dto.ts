import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMilitaryTime, IsString, IsUUID } from 'class-validator';
import { Days } from '../../enums';

export class CreateGcemDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ enum: Days })
  @IsEnum(Days)
  meeting_day: Days;

  @ApiProperty()
  @IsMilitaryTime()
  meeting_time: string;

  @ApiProperty()
  @IsUUID()
  leaderId: string;

  @ApiProperty()
  @IsUUID()
  supervisorId: string;

  @ApiProperty()
  @IsUUID()
  areaId: string;
}
