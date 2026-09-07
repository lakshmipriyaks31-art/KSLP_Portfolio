export const projects = [
  {
    title: "YouCab Tranvia",
    subtitle: "Real-time Taxi Booking Application",
    stack: [
      "React Native",
      "React.js / Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    role: "Led 3 developers",
    bullets: [
      "Built separate React Native applications for users and drivers with a React.js/Next.js Admin panel.",
      "Developed REST APIs for authentication, ride booking, driver operations, ratings, notifications, payments and transactions.",
      "Implemented RBAC, driver verification, real-time location tracking, route mapping, ride lifecycle management and in-app chat.",
      "Participated in client requirements and supported production deployment with DevOps.",
    ],
    metrics: [
      ["API latency", "~1 sec → ~650 ms", "35% reduction"],
      ["React bundle", "~2 MB → ~1.5 MB", "~25% reduction"],
      ["Page load", "~3 sec → ~2 sec", "~33% reduction"],
    ],
    link: "https://play.google.com/store/apps/details?id=com.youcabtranvia&pcampaignid=web_share",
  },
   {
    title: "Food Delivery Web Application",
    subtitle: "Full-stack multi-role delivery platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    role: "Led 5 developers",
    bullets: [
      "Developed User, Seller, Delivery and Admin panels with role-based workflows.",
      "Developed REST APIs for user, seller, delivery, product and order management; integrated cash and online payments.",
      "Built reusable React components and applied code splitting, reducing application load time by 25–30%.",
      "Analyzed requirements, participated in client calls and demos, translated requirements into technical tasks and supported deployment/cloud setup.",
    ],
    metrics: [["Application load", "Improved", "25–30% reduction"]],
  },
 
 
  {
    title: "Decentralized Wallet",
    subtitle: "Blockchain wallet application · 5+ client implementations",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Web3 Integration"],
    role: "Worked with 3 developers",
    bullets: [
      "Enhanced an existing wallet application and customized it for 5+ client implementations.",
      "Developed wallet creation, blockchain wallet integration, NFT management, staking, in-app chat and cryptocurrency send/receive functionality.",
      "Developed secure REST APIs with encrypted payloads and MongoDB integration, and integrated existing smart contracts through React.js.",
      "Participated in client calls and demos, addressed client queries and implemented requested changes.",
    ],
  },
   {
    title: "NFT Marketplace",
    subtitle: "Reusable platform · 10+ client implementations",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Web3", "Jest"],
    role: "Led 8+ developers",
    bullets: [
      "Customized and extended a reusable NFT Marketplace platform across 10+ client implementations.",
      "Developed NFT minting, buying, selling, renting, favorites and in-app chat, plus Admin features for users, NFTs, ownership, transactions and rentals.",
      "Integrated deployed smart contracts using React.js/Web3 and handled contract responses through the application layer.",
      "Participated in client calls, requirement analysis, demos, development coordination and DevOps-supported production deployment.",
    ],
    metrics: [
      ["React bundle", "15 MB → 10 MB", "~33% reduction"],
      ["Code size", "Reduced", "30% reduction"],
      ["Page load", "4 sec → 2 sec", "50% reduction"],
    ],
  },
];

