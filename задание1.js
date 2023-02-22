const student = {
	имя: 'Denis',
	фамилия: 'Gudz'
}; 

function studentInfo(user) {
	for (let key in user) {
		
		 if (user.hasOwnProperty(key)) {

			console.log(`${key}: ${user[key]}`); 
		};   
	 
	};
	
};
studentInfo(student);