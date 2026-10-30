export const images = {
  Dart: {
    className: "w-25 sm:w-25",
    src: "/dart-logo.png",
    alt: "Dart",
    width: 50,
    height: 50,
  },
  Flutter: {
    className: "w-25 sm:w-25 flex",
    src: "/flutter-logo.png",
    alt: "Flutter",
    width: 50,
    height: 50,
  },
  BYCS: {
    className: "rounded-lg w-40 sm:w-60",
    src: "/BYCS.jpg",
    alt: "BYCS",
    width: 500,
    height: 500,
  },
};

export const BYCSDetails = {
  assignment: {
    title: "The project",
    description: `This is my current project. Right now I'm developing an app for BYCS in which I'm responsible for the CI/CD pipeline as well as the User Interface. This project will be updated once finished.`,
    mainImage: "BYCS",
    skills: [
      {
        image: "Flutter",
        text: "This project is being made in Flutter. Flutter helps building cross-platform user-interfaces for the app.",
      },
      {
        image: "Dart",
        text: "Dart is commonly used with Flutter. It handles the core logic and data management",
      },
    ],
  },
};
