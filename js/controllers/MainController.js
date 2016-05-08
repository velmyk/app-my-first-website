app.controller('MainController', ['$scope', function($scope) {
  $scope.bio = {
    "name": "Vasyl Velmyk",
    "role": "Web Developer",
    "contacts": {
      "mobile": "+38 (063) 489-30-50",
      "email": "velmyk@gmail.com",
      "github": "/velmyk",
      "location": "Ukraine, Kyiv"
    },
    "welcomeMessage": "Seeking a junior web developer position. Have some skills. Want to work hard and develop my professional skills in a good team.",
    "skills": {
                "technologies": [
                  { "name": "Bootstrap",
                    "url": "images/bootstrap-logo.png",
                    "dateFrom": [2015, 4],
                    "numOfUse": 1 },

                  { "name": "JavaScript",
                    "url": "images/javascript-logo.png",
                    "dateFrom": [2015, 2],
                    "numOfUse": 2 },
                  
                  { "name": "AngularJS",
                    "url": "images/angular-logo.png",
                    "dateFrom": [2015, 3],
                    "numOfUse": 1  },

                  { "name": "MySQL",
                    "url": "images/mysql-logo.png",
                    "dateFrom": [2015, 3],
                    "numOfUse": 0 } ],

                "devtools" : [
                  { "name": "GitHub",
                    "url": "images/github-logo.png",
                    "dateFrom": [2015, 2],
                    "numOfUse": 3  } ],

                "other": [],

                "languages": [
                    {
                      "name": "English",
                      "level": "Intermediate",
                      "image": "images/flag-gb.jpg",
                    },
                    {
                      "name": "Ukrainian",
                      "level": "Native",
                      "image": "images/flag-ua.jpg",
                    },
                    {
                      "name": "Rusian",
                      "level": "Advansed",
                      "image": "images/flag-ru.jpg",
                    },
                    {
                      "name": "Spainish",
                      "level": "Basic",
                      "image": "images/flag-sp.jpg",
                    }
                  ]
               },
    "photo": "images/photo.jpg"
  };

  $scope.usesNum = function (index, group) {

    var num = $scope.bio.skills[group][index].numOfUse;
    $("#" + $scope.bio.skills[group][index].name).append("<span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span>");
    // if (num > 5) {
    //   for(var i = 0; i < 5; i++) {
    //     $(".stars").append("<span class='glyphicon glyphicon-star'></span>");
    //   }
    // }
    //return "<span class='glyphicon glyphicon-star'></span>";
  };

  $scope.experience = function (index,lang) {

    var now = new Date();
    var date = new Date($scope.bio.skills[lang][index].dateFrom[0], $scope.bio.skills[lang][index].dateFrom[1]);
    var days = (now - date) / 1000 / 3600 / 24;
    if (days < 30) {
      return "Les than a month";
    } else if (days < 365) {
      return Math.floor(days / 30) + " month";
    } else {
      return Math.floor(days / 365) + " year(s) " + Math.floor((days % 365) / 30) + " month";
    }
  };

  $scope.education = {
    "schools": [
      {
        "name": "NTUU \"Kyiv Polytechnic Institute\"",
        "faculty": "Institute of Applied Systems Analysis",
        "location": "Ukraine, Kyiv",
        "degree": "Bachelor of science",
        "major": "Applied Mathematics",
        "dates": "2013",
        "url": "http://ipsa.kpi.ua/",
        "message": ""
      },
      {
        "name": "NTUU \"Kyiv Polytechnic Institute\"",
        "faculty": "Institute of Applied Systems Analysis",
        "location": "Ukraine, Kyiv",
        "degree": "Master of science",
        "major": "Computer Science",
        "dates": "2013 - Current",
        "url": "http://ipsa.kpi.ua/",
        "message": ""
      }
    ],
    "onlineCourses": {
        "htmlcss": [
          {
            "title": "Bootstrap 3 Tutorial",
            "school": "w3schools",
            "img": "images/w3schools-logo.png",
            "date": "April 2015",
            "view": "hjhj",
            "github": "kkk",
            "url": "http://www.w3schools.com/bootstrap/default.asp"
          }
        ],

        "javascript": [
          {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "img": "images/udacity-logo.png",
            "date": "March 2015",
            "view": "",
            "github": "",
            "url": "https://www.udacity.com/course/ud804"
          },
          {
            "title": "JavaScript",
            "school": "Codecademy",
            "img": "images/codecademy-logo.png",
            "date": "April 2015",
            "view": "",
            "github": "",
            "url": "http://www.codecademy.com/en/tracks/javascript"
          }
        ],

        "angular": [
          {
            "title": "Learn AngularJS",
            "school": "Codecademy",
            "img": "images/codecademy-logo.png",
            "date": "May 2015",
            "view": "",
            "github": "",
            "url": "http://www.codecademy.com/en/learn/learn-angularjs"
          },
          {
            "title": "Shaping up with Angular.JS",
            "school": "CodeSchool",
            "img": "images/codeschool-logo.png",
            "date": "April 2015",
            "view": "",
            "github": "",
            "url": "https://www.codeschool.com/courses/shaping-up-with-angular-js"
          },
          {
            "title": "AngularJS Tutorial",
            "school": "w3schools",
            "img": "images/w3schools-logo.png",
            "date": "April 2015",
            "view": "",
            "github": "",
            "url": "http://www.w3schools.com/angular/default.asp"
          }
        ],

        "jquery": [
          {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "img": "images/udacity-logo.png",
            "date": "March 2015",
            "view": "",
            "github": "",
            "url": "https://www.udacity.com/course/ud245"
          }
        ],

        "ajax": [
          {
            "title": "Intro to AJAX",
            "school": "Udacity",
            "img": "images/udacity-logo.png",
            "date": "March 2015",
            "view": "",
            "github": "",
            "url": "https://www.udacity.com/course/ud110s"
          }
        ],

        "dbases": [
          {
            "title": "SQL Tutorial",
            "school": "w3schools",
            "img": "images/w3schools-logo.png",
            "date": "April 2015",
            "view": "",
            "github": "",
            "url": "http://www.w3schools.com/sql/default.asp"
          }
        ],
        
        "other": [
          {
            "title": "PHP",
            "school": "Codecademy",
            "img": "images/codecademy-logo.png",
            "date": "April 2015",
            "view": "",
            "github": "",
            "url": "http://www.codecademy.com/en/tracks/php"
          },
          {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "img": "images/udacity-logo.png",
            "date": "March 2015",
            "view": "",
            "github": "",
            "url": "https://www.udacity.com/course/ud775"
          }
        ]
      }
  };


  /*  Run this functions to online courses 

   * $scope.showView = function(index, group){
   *     return !!($scope.education.onlineCourses[group][index].view);
   * };

   * $scope.showGithub = function(index, group){
   *     return !!($scope.education.onlineCourses[group][index].github);
   * }; */

  $scope.work = {
    "jobs": [
      {
        "employer": "TopGoods",
        "title": "Main manager",
        "url": "http://topgoods.com.ua",
        "location": "Kyiv",
        "dates": "November 2012 - February 2015",
        "description": "TopGoods is an internet shop, selling Apple devices, accessories and portable sound systems.My role in this company was to control stuff, configuration Google Adwords, controling the website (working with developers, marketing companies, SEO specialists)."
      },
      {
        "employer": "OVB Allfinanz Ukraine",
        "title": "Life Insurance Seller",
        "url": "http://www.ovb.ua/",
        "location": "Kyiv",
        "dates": "Muy 2012 - November 2012",
        "description": "Nothing interesting"
      },
      {
        "employer": "Avalon FA LTD",
        "title": "Prop Trader",
        "url": "http://avalonfundaktiv.com",
        "location": "Kyiv",
        "dates": "April 2011 - April 2012",
        "description": "For a long time I wanted to trade stocks. In Avalon FA we were trading stocks from NYSE and NASDAQ on intra-day period using DAS software. It was very interesting, but after a year to be a trader, I understood that much better to be a broker but not a trader. So I quit."       
      }
    ]
  };
  
}]);
