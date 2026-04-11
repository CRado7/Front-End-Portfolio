import POWDERMEMBER from "../assets/powderCo/PowderCo-Member.png";
import POWDERREWARDS from "../assets/powderCo/PowderCo-Rewards.png";
import POWDERSEASON from "../assets/powderCo/PowderCo-Season.png";
import POWDERMOUNTAIN from "../assets/powderCo/PowderCo-Mountain.png";
import POWDERLAST from "../assets/powderCo/PowderCo-Last.png";

import NoXP from "../assets/rifles/emails/No-XP.png";
import NoXPChair from "../assets/rifles/emails/No-XP_Chair.png";
import XP from "../assets/rifles/emails/XP.png";
import XPChair from "../assets/rifles/emails/XP_Chair.png";
import SPONSOR from "../assets/rifles/emails/Sponsor.png";
import SPONSORBOARD from "../assets/rifles/emails/Sponsor_Board.png";

import OWNER from "../assets/theOutpost/emails/OwnerEmail.png";
import CUSTOMER from "../assets/theOutpost/emails/CustomerEmail.png";

export const emailProjects = [
  {
    title: "Powder & Co. Loyalty Program Campaign",
    slug: "loyalty-program",
    client: "Powder & Co.",
    role: "Email Designer",
    tags: ["Coded Email", "Campaign", "Outdoor Sports", "5-Part Series"],
    description: "A five-email campaign for a snowboard company loyalty program — a member early access, new season drop, opening day countdown, last chance sale reminder, and a member status email.",
    // images: [POWDERMEMBER, POWDERSEASON, POWDERMOUNTAIN, POWDERLAST, POWDERREWARDS],
    images: [
      {
        src: POWDERMEMBER,
        alt: "Powder & Co. Member Email",
        title: "Member Early Access Email",
        codeFile: "/emails/powder-member.html",
      },
      {
        src: POWDERSEASON,
        alt: "Powder & Co. Season Drop Announcement Email",
        title: "Season Drop Announcement Email",
        codeFile: "/emails/powder-season.html",
      },
      {
        src: POWDERMOUNTAIN,
        alt: "Powder & Co. Opening Day Countdown Email",
        title: "Opening Day Countdown Email",
        codeFile: "/emails/powder-mountain.html",
      },
      {
        src: POWDERLAST,
        alt: "Powder & Co. Last Chance Sale Reminder Email",
        title: "Last Chance Sale Reminder Email",
        codeFile: "/emails/powder-last.html",
      },
      {
        src: POWDERREWARDS,
        alt: "Powder & Co. Rewards Program Email",
        title: "Rewards Program Email",
        codeFile: "/emails/powder-rewards.html",
      }
    ],
    coded: true,
    zipUrl: "/powder-co_emails.zip",  // folder containing the individual email files
  },
  {
    title: "Springfield Rifles Player & Sponsor Email System",
    slug: "springfield-rifles-emails",
    client: "Springfield Rifles RFC",
    role: "Email Designer",
    tags: ["Automated Emails", "Dynamic Content", "Transactional Email"],
    description:
      "A fully automated email system triggered by form submissions on the Springfield Rifles RFC website. Player inquiries generate personalized confirmation emails with dynamic messaging based on the applicant’s rugby experience, and are routed to either the men’s or women’s recruiting chair depending on the team selected. Sponsor inquiries trigger a branded confirmation email for the sender and a detailed notification email sent to the club board.",
    images: [
      {
        src: NoXP,
        alt: "Springfield Rifles Player Inquiry Email - No Rugby Experience",
        title: "Player Inquiry Email - No Rugby Experience",
        codeFile: null,
      },
      {
        src: NoXPChair,
        alt: "Springfield Rifles Recruiting Chair Notification Email - No Rugby Experience",
        title: "Recruiting Chair Notification Email - No Rugby Experience",
        codeFile: null,
      },
      {
        src: XP,
        alt: "Springfield Rifles Player Inquiry Email - Rugby Experience",
        title: "Player Inquiry Email - Rugby Experience",
        codeFile: null,
      },
      {
        src: XPChair,
        alt: "Springfield Rifles Recruiting Chair Notification Email - Rugby Experience",
        title: "Recruiting Chair Notification Email - Rugby Experience",
        codeFile: null,
      },
      {
        src: SPONSOR,
        alt: "Springfield Rifles Sponsor Inquiry Confirmation Email",
        title: "Sponsor Inquiry Confirmation Email",
        codeFile: null,
      },
      {
        src: SPONSORBOARD,
        alt: "Springfield Rifles Sponsor Inquiry Board Notification Email",
        title: "Sponsor Inquiry Board Notification Email",
        codeFile: null,
      },
    ],
    coded: false,
  },
  {
    title: "The Off-Season Outpost Customer & Owner Quote Request Emails",
    slug: "off-season-outpost-emails",
    client: "The Off-Season Outpost",
    role: "Email Designer",
    tags: ["Automated Emails", "Transactional Email", "Customer Communication"],
    description: "Two automated email templates for a small business — a customer confirmation email triggered by quote request form submissions, and an internal notification email sent to the business owner with the details of the request.",
    images: [
      {
        src: CUSTOMER,
        alt: "Off-Season Outpost Customer Quote Request Confirmation Email",
        title: "Customer Quote Request Confirmation Email",
        codeFile: null,
      },
      {
        src: OWNER,
        alt: "Off-Season Outpost Owner Quote Request Notification Email",
        title: "Owner Quote Request Notification Email",
        codeFile: null,
      },
    ],
    coded: false,
  },
];
