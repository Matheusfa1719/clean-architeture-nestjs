import { Days } from '../shared/enums';

export class Gcem {
  id?: string;
  name: string;
  meeting_day: Days;
  meeting_time: string;
  leaderId: string;
  supervisorId: string;
  areaId: string;
}
