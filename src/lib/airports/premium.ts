import type { Photo } from "@/components/home/photos";

/** A local photograph with the full attribution needed for CC BY / CC BY-SA images. */
export type LicensedPhoto = Photo & {
  licenseUrl: string;
  changes: string;
  creditLine?: string;
  homepageUrl?: string;
  caption?: string;
};

export type PremiumIconName = "private" | "taxi" | "train" | "bus";

export type PremiumTransportCard = {
  title: string;
  label: string;
  text: string;
  image: string;
  alt: string;
  note: string;
  href: string;
  cta: string;
  icon: PremiumIconName;
  /** Attribution is rendered only for licensed photographs that need visible credit. */
  photo?: LicensedPhoto;
};

export type PremiumPickupPhoto = {
  image: string;
  alt: string;
  /** Attribution is rendered only when a licensed photograph is used. */
  photo?: LicensedPhoto;
};

export type PremiumGalleryPhoto = {
  photo: LicensedPhoto;
  caption: string;
  wide?: boolean;
};

export type PremiumCopy = {
  factsHeading: string;
  factsDescription: string;
  terminalsHeading: string;
  arrivalsTitle: string;
  pickupHeading: string;
  pickupDescription: string;
  taxiRankTitle: string;
  privatePickupTitle: string;
  compareHeading: string;
  compareDescription: string;
  comparisonTableHeading: string;
  trainFeatureTitle: string;
  taxiHeading: string;
  taxiDescription: string;
  routesHeading: string;
  routesDescription: string;
  decisionsHeading: string;
  galleryHeading: string;
  galleryDescription: string;
  tipsHeading: string;
  faqHeading: string;
  faqDescription: string;
  sourcesHeading: string;
  ctaHeading: string;
  ctaText: string;
  relatedHeading: string;
  relatedDescription: string;
};

/** All airport-specific presentation data for the reusable premium guide. */
export type PremiumAirportContent = {
  heroPhoto: LicensedPhoto;
  insetPhoto: LicensedPhoto;
  terminalPhoto: LicensedPhoto;
  railPhoto: LicensedPhoto;
  pickupPhoto: PremiumPickupPhoto;
  transportCards: PremiumTransportCard[];
  destinationPhotos: Record<string, LicensedPhoto>;
  destinationLabels: Record<string, string>;
  galleryPhotos: PremiumGalleryPhoto[];
  officialLinks: {
    terminal?: string;
    bus?: string;
  };
  captions: {
    inset: string;
    terminal: string;
    rail: string;
  };
  copy: PremiumCopy;
};
