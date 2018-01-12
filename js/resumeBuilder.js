//-----------------------------------------------------JSON OBJECTS-----------------------------------------------------------
var bio = {
    "name": "Sneha Parekh",
    "role": "Frontend Developer",
    "contacts": {
        "mobile": "+91-123-456-7890",
        "email": "sneha.parekh01@gmail.com",
        "github": "SnehaParekh",
        "location": "Mumbai"
    },
    "welcomeMessage": "I aim to build highly scalable and impactful software solutions for businesses. I am passionate about gorgeous designs, front-end web development, usage of logic to solve complex problems and the intersection of these three.",
    "skills": ["AngularJS", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Gulp", "Grunt", "Flex/Grid Layout", "Angular Material Design"],
    "biopic": "images/sneha.jpg"
};


var work = {
    "jobs": [{
            "title": "UI Developer",
            "employer": "Media.Net (Directi)",
            "dates": "2017 - Present",
            "location": "Mumbai",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."
        }, {
            "title": "Software Developer",
            "employer": "Tavant Technologies",
            "dates": "2015 - 2016",
            "location": "Bangalore",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum."
        },
        {
            "title": "Intern",
            "employer": "ThinkLabs, IIT Bombay",
            "dates": "2014 (2 months)",
            "location": "Mumbai",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
    ]
};

var education = {
    "schools": [{
            "name": "MPSTME, NMIMS University",
            "dates": "Aug 2011 to Aug 2015",
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
            "title": "Intro to Algorithms I",
            "school": "Princeton University, Coursera",
            "dates": "5 weeks",
            "url": ""
        },
        {
            "title": "Object Oriented JavaScript",
            "school": "HackReactor",
            "dates": "2 weeks",
            "url": ""
        },
        {
            "title": "Front-End JavaScript Frameworks: AngularJS",
            "school": "Coursera",
            "dates": "4 weeks",
            "url": ""
        }
    ]
};


var projects = [{
    "title": "Design Conference Website",
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
    "description": "Generates resumes on-fly. Nothing is hardcoded into the HTML. Depending upon the user's details passed in the form of JS data objects, this generator can build a resume for anybody. The resume you you are viewing right now has been built using this generator",
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
    for (var i = 0; i < projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[i].description);
        var formattedProjectImage = "";
        for (var j = 0; j < projects[i].images.length; j++) {
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
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor);
    }
    $("#education").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
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