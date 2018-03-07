console.log("Hello there");
var portfolioApp = angular.module('portfolioApp', []);
var ProjectController = function($scope){
  $scope.projects = [{
    name: "Ce portfolio",
    description: "Ce portfolio a été réalisé avec Bootstrap et AngularJS pour la gestion" +
      " de la section projets.",
    technologies: ["HTML", "CSS", "Bootstrap", "AngularJS", "Sass"],
    imageLink: "img/site2-portfolio.png",
    link: "#"
  },{
    name: "Page de tribut",
    description: "Dans le cadre du MOOC Free Code Camp auquel je participe, un des projets" +
      " constitue à créer une page de tribut pour le sujet de son choix. J'ai donc décidé" +
      " de le faire sur les livres que je lisais en ce moment.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    imageLink: "img/site1-portfolio.png",
    link: "https://codepen.io/Axoun/full/YNmPer"
  },
{
  name: "Site internet de la SMHLM",
  description: "Dans le cadre de mon stage à la Société Martiniquaise d'HLM, j'ai eu l'occasion" +
  " de refaire le site internet de la SMHLM. Ce stage m'a permis de renforcer mes compétences en "+
  "développement Web mais aussi en gestion de projet et en communication.",
  technologies: ["HTML", "CSS", "Bootstrap", "Joomla!", "JavaScript", "Google Maps API"],
  imageLink : "img/site3-portfolio.png",
  link: "http://www.smhlm.org"
},
{
  name: "Outil ETL pour Digicel",
  description: "Dans le cadre de mon stage à Digicel Antilles-Guyane, j'ai conçu un outil permettant " +
  "d'automatiser la collecte, la transformation et la mise en base des données générées par les antennes 3G " +
  "de l'opérateur. Grâce à ce stage, j'ai acquis une meilleur compréhension du développement d'applications " +
  "d'entreprise.",
  technologies: ["Python",  "MySQL"],
  imageLink: "img/site4-portfolio.png" 
}]
};
portfolioApp.controller("projectController", ProjectController);

