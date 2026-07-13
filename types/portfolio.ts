export interface HeroStat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  availability: string;
  stats: HeroStat[];
  socialLinks: SocialLink[];
}