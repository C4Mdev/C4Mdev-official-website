export type PortfolioProject = {
    slug: string;
    date: string;
    title: string;
    category: string;
    /** Short text for listing cards */
    description: string;
    /** Longer copy for the project detail page */
    longDescription: string;
    tags: string[];
    image: string;
    /** When set, passed to CSS object-position for cover-cropped hero/list thumbnails */
    imageObjectPosition?: string;
    /** Extra screenshots for the detail page gallery */
    galleryImages: string[];
};

/** Image roots: public/<folder>/ — replace placeholder.svg with hero + gallery-* when ready (see each folder’s README). */
const P = {
    united: "/united-accountancy/placeholder.svg",
    unitedHero: "/united-accountancy/mian.png",
    unitedG2: "/united-accountancy/2.png",
    unitedG3: "/united-accountancy/3.png",
    unitedG4: "/united-accountancy/4.png",
    peo: "/peo-lands/placeholder.svg",
    peoHero: "/peo-lands/main.jpeg",
    peoG2: "/peo-lands/02.jpeg",
    peoG3: "/peo-lands/03.jpeg",
    peoG4: "/peo-lands/04.jpeg",
    minneriya: "/minneriya-wild-tours/main.png",
    minneriyaG2: "/minneriya-wild-tours/2.png",
    minneriyaG3: "/minneriya-wild-tours/3.png",
    minneriyaG4: "/minneriya-wild-tours/4.png",
    laser: "/laser-engraving/placeholder.svg",
    laserHero: "/laser-engraving/main.png",
    laserG2: "/laser-engraving/02.png",
    laserG3: "/laser-engraving/03.png",
    laserG4: "/laser-engraving/05.png",
    cloudPos: "/cloud-based-pos-system/main.jpeg",
    cloudPosG2: "/cloud-based-pos-system/02.jpeg",
    cloudPosG3: "/cloud-based-pos-system/03.jpeg",
    cloudPosG4: "/cloud-based-pos-system/04.jpeg",
    employeeMgmt: "/professional-employee-management/placeholder.svg",
    employeeMgmtHero: "/professional-employee-management/main.jpeg",
    employeeMgmtG2: "/professional-employee-management/2.jpeg",
    employeeMgmtG3: "/professional-employee-management/3.jpeg",
    employeeMgmtG4: "/professional-employee-management/4.jpeg",
    other: "/other-project/placeholder.svg",
} as const;

const UNITED_ACCOUNTANCY_LONG_DESCRIPTION = `United Accountancy is a fully customized client management and tax accountancy system designed to modernize and digitize traditional accounting workflows. Previously, the client relied on manual record-keeping using physical books, which made data management time-consuming, error-prone, and difficult to scale. This system was developed to transform their operations into a streamlined, secure, and efficient digital platform.

The application enables accountants to manage clients, financial records, and tax-related processes within a centralized dashboard. It includes a robust user management system with role-based access control, allowing administrators to assign permissions and manage multiple users securely.

Key features of the system include client and account management, tax calculation and filing support, invoice and financial record tracking, and advanced reporting with analytics. The platform also supports document uploads, enabling easy storage and retrieval of important financial documents.

Built with a modern tech stack including React for the frontend, Node.js for backend services, and Supabase for database and cloud infrastructure, the system ensures high performance, scalability, and real-time data handling. Cloud hosting further enhances accessibility and reliability.

This solution significantly improved the client’s workflow by reducing manual work, saving time, and automating key accounting tasks. It allows the business to efficiently manage a large number of clients while maintaining data accuracy and security. Additional highlights include smart calculations, custom reporting, strong data protection mechanisms, and multi-user support for team collaboration.

The entire system was designed and developed from scratch by our team, covering everything from UI/UX design to backend architecture and deployment.`;

const PEOLANDS_TAGS = [
    "Next.js",
    "TypeScript",
    "NestJS",
    "MongoDB",
    "DigitalOcean Spaces",
    "Docker",
] as const;

