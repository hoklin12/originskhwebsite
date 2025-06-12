

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  website?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  description?: string;
  education?: string;
  expertise?: string[];
  socialLinks?: SocialLinks;
  joinDate?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "prof-bk",
    name: "Prof. BK",
    position: "Owner & Business Director",
    image: "/prof-bk.png",
    description: "With over 20 years of experience in business management, Prof. BK has led numerous successful ventures and brings strategic vision to our team.",
    education: "PhD in Business Administration, Harvard University",
    expertise: [
      "Business Strategy",
      "Financial Management",
      "Corporate Leadership"
    ],
    joinDate: "",
  },
  {
  id: "sam-wujiale",
  name: "Sam Wujiale",
  position: "Founder & Director, Origins Studios",
  image: "/sam.png",
  description: "Creative leader and founder with extensive experience in directing studios and creative projects across multiple sectors including photography, social enterprise, and media production.",
  education: "NITEC in Space Design (Architecture) - ITE College Central; DSA in Robotics - Woodlands Ring Secondary School",
  expertise: [
    "Creative Direction",
    "Video Production",
    "Studio Leadership",
    "Photography",
    "Social Enterprise Consulting"
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/samwujiale/",
  },
  joinDate: "",
  },

  {
    id: "sreng-sannyaliza",
    name: "Sreng Sannyaliza",
    position: "Co-founder & Studio Manager",
    image: "/liza.png",
    description: "Operations expert who ensures our projects run smoothly from conception to delivery. Liza brings structure and efficiency to our creative process.",
    education: "MBA in Operations Management, Stanford University",
    expertise: [
      "Project Management",
      "Team Leadership",
      "Process Optimization"
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/aliza_sanny/"
    },
    joinDate: "",
  }
];

// Helper function to get team member by ID
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find(member => member.id === id);
};