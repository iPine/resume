
var bio = {
	"name": "luo feng",
	"role": "Data Analyst",
	"contacts": {
				"mobile": "1838058xxxx",
				"email": "931514355@qq.com",
				"github": "iPine",
				"location": "Mian Yang"
			},
	"bioPic": "images/me.jpg",
	"skills": ["programming","d3.js","C","JS"],
	"welcomeMessage": "Hello Welcome! "
}

var work = {
	"jobs": [{
		"location": "BeiJing",
		"title": "Data Analyst",
		"employer": "Baidu",
		"description": "Data Analyst",
		"dates": 2020
	}]	
}

var project = {
	"projects": [{
		"title": "WorldCup",
		"dates": 2016,
		"description": "worldcup visualization",
		"images": "images/worldcup.jpg"
	},
	 {
		"title": "fcm_radviz",
		"dates": 2016,
		"description": "Learn FCM algorithm result",
		"images": "images/fcm_radviz.jpg"
	}]
}

var education = {
	"schools": [{
			"name": "Southeast University of Science and Technology",
			"location": "Mian Yang",
			"degree": "BA",
			"major": ["Software Engineering"],
			"dates": "2013-2017",
			"url": "http://www.swust.edu.cn/"
		},
		{
			"name": "Central South University",
			"location": "Chang Sha",
			"degree": "Masters",
			"major": ["Computer Science and Technology"],
			"dates": "2017-2020",
			"url": "http://www.csu.edu.cn/"
		}//这行不用逗号
	],
	"onlinecourses": [{
			"title": "Data Visualization and D3.js",
			"school": "Udacity",
			"dates": 2016,
			"url": "http://www.udacity.com/courses/ud507"
		},
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2016,
			"url": "http://www.udacity.com/courses/ud804"
		}]
}//这里也不用分号


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


function displayBio(){
	// $("#topContacts").append(HTMLcontactGeneric);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedemail);

	var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedgithub);

	var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedlocation);

	var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedPic);

	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedwelcomeMsg);

	if(bio.skills.length >0){
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkills);
	}

}
displayBio();

function displayWork(){

	for(var i=0; i<work.jobs.length; i++){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
	var formattedDiscrip = HTMLworkDescription.replace("%data%",work.jobs[i].description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDiscrip);

	}

}

displayWork();

function displayProject(){
	for(var i=0; i<project.projects.length; i++){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",project.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDiscrip = HTMLprojectDescription.replace("%data%",project.projects[i].description);
		$(".project-entry:last").append(formattedDiscrip);

		// if(project.projects[i].images.length > 0){
		// 	for(var j=0; j<project.projects[i].images.length; j++){
				var formattedImage = HTMLprojectImage.replace("%data%",project.projects[i].images);
				$(".project-entry:last").append(formattedImage);
		// 	}
		// }
	}
};
displayProject();

function displaySchool(){
	for(var i=0; i<education.schools.length; i++){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
		$(".education-entry:last").append(formattedMajor);
	}
}
displaySchool();

function displayOnlineCourse(){
	for(var i=0; i<education.onlinecourses.length; i++){
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[i].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlinecourses[i].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%",education.onlinecourses[i].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%",education.onlinecourses[i].url);
		$(".education-entry:last").append(formattedURL);
	}
}
displayOnlineCourse();

function inName(name){
	name = name.trim().split(" ");//分成数组
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);