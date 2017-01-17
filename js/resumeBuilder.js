//-----------------------------------------------------JSON OBJECTS-----------------------------------------------------------
var bio = {
    "name": "Sneha Parekh",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91-842-082-9145",
        "email": "sneha.parekh01@gmail.com",
        "github": "SnehaParekh",
        "location": "Kolkata"
    },
    "welcomeMessage": "I aim to build highly scalable and impactful software solutions for businesses. I am passionate about gorgeous designs, front-end web development, usage of logic to solve complex problems and the intersection of these three.",
    "skills": ["AngularJS", "Java", "JavaScript", "HTML", "CSS", "Bootstrap", "Responsive Design", "Web Tools"],
    "biopic": "images/sneha.jpg"
};


var work = {
    "jobs": [{
            "title": "Software Developer",
            "employer": "Tavant Technologies",
            "dates": "Oct 2015 - Sept 2016",
            "location": "Bangalore",
            "description": "Core member of the team involved in developing Retail Point-of-Sale web application for the following clients - PHH Mortgage, Sierra Pacific Mortgage. Both the web applications were developed using the AngularJS Framework. My responsibilities involved coding with AngularJS to implement the MVC architectural design pattern, writing CRUD operations to perform all the rendering at the client side, developing custom directives, doing rigorous form-validation and sticking to UI standards and best practices. Also, used the Jasmine Framework to develop unit-test cases and the Gulp framework for task automation."
    },
        {
            "title": "Project Trainee",
            "employer": "Tavant Technologies",
            "dates": "Aug 2015 - Sept 2015",
            "location": "Bangalore",
            "description": "The training program was versatile teaching how to build a web app using backend languages (Core Java, Advance Java), frontend languages (HTML, CSS, JavaScript, JQuery), database (SQL, JDBC Connectivity, Basics of Hibernate), Servlets and the SpringMVC framework."
    },
            {
            "title": "Intern",
            "employer": "ThinkLabs, IIT Bombay",
            "dates": "May 2014 - June 2014",
            "location": "Mumbai",
            "description": "Embedded Programming using ATmega64 microcontroller and its various peripherals such as sensors, bluetooth module,  motors, and the 8 bit LCD."
    }]
};

var education = {
    "schools": [{
            "name": "MPSTME, NMIMS University",
            "dates": "Aug 2011 to Jun 2015",
            "degree": "B.Tech",
            "location": "Mumbai",
            "url": "",
            "majors": ["Computer Science"]
            },
        {
            "name": "Ashok Hall Girls' Higher Secondary Schools",
            "dates": "Apr 2008 to Apr 201",
            "degree": "Higher Secondary",
            "location": "Kolkata",
            "url": "",
            "majors": ["Physics", "Chemistry", "Mathematics"]
              }
        ],
    "onlineCourses": [{
        "title": "Java Programming",
        "school": "Cave of Programming - John Prucell",
        "dates": "3 weeks",
        "url": ""
    }, {
        "title": "Intro to Algorithms",
        "school": "Princeton University, Coursera",
        "dates": "5 weeks",
        "url": ""
    },
                     {
        "title": "Object Oriented JavaScript",
        "school": "HackReactor",
        "dates": "2 weeks",
        "url": ""
    }]
};


var projects = [{
    "title": "Styles Conference Website",
    "dates": "March 2016",
    "description": "Often websites are designed with a single aim of making them look aesthetically pleasing to the eyes. My focus was not only on visual design but also on providing intuitive navigation, color-management, improving user experience and interaction by using right layouts and typography.Also, the site was developed to work across all the major browsers.",
    "images": ["images/shay1.png", "images/shay2.png", "images/shay3.png"]
}, {
    "title": "Restaurant Application",
    "dates": "July 2016",
    "description": "A web application that allows the user to glance through the menu, filter it for personal preferences, submit ratings, send a message if they have an inquiry or complain and book table online. This app is based on the concept of SPA, hence doing all the rendering on the client side. The backend consists of a json-server. The database is in JSON format. The client and server communicate using RESTful services",
    "images": ["images/angular1.png", "images/angular2.png", "images/angular3.png", "images/angular4.png"]
}, {
    "title": "Resume Generator",
    "dates": "September 2016",
    "description": "Building Resume using JavaScript.Generates resumes on-fly. Nothing is hardcoded into the HTML as a result even the HTML template is generated on the fly. Depending upon the user's details passed in the form of data objects, this generator can build a resume of fly for him/her. The resume you you are viewing right now has been built using this generator",
    "images": ["images/resume.png"]
}];

//-----------------------------------------------------BIO SECTION-----------------------------------------------------------

var jobRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(jobRole);

var name = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(name);

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(mobile);

var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(email);

var github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(github);

var city = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(city);

var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(bioPic);

var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcomeMessage);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
}

//-----------------------------------------------------WORK SECTION-----------------------------------------------------------

function displayWork() {
    for (office in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", (work.jobs)[office].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", (work.jobs)[office].title);
        var formattedDate = HTMLworkDates.replace("%data%", (work.jobs)[office].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", (work.jobs)[office].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", (work.jobs)[office].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription);
    }
}

displayWork();

//-----------------------------------------------------INTERNATIONALIZE NAME--------------------------------------------------

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

inName(bio.name);

//-----------------------------------------------------PROJECTS SECTION-------------------------------------------------------

projects.display = function() {
    for(var i = 0; i <projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
        var formattedProjectImage = "";
        for(var j = 0; j <projects[i].images.length; j++) {
            formattedProjectImage += HTMLprojectImage.replace("%data%", projects[i].images[j]);
        }
        $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage + "<hr>");
    }
};

projects.display();

//-----------------------------------------------------MAP SECTION------------------------------------------------------------

$("#mapDiv").append(googleMap);

//-----------------------------------------------------EDUCATION SECTION------------------------------------------------------

education.display = function() {
    for(var i = 0; i <education.schools.length; i++) {    
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    
    for(var i = 0; i <education.onlineCourses.length; i++) {        
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        //.onlineCourse-entry:last
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
    }
};

education.display();

//-----------------------------------------------------LET'S CONNECT SECTION-------------------------------------------------

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(mobile);

var email = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(email);

var github = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(github);

var city = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(city);

//-----------------------------------------------------------END-------------------------------------------------------