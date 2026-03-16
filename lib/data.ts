export const childData = {
  name: "Aarav Sharma",
  parentName: "Priya Sharma",
  age: "2 years 3 months",
  enrolledSince: "June 2024",
  overallProgress: 74,
  domains: [
    {
      name: "Cognitive",
      percentage: 80,
      status: "On Track",
      milestones: [
        "Recognizes 6 colors",
        "Solves basic shape-sorting puzzle",
      ],
    },
    {
      name: "Language",
      percentage: 65,
      status: "Needs Attention",
      milestones: [
        "Speaks approximately 12 words",
        "Responds to own name",
      ],
    },
    {
      name: "Motor Skills",
      percentage: 78,
      status: "On Track",
      milestones: ["Walks independently", "Stacks 4 blocks"],
    },
    {
      name: "Social-Emotional",
      percentage: 70,
      status: "On Track",
      milestones: [
        "Waves goodbye",
        "Shows affection toward caregivers",
      ],
    },
  ],
};

export const milestoneTimeline = [
  {
    date: "10 Mar 2025",
    domain: "Cognitive",
    milestone: "Identified triangle, circle, and square",
  },
  {
    date: "4 Mar 2025",
    domain: "Motor",
    milestone: "Climbed one step independently",
  },
  {
    date: "25 Feb 2025",
    domain: "Language",
    milestone: "Said mama and paani unprompted",
  },
  {
    date: "18 Feb 2025",
    domain: "Social",
    milestone: "Waved goodbye to volunteer",
  },
  {
    date: "10 Feb 2025",
    domain: "Cognitive",
    milestone: "Sorted red and blue blocks correctly",
  },
];

export const weeklyActivities = [
  {
    id: 1,
    title: "Color Sorting Game",
    domain: "Cognitive",
    status: "Completed",
  },
  {
    id: 2,
    title: "Storytime Session: The Hungry Caterpillar",
    domain: "Language",
    status: "Completed",
  },
  {
    id: 3,
    title: "Shape Puzzle (4 pieces)",
    domain: "Cognitive",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Rhyme Repetition: Twinkle Twinkle",
    domain: "Language",
    status: "Pending",
  },
  {
    id: 5,
    title: "Finger Painting with 3 colors",
    domain: "Motor",
    status: "Pending",
  },
];

export const curriculumWeeks = [
  {
    week: 10,
    status: "Completed",
    topics: ["Colors", "Animals", "Clapping Rhythm"],
    activities: [
      { title: "Color matching cards", completed: true },
      { title: "Animal sound recognition", completed: true },
      { title: "Clap-along rhythm game", completed: true },
    ],
  },
  {
    week: 11,
    status: "Completed",
    topics: ["Big and Small", "Soft and Hard", "Peek-a-Boo"],
    activities: [
      { title: "Size comparison with toys", completed: true },
      { title: "Texture exploration box", completed: true },
      { title: "Peek-a-boo variations", completed: true },
    ],
  },
  {
    week: 12,
    status: "Current",
    topics: ["Animal Sounds", "Shape Recognition", "2-Step Instructions"],
    activities: [
      { title: "Animal flashcard session", completed: true },
      { title: "Shape sorting puzzle", completed: false },
      { title: "Follow 2-step commands game", completed: false },
    ],
  },
  {
    week: 13,
    status: "Upcoming",
    topics: ["Emotions", "Water Play", "Simple Sorting"],
    activities: [
      { title: "Emotion face cards", completed: false },
      { title: "Water pouring activity", completed: false },
      { title: "Color sorting bowls", completed: false },
    ],
  },
];

export const trainingModules = [
  {
    id: 1,
    title: "Understanding Child Development (0 to 3 years)",
    status: "Completed",
    duration: "45 minutes",
    topics: [
      "Cognitive stages",
      "Language milestones",
      "Motor development",
    ],
    progress: 100,
  },
  {
    id: 2,
    title: "Conducting Effective Home Visits",
    status: "In Progress",
    duration: "60 minutes",
    topics: [
      "Visit structure",
      "Building rapport",
      "Checklist usage",
    ],
    progress: 60,
  },
  {
    id: 3,
    title: "Logging Cognitive and Language Milestones",
    status: "Locked",
    duration: "50 minutes",
    topics: [
      "Identifying early delays",
      "Using assessment forms",
      "AI-assisted observation tips",
    ],
    progress: 0,
  },
];

