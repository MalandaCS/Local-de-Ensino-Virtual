var users = {
	username: ["john.doe", "andy.dom", "jake.fields"],
	password: ["Kyle34!", "aCtor75#", "Mice08?"]
};

var database = [
	users
];

var newsfeed = [
	{username: "john.doe",
	timeline: "This is my timeline"
},
	{username: "andy.dom",
	timeline: "This is my timeline"
},
	{username: "jake.fields",
	timeline: "This is my timeline"
},
];

var askUser = prompt("What's your username");
var askPassword = prompt("What's your password");

function checkUsername(username, password) {
	for (var i=0; i<database[0].username.length; i++) {
		if(database[0].username[i] === username && 
			database[0].password[i] === password) {
			return true;
		}
	}
	return false
}

function	 signIn(username, password) {
	if (checkUsername(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username or password");
		}
}

signIn(askUser, askPassword);

