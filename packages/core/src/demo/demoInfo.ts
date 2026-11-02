export type DemoSize = "S" | "M" | "L";

export interface DemoInfo {
  slug: string;
  business: string;
  trade: string;
  city: string;
  size: DemoSize;
  thumbnail: string;
}
