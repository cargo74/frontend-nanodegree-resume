var bio = {
	"name" : "James Langmead",
	"role" : "software designer",
	"welcome" : "Software doesn't operate in a vacuumn, but as part of a human system. I want to work with people who value individuals, community and environment. \nCreating something from nothing is as close to magic as we can get. There is no accounting for innovation in a company's balance sheet.",
	"image" : "images/picnic.jpg",
	"contacts" : {
		"twitter" : "cargosoon",
		"linkedin" : "http://au.linkedin.com/pub/james-langmead/1b/349/a1",
		"phone" : "+61417401452",
		"web" : "http://www.cargosoon.info",
		"address" : "Brisbane, QLD, Australia",
		"email" : "cargosoon@gmail.com"
	},
	"skills" : [
		"python", 
		"javascript", 
		"business analysis", 
		"sql"
	]
};
bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").prepend(HTMLbioPic.replace("%data%", bio.image));
	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcome));
	
	$("#topContacts").prepend(HTMLmobile.replace("%data%", 
			bio.contacts.phone));
	$("#topContacts").prepend(HTMLemail.replace("%data%", 
			bio.contacts.email));
	$("#topContacts").prepend(HTMLtwitter.replace("%data%", 
			bio.contacts.twitter));
	$("#topContacts").prepend(HTMLlocation.replace("%data%", 
			bio.contacts.address));
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
				$("#skills").prepend(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
}


