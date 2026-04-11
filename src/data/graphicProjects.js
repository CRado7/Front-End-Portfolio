import OutpostPrimary from "../assets/theOutpost/Outpost-Primary.svg";
import OutpostSecondary from "../assets/theOutpost/Outpost-Secondary.svg";
import OutpostSubmark from "../assets/theOutpost/Outpost-Submark.svg";
import OutpostIcon from "../assets/theOutpost/Outpost-Icon.svg";
import OutpostAlt from "../assets/theOutpost/Outpost-Alt.svg";
import Mockup1 from "../assets/theOutpost/mockup-1.jpg";
import Mockup2 from "../assets/theOutpost/mockup-2.jpg";

import centralBoysLax from "../assets/centralBoysLax/centralShooters.png";
import Blocker from "../assets/centralBoysLax/centralBlockerBase.png";
import WhiteBase from "../assets/centralBoysLax/centralWhiteBase.png";
import VegasGold from "../assets/centralBoysLax/centralVegasGold.png";
import CentralWhite from "../assets/centralBoysLax/centralWhite.png";
import PMS425 from "../assets/centralBoysLax/centralPMS425.png";
import ShooterTee from "../assets/centralBoysLax/mockups/Shooter-Tee.png";
import ShooterHoodie from "../assets/centralBoysLax/mockups/Shooter-Hoodie.png";

export const graphicProjects = [
  {
    title: "Central High School Boys Lacrosse Shirt Design",
    slug: "central-lacrosse-shirt",
    client: "Central High School Boys Lacrosse Team",
    role: "Graphic Designer",
    tags: ["Apparel", "Sports", "Print Design"],
    description: "Design for a lacrosse team shirt — incorporating the team name, mascot, and school colors into a bold graphic for screen printing. Parameters included a classic looking three color design for black polyester shirts, with a focus on legibility and impact from a distance.",
    size: "small",
    projectType: "Print Design",
    logos: [
      { label: "Graphic",      usage: "Shooter Shirts",             image: centralBoysLax },
      { label: "Blocker Base", usage: "Carbon Blocker Base", image: Blocker },
      { label: "White Base",  usage: "White Base",   image: WhiteBase },
      { label: "Vegas Gold", usage: "Vegas Gold Ink", image: VegasGold },
      { label: "Central White", usage: "Central White Ink", image: CentralWhite },
      { label: "PMS 425", usage: "Accent Color Ink", image: PMS425 },
    ],

    colors: [
      { name: "Vegas Gold",  hex: "#cab671", rgb: "R 202  G 182  B 113",       type: "primary" },
      { name: "Central White",  hex: "#FFFFFF", rgb: "R 255 G 255 B 255",    type: "primary" },
      { name: "PMS 425", hex: "#54585A", rgb: "R 84 G 88 B 90", type: "secondary" },
      // Add accent and secondary colors here
    ],

    typography: null,

    mockups: [ShooterTee, ShooterHoodie],
  },

  {
    title: "The Off Season Outpost Identity",
    slug: "off-season-outpost-brand",
    client: "The Off Season Outpost",
    role: "Brand Designer",
    tags: ["Branding", "Apparel", "Logo System"],
    description: "Brand identity for an apparel company — logo mark, lockups, color system, and apparel mockups showing the brand applied to merchandise.",
    thumbnail: OutpostPrimary,
    size: "small",
    projectType: "Logo System & Brand Identity",
    logos: [
      { label: "Primary Logo",     usage: "Main brand application.", image: OutpostPrimary },
      { label: "Secondary Logo",   usage: "Compact layouts and co-branding.",  image: OutpostSecondary },
      { label: "Submark",          usage: "Favicons, embroidery, small print.", image: OutpostSubmark },
      { label: "Icon / Logo Mark", usage: "Subtle brand mark on apparel.",      image: OutpostIcon },
      { label: "Alternate Logo",   usage: "Alternative lockup for specific applications.", image: OutpostAlt },
    ],

    colors: [
      { name: "PNW Green",   hex: "#1b2e28", rgb: "R 27 G 46 B 40",    type: "secondary" },
      { name: "Siesta Key Sand",  hex: "#c97330", rgb: "R 0  G 0  B 255",    type: "accent" },
      { name: "Secondary Gray", hex: "#d4cbbc", rgb: "R 136 G 136 B 136", type: "primary" },
    ],

    typography: [
      { fontName: "Font Name Light",      style: "Light",      tracking: null,  usage: "Primary typeface." },
      { fontName: "Font Name Bold",       style: "Bold",       tracking: null,  usage: "Headlines and display." },
      { fontName: "Font Name ExtraLight", style: "ExtraLight", tracking: "100", usage: "Caption and accent text." },
    ],

    mockups: [Mockup1, Mockup2],
  },

  // {
  //   title: "Springfield Rifles Rebrand",
  //   slug: "springfield-rifles-rebrand",
  //   client: "Springfield Rifles",
  //   role: "Graphic Designer",
  //   tags: ["Rebrand", "Sports", "Print + Digital"],
  //   description: "Visual refresh of an existing sports organization brand — updated logo system, color palette, and print collateral including event programs and signage.",
  //   size: "small",

  //   logos: [
  //     { label: "Primary Logo",     usage: "Primary use across all applications.", image: null },
  //     { label: "Secondary Logo",   usage: "Alternate lockup for constrained layouts.", image: null },
  //     { label: "Submark",          usage: "Social media and small-format print.", image: null },
  //     { label: "Icon / Logo Mark", usage: "Icon-only applications.", image: null },
  //   ],

  //   colors: [
  //     { name: "Brand Black",  hex: "#000000", rgb: "R 0  G 0  B 0",    type: "primary" },
  //     { name: "Brand White",  hex: "#FFFFFF", rgb: "R 255 G 255 B 255", type: "primary" },
  //   ],

  //   typography: [
  //     { fontName: "Font Name Light",      style: "Light",      tracking: null,  usage: "Primary typeface." },
  //     { fontName: "Font Name Bold",       style: "Bold",       tracking: null,  usage: "Headlines." },
  //     { fontName: "Font Name ExtraLight", style: "ExtraLight", tracking: "100", usage: "Accent text." },
  //   ],

  //   mockups: [null, null],
  // },

  // {
  //   title: "Print Collateral Suite",
  //   slug: "print-collateral",
  //   client: "Various",
  //   role: "Graphic Designer",
  //   tags: ["Print", "Collateral", "Multi-client"],
  //   description: "A collection of print design work spanning business cards, brochures, event flyers, and trade show materials across multiple clients.",
  //   size: "large",

  //   logos: [], // No logo system — collateral-only project

  //   colors: [
  //     { name: "Brand Black",  hex: "#000000", rgb: "R 0  G 0  B 0",    type: "primary" },
  //     { name: "Brand White",  hex: "#FFFFFF", rgb: "R 255 G 255 B 255", type: "primary" },
  //   ],

  //   typography: [
  //     { fontName: "Font Name Light",      style: "Light",      tracking: null,  usage: "Primary typeface." },
  //     { fontName: "Font Name Bold",       style: "Bold",       tracking: null,  usage: "Headlines." },
  //     { fontName: "Font Name ExtraLight", style: "ExtraLight", tracking: "100", usage: "Accent text." },
  //   ],

  //   mockups: [null, null, null],
  // },
];
