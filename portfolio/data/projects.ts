export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  problem: string;
  solution: string;
  statusBadge: string;
  statusType: string;
  githubLink?: string;
  netlifyLink?: string;
  role: string;
  type: string;
  tech: string[];
  features: string[];
  mainImage: string;
  galleryImages: { label: string; src: string }[];
  setupCommands: { cmd: string; result: string }[];
  nextProject: { id: string; name: string } | null;
}

export const projectsData: Record<string, Project> = {
  pesaflow: {
    id: "pesaflow",
    title: "M-Pesa Payment Operations Platform",
    category: "FINANCIAL API / PAYMENT GATEWAY",
    subtitle:
      "A production-focused payments backend integrating M-Pesa's Daraja API — built to handle real transaction flows, not a tutorial clone.",
    problem:
      "Most payment demos stop at 'send a request, get a response.' Real M-Pesa integrations live and die on what happens after — asynchronous callbacks, failed transaction retries, and giving different users the right level of visibility into money moving through the system.",
    solution:
      "This platform was built to handle that reality: STK Push initiation, Business-to-Business transfers, and a callback listener that updates transaction status the instant M-Pesa confirms it — surfaced to the client in real time over WebSockets instead of a manual refresh.",
    statusBadge: "● PRIVATE REPO — DEMOABLE ON REQUEST",
    statusType: "private",
    role: "Solo Backend Developer",
    type: "Backend / Payments",
    tech: [
      "Node.js",
      "Express",
      "Sequelize",
      "PostgreSQL",
      "WebSockets",
      "JWT + RBAC",
      "Redis",
      "Flutter",
      "Dart",
    ],
    features: [
      "STK Push payment initiation with status tracking end-to-end",
      "Business-to-Business (B2B) transfer support",
      "Asynchronous callback handling for real-time payment confirmation",
      "Real-time client updates via WebSockets — no polling",
      "JWT authentication with role-based access control (admin / cashier / accountant / developer)",
      "RESTful endpoints for payment initiation & tracking",
    ],
    mainImage: "/pesaflow-main-2.png",
    galleryImages: [
      { label: "Merchant Login Screen", src: "/pesaflow-login.jpeg" },
      {
        label: "Initiaite STK Push",
        src: "/pesaflow-stk-push.jpeg",
      },
      {
        label: "Initiate Business Buy-Goods Payment",
        src: "/pesaflow-b2buygoods.jpeg",
      },
    ],
    setupCommands: [
      { cmd: "$ npm install", result: "✓ dependencies installed" },
      { cmd: "$ npm run dev", result: "✓ server listening on :4000" },
    ],
    nextProject: { id: "suna-motors", name: "Suna Motors Bazar" },
  },
  "suna-motors": {
    id: "suna-motors",
    title: "Suna Motors Bazar",
    category: "AUTOMOTIVE MANAGEMENT PLATFORM",

    githubLink: "https://github.com/DOSSA-HASAN/suna-motors-bazar",

    subtitle:
      "A modern web-based platform for managing vehicle inventory, specifications, and listings through an intuitive administrative dashboard.",

    problem:
      "Managing vehicle inventory manually can be inefficient and error-prone, making it difficult to maintain accurate listings, images, and vehicle specifications.",

    solution:
      "Developed a centralized vehicle management platform that enables administrators to efficiently create, update, organize, and manage car listings with detailed specifications and image galleries.",

    statusBadge: "● COMPLETED PROJECT",
    statusType: "live",

    role: "Full-Stack Developer",

    type: "Automotive Management System",

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Cloudinary",
    ],

    features: [
      "Complete vehicle CRUD management",
      "Vehicle image upload and gallery management",
      "Detailed car specifications (mileage, engine type, transmission, fuel type, year, pricing)",
      "Responsive administrative dashboard",
      "Search and inventory organization",
      "Modern and intuitive user interface",
    ],

    mainImage: "/suna-motors-main.png",

    galleryImages: [
      {
        label: "Dashboard Overview",
        src: "/suna-motors-inventory.jpeg",
      },
      {
        label: "Vehicle Management",
        src: "/suna-motors-add-new-listing.jpeg",
      },
      {
        label: "Profile Page",
        src: "/suna-motors-profile.jpeg",
      },
    ],

    setupCommands: [
      {
        cmd: "$ npm install && npm run dev",
        result: "✓ development server started",
      },
    ],

    nextProject: {
      id: "yiora",
      name: "Y'IORA",
    },
  },
  yiora: {
    id: "yiora",
    title: "Y'IORA",
    category: "EVENT MANAGEMENT WEBSITE",

    subtitle:
      "A modern, responsive frontend website designed to showcase events, speakers, schedules, and event experiences through an engaging user interface.",

    problem:
      "Event organizers require an attractive online presence to effectively showcase upcoming events, communicate essential information, and encourage attendee engagement.",

    solution:
      "Developed a responsive event management website featuring immersive layouts, intuitive navigation, and visually engaging sections that highlight event information while delivering a seamless user experience across all devices.",

    statusBadge: "● PENDING PROJECT",
    statusType: "pending",

    netlifyLink: "https://yiora.netlify.app/",

    role: "Frontend Developer",

    type: "Frontend Web Application",

    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "UI/UX"],

    features: [
      "Modern responsive landing page",
      "Event showcase and featured experiences",
      "Speaker and schedule sections",
      "Gallery and promotional content",
      "Interactive navigation",
      "Optimized for desktop, tablet, and mobile devices",
    ],

    mainImage: "/yiora-main.png",

    galleryImages: [
      {
        label: "Landing Page",
        src: "/yiora-home.jpeg",
      },
      {
        label: "Contact Page",
        src: "/yiora-contact.jpeg",
      },
    ],

    setupCommands: [
      {
        cmd: "$ npm install && npm run dev",
        result: "✓ development server started",
      },
    ],

    nextProject: {
      id: "auto-revive",
      name: "Auto Revive",
    },
  },
  "auto-revive": {
    id: "auto-revive",
    title: "Auto Revive",
    category: "AUTOMOTIVE SERVICE WEBSITE",

    subtitle:
      "A modern, responsive frontend website created for a professional car detailing business to showcase automotive care services and drive customer engagement.",

    problem:
      "Automotive service businesses need a strong digital presence to showcase their services, build customer trust, and make it easier for potential clients to discover and request their services.",

    solution:
      "Developed a visually engaging business website that highlights detailing services, showcases previous work, communicates service value, and provides customers with an intuitive way to explore and connect with the brand.",

    statusBadge: "● COMPLETED PROJECT",
    statusType: "completed",

    netlifyLink: "https://auto-revive.co.ke",

    role: "Frontend Developer",

    type: "Business Website",

    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "UI/UX"],

    features: [
      "Modern responsive landing page",
      "Automotive service showcase",
      "Before and after project gallery",
      "Customer-focused call-to-action sections",
      "Service information and pricing presentation",
      "Mobile-friendly responsive layout",
      "Optimized user experience for business inquiries",
    ],

    mainImage: "/auto-revive-main.png",

    galleryImages: [
      {
        label: "Landing Page",
        src: "/auto-revive-hero.jpeg",
      },
      {
        label: "Services Section",
        src: "/auto-revive-services.jpeg",
      },
    ],

    setupCommands: [
      {
        cmd: "$ npm install && npm run dev",
        result: "✓ development server started",
      },
    ],

    nextProject: {
      id: "jaffery-medical",
      name: "Jaffery Medical Clinic",
    },
  },
  "jaffery-medical": {
    id: "jaffery-medical",
    title: "Jaffery Medical Clinic",

    category: "HEALTHCARE WEBSITE",

    subtitle:
      "A modern, responsive healthcare website designed to provide patients with accessible information about medical services, facilities, and clinic operations.",

    problem:
      "Healthcare providers need a reliable digital presence where patients can easily discover available services, learn about the clinic, and access important contact and appointment information.",

    solution:
      "Developed a clean and user-friendly clinic website that presents healthcare services, medical information, and patient resources through an intuitive interface optimized for accessibility and engagement.",

    statusBadge: "● IN-PROGRESS PROJECT",
    statusType: "pending",

    netlifyLink: "https://healthclinicproject.netlify.app/",

    role: "Frontend Developer",

    type: "Healthcare Business Website",

    tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "UI/UX"],

    features: [
      "Professional healthcare landing page",
      "Medical services showcase",
      "Clinic information and about section",
      "Doctor and healthcare team presentation",
      "Patient-focused call-to-action sections",
      "Contact and appointment information",
      "Fully responsive design across devices",
    ],

    mainImage: "/jaffery-medical-main.png",

    galleryImages: [
      {
        label: "Homepage",
        src: "/jaffery-hero.jpeg",
      },
      {
        label: "Services Section",
        src: "/jaffery-services.jpeg",
      },
      {
        label: "Contact & Appointment Section",
        src: "/jaffery-contact.jpeg",
      },
    ],

    setupCommands: [
      {
        cmd: "$ npm install && npm run dev",
        result: "✓ development server started",
      },
    ],

    nextProject: {
      id: "pesaflow",
      name: "M-Pesa Payment Operations Platform",
    },
  },
};
