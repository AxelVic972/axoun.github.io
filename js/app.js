console.log("Hello there");
var portfolioApp = angular.module('portfolioApp', []);
var ProjectController = function($scope){
  $scope.projects = [{
    name: "Ce portfolio",
    description: "Ce portfolio a été réalisé avec Bootstrap et AngularJS pour la gestion" +
      " de la section projets.",
    technologies: ["HTML", "CSS", "Bootstrap", "AngularJS", "JQuery", "Sass"],
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
  }]
};
portfolioApp.controller("projectController", ProjectController);