export const visitHistory = [
  {
    id: 1,
    date: "14 Mar 2025",
    child: "Aarav Sharma",
    activities: ["Color Recognition", "Motor Play"],
    engagement: 4,
    notes:
      "Responded well to color cards. Mother actively participated.",
  },
  {
    id: 2,
    date: "12 Mar 2025",
    child: "Meera Patil",
    activities: ["Storytelling", "Rhyme"],
    engagement: 5,
    notes:
      "Very engaged during storytime. Repeated 3 new words.",
  },
  {
    id: 3,
    date: "10 Mar 2025",
    child: "Rohan Desai",
    activities: ["Shape Puzzle", "Motor Play"],
    engagement: 3,
    notes:
      "Distracted during session. Shorter activity window used.",
  },
  {
    id: 4,
    date: "7 Mar 2025",
    child: "Ananya More",
    activities: ["Color Recognition", "Puzzle"],
    engagement: 4,
    notes:
      "Identified 4 colors correctly. Good focus today.",
  },
  {
    id: 5,
    date: "5 Mar 2025",
    child: "Aarav Sharma",
    activities: ["Language games", "Storytelling"],
    engagement: 3,
    notes:
      "Low verbal response today. Recommend more daily reading.",
  },
];

export const enrolledChildren = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: "2y 3m",
    parent: "Priya Sharma",
    volunteer: "Sneha Jadhav",
    completion: 74,
    risk: "Medium",
  },
  {
    id: 2,
    name: "Meera Patil",
    age: "1y 8m",
    parent: "Sunita Patil",
    volunteer: "Priti Kulkarni",
    completion: 58,
    risk: "High",
  },
  {
    id: 3,
    name: "Rohan Desai",
    age: "3y 1m",
    parent: "Rajesh Desai",
    volunteer: "Rahul More",
    completion: 82,
    risk: "Low",
  },
  {
    id: 4,
    name: "Ananya More",
    age: "2y 0m",
    parent: "Kavita More",
    volunteer: "Sneha Jadhav",
    completion: 67,
    risk: "Medium",
  },
  {
    id: 5,
    name: "Dev Kulkarni",
    age: "1y 5m",
    parent: "Meena Kulkarni",
    volunteer: "Anita Shinde",
    completion: 51,
    risk: "High",
  },
  {
    id: 6,
    name: "Sana Sheikh",
    age: "2y 9m",
    parent: "Farida Sheikh",
    volunteer: "Priti Kulkarni",
    completion: 79,
    risk: "Low",
  },
];

export const aiDetectionData = [
  {
    child: "Aarav Sharma",
    age: "2y 3m",
    risk: "Medium",
    domain: "Language",
    action: "Enroll in language stimulation program",
  },
  {
    child: "Meera Patil",
    age: "1y 8m",
    risk: "High",
    domain: "Motor Skills",
    action: "Refer to physiotherapist",
  },
  {
    child: "Rohan Desai",
    age: "3y 1m",
    risk: "Low",
    domain: "None",
    action: "Continue current plan",
  },
  {
    child: "Ananya More",
    age: "2y 0m",
    risk: "Medium",
    domain: "Cognitive",
    action: "Increase puzzle-based activities",
  },
  {
    child: "Dev Kulkarni",
    age: "1y 5m",
    risk: "High",
    domain: "Language",
    action: "Urgent early intervention referral",
  },
];

export const volunteers = [
  {
    id: 1,
    name: "Sneha Jadhav",
    initials: "SJ",
    visits: 14,
    training: 60,
    children: 3,
    status: "Active",
    topPerformer: true,
  },
  {
    id: 2,
    name: "Priti Kulkarni",
    initials: "PK",
    visits: 11,
    training: 80,
    children: 2,
    status: "Active",
    topPerformer: false,
  },
  {
    id: 3,
    name: "Rahul More",
    initials: "RM",
    visits: 9,
    training: 40,
    children: 2,
    status: "Needs Follow-up",
    topPerformer: false,
  },
  {
    id: 4,
    name: "Anita Shinde",
    initials: "AS",
    visits: 7,
    training: 30,
    children: 1,
    status: "Needs Follow-up",
    topPerformer: false,
  },
];

export const languageReach = [
  { language: "English", users: 82 },
  { language: "Hindi", users: 74 },
  { language: "Marathi", users: 51 },
  { language: "Tamil", users: 19 },
  { language: "Telugu", users: 14 },
  { language: "Bengali", users: 8 },
];
