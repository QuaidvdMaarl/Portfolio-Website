export const images = {
  Unity: {
    className: "w-15 sm:w-15",
    src: "/unity-logo.webp",
    alt: "Unity",
    width: 50,
    height: 50,
  },
  CSharp: {
    className: "w-15 sm:w-15",
    src: "/Csharp.svg",
    alt: "C#",
    width: 50,
    height: 50,
  },
  gitlab: {
    className: "w-15 sm:w-15",
    src: "/gitlab-logo-png-transparent.png",
    alt: "GitLab",
    width: 50,
    height: 50,
  },
  blender: {
    className: "w-15 sm:w-30",
    src: "/Blender-Logo.png",
    alt: "Blender",
    width: 50,
    height: 50,
  },
  TheFinalFlight: {
    className: "rounded-lg w-70 sm:w-130",
    src: "/the-final-flight.png",
    alt: "The Final Flight",
    width: 500,
    height: 500,
  },
  technicalImplementation: {
    className: "rounded-lg w-70 sm:w-130",
    src: "/technical-implementation.png",
    alt: "Technical Implementation",
    width: 500,
    height: 500,
  },
  timeConstraints: {
    className: "rounded-lg w-70 sm:w-130",
    src: "/time-constraints.png",
    alt: "Time Constraints",
    width: 500,
    height: 500,
  },
};

export const workshopDetails = {
  concept: {
    title: "CONCEPT",
    description: `The Final Flight is a game that was created during one of my first weeks of school in 2025, because of our assignment. We needed to create 3D flappy bird in Unity. That was our only requirement.
    
    At first I got to thinking what I wanted to create. I wanted to take a unique approach, so I wanted something that could fly, but wasn't a bird. Immediately I thought of a fly that would be flying through a forest. My only thought was, what should it be dodging. That's when I thought of a natural enemy of flies, the spider. In blender I created a few simple models and got to testing and absolutely loved the concept.
    
    What I loved most about this game was the music that I chose for it. I'm a huge fan of classical music in games. In this case, I wanted classical music that was a bit more whimsical. I eventually landed on Ravel Bolero by Arthur Fiedler. This piece fits great, because the longer the song goes on the more intense it gets. Just like flappy bird. The song does this by adding instruments throughout the song while keeping the same melody structure. The result is a whimsical fly flying through the forest and trying to dodge everything in its path.`,
    mainImage: "TheFinalFlight",
    skills: [
      {
        image: "blender",
        text: "Blender was used to create the models for the characters in the world",
      },
    ],
  },
  "time-constraints": {
    title: "WORKING UNDER TIME CONSTRAINTS",
    description: `For this assignment I had one week. This meant that I needed to work quickly. 
    
    I started with making user-stories about what needed to be done to have a functional flappy bird. I decided early on that I wanted a very simplistic artstyle, so that modelling wouldn't cost me too much time. Programming-wise I needed to move fast as well. Normally I love future-proving things, but when a project lasts 1 week, it doesn't really have a future. If it was functional it was good to go. 
    
    I really enjoyed working under pressure during this project. Working under certain constraints can enhance creativity, because not everything is possible in a week.`,
    mainImage: "timeConstraints",
    skills: [
      {
        image: "gitlab",
        text: "Gitlab was used to work in agile scrum and to have an overview of the project.",
      },
    ],
  },
  "technical-implementation": {
    title: "TECHNICAL IMPLEMENTATION",
    description: `Now for the programming itself. There were a few that I needed to think about when making this game.
    
    First, how would the level get harder? In the normal flappy bird, the game gets a bit harder every time you score a point. I wanted to implement this feature as well. I wrote code to make it so the game becomes gradually faster the longer your fly survives. I made a playspeed manager which made it so the game went faster, but also making so that webs get placed closer together. Making it harder to react to incoming webs.
    
    The second thing I needed was a way to move. While it is possible to make my fly move on it's own. This would mean I needed a way to proceduly generate the world. We only had one week, so this wasn't my preference. I decided to have two long chunks of the map. These two segments loop. This worked very well, because now my map was infinite without too much work. You could however see the chunk being loaded in. This was a bit ugly, so I needed to think about a solution. I didn't want to make my map even longer so I did something else. In Unity you can set fog in the environment. With enough fog you could not see the chunks getting generated. It also made sence to have some sort of fog mechanic in a big forest.
    
    The last thing that I needed to think about was how do I want my fly to dodge a web. At first I though, I want the spider to fly around it. This seemed to be quite difficult gameplay wise. It didn't feel very intuitive either. At some point one of my teachers said to me, why doesnt the fly just go through the web. This was an amazing idea. I made the web connect to a few trees. The web has a big whole in the middle where the fly can fly through. I moved the big web around to force the player to move after every web.`,
    mainImage: "technicalImplementation",
    skills: [
      {
        image: "Unity",
        text: "Built with Unity using standard 3D physics, collision detection, and custom rigid-body flight controls.",
      },
      {
        image: "CSharp",
        text: "In C# I scripted a looping world system where map segments move toward a stationary player. I also procedually generated obstacles to make the player move which would get harder after each obstacle.",
      },
    ],
  },
};