export type TrustedManufacturer = {
  id: string;
  name: string;
  mark: string;
  focus: string;
  /** Muted brand tint; revealed when grayscale filter lifts on hover */
  brandColor: string;
};

export const trustedManufacturers: TrustedManufacturer[] = [
  {
    id: "newtechwood",
    name: "NewTechWood",
    mark: "NTW",
    focus: "Composite cladding & decking",
    brandColor: "#3d5245",
  },
  {
    id: "maibec",
    name: "Maibec",
    mark: "MB",
    focus: "Wood siding & shingles",
    brandColor: "#5c4a3d",
  },
  {
    id: "cape-cod-siding",
    name: "Cape Cod Siding",
    mark: "CC",
    focus: "PVC & specialty profiles",
    brandColor: "#3d5a5c",
  },
  {
    id: "james-hardie",
    name: "James Hardie",
    mark: "JH",
    focus: "Fiber cement & trim",
    brandColor: "#6b4038",
  },
  {
    id: "ready-pine",
    name: "Ready Pine",
    mark: "RP",
    focus: "Pre-finished wood siding",
    brandColor: "#5c573d",
  },
  {
    id: "fastplank",
    name: "FastPlank",
    mark: "FP",
    focus: "Engineered cladding systems",
    brandColor: "#454954",
  },
  {
    id: "timbertech",
    name: "TimberTech",
    mark: "TT",
    focus: "Composite decking & railing",
    brandColor: "#3d4d42",
  },
  {
    id: "trex",
    name: "Trex",
    mark: "TX",
    focus: "Composite decking",
    brandColor: "#2f4550",
  },
  {
    id: "lp-siding",
    name: "LP Siding",
    mark: "LP",
    focus: "Engineered wood siding",
    brandColor: "#6b5238",
  },
];
