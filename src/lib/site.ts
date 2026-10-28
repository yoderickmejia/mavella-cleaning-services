/**
 * Central content + configuration hub for Mavella Cleaning Services.
 * All customer-facing copy is taken verbatim from the client's text file.
 *
 * NOTE: Items marked PLACEHOLDER are not provided by the client and must be
 * replaced with real business details before launch. They are centralized
 * here (and overridable via env) so they can be swapped in one place.
 */

export const site = {
  name: "Mavella Cleaning Services",
  shortName: "Mavella",
  tagline: "Home feels good, clean feels better.",
  description:
    "Mavella Cleaning Services makes it easier to enjoy a home that feels as good as it looks. From everyday cleaning to detailed deep cleans, we take care of the mess, the buildup, and those little details that make a real difference. So you can spend less time worrying about cleaning and more time enjoying your space.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.mavellacleaning.com",

  // PLACEHOLDER contact details — replace with the client's real information.
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || "(555) 014-2080",
    phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || "+15550142080",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@mavellacleaning.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "15550142080",
    serviceArea: "Proudly serving Seattle, WA & nearby neighborhoods",
    serviceAreaCity: "Seattle, WA",
    hours: "Mon–Fri: 8:00 AM – 6:00 PM · Sat: 9:00 AM – 2:00 PM",
    hoursShort: "Mon–Fri 8–6 · Sat 9–2",
  },
} as const;

// Where Mavella operates — Seattle, WA and the neighborhoods it serves.
export const serviceArea = {
  city: "Seattle, WA",
  eyebrow: "Service Areas",
  heading: "Proudly Serving Seattle, WA",
  description:
    "From neighborhood homes to apartments across Seattle, we're here to help keep your space clean and comfortable.",
  note: "Not sure if we cover your neighborhood? Send us your ZIP code and we'll confirm availability.",
  neighborhoods: [
    "Ballard",
    "Queen Anne",
    "Green Lake",
    "West Seattle",
    "Fremont",
    "Magnolia",
    "Capitol Hill",
    "University District",
    "Beacon Hill",
    "Downtown Seattle",
    "Columbia City",
    "Wallingford",
  ],
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Cleaning Tips", href: "/cleaning-tips" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  smallHeading: "A FRESHER SPACE STARTS HERE",
  headline: "Come Home to Clean. Stay for the Feeling.",
  description:
    "Your home should be a place to unwind, not another item on your to-do list. Mavella takes cleaning off your hands, leaving you with a fresher, more comfortable space to come back to.",
  primaryCta: { label: "Get a Free Quote", href: "/quote" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const servicesIntro = {
  heading: "Your Space, Taken Care Of.",
  description:
    "Every space has different needs. Whether it's keeping your home in shape, giving a room the deep clean it needs, or getting a property ready for its next chapter, we'll help you find the right cleaning service for the job.",
};

export const services: Service[] = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    description:
      "A cleaner home without having to do it all yourself. We'll help keep your everyday spaces neat, fresh, and comfortable.",
    image: "/images/residential.webp",
    imageAlt: "A bright, tidy living room after a Mavella residential cleaning",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "For the dirt, dust, and buildup that regular cleaning can miss. A more detailed clean for the places that need extra attention.",
    image: "/images/deep-clean.webp",
    imageAlt: "A squeegee clearing soapy foam from a glass surface during a deep clean",
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    description:
      "Give your team and customers a cleaner place to work, meet, and get things done.",
    image: "/images/commercial.webp",
    imageAlt: "Professional cleaners servicing a modern open-plan office",
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    description:
      "Moving is enough work already. Let us help prepare your space for a fresh start, whether you're arriving or leaving.",
    image: "/images/move-clean.webp",
    imageAlt: "A spotless, freshly cleaned kitchen ready for move-in",
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction Cleaning",
    description:
      "After the work is done, there's still the cleanup. We'll help clear away the dust and mess left behind by construction or renovations.",
    image: "/images/post-construction.webp",
    imageAlt: "A worker vacuuming construction dust from a newly tiled floor",
  },
  {
    slug: "customized-cleaning",
    title: "Customized Cleaning",
    description:
      "Have a specific cleaning need? Tell us what your space needs, and we'll help you find the right solution.",
    image: "/images/custom-clean.webp",
    imageAlt: "Gloved hands with a foaming sponge cleaning at a kitchen sink",
  },
];

export const about = {
  heading: "We Take Cleaning Seriously, So You Don't Have To.",
  paragraphs: [
    "At Mavella Cleaning Services, we know that a clean space is about more than appearances. It's the comfort of settling into a tidy home, the relief of having one less thing to worry about, and the feeling of walking into a space that's been properly cared for.",
    "That's why we focus on the details, respect every space we work in, and approach each service with care. Our goal is simple: to make your day a little easier, one clean space at a time.",
  ],
  values: [
    {
      title: "Care in Every Detail",
      // Supporting line written by us (not in client text) — see report.
      detail: "We pay attention to the corners and finishes that are easy to miss.",
    },
    {
      title: "Respect for Your Space",
      detail: "Your home or workplace is treated with consideration every visit.",
    },
    {
      title: "Reliable Service",
      detail: "Dependable cleaning you can plan your week around.",
    },
    {
      title: "Your Satisfaction Matters",
      detail: "We're not happy until your space feels right to you.",
    },
  ],
  cta: { label: "Get to Know Mavella", href: "/about" },
};

