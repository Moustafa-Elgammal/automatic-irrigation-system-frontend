export class Plot {
  id: number | undefined;
  name: string | undefined;
  slot: any;
  amount: number | undefined;
  period: number | undefined;
  sensor_status: boolean = true;
  attempts_to_recall: number = 1;
  recalled_attempts: number = 0;
}
