const awards = [
  "**Selected to attend a United World College (UWCM)**: Out of 428 applicants from Syria, [13 were chosen](https://www.sy.uwc.org/uwc-experience/meet-our-scholars) in 2016.",
  "**[Horizon Foundation](https://horizonfoundation.info/) Scholar**: Full scholarship (+70K €) to pay for UWCM and 10 year support after graduation",
  "**Maastricht University Scholar**: Full scholarship (+80K €) which is given to only 5 people each year.",
  "**Started writing code at 14 years old**: The first programming language I learned was Pascal",
  "**Until I was 17, I did  many manual labor jobs to support my family**: bakery, print shop, car wash, handyman, and more."
];
const additionalExperience = [
  "**[LaraJS Validator](https://www.npmjs.com/package/larajs-validator)**: Created a JavaScript validation library with the style of Laravel, at 17 years old. [+4K downloads](https://npm-stat.com/charts.html?package=larajs-validator&from=2014-01-06&to=2023-04-06).",
  "**[The Software Engineer Showcaser](#)**: Created an open source website and resume. This resume is made with it.",
  "**[Hacktoberrank](https://github.com/paulodiovani/hacktoberrank)**: Programmed the entire NodeJS backend that ranked all participants in [Hacktoberfest](https://hacktoberfest.com/) 2019.",
  "**[Care4Calais](https://care4calais.org/)**: Volunteered in one of the most dangeroues refugee camps in Europe."
];
const basics = {
  address: "Utrecht, Netherlands",
  email: "arabi.alhumsi@gmail.com",
  image: "/assets/images/profile-photo.jpeg",
  name: "Arabi Alhumsi",
  nameKerned: [
    {
      character: "A",
      letterSpacing: "-0.01em"
    },
    {
      character: "r",
      letterSpacing: "-0.05em"
    },
    {
      character: "a",
      letterSpacing: "-0.08em"
    },
    {
      character: "b",
      letterSpacing: "-.05em"
    },
    {
      character: "i",
      letterSpacing: "-.06em"
    },
    " ",
    {
      character: "A",
      letterSpacing: "0.02em"
    },
    {
      character: "l",
      letterSpacing: "0.02em"
    },
    {
      character: "h",
      letterSpacing: "-.09em"
    },
    {
      character: "u",
      letterSpacing: "-.03em"
    },
    {
      character: "m",
      letterSpacing: "-.03em"
    },
    {
      character: "s",
      letterSpacing: "-.04em"
    },
    "i"
  ],
  phone: "+31 213 460 437",
  profiles: [
    {
      icon: "envelope-at",
      url: "mailto:arabi.alhumsi@gmail.com",
      username: "arabi.alhumsi@gmail.com"
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/arabyalhomsi/",
      username: "arabyalhomsi"
    },
    {
      icon: "globe",
      url: "https://arabi.alhumsi.me",
      username: "arabi.alhumsi.me"
    },
    {
      icon: "github",
      url: "https://github.com/arabyalhomsi",
      username: "arabyalhomsi"
    }
  ],
  url: "https://arabi.alhumsi.me"
};
const education = [
  {
    area: "Bachelor of Science",
    endDate: "July 2021",
    highlights: [
      "An interdisciplinary research program where I focused on Machine Learning & Neuroscience.",
      "Selected courses: Data Structures And Algorithms, Cognitive Neuroscience, Machine Learning, Intelligent Systems.",
      "Thesis: Analyzing Performance of Learning Methods for Software Effort Estimation."
    ],
    institution: "Maastricht University",
    startDate: "September 2018",
    url: "https://curriculum.maastrichtuniversity.nl/education/bachelor/university-college-maastricht"
  },
  {
    area: "Bilingual International Baccalaureate",
    endDate: "May 2018",
    highlights: [
      "Courses at Higher Level: Math, Physics and Arabic.",
      "Courses at Standard Level: Economics, Environmental Systems & Societies and English B."
    ],
    institution: "United World College Maastricht",
    startDate: "September 2016",
    url: "https://www.uwcmaastricht.nl/secondary-school/diploma-programme/"
  }
];
const work = [
  {
    endDate: "June 2023",
    highlights: [
      "Contributed to the frontend of a pioneering [Security Review Environment](https://www.codean.io/review-environment) in a high-end development setting with industry-expert engineers.",
      "Created a fully-tested cross-platform Shortcuts library (similar to the one in VS Code).",
      "Created a [D3 Tree](https://observablehq.com/@d3/tree) for expressing the syntax of a file that is fully responsive and easily modifiable.",
      "Developed security review functionalities utilizing the [Monaco Editor API](https://microsoft.github.io/monaco-editor/), which is the editor used in VS Code.",
      "Achieved the minimum 75% test coverage requirement for pull requests and contributed to significant code refactors at both, the interface and architectural levels."
    ],
    keywords: [
      {
        link: "https://www.typescriptlang.org/",
        name: "TypeScript"
      },
      {
        link: "https://vuejs.org/guide/extras/composition-api-faq.html",
        name: "Vue 3 Composition API"
      },
      {
        link: "https://graphql.org/",
        name: "GraphQL"
      },
      {
        link: "https://tailwindcss.com/",
        name: "Tailwind"
      },
      {
        link: "https://vitest.dev/",
        name: "Vitest"
      },
      {
        link: "https://www.cypress.io/",
        name: "Cypress"
      },
      {
        link: "https://d3js.org/",
        name: "D3.js"
      },
      {
        link: "https://microsoft.github.io/monaco-editor/",
        name: "Monaco Editor"
      }
    ],
    name: "Codean",
    position: "Software Engineer",
    startDate: "Mar 2022",
    url: "https://www.codean.io/"
  },
  {
    endDate: "Feb 2022",
    highlights: [
      "Was the main developer working on: [De Lerende Ambtenaar](https://delerendeambtenaar.nl/) that belongs to the [Dutch Certus Groep](https://www.certusgroep.nl/).",
      "Built and refactored 50+ React functional components in the span of 7 months.",
      "Given two presentations to a team of 15+ developers on how to improve the frontend architecture.",
      "Enhanced the animations and transitions in the web app to run at 60fps.",
      "Improved project planning on Jira and the processs of coordinating between backend and frontend."
    ],
    keywords: [
      {
        link: "https://www.typescriptlang.org/",
        name: "TypeScript"
      },
      {
        link: "https://react.dev/",
        name: "React"
      },
      {
        link: "https://react.dev/reference/react",
        name: "React hooks"
      },
      {
        link: "https://styled-components.com/",
        name: "Styled Components"
      },
      {
        link: "https://nextjs.org/",
        name: "Next.js"
      },
      {
        link: "https://react.i18next.com/",
        name: "Internationalization (i18n)"
      }
    ],
    name: "Coffee IT",
    position: "Software Engineer",
    startDate: "Aug 2021",
    url: "https://coffeeit.nl/"
  },
  {
    endDate: "April 2020",
    highlights: [
      "Was part of building a platform for [CJP](https://www.cjp.nl/) to allocate [14.3 million](https://np-cjp-production.s3-eu-west-1.amazonaws.com/Jaarverslag2021.pdf) euros to 711,685 students on the national level.",
      "Advised the company on frontend architecture and technologies.",
      "Developed backend and frontend features.",
      "Reviewed code and wrote unit and integration tests."
    ],
    keywords: [
      {
        link: "https://www.typescriptlang.org/",
        name: "TypeScript"
      },
      {
        link: "https://laravel.com/",
        name: "Laravel"
      },
      {
        link: "https://www.djangoproject.com/",
        name: "Django"
      },
      {
        link: "https://react.dev/",
        name: "React"
      },
      {
        link: "https://vuejs.org/",
        name: "Vue"
      },
      {
        link: "https://sass-lang.com/",
        name: "Sass"
      }
    ],
    name: "Team4Hire",
    url: "https://team4hire.nl/",
    position: "Software Engineer",
    startDate: "April 2019"
  },
  {
    endDate: "April 2019",
    highlights: [
      "Solely created and maintained a frontend for a platform that enhances citizen engagement using blockchain",
      "Optimized the frontend fully; made it progressive, fast, and responsive."
    ],
    keywords: [
      {
        link: "https://react.dev/",
        name: "React"
      },
      {
        link: "https://sass-lang.com/",
        name: "Sass"
      },
      {
        link: "https://react.i18next.com/",
        name: "Internationalization (i18n)"
      }
    ],
    name: "CoTown",
    url: "https://cotown.io/",
    position: "Software Engineer (part-time)",
    startDate: "October 2018"
  },
  {
    endDate: "Feb 2016",
    highlights: [
      "Was hired only at 17 years old with a team of engineers who were all graduates in their mid 20s.",
      "Collaborated in building a real-estate CRM in SailsJS and MithrilJS and built several websites using Drupal and Wordpress.",
      "Built a client-side state management library (like Redux/Vuex).",
      "Gave a workshop on JavaScript’s prototypal inheritance and how it differs from class inheritance."
    ],
    keywords: [
      {
        link: "https://262.ecma-international.org/5.1/",
        name: "ECMAScript 5"
      },
      {
        link: "https://sailsjs.com/",
        name: "SailsJS"
      },
      {
        link: "https://mithril.js.org/",
        name: "MithrilJS"
      },
      {
        link: "https://wordpress.org/",
        name: "Wordpress"
      },
      {
        link: "https://www.drupal.org/",
        name: "Drupal"
      }
    ],
    name: "Nozol (eNichers)",
    position: "Software Developer",
    startDate: "June 2015",
    url: "https://www.crunchbase.com/organization/nozol-business"
  }
];
const skills = [
  {
    keywords: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    level: "Master",
    name: "Web Development"
  }
];
const resumeJson = {
  awards,
  additionalExperience,
  basics,
  education,
  work,
  skills
};
const makeMissingFieldErrorMessage = (field) => `resume.json is missing the ${field}`;
function getAdditionalExperience(resumeData) {
  const field = "additionalExperience";
  if (resumeData === null || typeof resumeData !== "object" || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field];
}
function getEducation(resumeData) {
  const field = "education";
  if (resumeData === null || typeof resumeData !== "object" || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field];
}
function getAwards(resumeData) {
  const field = "awards";
  if (resumeData === null || typeof resumeData !== "object" || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field];
}
function getWork(resumeData) {
  const field = "work";
  if (resumeData === null || typeof resumeData !== "object" || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field];
}
const getBasicInfo = (resumeData) => {
  const field = "basics";
  if (resumeData === null || typeof resumeData !== "object" || !(field in resumeData)) {
    throw new Error(makeMissingFieldErrorMessage(field));
  }
  return resumeData[field];
};
function onBeforeRender() {
  const basicInfo = getBasicInfo(resumeJson);
  const work2 = getWork(resumeJson);
  const awards2 = getAwards(resumeJson);
  const education2 = getEducation(resumeJson);
  const additionalExperience2 = getAdditionalExperience(resumeJson);
  const pageProps = {
    basicInfo,
    work: work2,
    awards: awards2,
    education: education2,
    additionalExperience: additionalExperience2
  };
  return {
    pageContext: {
      pageProps
    }
  };
}
const passToClient = ["pageProps"];
export {
  onBeforeRender,
  passToClient
};
