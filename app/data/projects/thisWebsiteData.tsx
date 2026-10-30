export const images = {
  React: {
    className: "w-15 sm:w-15",
    src: "/React-icon.svg.webp",
    alt: "react",
    width: 50,
    height: 50,
  },
  Typescript: {
    className: "w-15 sm:w-15",
    src: "/Typescript.png",
    alt: "Typescript",
    width: 50,
    height: 50,
  },
  Tailwind: {
    className: "w-15 sm:w-15",
    src: "/tailwind.png",
    alt: "tailwind",
    width: 50,
    height: 50,
  },
  Github: {
    className: "w-15 sm:w-15",
    src: "/github.png",
    alt: "tailwind",
    width: 50,
    height: 50,
  },
  Python: {
    className: "w-15 sm:w-15",
    src: "/Python.png",
    alt: "python",
    width: 50,
    height: 50,
  },
  Streamlit: {
    className: "w-15 sm:w-25",
    src: "/streamlit-logo.png",
    alt: "Streamlit",
    width: 50,
    height: 50,
  },
  UI: {
    className: "rounded-lg w-70 sm:w-130",
    src: "/UI-this-website.png",
    alt: "UI-image",
    width: 500,
    height: 500,
  },
  MapStructure: {
    className: "rounded-lg w-70 sm:w-130",
    src: "/screenshot-map-structure.png",
    alt: "MapStructure",
    width: 500,
    height: 500,
  },
  CareAnimations: {
    className: "rounded-lg w-70 sm:w-200",
    src: "/care-animations.png",
    alt: "care-animations",
    width: 500,
    height: 500,
  },
};

export const thisWebsiteDetails = {
  "tech-stack": {
    title: "Tech Stack",
    description: `For this portfolio website, I chose a tech stack that I haven't worked with before a lot. Typescript and tailwind were mostly new to me. I wanted to do this to improve my skills in these languages.
    
    I love stepping out of my comfort zone a bit. Building this portfolio gave me the chance to master these languages hands-on. Working with TypeScript helped me write more structured and predictable code, while Tailwind allowed me to rapidly iterate on designs without getting bogged down in traditional CSS files. It turned out to be a great way to level up my front-end development skills while bringing the whole site to life.`,
    mainImage: "MapStructure",
    skills: [
      {
        image: "React",
        text: "Chosen as a powerful foundation for the structure and for building reusable components, such as the dynamic tab navigation on the project pages.",
      },
      {
        image: "Tailwind",
        text: "I used Tailwind for responsive CSS styling. This way I could easily program good looking UI without too much effort.",
      },
      {
        image: "Typescript",
        text: "Applied to enforce strict typing, which keeps the code clean, prevents errors, and ensures a solid, scalable codebase.",
      },
    ],
  },
  "design-ux": {
    title: "Design & UX",
    description: `Before realising the pages. I used canva to sketch them first. After I got the base of my project set-up I went back to the drawing board in Canva. I made a screenshot of my website and designed it how I wanted it to look. The screenshot shows this proces by showing the concept art of the game workshop.`,
    mainImage: "UI",
    skills: [
      {
        image: "Tailwind",
        text: "I used Tailwind for responsive CSS styling. This way I could easily program good looking UI without too much effort.",
      },
    ],
  },
  "next-steps": {
    title: "Next Steps",
    description: `Right now there are a few things I am working on. Currently I'm doing a semester in Social Impact apps where I work together with BYCS to make an app for cycling acitivities all around the world. When that project is finished I will add that to my portfolio. I also want to add an older project for CareAnimations (see screenshot). This was a project where we needed to build a dashboard that showed a lot of information. The dashboard that was most interesting to me, is the one on the screenshot. It's a dashboard that shows words that people filled in a lot in question forums. This is a way to show qualitive data. With that being said, there is still a lot that I can add to this portfolio.`,
    mainImage: "CareAnimations",
    skills: [
      {
        image: "Python",
        text: "Python was used for CareAnimations. This was a project where I needed to make multiple dashboards that contained a lot of information",
      },
      {
        image: "Streamlit",
        text: "Streamlit was used for the dashboard itself. This is an easy platform to build dashboards on.",
      },
    ],
  },
};
