import Reia from "../assets/Reia-Thumb.png"
  import REIAHOME from "../assets/reia/Reia-Home.png"
  import REIARESULTS from "../assets/reia/Reia-Results.png"
  import REIARESOURCES from "../assets/reia/Reia-Resources.png"
import TPS from "../assets/InkHive-Thumb.png"
import TOO from "../assets/Outpost-Thumb.png"
import RRFC from "../assets/Rifles-Thumb.png"
  import HOME from "../assets/rifles/Home.png"
  import HOMENEW from "../assets/rifles/Home-New.png"

export const projects = [
  {
    title: "Reia Health",
    slug: "reia-health",
    role: "Web Designer & Front-End Developer",
    stack: ["WordPress", "Custom Theme", "Illustrator"],
    link: "https://reiahealth.com",
    thumbnail: Reia,
    image: Reia,
    modalContent: {
      overview: {
        client: "Reia Health",
        role: "Web Designer & Front-End Developer",
        timeline: "4 weeks",
        scope:
          "Design and build a modern, scalable marketing website in preparation for an upcoming healthcare conference.",
        siteStatus: "Live",
        statusColor: "green",
      },

      context:
        "Reia Health needed to transition away from a restrictive Squarespace setup to a platform that allowed for better content control, scalability, and long-term growth.",

      constraints: [
        "Tight deadline due to upcoming conference launch",
        "Existing brand direction needed refinement, not a full rebrand",
        "Non-technical stakeholders required an easy-to-manage CMS",
      ],

      responsibilities: [
        "Led website design from wireframes to final UI",
        "Developed a custom WordPress theme for flexibility and performance",
        "Translated brand values into a clean, professional visual system",
        "Ensured mobile responsiveness and cross-browser compatibility",
      ],

      process: [
        "Audited existing Squarespace site to identify content and structural limitations",
        "Designed a streamlined page hierarchy focused on clarity and conversion",
        "Built reusable components to allow the team to scale content post-launch",
        "Iterated quickly with stakeholders to meet launch deadline",
      ],

      outcomes: [
        "Successfully launched ahead of conference deadline",
        "Improved content flexibility compared to previous Squarespace site",
        "Established a scalable foundation for future feature expansion",
      ],

      metrics: {
        qualitative: [
          "Positive stakeholder feedback on usability and clarity",
          "Reduced friction when updating and managing content",
        ],
        quantitative: null,
      },

      beforeAfter: null,

      screenshots: [
        {
          heading: "WEBSITE PREVIEW",
          subheading: null,
          images: [
            {
              image: REIAHOME,
              title: "Homepage",
              caption: "Previous homepage with basic content blocks and limited visual hierarchy. New design focuses on clearer information architecture and improved styling."
            },
            {
              image: REIARESULTS,
              title: "Schedule Page",
              caption: null
            },
            {
              image: REIARESOURCES,
              title: "Sponsor Page",
              caption: null
            },

          ]
        }
      ],
    },
  },

  // ============================================================
  // 2) QUOTE TOOL (S&S API)
  // ============================================================
  {
    title: "InkHive Quote Calculator",
    slug: "inkhive-quote-calculator",
    role: "Front-End Developer",
    stack: ["React", "S&S Activewear API", "Pricing Logic", "UI Components"],
    link: "https://theprintshop.onrender.com",
    thumbnail: TPS,
    image: TPS,
    modalContent: {
      overview: {
        client: "Internal Screen Print Shop Tool",
        role: "Front-End Developer",
        timeline: "Demo Build / In Use Internally",
        scope:
          "InkHive is a quoting tool that pulls real-time product data and generates accurate customer quotes with markup and job inputs. The link is a demo version of the app, but the tool is currently under development for Shark Tooth Graphics. Development will include a full back-end intergration with secure logins and a database to store quotes and customer info. The goal is to create a fast, user-friendly quoting system that can eventually expand into order management and invoicing.",
        siteStatus: "In use internally",
        statusColor: "orange",
      },

      context:
        "Screenprint shops needed a faster way to quote apparel jobs without manually searching product pricing and stock. The goal was to reduce quoting time and standardize pricing across orders.",

      constraints: [
        "Needed to be simple enough for non-technical staff to use",
        "Pricing rules had to stay flexible (markup, color count, locations, etc.)",
        "Required real-time product search and variant selection",
      ],

      responsibilities: [
        "Built a React-based quoting interface with a clean workflow",
        "Integrated S&S Activewear API to search products and pull pricing/variants",
        "Created pricing logic for markup, quantity, and job inputs",
        "Designed the UI to minimize clicks and speed up quoting",
      ],

      process: [
        "Mapped the quoting process from how the shop currently prices jobs",
        "Built a product search flow (style → color → size breakdown)",
        "Implemented controlled inputs for quantity, markup, and locations",
        "Refactored UI into reusable components to keep the app scalable",
      ],

      outcomes: [
        "Reduced quoting friction and improved consistency across staff",
        "Created a reusable foundation that can expand into invoicing or ordering",
        "Set up a project that can be refactored into React Native later",
      ],

      metrics: {
        qualitative: [
          "Faster quoting compared to manual lookups",
          "More consistent pricing and fewer calculation mistakes",
        ],
        quantitative: null,
      },
      beforeAfter: null,

      screenshots: [],
    },
  },

  // ============================================================
  // 3) OFF SEASON OUTPOST - CATALOG + PAYMENT PLATFORM
  // ============================================================
  {
    title: "The Off Season Outpost Catalog, Quote & Payment Platform",
    slug: "off-season-outpost-catalog",
    role: "Front-End Developer / Web Manager",
    stack: ["React", "Stripe", "Product Catalog UI", "Responsive Design"],
    link: "https://offseasonoutpost.com",
    emailLink: "/email-design/off-season-outpost-emails",
    graphicLink: "/graphic-design/off-season-outpost-brand",
    thumbnail: TOO,
    image: TOO,
    modalContent: {
      overview: {
        client: "The Off Season Outpost",
        role: "Front-End Developer / Web Manager",
        timeline: "Planned / In development",
        scope:
          "Build a lightweight platform for retailers to view available designs, request quotes, and pay for orders without needing a full marketing website.",
        siteStatus: "Live",
        statusColor: "green",
      },

      context:
        "The company needed a clean, simple way for retailers to browse designs, request quotes and submit payment for orders. The focus was speed, clarity, and removing friction when looking at products and requesting quotes — not a full website build.",

      constraints: [
        "Not a full site — only catalog + quote + payment flow",
        "Checkout needed to feel trustworthy and simple",
        "Had to work smoothly on mobile",
      ],

      responsibilities: [
        "Designed a simple product catalog UI optimized for browsing",
        "Planned a Stripe-based checkout flow for customer payments",
        "Structured the project to allow easy expansion into a full site later",
        "Focused on clean UX patterns and fast load performance",
      ],

      process: [
        "Defined the minimum viable flow: browse → select → quote request → pay",
        "Designed modular catalog cards and product detail layouts",
        "Mapped checkout steps to minimize drop-off",
        "Planned a scalable structure for future add-ons (orders, admin, etc.)",
      ],

      outcomes: [
        "Created a focused platform aligned with business needs (no extra fluff)",
        "Designed a foundation that can expand into a full storefront later",
        "Established a clean system for design browsing + payments",
      ],

      metrics: {
        qualitative: [
          "Clearer customer experience than manual payment methods",
          "Designed to reduce friction and speed up order completion",
        ],
        quantitative: null,
      },

      beforeAfter: null,

      screenshots: [],
    },
  },

  // ============================================================
  // 4) SPRINGFIELD RIFLES - WEB MANAGER / CONTENT + UPDATES
  // ============================================================
  {
    title: "Springfield Rifles Website",
    slug: "springfield-rifles-website",
    role: "Web Design & Front-End Development / Web Manager",
    stack: [
      "CMS Updates",
      "Content Systems",
      "UI Maintenance",
      "Responsive Design",
      "Email Automation & Styling",
      "Google Sheets API Integration",
      "Performance QA"
    ],
    link: "https://springfield-rifles.onrender.com", // update when live or staging URL is available
    emailLink: "/email-design/springfield-rifles-emails",
    graphicLink: null,
    thumbnail: RRFC,
    image: RRFC,
    modalContent: {
      overview: {
        client: "Springfield Rifles",
        role: "Web Design + Development / Web Manager",
        timeline: "Ongoing",
        scope:
          "Redesigned and rebuilt the website from a Google Site to a fully custom, responsive platform with content management via Google Sheets, automated email workflows, and front-end improvements. Ensured volunteers could update schedules, events, and rosters without technical knowledge. This site is currently hosted on render as a staging environment while we finalize content and features before launch.",
        siteStatus: "In Development / Staging",
        statusColor: "orange",
      },
  
      context:
        "The club previously relied on a Google Site, which allowed basic updates but limited layout control, styling flexibility, and operational workflows. The redesign introduced a modern front-end system with CMS-like simplicity, email automation, and dynamic content updates via Google Sheets API for non-technical board members.",
  
      constraints: [
        "Updates had to be fast and low-risk to avoid disrupting live site content",
        "Design changes needed to stay consistent with the existing brand system",
        "All content and features needed to remain responsive and functional across devices",
        "Automated communication systems needed to send dynamic, styled emails correctly based on user input",
        "Content editing needed to be accessible for non-technical board members via Google Sheets"
      ],
  
      responsibilities: [
        "Managed all website updates and content changes",
        "Maintained consistent UI and brand styling across pages",
        "Developed automated, styled email workflows for new player inquiries and sponsor communications",
        "Ensured dynamic email routing based on user selections (e.g., Mens/Womens recruiting)",
        "Built a sponsor display page with submission form that triggers automated emails to relevant board members",
        "Integrated Google Sheets API to allow board members to update schedules, events, and rosters without coding",
        "Improved layout responsiveness, overall polish, and site reliability",
        "Performed QA and regression testing for all updates and new features"
      ],
  
      process: [
        "Audited recurring site issues and prioritized fixes",
        "Created repeatable content patterns for consistent page updates",
        "Integrated automated email systems with dynamic content based on form submissions",
        "Built Google Sheets API integration to manage content for non-technical users",
        "Tested all updates and features across multiple device sizes and browsers",
        "Maintained a clean, scalable workflow for future updates and feature extensions"
      ],
  
      outcomes: [
        "Successfully migrated from Google Site to fully custom platform",
        "Reliable, visually consistent updates and feature additions",
        "Dynamic recruitment emails that reach the correct recruiting chair with personalized content",
        "Sponsor form system with automated responses and internal routing",
        "Board members can now update schedules, events, and rosters via Google Sheets without technical intervention",
        "Improved efficiency for volunteers managing content and communications",
        "Enhanced overall presentation and functionality of the site"
      ],
  
      metrics: {
        qualitative: [
          "Automated email systems reduced manual outreach and improved accuracy",
          "Consistent UI styling and responsive layouts improved user experience",
          "Faster, lower-risk updates for ongoing content and features",
          "Non-technical board members can manage key content independently via Google Sheets"
        ],
        quantitative: null // optional: could add engagement numbers or email open rates if available
      },

      beforeAfter: {
          before: {
              description: "Previous Google Site layout with limited styling and layout control. See link at top of page for new website",
              image: HOME
            },
            after: {
              description: "New custom-built website with improved styling, layout, and content management capabilities.",
              image: HOMENEW // optional: could add a screenshot of the new homepage here
            }
        },
  
      screenshots: [
        // {
        //   heading: "BEFORE CONTENT UPDATE",
        //   subheading: "Previous Google Site layout with limited styling and layout control. See link at top of page for new website",
        //   images: [
        //     {
        //       image: HOME,
        //       title: "Homepage",
        //       caption: "Previous homepage with basic content blocks and limited visual hierarchy. New design focuses on clearer information architecture and improved styling."
        //     },
        //     {
        //       image: SCHEDULE,
        //       title: "Schedule Page",
        //       caption: null
        //     },
        //     {
        //       image: SPONSORS,
        //       title: "Sponsor Page",
        //       caption: null
        //     },
        //     {
        //       image: BOD,
        //       title: "Board of Directors Page",
        //       caption: null
        //     }
        //   ]
        // }
      ]// Add screenshots for new pages, email templates, sponsor page
    },
  },
]
