export type TrustedManufacturer = {
  id: string;
  name: string;
  mark: string;
  focus: string;
  logoPath?: string;
  /** Accent tint for brand name */
  brandColor: string;
};

/**
 * Same-path logo updates are cached by the browser and by Next.js `next/image`.
 * Bump this whenever you replace a file under `/public/images/` without renaming.
 */
export const BRAND_LOGO_ASSET_VERSION = "2";

function brandLogo(path: string) {
  return `${path}?v=${BRAND_LOGO_ASSET_VERSION}`;
}

export const trustedManufacturers: TrustedManufacturer[] = [
  {
    id: "newtechwood",
    name: "NewTechWood",
    mark: "NTW",
    focus: "Composite cladding & decking",
    logoPath: brandLogo("/images/Newtechwood.jpg"),
    brandColor: "#3d5245",
  },
  {
    id: "maibec",
    name: "Maibec",
    mark: "MB",
    focus: "Wood siding & shingles",
    logoPath: brandLogo("/images/maibec-logo.webp"),
    brandColor: "#5c4a3d",
  },
  {
    id: "cape-cod-siding",
    name: "Cape Cod Siding",
    mark: "CC",
    focus: "PVC & specialty profiles",
    logoPath: brandLogo("/images/capecodsiding.jpg"),
    brandColor: "#3d5a5c",
  },
  {
    id: "james-hardie",
    name: "James Hardie",
    mark: "JH",
    focus: "Fiber cement & trim",
    logoPath: brandLogo("/images/jameshardie.jpg"),
    brandColor: "#6b4038",
  },
  {
    id: "ready-pine",
    name: "Ready Pine",
    mark: "RP",
    focus: "Pre-finished wood siding",
    logoPath: brandLogo("/images/readypine.jpg"),
    brandColor: "#5c573d",
  },
  {
    id: "fastplank",
    name: "FastPlank",
    mark: "FP",
    focus: "Engineered cladding systems",
    logoPath: brandLogo("/images/fastplank.jpg"),
    brandColor: "#454954",
  },
  {
    id: "timbertech",
    name: "TimberTech",
    mark: "TT",
    focus: "Composite decking & railing",
    logoPath: brandLogo("/images/timbertech.jpg"),
    brandColor: "#3d4d42",
  },
  {
    id: "trex",
    name: "Trex",
    mark: "TX",
    focus: "Composite decking",
    logoPath: brandLogo("/images/trex-logo.jpg"),
    brandColor: "#2f4550",
  },
  {
    id: "lp-siding",
    name: "LP Siding",
    mark: "LP",
    focus: "Engineered wood siding",
    logoPath: brandLogo("/images/LA.jpg"),
    brandColor: "#6b5238",
  },
];
