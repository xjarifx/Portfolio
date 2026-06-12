export const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Md Junaidul Islam Jarif",
    title: "Software Developer",
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
    // ========== PROJECTS SECTION ==========
    {
      id: "projects",
      type: "project",
      title: "Projects",
      items: [
        {
          title: "Better Calendar",
          description: "An AI-powered calendar that turns natural language into events on a drag-and-drop interface.",
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
          description: "A social media platform with subscriptions, follows, and real-time notifications.",
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
          description: "A real-time messaging and video calling app with group chats and file sharing.",
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
