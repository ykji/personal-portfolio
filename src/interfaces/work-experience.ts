export interface LifePhase {
  id: number;
  title: string;
  start: string;
  end: string;
  details: Detail[];
  role?: string;
}

interface Detail {
  id: number;
  point: string;
}