const PEOLANDS_LONG_DESCRIPTION = `PeoLands is a modern, cloud-based classified listing platform designed to simplify buying and selling across multiple categories in Sri Lanka. The system allows agencies, agents, and individual users to easily post and manage listings for properties, vehicles, mobile phones, electronics, and pets through a smooth and user-friendly interface.

The platform includes advanced search and filtering options, enabling users to quickly find listings based on category, location, price, and specific requirements. Each listing supports high-quality images with automatic watermarking and optimized performance for fast loading.

PeoLands also features role-based user management, secure authentication, and a powerful admin dashboard to monitor and manage all activities. Built-in SEO optimization ensures that listings are easily discoverable on search engines, helping sellers reach more potential buyers.

With scalable cloud architecture and optimized performance, PeoLands is built to handle growing user traffic while maintaining speed, security, and reliability.


Key features
• Multi-category listings (properties, vehicles, phones, electronics, pets)
• Advanced search & filters
• Image upload with watermark & optimization
• Role-based access (admin, agency, agent, users)
• SEO optimization for listings
• Admin dashboard
• WhatsApp & call integration`;

const SMART_LASER_LONG_DESCRIPTION = `Smart Laser is a professional website developed for a laser engraving and cutting business, with the goal of creating a strong online presence and improving customer engagement. The project focused on transforming the brand into a modern, visually appealing, and user-friendly digital experience.

The website was designed to clearly showcase the company’s services, including custom laser engraving and precision cutting solutions. A clean and structured layout was implemented to highlight key offerings, previous work, and business information, making it easy for visitors to understand the services and take action.

Special attention was given to responsive design, ensuring the website performs seamlessly across desktops, tablets, and mobile devices. The user interface was optimized for smooth navigation, fast loading speeds, and clear call-to-action sections to drive customer inquiries.

Built using WordPress, the platform allows the client to easily manage and update content without technical knowledge. The site includes essential business features such as service pages, image galleries to showcase completed work, and contact forms for customer communication.

This project significantly enhanced the client’s online visibility and credibility, providing a professional platform to attract new customers and showcase their craftsmanship.`;

const EMPLOYEE_MANAGEMENT_LONG_DESCRIPTION = `This project is a fully integrated HR attendance and payroll management system designed to streamline and automate the complete employee payroll lifecycle. It was developed with a strong focus on accuracy, usability, and real-world business requirements, making it an ideal solution for small to medium-sized organizations that need a reliable and scalable workforce management platform.

The system provides a comprehensive approach to attendance tracking, allowing administrators to manage employee check-ins and check-outs through a structured and intuitive interface. Manual attendance entry is supported with a smart workflow that ensures data integrity by preventing duplicate entries and enforcing proper check-in and check-out sequences. The use of calendar based date and time selection enhances usability while ensuring consistency across records. Additionally, the system handles complex scenarios such as next-day check-outs and timezone-safe data storage, ensuring accurate calculation of working hours under all conditions.

One of the core strengths of this platform is its automated payroll generation process. Payroll is generated automatically based on recorded attendance data, eliminating the need for manual calculations and significantly reducing the risk of human error. The system calculates salaries based on actual hours worked, along with overtime, using configurable rules such as per day and per-hour rates derived from a defined basic salary. Overtime calculations are flexible, allowing administrators to define a multiplier that suits their business policies.

The payroll module also supports bonus management, enabling administrators to add bonuses to employee payroll records when required. This feature is optional and does not interfere with the automated payroll process, ensuring flexibility while maintaining system integrity. Once payroll is generated, users can easily download professionally formatted payslips, which reflect all relevant salary components including earnings, deductions, and bonuses.

To support decision-making and transparency, the system includes a reporting and analytics section. It provides detailed insights into employee attendance patterns and working hours through visual charts and structured data tables. A dedicated worker breakdown report allows administrators to view daily work and overtime details for individual employees, offering a clear understanding of workforce productivity on a monthly basis.

The platform is built with a clean and user-friendly admin interface, ensuring that all operations from attendance entry to payroll review—can be performed efficiently. Role-based access control ensures that only authorized users can perform sensitive actions, maintaining data security and accountability. Furthermore, audit logging is integrated into key operations, providing traceability for important system activities.

Automation is a key highlight of this system. Monthly payroll is automatically generated at the beginning of each new month, ensuring consistency and eliminating delays. Notifications are also integrated to inform administrators when payroll has been successfully generated, improving workflow awareness and operational efficiency.

Overall, this HR attendance and payroll management system delivers a robust, accurate, and user-centric solution for managing employee data and payroll operations. By combining automation, validation, and intuitive design, it significantly reduces administrative overhead while ensuring compliance and reliability in payroll processing.`;