var work = {
	"employer" : [
	{
		"name" : "Jeppesen",
		"description" : "Jeppesen is a leader in transport-oriented information systems. I progressed through several roles with Jeppesen, beginning in a graduate position as a QA Engineer, moving on to my first customer-facing role in product support and, finally, seeing the divestment of the product through as a software consultant.",
		"position" : [
		{
			"name" : "Qality Assurance Engineer",
			"startDate" : "2007-03-01",
			"endDate" : "2008-01-01",
			"location" : "Brisbane",
			"dragonSlayers" : [
			{
				"summary" : "Automated 20% of test coverage",
				"keywords" : "test, automation, simulation, UI",
				"story" : "Initially, test case execution was completely manual. The team took on the challenge of automating as much testing as possible. We decided to do this using AutoIT, a point-and-click simulator, which could be scripted to simulate user interaction with the software. In my time with the team, we developed 20% coverage with automated testing, thereby greatly reducing test plan execution time."
			},
			{
				"summary" : "Developed testing process and procedures to ISO9000 level",
				"keywords" : "certification, quality, ISO9000, improvement",
				"story" : "Testing was largely conducted by the development team at first. Often, this meant that quality suffered due to lack of regression testing and lack of customer focus. Our QA team developed a suite of test cases which would be put together into an appropriate test plan for a specific customer and release. Quality measures improved on each subsequent release. The product was able to attain and maintain ISO9000 certification through these efforts."
			},
			{
				"summary" : "Promoted and implemented zero-tolerance bug policy",
				"keywords" : "zero-tolerance, process-improvement",
				"story" : "A prevailing culture of ignoring minor issues meant that we had no real understanding of how many minor issues existed. I intuited that a large number of minor severity issues was a valid measure of usability and lobbied for zero tolerance policy on software issues. Once visible, it became possible to begin addressing some of the minor issues and building the case for considering user experience."
			}
			]
		},
		{
			"name" : "Product Service Manager",
			"startDate" : "2008-01-01",
			"endDate" : "2010-08-01",
			"location" : "Brisbane",
			"dragonSlayers" : [
			{
				"summary" : "Automated weekly and monthly SLA reporting functions",
				"keywords" : "automation, reporting",
				"story" : "Moving from a project delivery phase into support phase triggered the need for regular reporting as required under the support contract. I soon realised that this repetitive task was ripe for automation. I used the online library, Safari, and leant on the expertise of Jeppesen technical experts to develop a VBA reporting tool. Weekly reporting was reduced from a 4 hour job to a 10 minute job."
			},
			{
				"summary" : "Re-built relationship and established a healthy engagement with customer",
				"keywords" : "customer, relationship, service, engagement",
				"story" : "The project, towards its completion, had turned somewhat adversarial. In addition, some technical challenges had shaken the customer’s confidence in the delivery team. As a result, the customer satisfaction rating faltered in the first months of support. My manager asked me to take a lead in improving the relationship. I planned and executed an implementation review, which led to the implementation of a training course for the end users. I worked on improving communications and developed strong interpersonal relationships with my contacts in the organisation. The customer satisfaction rating was pushed back into an acceptable range as a direct result of my efforts."
			}
			]
		},
		{
			"name" : "Software Consultant",
			"startDate" : "2010-08-01",
			"endDate" : "2011-04-01",
			"location" : "Brisbane",
			"dragonSlayers" : [
			{
				"summary" : "Completed first change request from start to finish",
				"keywords" : "SDLC, specification, documentation",
				"story" : "My first large change request: A customer approached us to build some new features to integrate into an SMS gateway. I had read a lot of specifications and had tested many such integrations, but this was my first attempt at specifying such a complex change. We completed the changes within the required timeframe."
			},
			{
				"summary" : "Regressed and improved Data warehouse offering",
				"keywords" : "datawarehouse, warehouse, database, sql, business-intelligence, intelligence, business",
				"story" : "The product included a data warehousing offering which no customer had, to date, adopted. As such, QA and documentation of the DW features was minimal. We were approached by a customer who had a business requirement for the feature. I worked with the technical team to document the offering. I worked with the QA team to establish a testing regime and correct some existing defects. Finally, I worked with the customer to document requirements and provide a number of enhancements to satisfy their requirements."
			},
			{
				"summary" : "Provided continuity through divestment process",
				"keywords" : "continuity, loyal",
				"story" : "The company divested itself of the product on which I was working. Over the course of more than a year between the announcement of intention to sell and an actual sale, the workforce dwindled and our customers began to voice concerns about the lack of resources and expertise. I was able to provide a continuity bridge throughout the product divestment process by stepping up into the role of software consultant."
			}
			]
		}
		]
	},	
	{
		"name" : "Quintiq",
		"description" : "Quintiq is a global organisation of around 800 employees. Gartner puts Quintiq in the coveted leadership quadrant for supply chain planning and optimisation software; competing with the likes of Oracle and SAP in that space.\nAt Quintiq, I work with technical consultants and the customer’s business representatives to design and implement software.\nI have built on my understanding of enterprise software implementation, project governance and sales. I have gained and improved valuable domain expertise in workforce planning, rail asset allocation, resource and port operations.",
		"position" : [
		{
			"name" : "Business Consultant",
			"startDate" : "2011-04-01",
			"endDate" : "",
			"location" : "Brisbane",
			"dragonSlayers" : [
			{
				"summary" : "Promoted and helped to win an innovative sales bid worth $1.5 million",
				"keywords" : "sales, pre-sales, innovation",
				"story" : "A rail organisation requested information for a multi-million dollar project, I recommended to the sales team that we respond despite an offering which did not comply with the RFI. I promoted a non-compliant solution with an unconventional project structure to the sales team. I worked with the sales team to explain and document the approach. The prospect liked our vision and involved us in the next round of deliberations (sales cycle is ongoing at the time of writing). The same approach was later used for a similar bid, which Quintiq has been awarded. These bids were together worth around $5 million dollars over 3 years"
			},
			{
				"summary" : "Maintained quality through a long and arduous project",
				"keywords" : "",
				"story" : "My first project with Quintiq was plagued with difficulties; technical and resourcing challenges, significant change management hurdles and unfavourable contractual conditions. I persisted with the vision through some difficult times despite high levels of attrition within the project team. I maintained good relationships with the stakeholders throughout. The implementation was eventually adopted and became the recipient of the 2014 SEEA (Sydney Engineering Excellence Award) for Control Systems and Communications."
			},
			{
				"summary" : "Addressed a customer relationship issue and simultaneously brought in more than $100k of new work",
				"keywords" : "sales, opportunity, customer, relationship",
				"story" : "I was asked to provide support for an important customer who was consistently responding to customer surveys with low satisfaction scores. After stabilising the relationship with customer representatives, I began lobbying for an implementation review to better understand the issues. On completion of the implementation review, the customer was cognisant that many of the issues stemmed from misunderstanding their own business processes during the implementation. The customer adopted a series of recommended changes and engaged Quintiq in a new project to implement the changes. The new work is worth in excess of $100k"
			},
						{
				"summary" : "Balancing a heavy load",
				"keywords" : "balance",
				"story" : "Shortly after commencing my MBA, a colleague, who was working on a mining industry solution, went on maternity leave. I was tasked, on short notice and with no prior experience in that industry, with the completion of the project. I was able to successfully balance the demands of a second project and my study load to complete the technical implementation within the required timeframe."
			},
						{
				"summary" : "Mentored and trained other team members",
				"keywords" : "train, training, leadership",
				"story" : "During my first project with Quintiq, project delays caused the loss of key technical resources to other projects. We found some inexperienced specialists and I took on the task of bringing them up to speed on the project as well as helping them to develop general skills to benefit Quintiq as they moved on to other projects. Those team members have moved on confidently into new projects and continue to deliver valuable services."
			}
			]
		}
		]
	}, 
	{
		"name" : "Self Employed",
		"position" : []
	}
	] 
};
work.display = function() {
	if (work.employer.length > 0) {
		for (empid in work.employer) {
			var employer = work.employer[empid];

			if (employer.position.length > 0) {
				$("#workExperience").append(HTMLworkEmployer.replace("%data%",employer.name));

				for (jobid in work.employer[empid].position) {
					var posy = employer.position[jobid];
					var workDates = "";
					var dragonSlayers = posy.dragonSlayers;

					$("#workExperience").append(HTMLworkStart);

					if (posy.endDate === null || posy.endDate.trim() === "") {
						workDates = posy.startDate + " to Current";
					} else {
						workDates = posy.startDate + " to " + posy.endDate;
					}
					$(".work-entry:last").append(HTMLworkDates.replace("%data%", workDates));
					$(".work-entry:last").append(HTMLworkTitle.replace("%data%", posy.name));
					for (storyid in dragonSlayers) {
						$(".work-entry:last").append(HTMLworkDescription.replace("%data%", dragonSlayers[storyid].summary));
					}				
				}
			} else { console.log("No positions for employer " + work.employer[empid].name)};
		}
	} else {console.log("No work items")};
}

