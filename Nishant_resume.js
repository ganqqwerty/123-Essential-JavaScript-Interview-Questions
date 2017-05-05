/**
 *  The Curriculum vitae of Nishant Kumar
 *
 *  Hi there, I am Nishant. I am Software Architect @GetMyParking,
 *  Mozila Tech Contributor, Teacher at CodeInstitute (Dublin), CodeMentor Front-end Expert, 
 *  JavaScript Interview Question Author from India.
 *
 *  I love to pair program and ship quality code that's solidly tested. 
 *  Skills that I'm proficient in and continue to learn with: Object Oriented JavaScript, 
 *  JavaScript Design Pattern, MVC, Client Side Performance Optimization, Node.js, Angular.js,
 *  Backbone.js, Vue.js, HTML5 and Tools: Git jasmine Test Framework, Grunt, webpack, bower, yoman.
 *  
 *  Domain: Cloud Computing, Distributed Systems, Big Data, SOA, Data mining, Hadoop, NoSQL and Graph Database.
 * 
 */

(function() {
	'use strict';

	/*
  	 About Me 
 	*/
	const me = {
		name: 'Nishant Kumar',
		job: 'Software Architect',
		organization: 'GetMyParking',
		status: 'Not availble for hire',
		location: 'Noida, India',
		experience: '5+ years',
		skills: {
			'scripting-language' :['JavaScript','ECMAScript 6']
			'frameworks': ['angular.js','React','Vue','Vuex','backbone.js','IONIC','sails.js'],
			'library' : ['jQuery']
			'tools': ['Webpack','Gulp', 'Grunt', 'bower','yoman','Git'],
			'testing': ['Jasmine', 'Protractor'],
			'backend': ['Node.js', 'Express.js','Python'],
			'dataBase': ['mongoDb', 'MYSQL'],
			'uncategorized' : ['C','C#','HTML','CSS', 'HTML5','JSON']
		},
		work_experience:[{
			'company' : 'GetMyParking',
			'position': 'Software Architect',
			'duration': 'Jan 2017 - April 2017',
			'location': 'New Delhi',
			'job_type': 'Contract',
			'responsibility': {
				"1": 'Responsible for designing and implementing development infrastructure',
				"2": 'Manage risk identification and risk mitigation strategies associated with the architecture',
				"3": 'Plan for new technology insertion',
				"4": 'Make sure the right modeling is being done, to know that qualities like performance are going to be met',
				"5": 'Commitment to following dev "best practices", with code-reviews, unit tests, etc.',
				"6": 'Migrating monolithic base code to microservice based architecture to support million transaction per day',
				"7": 'Creating and ensuring best practices properly followed for Node JS, and React JS based app.'
			},{
			'company' : 'Engineering Lead',
			'position' : 'BigParser.com',
			'duration' : 'Aug 2014 - Dec 2016',
			'location' : 'Pilani, New Delhi',
			'job_type': 'Contract, Hourly,Remotely',
			'responsibility': {
				"1": 'Understanding Product Feature and Functionality Requirements of the Platform',
				"2": 'Working with the Design and Architecture teams on design and framework issues.',
				"3": 'Working interactions on all platforms including mobile devices',
				"4": 'Developing client side MVC frameworks and Creating UI Libraries and using Angular/React JS',
				"5": 'Optimize Performance through improved design',
				"6": 'Working with the Back End teams on Server side integration of the Platform.',
				"7": 'Providing Level 2 and Level 3, support of the UI and Partner Products in Testing, Stage and Client facing Production Environments.',
				"8": 'Vertical Specific Customization of Cloud Platform including interfaces to Gmail, Dropbox, Box.Net'
			},{
			'company' : 'Sr. Software Engineering',
			'position' : 'Mindfire Solutions',
			'duration' : 'June 2011 - July 2014',
			'location' : 'Bhubaneswar, New Delhi',
			'job_type': 'Full Time',
			'responsibility': {
				"1": 'Analyzed the business requirement with the project manager for different clients',
				"2": 'Developed the Technical and functional specifications.',
				"3": 'Developed the web based solutions and windows based solutions for various clients.',
				"4": 'Perform monthly performance review of the application ',
				"5": 'Developed a custom GUI for the ease of users',
				"6": 'Developed discussion forum for internal use of knowledge flow within the organization.',
				"7": 'Providing Level 2 and Level 3, support of the UI and Partner Products in Testing, Stage and Client facing Production Environments.',
				"8": 'Trained the intern coming from various collages'
			}
		}],
		'notes': 'For project details & more work exp details please refer my linkedIn profile.'
	};

	/*
	  Contact Details
	 */
	const me_contact = {
		'email' : 'nihantanu@gmail.com',
		'skypeId' : 'mfsi_nishantk',
		'linkedIn' :'http://in.linkedin.com/in/nishantkumar1'
		'gitHub' : 'github.com/nishant8BITS'
		'stackOverFlow' : 'http://stackoverflow.com/users/430803/nishant'
		'codementor': 'codementor.io/nihantanu'
	}

	/*
	   Education 
	 */
	const education = {
		'post-Graduate': {
			'college': 'Birla Institute of Technology and Science, Pilani',
			'Major' : 'Software System',
			'Year' :'2014-2016',
			'type': 'Regular, Pilani Campus'
		},
		'graduation' : {
			'college': 'ICFAI University, Dehradun',
			'Major' : 'Computer Science & Engineering',
			'Year' :'2007-2011',
			'type': 'Regular'
		}
	},

	/**
	 *  Nice things people have said about me.
	 */
	
	/**
	 *  Nishant is a very smart and thoughtful person as an engineer. He truly cares
	 *  about helping others and values the learning experience for young software
	 *  engineers. He is very patient - a key trait as an engineer. Nishant will help
	 *  guide you through problems and help you understand software engineering
	 *  concepts. Hands down I would hire Nishant to be on a team that will not only
	 *  help a business but help other engineers grow as well.
	 *	-Gary Tsai, Software Engineer
	 */
	
	/**
	 *  Nishant is a quick learner and he has very deep understanding on UI stack. He
	 *  also is a good mentor and help other to understand the technology stack. One
	 *  good thing I observed while working with him is he always focus on insist on
	 *  highest standard in his code/solution as well as idea. Keep it up. 
	 *  	-Apurv Gupta (WDE II at Amazon)
	 */
	
	 /**
	  * Nishant is one of the best person I'm working with. Along with his strong
	  * technical understanding of how things work, he also keeps on motivating to team
	  * and helps them to participate effectively & maintaining their productivity to
	  * better work towards achieving a goal.  He always prefers to have full stack
	  * knowledge of the product & leads a team with great enthusiasm. He can deliver
	  * end to end any product he is working on. 
	  *	 -Yash Shah (SRE at Linkedin)
	  */
	 
	 /**
	  * I have been working with Nishant since last one year on a cloud-based product,
	  * He is one of the vibrant contributor in the team and always been dedicated to
	  * his work. He has very good level of knowledge when it comes to overall front-end
	  * architecture solutions and specifically on frameworks like backbone & angular.
	  *     -Mohiuddin Parekh ( Founder & CEO at Decojent)
	  */
	 
	 /**
	  * I first met Nishant 3 months ago when I told him I was looking for help with
	  * AngularJS and asked him to mentor me. One of the first things I noticed was that
          * he had a great learning attitude, because he told me that he was looking forward
          * to learning from me, something I wasn’t expecting from a mentor! He is fun,
          * sweet, generous and has a great sense of humor. We have quickly become friends
	  * and I think we have spent more time hanging out on Telegram (instant messaging)
	  * and Skype than we have coding. I had never written my own AngularJS directive
 	  * before so I asked him if he could write one for me for an autocomplete feature.
	  * I was impressed with his work and because of it I was then able to write my own
	  * directives. We have spent a lot of time chatting and I think there is so much
	  * more he can do that I have not yet seen. I can see he also has a passion for
	  * startups. 
	  *     -Jenny Swift (Software Engineer) 
	  */

})();
