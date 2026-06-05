export const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Md Junaidul Islam Jarif",
    title: "Backend Developer",
    tagline:
      "I build responsive web experiences and scalable backend systems end-to-end.",
    email: "office.jarif@gmail.com",
    phone: "+880 1540-165110",
    location: "Dhaka, Bangladesh",

    // Social links - displayed in sidebar footer
    social: {
      github: "https://github.com/xjarifx",
      linkedin: "https://www.linkedin.com/in/xjarifx",
    },
  },

  // ============================================================
  // SECTIONS: Dynamically rendered content sections
  // ============================================================
  sections: [
    // ========== TECH STACK SECTION ==========
    {
      id: "techstack",
      type: "techstack",
      title: "Tech Stack",
      categories: [
        {
          label: "Languages",
          skills: ["TypeScript"],
        },
        {
          label: "Frontend",
          skills: ["Next.js"],
        },
        {
          label: "Backend",
          skills: ["Node.js"],
        },
        {
          label: "Database",
          skills: ["PostgreSQL", "MongoDB"],
        },
      ],
    },

    // ========== PROJECTS SECTION ==========
    {
      id: "projects",
      type: "project",
      title: "Projects",
      items: [
        {
          title: "Better Calendar",
          description: [
            "Built an AI-powered calendar app with dual-mode JWT auth (Bearer + cookies) and token versioning for credential invalidation on password changes",
            "Integrated OpenRouter AI to parse natural language into structured calendar events, with per-user API key configuration stored in the database",
            "Engineered a flexible event schema (all-day, timed, multi-day) with drag-and-drop calendar using dnd-kit and complete user-scoped data isolation",
          ],
          links: [
            {
              label: "Live Demo",
              url: "https://better-calendar-jarif.vercel.app",
            },
            {
              label: "Source Code",
              url: "https://github.com/xjarifx/better-calendar",
            },
          ],
        },
        {
          title: "Better Media",
          description: [
            "Built a full-stack social media platform with JWT access/refresh token rotation, soft-deletes, and a Redis/in-memory cache layer with domain-specific TTLs",
            "Implemented Stripe PRO subscriptions with checkout and payment-intent flows, webhook activation, automated plan expiration, and content tiering (20 vs 100 char limits)",
            "Built a social graph engine with follow/unfollow, user blocking with feed exclusion, denormalized counters, and cached typed notifications",
          ],
          links: [
            {
              label: "Live Demo",
              url: "https://better-media.vercel.app",
            },
            {
              label: "Source Code",
              url: "https://github.com/xjarifx/better-media",
            },
          ],
        },
        {
          title: "Better Communication",
          description: [
            "Architected real-time messaging via standalone Socket.IO server with direct/group conversations, cursor-based pagination, and throttled typing indicators",
            "Implemented P2P WebRTC video calling with STUN NAT traversal and Socket.IO signaling relay, including call state tracking and incoming call notifications",
            "Designed a modular backend with repository/service pattern, JWT auth with 15-min access tokens, and ImageKit CDN for file/image/video attachments with thumbnails",
          ],
          links: [
            {
              label: "Live Demo",
              url: "https://better-communication.vercel.app",
            },
            {
              label: "Source Code",
              url: "https://github.com/xjarifx/better-communication",
            },
          ],
        },
      ],
    },

    // ========== CERTIFICATIONS SECTION ==========
    {
      id: "certifications",
      type: "certification",
      title: "Certifications",
      items: [
        {
          name: "AWS Academy Cloud Foundations",
          issuer: "Amazon Web Services Academy",
          date: "2026",
          description:
            "Completed foundational cloud training covering AWS core services, cloud concepts, security, architecture, and pricing.",
          credentialUrl: "/certificates/aws.pdf",
          skills: [
            "AWS",
            "Cloud Computing",
            "Cloud Security",
            "Core AWS Services",
          ],
        },
      ],
    },

    // ========== EDUCATION SECTION ==========
    {
      id: "education",
      type: "education",
      title: "Education",
      items: [
        {
          degree: "B.Sc. in Computer Science and Engineering (CSE)",
          institution: "Daffodil International University",
        },
      ],
    },
  ],
};
