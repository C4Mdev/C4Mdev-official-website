export type PortfolioProject = {
    slug: string;
    date: string;
    title: string;
    category: string;
    /** Case study: client context and problem (add copy when ready). */
    clientProblem: string;
    /** Case study: what we built and how (add copy when ready). */
    solution: string;
    /** Case study: outcomes and impact (add copy when ready). */
    result: string;
    tags: string[];
    image: string;
    /** When set, passed to CSS object-position for cover-cropped hero/list thumbnails */
    imageObjectPosition?: string;
    /** Extra screenshots for the detail page gallery */
    galleryImages: string[];
    /** Public production site, shown on the project page when set */
    liveUrl?: string;
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

const PEOLANDS_TAGS = [
    "Next.js",
    "TypeScript",
    "NestJS",
    "MongoDB",
    "DigitalOcean Spaces",
    "Docker",
] as const;

const EMPTY_CASE = {
    clientProblem: "",
    solution: "",
    result: "",
} as const;

export const portfolioProjects: PortfolioProject[] = [
    {
        slug: "united-accountancy",
        date: "Feb 12, 2025",
        title: "United Accountancy",
        category: "Accounting & Tax Software",
        clientProblem:
            "United Accountancy, a Sri Lanka based accounting firm, was managing all client records and tax-related work manually using physical ledgers. This process was time consuming, prone to human error, and made it difficult to track client data, payments, and employee information efficiently.",
        solution:
            "We developed a custom digital management system tailored to their workflow. The system allows the firm to manage client records, track tax payments, and handle all accounting-related activities in one centralized platform. Additionally, we integrated employee management features, enabling the business owner to monitor staff and manage salaries seamlessly.",
        result:
            "With the new system in place, the firm significantly reduced manual workload and improved overall efficiency. All client and financial data are now organized in one place, making it easier to access and manage. The client reported saving valuable time and gaining better control and visibility over both operations and staff management.",
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
        clientProblem:
            "Peo Lands, a property and vehicle selling business, was using a WordPress website that suffered from slow performance, outdated design, and limited flexibility. The platform made it difficult to update listings, lacked visual appeal, and had poor SEO performance, reducing their ability to attract and convert potential buyers.",
        solution:
            "We developed a modern multi-vendor e-commerce platform tailored to their business needs. The new system supports multiple user roles, allowing efficient management of property and vehicle listings. It was built using modern technologies to ensure high performance, scalability, and a clean, attractive user interface optimized for user experience.",
        result:
            "The new platform transformed the client’s online presence with a fast, visually appealing, and SEO-optimized website. The client can now easily upload and manage more listings, reach a wider audience, and convert more visitors into customers, leading to increased business opportunities.",
        tags: [...PEOLANDS_TAGS],
        liveUrl: "https://peolands.com/",
        image: P.peoHero,
        imageObjectPosition: "top",
        galleryImages: [
            "/peo-lands/02.jpeg",
            "/peo-lands/03.jpeg",
            "/peo-lands/04.jpeg",
        ],
    },
    {
        slug: "smart-laser",
        date: "Apr 07, 2025",
        title: "Smart Laser",
        category: "Business Website",
        clientProblem:
            "The client, a laser engraving business owner, had an outdated WordPress website that was difficult to maintain and did not effectively represent their services. The poor user experience and lack of updates were limiting their ability to attract and convert customers online.",
        solution:
            "We completely redesigned and rebuilt the website with a modern, clean, and user-friendly interface. The new website was developed to be easy to manage, visually appealing, and optimized to clearly showcase the client’s services and work, helping potential customers understand their offerings quickly.",
        result:
            "The new website significantly improved the client’s online presence and usability. As a result, the business started receiving more inquiries and generating increased customer engagement, leading to noticeable growth in overall business activity.",
        tags: ["WordPress", "Responsive Design", "UI/UX"],
        liveUrl: "https://smart-laser.co.uk/",
        image: P.laserHero,
        imageObjectPosition: "top",
        galleryImages: [P.laserG2, P.laserG3, P.laserG4],
    },
    {
        slug: "minneriya",
        date: "Jun 18, 2025",
        title: "Minneriya Wild Tours",
        category: "Tourism Website",
        clientProblem:
            "Minneriya Wild Tours, a tourism business offering safari and sightseeing experiences, had an outdated and visually unappealing WordPress website. The design did not reflect the quality of their services, and it lacked the ability to effectively convert visitors into paying customers.",
        solution:
            "We rebuilt the website using modern technologies with a strong focus on visual appeal and user experience. The new design highlights tour packages, showcases the natural beauty of the experiences, and provides a smooth and intuitive booking process for users.",
        result:
            "The redesigned website significantly improved the client’s online presence and credibility. Customers can now easily explore tours and make bookings directly through the website, resulting in increased paid bookings and better overall business performance.",
        tags: ["React", "Onepay", "Supabase"],
        liveUrl: "https://minneriyawildtours.com/",
        image: P.minneriya,
        imageObjectPosition: "top",
        galleryImages: [P.minneriyaG2, P.minneriyaG3, P.minneriyaG4],
    },
    {
        slug: "cloud-based-pos-system",
        date: "Aug 02, 2025",
        title: "Cloud Based POS System",
        category: "Retail & Point of Sale",
        clientProblem:
            "The client, a medium-sized retail shop chain in Sri Lanka, was managing all sales, inventory, and daily operations manually. This led to inefficiencies, lack of real-time insights, and increased chances of human error in tracking stock and transactions.",
        solution:
            "We developed a complete Point of Sale (POS) system tailored to their business operations. The system includes features such as sales tracking, inventory management, billing, and reporting. It was designed to streamline daily operations, provide real-time data, and simplify overall business management.",
        result:
            "With the implementation of the POS system, the client was able to automate their operations and significantly improve efficiency. They now have accurate, real-time visibility of sales and inventory, enabling better decision-making and smoother day-to-day management across their shop chain.",
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
        clientProblem:
            "The client, a clothing shop owner, did not have a proper system to manage employees and inventory. Daily operations were handled manually, making it difficult to track stock levels, monitor staff activities, and maintain overall efficiency.",
        solution:
            "We developed a comprehensive management system that allows the client to efficiently handle both employee and inventory operations. The system provides tools to track stock, manage worker information, and streamline day-to-day processes through a centralized and easy-to-use platform.",
        result:
            "With the new system in place, the client gained better control over inventory and staff management. Operations became more organized and efficient, reducing manual effort and improving overall productivity within the shop.",
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

export function projectSeoDescription(project: PortfolioProject): string {
    return `${project.title} — ${project.category}. Case study by Code4MatesDev.`;
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
    return portfolioProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return portfolioProjects.map((p) => p.slug);
}
