const projects = [
    {
        id: "352ccc14-f183-4473-936b-d73380ec8790",
        title: "Sooof Inc.",
        subtitle: "B2B Cooperative Buying Solution",
        description: ["Sooof is a web platform facilitating cooperative buying for companies across all industries. Companies anonymously join \"Crowd Order Deals\" and benefit from \"Sooof prices\" for products offered on the marketplace once the deal target is reached (i.e. a certain amount of companies has joined the deal).",
        "As a Fullstack Developer who started before the first version of the app went live, I helped transforming business requirements and conceptual designs to a cloud-based web application facing 1000s of visitors daily."],
        imageUrl: "https://s3.amazonaws.com/alexis-bellet.com/images/large/sooofinc-marketplace.png",
        liveUrl: "https://sooofinc.com",
        githubUrl: "",
        techStack: ["javascript", "jquery", "html", "css", "sass", "csharp", "mssql", "azure", "gulp"]
    },
    {
        id: "ad4d07a3-8683-4910-949d-dd263d2d1965",
        title: "CPGAL",
        subtitle: "After School Activities in French in Toronto",
        description: ["\"C'est Pas Géni'Al?\" (CPGAL) is a french-speaking program for after school (and holiday break) activities for children in Toronto, Ontario, Canada.", "On board as a freelance developer shortly after a soft launch, I took over the existing code base and helped get the site more user-friendly, implemented new design specs and improved general accessibility (e.g. mobile friendliness)."],
        imageUrl: "https://s3.amazonaws.com/alexis-bellet.com/images/large/cpgal.png",
        liveUrl: "http://www.cpgal.ca/",
        githubUrl: "",
        techStack: ["javascript", "jquery", "html", "css", "sass", "grunt"]
    },
    {
        id: "b01cdce5-e957-466c-93cc-00216ad58717",
        title: "North American Business College",
        subtitle: "A single page application using Angular 2 as wordpress theme",
        description: ["The North American Business College is an organization based in Ontario, Canada specialized in second-career curriculum.", "Hired as a freelance developer by Connect6, marketing agency responsible for revamping the college's promotional assets, I created a Single Page Application using Angular 2 (built on the company's existing wordpress) in order to create a need-targeted experience for potential customers. The conceptual designs were both handed by the creative agency and self created."],
        imageUrl: "https://s3.amazonaws.com/alexis-bellet.com/images/large/nabcollege-angular.png",
        liveUrl: "",
        githubUrl: "https://github.com/SpaceyRezum/angular2-college",
        techStack: ["typescript", "angular", "html", "sass", "css", "wordpress"]
    },
    {
        id: "73d7b1d9-35a2-4082-9f1b-083a10a517e0",
        title: "Nerdia - Tech Trivia",
        subtitle: "A co-authored developer-focus quiz app",
        description: ["Nerdia is a Tech Trivia App co-developed with Lisa Folkerson during our HackerYou FullStack Development course. This is a single page application allowing users to sign up and play one of our 5 developer-centric quizes.", "The web app is developed as an Single Page Application using React and leveraging Google Firebase's backend capabilities (for authentication, data storage and hosting)."],
        imageUrl: "https://s3.amazonaws.com/alexis-bellet.com/images/large/nerdia-tech-trivia.png",
        liveUrl: "https://react-trivia-game.firebaseapp.com/",
        githubUrl: "https://github.com/SpaceyRezum/react-trivia-game",
        techStack: ["javascript", "react", "firebase", "html", "sass"]
    },
    {
        id: "ad61c8fc-2253-4659-a00d-2c9539caad4c",
        title: "Chill Zones",
        subtitle: "Climatized Location Finder App in the Toronto Area",
        description: ["Chill Zones was co-developed with Lisa Folkerson during our HackerYou FullStack Development course.", "This is a single page application allowing users to find the best air conditioned places in Toronto (we all know how hot summers get).", "Users can also sign up and participate by adding their own locations to the database (these locations are validated first against Google Places API)."],
        imageUrl: "https://s3.amazonaws.com/alexis-bellet.com/images/large/chill-zones-toronto.png",
        liveUrl: "https://chillzones-toronto.herokuapp.com/",
        githubUrl: "https://github.com/SpaceyRezum/chill-zones-react-app",
        techStack: ["javascript", "react", "html", "sass", "node", "mongo"]
    },
    {
        id: "607bce56-6e68-45c5-8c28-8c6ef06fe350",
        title: "Beau - Seasonal Beer Selection",
        subtitle: "Find the nearest seasonal beer from Beau near you!",
        description: ["Another hobby-developed app in which I tested the AngularJS framework for the first time. Beau - Seasonal Beer Selection single page application allow each user in Canada to find out what's Beau's nearest selection and where to find it."],
        imageUrl: "https://s3.amazonaws.com/alexis-bellet.com/images/large/beau-seasonal-beer-app.png",
        liveUrl: "http://beau-seasonal-beers-app.s3-website-us-east-1.amazonaws.com/#/",
        githubUrl: "https://github.com/SpaceyRezum/beau-seasonal-beers-app",
        techStack: ["angularjs", "html", "css"]
    },
    {
        id: "01dd427a-97e5-40b8-b2be-edee1daa9c2f",
        title: "Frogger-like Arcade Game",
        subtitle: "Quick and simple platform-game where almost no one can loose!",
        description: ["This very simple little game is inspired by the classic game Frogger released in the 80's. The goal is trivial, getting to the winning tile triggers a level change. At each level, the difficulty is slightly raised", "The idea behind this app was to understand how the HTML Canvas was working and how to use Animation Frames to render video game-like pages"],
        imageUrl: "https://s3.amazonaws.com/alexis-bellet.com/images/large/frogger-game.png",
        liveUrl: "http://frogger-game-app.s3-website-us-east-1.amazonaws.com/",
        githubUrl: "https://github.com/SpaceyRezum/my_first_arcade_game",
        techStack: ["javascript", "html", "css"]
    }
]

module.exports = {
    projects
}