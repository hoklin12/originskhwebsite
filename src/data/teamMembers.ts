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
  },
  {
    id: "sam-wujiale",
    name: "Sam Wujiale",
    position: "Founder & Studio Director",
    image: "/sam.png",
    description: "Creative visionary with a passion for design and innovation. Sam founded the studio with a mission to push boundaries in digital experiences.",

  },
  {
    id: "sreng-sannyaliza",
    name: "Sreng Sannyaliza",
    position: "Co-founder & Studio Manager",
    image: "/liza.png",
    description: "Operations expert who ensures our projects run smoothly from conception to delivery. Liza brings structure and efficiency to our creative process.",
  }
];

// Helper function to get team member by ID
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find(member => member.id === id);
};