export const quote = {
  heading: "Tell Us What Your Space Needs.",
  description:
    "Every cleaning job is different. Share a few details about your space and the service you're looking for, and we'll be in touch to discuss your needs.",
  submitLabel: "Request My Quote",
};

export const howItWorks = {
  heading: "Four Steps to a Fresher Space.",
  steps: [
    {
      title: "Tell Us What You Need",
      description:
        "Let us know about your space, the type of cleaning you're looking for, and any areas that need extra attention.",
    },
    {
      title: "Get Your Quote",
      description:
        "We'll review the details and help you understand the service that best fits your needs.",
    },
    {
      title: "Leave the Cleaning to Us",
      description:
        "We'll take care of the agreed cleaning tasks while you focus on the things that matter to you.",
    },
    {
      title: "Enjoy the Difference",
      description:
        "Come back to a cleaner, fresher space and enjoy the feeling of having one less thing on your list.",
    },
  ],
};

export const promo = {
  heading: "Your Next Fresh Start Is Just a Step Away.",
  description:
    "You've got better things to do than spend your free time catching up on cleaning. Let Mavella help you create a space you'll love coming back to.",
  cta: { label: "Let's Get Started", href: "/quote" },
};

export const whyChoose = {
  heading: "It's the Little Details That Make a Difference.",
  description:
    "A good cleaning is about more than what you notice at first glance. It's the overlooked corners, the surfaces that need extra care, and the difference a well-cared-for space makes to your day. We approach every service with those details in mind.",
  items: [
    {
      title: "Attention to Detail",
      description: "We pay attention to the areas that can easily be overlooked.",
    },
    {
      title: "Care for Your Space",
      description:
        "Your home or workplace deserves to be treated with consideration and respect.",
    },
    {
      title: "Cleaning That Fits Your Needs",
      description:
        "We help you choose a service based on your space and what you want to get done.",
    },
    {
      title: "A Better Everyday Experience",
      description: "Our goal is to make maintaining a clean space feel easier and less stressful.",
    },
  ],
};

// Honest, content-derived figures (no fabricated client metrics) — see DECISIONS.
export const stats = [
  { value: 6, suffix: "", label: "Specialized cleaning services" },
  { value: 4, suffix: "-step", label: "Simple, transparent process" },
  { value: 100, suffix: "%", label: "Focused on your satisfaction" },
];

export const tips = {
  heading: "Little Habits. Cleaner Spaces.",
  description:
    "Keeping a space clean doesn't have to feel like a full-time job. Explore practical tips and simple routines that can help you stay on top of everyday messes between professional cleaning visits.",
  articles: [
    {
      slug: "cleaner-between-visits",
      title: "Keep Your Home Cleaner Between Visits",
      excerpt: "Small habits that help prevent everyday messes from piling up.",
    },
    {
      slug: "kitchen-fresh-start",
      title: "Give Your Kitchen a Fresh Start",
      excerpt: "Simple ways to tackle common kitchen messes and keep the space feeling fresh.",
    },
    {
      slug: "time-for-a-deep-clean",
      title: "When Is It Time for a Deep Clean?",
      excerpt: "Learn the signs that your space might need more than your usual cleaning routine.",
    },
  ],
};

export const reviews = {
  heading: "A Clean Space Speaks for Itself. So Do Our Customers.",
  description:
    "Choosing someone to clean your space comes with trust. We're working to make every customer experience one worth talking about.",
  // Client note: "Display genuine customer reviews here once available."
  placeholderNote: "Display genuine customer reviews here once available.",
};

export const newsletter = {
  heading: "A Little More Freshness in Your Inbox.",
  description:
    "Get helpful cleaning tips, updates from Mavella, and special offers delivered straight to your inbox.",
  fieldPlaceholder: "Enter Your Email Address",
  submitLabel: "Sign Me Up",
};

export const contact = {
  heading: "Let's Talk About Your Space.",
  description:
    "Not sure which service you need? Have a question before booking? Tell us what's on your mind, and we'll help you figure out the next step.",
  submitLabel: "Send My Message",
  whatsappLabel: "Chat With Us",
};

export const footer = {
  brand: site.name,
  tagline: site.tagline,
  blurb:
    "A well-cared-for space changes how a day feels. Mavella Cleaning Services helps make it easier to enjoy a cleaner, more comfortable home or workplace.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ],
  serviceLinks: [
    { label: "Residential Cleaning", href: "/services#residential-cleaning" },
    { label: "Deep Cleaning", href: "/services#deep-cleaning" },
    { label: "Commercial Cleaning", href: "/services#commercial-cleaning" },
    { label: "Move-In / Move-Out Cleaning", href: "/services#move-in-move-out-cleaning" },
    { label: "Other Available Services", href: "/services" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
  copyright: `© ${new Date().getFullYear()} Mavella Cleaning Services. All Rights Reserved.`,
};

// Select options for forms (service / property) derived from the services list.
export const serviceOptions = services.map((s) => s.title);
export const propertyTypeOptions = [
  "House",
  "Apartment / Condo",
  "Office",
  "Retail / Commercial",
  "Other",
];
