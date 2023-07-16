import { ReactNode } from "react";

export interface SocialLink {
  id: number;
  child: ReactNode;
  href: string;
  style?: string;
}