export const portfolioProjects: PortfolioProject[] = [
    {
        slug: "united-accountancy",
        date: "Feb 12, 2025",
        title: "United Accountancy",
        category: "Accounting & Tax Software",
        description:
            "A fully customized client management and tax accountancy system—centralized dashboard, client records, tax workflows, reporting, document storage, and secure role-based access, built with React, Node.js, and Supabase.",
        longDescription: UNITED_ACCOUNTANCY_LONG_DESCRIPTION,
        tags: ["React", "Node.js", "Supabase"],
        image: P.unitedHero,
        imageObjectPosition: "top",
        galleryImages: [P.unitedG2, P.unitedG3, P.unitedG4],
    },
    {
        slug: "peo-lands",
        date: "May 22, 2025",
        title: "PEO Lands",
        category: "Classified Listings Platform",
        description:
            "A modern, cloud-based classified listings platform for Sri Lanka—properties, vehicles, electronics, pets, and more—with powerful search, watermarked images, role-based access, SEO, and an admin dashboard.",
        longDescription: PEOLANDS_LONG_DESCRIPTION,
        tags: [...PEOLANDS_TAGS],
        image: P.peoHero,
        imageObjectPosition: "top",
        galleryImages: [P.peoG2, P.peoG3, P.peoG4],
    },
    {
        slug: "smart-laser",
        date: "Apr 07, 2025",
        title: "Smart Laser",
        category: "Business Website",
        description:
            "A professional WordPress site for a laser engraving and cutting business—services, portfolio galleries, responsive layout, and contact flows built to grow engagement and inquiries.",
        longDescription: SMART_LASER_LONG_DESCRIPTION,
        tags: ["WordPress", "Responsive Design", "UI/UX"],
        image: P.laserHero,
        imageObjectPosition: "top",
        galleryImages: [P.laserG2, P.laserG3, P.laserG4],
    },
    {
        slug: "minneriya",
        date: "Jun 18, 2025",
        title: "Minneriya Wild Tours",
        category: "Tourism Website",
        description:
            "A tourism-focused solution designed to showcase destinations with smooth browsing and rich content presentation.",
        longDescription:
            "Minneriya Wild Tours presents itineraries, wildlife experiences, and booking flows in a calm, visual-first layout. Content is structured for discovery and trust, with payments integrated for a smooth end-to-end journey.",
        tags: ["React", "Onepay", "Supabase"],
        image: P.minneriya,
        imageObjectPosition: "top",
        galleryImages: [P.minneriyaG2, P.minneriyaG3, P.minneriyaG4],
    },
    {
        slug: "cloud-based-pos-system",
        date: "Aug 02, 2025",
        title: "Cloud Based POS System",
        category: "Retail & Point of Sale",
        description:
            "A cloud-based point-of-sale solution designed for modern retail—fast checkout, inventory visibility, and reliable operations you can manage from anywhere.",
        longDescription:
            "Cloud Based POS System is built to streamline sales, stock, and day-to-day store operations through a secure, cloud-first platform. The product emphasizes clarity for staff, consistent workflows at the register, and visibility for owners who need to monitor performance and inventory in real time.\n\nDetails, integrations, and screenshots will be updated as the project materials are finalized.",
        tags: ["Cloud", "POS", "Retail"],
        image: P.cloudPos,
        imageObjectPosition: "top",
        galleryImages: [P.cloudPosG2, P.cloudPosG3, P.cloudPosG4],
    },
    {
        slug: "professional-employee-management-solution",
        date: "Nov 14, 2025",
        title: "Professional Employee Management System",
        category: "HR & Payroll Software",
        description:
            "Fully integrated HR attendance and payroll for SMBs—automated payroll from attendance, overtime & bonus rules, payslips, analytics, RBAC, audit logs, and monthly automation with notifications.",
        longDescription: EMPLOYEE_MANAGEMENT_LONG_DESCRIPTION,
        tags: ["HR", "Payroll", "Attendance", "Automation"],
        image: P.employeeMgmtHero,
        imageObjectPosition: "top",
        galleryImages: [
            P.employeeMgmtG2,
            P.employeeMgmtG3,
            P.employeeMgmtG4,
        ],
    },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
    return portfolioProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return portfolioProjects.map((p) => p.slug);
}