var education = {
	"schools": [
	{
		"institution"  : "University of Queensland",
		"qualification" : "Bachelor of Information Technology",
		"major" : "Information Systems",
		"graduation" : "2007-06-01",
		"location" : "Brisbane, QLD, Australia"
	},
	{
		"institution"  : "University of Queensland",
		"qualification" : "Bachelor of Arts",
		"major" : "Cultural Studies",
		"graduation" : "2007-06-01",
		"location" : "Brisbane, QLD, Australia"
	},
	{
		"institution"  : "Queensland University of Technology",
		"qualification" : "Master of Business Administration",
		"major" : "Innovation",
		"graduation" : "2016-06-01",
		"location" : "Brisbane, QLD, Australia"
	}
	]
};
education.display = function(){
	var html_text = "";
	var school = education.schools[0];
	for (schoolid in education.schools) {
		html_text = "";
		school = education.schools[schoolid];
		$("#education").prepend( HTMLschoolStart);
		html_text += HTMLschoolName.replace("%data%",
			school.institution);
		html_text += HTMLschoolDegree.replace("%data%",
			school.qualification);
		html_text += HTMLschoolDates.replace("%data%",
			school.graduation);
		html_text += HTMLschoolMajor.replace("%data%",
			school.major);
		$(".education-entry:last").append(html_text);
	}
}

var projects = {
	"projects" : [
	{
		"name" : "rungling",
		"logo" : "images/rungling-logo-white-thumbnail.jpg",
		"web" : "http://www.rungling.com/",
		"summary" : "Crowd funding for songwriters",
		"startDate" : "2014-08-01",
		"endDate" : "Current"
	},
	{
		"name" : "arrivalarm",
		"logo" : "",
		"web" : "http://arrivalarm.com/",
		"summary" : "Mobile application",
		"startDate" : "2014-10-01",
		"endDate" : "Current"
	}
	]
};
projects.display = function () {
	var html_text = "";
	var project = projects.projects[0];
	
	for (projid in projects.projects) {
		html_text = "";
		project = projects.projects[projid];
		html_text += HTMLprojectTitle.replace("%data%", project.name);
		html_text += HTMLprojectDates.replace("%data%", 
						project.startDate 
						+ " " 
						+ project.endDate);
		html_text += HTMLprojectDescription.replace("%data%",
						project.summary);
		if (!project.logo == "") {
			html_text += HTMLprojectImage.replace("%data%",
						project.logo);
		}
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(html_text);
	}
	return;
}

/* Now call on the object functions to display data */
projects.display();
bio.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);

/* $("#main").prepend(internationalizeButton)
function inName(in_name) {
	var nameArray = in_name.trim().split(" ");
	var fname = nameArray[0][0].toUpperCase() 
			+ nameArray[0].slice(1).toLowerCase();
	var lname = nameArray[1].toUpperCase();
	return fname + " " + lname;
}
*/

