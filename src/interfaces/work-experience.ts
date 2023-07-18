export interface LifePhase {
  id: number;
  title: String;
  start: String;
  end: String;
  details: Detail[];
  role?: String;
}

interface Detail {
  id: number;
  point: String;
}
