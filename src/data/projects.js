export const projects = [
  {
    title: "Reia Health",
    slug: "reia-health",
    role: "Web Designer & Front-End Developer",
    stack: ["WordPress", "Custom Theme", "Illustrator"],
    link: "https://reiahealth.com",
    modalContent: {
      overview: {
        client: "Reia Health",
        role: "Web Designer & Front-End Developer",
        timeline: "4 weeks",
        scope:
          "Design and build a modern, scalable marketing website in preparation for an upcoming healthcare conference.",
        siteStatus: "Live",
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

      screenshots: [],
    },
  },

  // ============================================================
  // 2) QUOTE TOOL (S&S API)
  // ============================================================
  {
    title: "Quote Calculator",
    slug: "ss-quote-calculator",
    role: "Front-End Developer",
    stack: ["React", "S&S Activewear API", "Pricing Logic", "UI Components"],
    link: null,
    modalContent: {
      overview: {
        client: "Internal Screen Print Shop Tool",
        role: "Front-End Developer",
        timeline: "Ongoing",
        scope:
          "Build a quoting tool that pulls real-time product data and generates accurate customer quotes with markup and job inputs.",
        siteStatus: "In use internally",
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

      screenshots: [],
    },
  },

  // ============================================================
  // 3) OFF SEASON OUTPOST - CATALOG + PAYMENT PLATFORM
  // ============================================================
  {
    title: "Off Season Outpost Payments + Catalog",
    slug: "off-season-outpost-catalog-payments",
    role: "Front-End Developer / Web Manager",
    stack: ["React", "Stripe", "Product Catalog UI", "Responsive Design"],
    link: null,
    modalContent: {
      overview: {
        client: "Off Season Outpost",
        role: "Front-End Developer / Web Manager",
        timeline: "Planned / In development",
        scope:
          "Build a lightweight platform for customers to view available designs and pay for orders without needing a full marketing website.",
        siteStatus: "In development",
      },

      context:
        "The company needed a clean, simple way for customers to browse designs and submit payment for orders. The focus was speed, clarity, and removing friction — not a full website build.",

      constraints: [
        "Not a full site — only catalog + payment flow",
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
        "Defined the minimum viable flow: browse → select → pay",
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

      screenshots: [],
    },
  },

  // ============================================================
  // 4) SPRINGFIELD RIFLES - WEB MANAGER / CONTENT + UPDATES
  // ============================================================
  {
    title: "Springfield Rifles Website Management",
    slug: "springfield-rifles-web-management",
    role: "Web Manager / Front-End Support",
    stack: ["CMS Updates", "Content Systems", "UI Maintenance", "Performance QA"],
    link: null,
    modalContent: {
      overview: {
        client: "Springfield Rifles",
        role: "Web Manager / Front-End Support",
        timeline: "Ongoing",
        scope:
          "Maintain and improve the website through content updates, design consistency, and front-end improvements.",
        siteStatus: "Live / Ongoing support",
      },

      context:
        "The site required ongoing updates and improvements to keep content current, maintain design consistency, and ensure everything remained functional across devices.",

      constraints: [
        "Updates needed to be fast and low-risk (live site)",
        "Changes had to stay consistent with the existing brand system",
        "Needed to avoid breaking layouts across responsive breakpoints",
      ],

      responsibilities: [
        "Managed website updates and content changes",
        "Maintained UI consistency across pages and new content sections",
        "Improved layout responsiveness and overall polish",
        "Performed QA to prevent regressions during updates",
      ],

      process: [
        "Audited recurring issues and prioritized fixes",
        "Created repeatable patterns for page updates",
        "Tested changes across common device sizes and browsers",
        "Maintained a clean workflow for future updates",
      ],

      outcomes: [
        "Improved reliability and consistency of updates",
        "Reduced friction when adding new content",
        "Kept the site stable while improving overall presentation",
      ],

      metrics: {
        qualitative: [
          "More consistent page layouts and fewer styling issues",
          "Faster turnaround on content updates",
        ],
        quantitative: null,
      },

      screenshots: [],
    },
  },
]
