/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Smeet's Portfolio",
  description:
    "Data Analytics Professional with 13 years of experience specializing in driving business growth and customer retention through data-driven insights. Proven expertise in A/B testing, cohort analysis, and CRM campaign optimization. Skilled in utilizing analytics tools such as Adobe Analytics, Metabase, Tableau, and Python for data analysis. Adept at improving machine learning models and data products to enhance business performance.",
  og: {
    title: "Smeet Patel Portfolio",
    type: "website",
    url: "TO DO",// TODO: Add SQL icon
  },
};

//Home Page
const greeting = {
  title: "Smeet Patel",
  logo_name: "SmeetPatel",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "TO DO",
  portfolio_repository: "TO DO",// TODO: Add SQL icon
  githubProfile: "https://github.com/SmeetKP",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/SmeetKP",
  // linkedin: "https://www.linkedin.com/in/smeet-patel-a8330290/",
  // gmail: "smeet3103@gmail.com"

  {
    name: "Github",
    link: "https://github.com/SmeetKP",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/smeet-patel-a8330290/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:smeet3103@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Data Analysis",
      fileName: "Analytics",
      skills: [
        "⚡ Deriving business critical insights from hetergeneous data",
        "⚡ Developing dashboards in Tableau,Power BI and excel",
        "⚡ Creating end to end pipelines for data ingestion to reporting",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:html5",// TODO: Add SQL icon
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "fa-css3",// TODO: Add Excel icon
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:sass",// TODO: Add Python icon
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:javascript",// TODO: Add PBI icon
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:react",// TODO: Add Tableau icon
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Azure Data Factory",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",// TODO: Add ADF icon
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:npm",// TODO: Add DevOps icon
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Alteryx",
          fontAwesomeClassname: "simple-icons:yarn",// TODO: Add Alteryx icon
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:yarn",// TODO: Add GA icon
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Adobe Analytics",
          fontAwesomeClassname: "simple-icons:gatsby",// TODO: Add Adobe Analytics icon
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:yarn",// TODO: Add Firebase icon
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Metabase",
          fontAwesomeClassname: "simple-icons:yarn",// TODO: Add Metabase icon
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "SAP Analytics Cloud",
          fontAwesomeClassname: "simple-icons:flutter",// TODO: Add SAC icon
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on Azure",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    
  ],
};

// Education Page
// const competitiveSites = {
//   competitiveSites: [
//     {
//       siteName: "LeetCode",
//       iconifyClassname: "simple-icons:leetcode",
//       style: {
//         color: "#F79F1B",
//       },
//       profileLink: "https://leetcode.com/layman_brother/",
//     },
//     {
//       siteName: "HackerRank",
//       iconifyClassname: "simple-icons:hackerrank",
//       style: {
//         color: "#2EC866",
//       },
//       profileLink: "https://www.hackerrank.com/layman_brother",
//     },
//     {
//       siteName: "Codechef",
//       iconifyClassname: "simple-icons:codechef",
//       style: {
//         color: "#5B4638",
//       },
//       profileLink: "https://www.codechef.com/users/ashutosh_1919",
//     },
//     {
//       siteName: "Codeforces",
//       iconifyClassname: "simple-icons:codeforces",
//       style: {
//         color: "#1F8ACB",
//       },
//       profileLink: "http://codeforces.com/profile/layman_brother",
//     },
//     {
//       siteName: "Hackerearth",
//       iconifyClassname: "simple-icons:hackerearth",
//       style: {
//         color: "#323754",
//       },
//       profileLink: "https://www.hackerearth.com/@ashutosh391",
//     },
//     {
//       siteName: "Kaggle",
//       iconifyClassname: "simple-icons:kaggle",
//       style: {
//         color: "#20BEFF",
//       },
//       profileLink: "https://www.kaggle.com/laymanbrother",
//     },
//   ],
// };

const degrees = {
  degrees: [
    {
      title: "Kalinga Institute of Information Technology",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "KIIT Bhubaneshwar",
      duration: "2007 - 2011",
      // descriptions: [
      //   "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      //   "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      //   "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      // ],
      website_link: "https://kiit.ac.in/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "I have worked with corporates and evolving startups as Data Analys and Data Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Data Analyst",
          company: "Sonova Group",
          company_url: "https://www.sonova.com/",
          logo_path: "tiktok_logo.png",// TODO: Add Sonova Logo
          duration: "April 2023 - Present",
          location: "Berlin, Germany",
          description:
            "Improving the efficieny and performance of the Hearing aid centers across the globe.Creating end to end data pipelines for new markets and acquired stores to derive daily management insights and enhance customer growth and store productivity",
          color: "#000000",
        },
        {
          title: "Senior Customer Growth & Retention Data Analyst",
          company: "felmo GmbH",
          company_url: "https://felmo.de/",
          logo_path: "legato_logo.png",// TODO: Add felmo logo
          duration: "April 2022 - March 2023",
          location: "Berlin, Germany",
          description:
            "Determining the impact of A/B tests on feature usages and income to scale back or eliminate a feature./nTrack the new revenue experiments from the moment they were launched and compare proactively on weekday level performance to determine the immediate impact before weekly or monthly KPIs are put into action./nSpearheaded product vision for implementation of Sustainable Packaging reporting dashboard for Sustainability Nudge Experiments in ecommerce vertical. /nUtilize behavioural cohort analysis to pinpoint client habits that we should try to change through various channels, including apps, websites, and customer care./nSetting up notifications when a web or mobile app's purchases aren't in sync with the database and taking specific action to direct developers to adjust utm parameters and attributions. /nTrack the new revenue experiments from the moment they were launched and compare proactively on weekday level performance to determine the immediate impact before weekly or monthly KPIS are put into action.",
          color: "#0879bf",
        },
        {
          title: "Quant Analytics Associate Wealth Management",
          company: "JP Morgan & Chase co.",
          company_url: "https://www.jpmorganchase.com/",
          logo_path: "muffito_logo.png",// TODO: JPMC logo
          duration: "June 2019 - March 2022",
          location: "Mumbai, Maharashtra",
          description:
            "Associate with experience in measuring the metrics from the behavior in Adobe Analytics data to their transactional value in Hive,Excel,Tableau in the entire customer journey from paid attribution channels to the company database. Expanding BI Reporting services to Data Hubs & API Integrations, Reporting support for scenarios like COVID 19, Integration of ESG Sustainability API. Customer Segmentation and RFM study helped in achieving MoM growth of new acquisitions of retirement accounts by 16% for Q2 2021. Analyzed and helped marketing teams to scale or kill module updates with robust A/B testing. Determined popular advisors within underserved clients based on service benchmark and created a promotional mailing list and optimized meeting scheduling for each advisor; Resulted in average 2.5% increased client interaction each week and slashed the drop off rates by 8%. Studied the influence of customer readership and interactions on learning,videos and questionnaire modules to reward engaging content writers.Discovered an increased interaction on app and helped the development team to prioritize page responsiveness updates.Week over Week engagement skyrocketed by 16%. Deduced the pain points in email rewards campaign and aided to optimize marketing budget by 3.5% with match pair A/B test campaigns for trading feature launch.Segmented campaigns by the LTV/CAC ratio. Designed scripts to find and engage Daily,Weekly and Monthly active,retained and churned traders(stickiness metrics) to sail through the Gamestop turmoil and firefight to retain clients by developing a BCG matrix model.",
          color: "#9b1578",
        },
        {
          title: "Application Development Senior Analyst",// TODO: Add Experience
          company: "Accenture Ltd.",
          company_url: "https://www.accenture.com/",
          logo_path: "freecopy_logo.png",// TODO: Accenture logo
          duration: "May 2017 - May 2019",
          location: "Mumbai, India",
          description:
            "Design,develop,optimise and publish Tableau Reports and Dashboards for reinsurance managers to track the various KPIs related to a broad range of specialized risk transfer products and services. Extensively worked on optimization of Tableau Dashboards and SSIS ETL packages to reduce the load/render time by 35%. Resolving ad-hoc and complex issues for the business users and training them on Tableau",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",// TODO: Change
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
