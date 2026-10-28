export const images = {
  Scratch: {
    className: "w-10 sm:w-30",
    src: "/Scratch.webp",
    alt: "Scratch",
    width: 50,
    height: 50,
  },
  Gitlab: {
    className: "w-10 sm:w-20",
    src: "/gitlab-logo-png-transparent.png",
    alt: "Gitlab",
    width: 50,
    height: 50,
  },
  ParachuteGuys: {
    className: "rounded-lg border-2 w-10 sm:w-100",
    src: "/Parachute-guys.png",
    alt: "Parachute Guys",
    width: 500,
    height: 500,
  },
  GameWorkshop: {
    className: "rounded-lg border-2 w-10 sm:w-100",
    src: "/game-workshop.png",
    alt: "Game Workshop",
    width: 500,
    height: 500,
  },
};

export const workshopDetails = {
  "Game-workshops": {
    title: "GAME WORKSHOPS",
    description: `Dit was een project waarbij ik een game maakte met kinderen om ze te laten zien hoe het is om developer te zijn. 

Kinderen kregen de volledige vrijheid om iets te ontwerpen wat ze zelf wilden. 

Hierdoor leerden ze op een leuke manier de basis van logica en programmeren!`,
    mainImage: "GameWorkshop",
    skills: [
      {
        image: "Scratch",
        text: "Scratch was used to learn kids the fundamentals of programming",
      },
      {
        image: "Gitlab",
        text: "Gitlab was used to manage project versions and collaborate.",
      },
    ],
  },
  "computer-workshops": {
    title: "COMPUTER WORKSHOPS",
    description:
      "During the computer workshops, participants got hands-on experience assembling hardware and learning basic computer architecture.",
    mainImage: "Scratch", // Pas dit aan naar de juiste afbeelding uit je images object
    skills: [
      {
        image: "Scratch",
        text: "Basic hardware troubleshooting and assembly basics.",
      },
    ],
  },
  "typing-lessons": {
    title: "TYPING LESSONS",
    description:
      "Interactive typing lessons designed to improve typing speed and finger placement for young learners through fun games.",
    mainImage: "ParachuteGuys",
    skills: [
      {
        image: "Scratch",
        text: "Touch-typing fundamentals and rhythm training.",
      },
    ],
  },
  "big-events": {
    title: "BIG EVENTS",
    description:
      "Large community gatherings showcasing final projects built by the kids to their parents and peers.",
    mainImage: "ParachuteGuys",
    skills: [
      {
        image: "Gitlab",
        text: "Presentation skills and project showcasing.",
      },
    ],
  },
};