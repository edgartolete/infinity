function validateName(personName) {
	var specialString = "0 1 2 3 4 5 6 7 8 9 ! @ # $ ^ & % * ( ) + [ ] \\ / { } | : < > ? , .";
	var specialArray = specialString.split(" ");
	var i = 0;
	var result = false;
	while(i < specialArray.length){
		if(personName.includes(specialArray[i].trim()) == true){
			result = true;
		}
	i++;
	}
	return result;
}

function validateEmail(emailAddress){
	var result = false;
	var x = emailAddress.indexOf("@");
	var y = emailAddress.indexOf(".");
	if(x > 0 && y > 0 && (x + 1) !=  y){
			result = true;
		// returns true if email is valid
	}
	return result;
}


function validateNumber(x){
	var specialString = "! @ # $ ^ & % * ( ) [ ] \\ / { } | : < > ? , . a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
	var specialArray = specialString.split(" ");
	var i = 0;
	var result = false;
	while(i < specialArray.length){
		if(x.includes(specialArray[i].trim()) == true){
			result = true;
		}
	i++;
	}
	return result;
}
	
  function post(){
	var fname = $('#fname').val();
	fname = fname.charAt(0).toUpperCase() + fname.slice(1);
	var subject = $('#subject').val();
	subject = subject.charAt(0).toUpperCase() + subject.slice(1);
	var email = $('#email').val();
	var website = $('#website').val();
	var msgtxt = $('#msgtxt').val();
	var errorToken = 0;
	var firstRowLabel = true;
	
	if(fname == ""){
		$('#fname-error').html("The field is required.");
		$('.label-half').css("display","block");
		errorToken = 1;	
		console.log('fname blank');
		firstRowLabel = 0;
	}
	else if(validateName(fname)){
		$('#fname-error').html("Please enter a valid name");		
		$('#label-half').css("display","block");
		console.log('fname invalid');
		firstRowLabel = false;
		errorToken = 1;		
	}
	else{
		$('#fname-error').html("");
		firstRowLabel = 1;
		console.log('first row label' + firstRowLabel);
	}
	
	if(email == ""){
		$('#email-error').html("The field is required.");	
		$('.label-half').css("display","block");
		console.log('email is blank');
		errorToken = 1;		
	}	
	else if(!validateEmail(email)){
		$('#email-error').html("The e-mail address entered is invalid.");	
		$('.label-half').css("display","block");
		console.log('email is invalid');
		errorToken = 1;		
	}
	else{
		$('#email-error').html("");	
		console.log('email is good');
		firstRowLabel = firstRowLabel + 1;
		console.log('first row label' + firstRowLabel);
	}

	if(subject == ""){
		$('#subject-error').html("The field is required.");				
		errorToken = 1;		
	}
	else{
		$('.label-full-1').css("display","none");	
		console.log('subject is good');
	}
	if(firstRowLabel == 2){
		$('.label-half').css("display","none");	
	}
	if(msgtxt == ""){
		$('#msgtxt-error').html("The field is required.");			
		errorToken = 1;		
	}
	else{
		$('#msgtxt-error').html("");			
		console.log('message is good');
	}
	if(errorToken > 0){
		console.log(errorToken);
		$('.notification').css("display","block");
		$('#notification').html("One or more fields have an error. Please check and try again.");
		errorToken = 0;
	}
	else{
		$('#notification').html("");
        console.log('post is working');
		$.post('js/post-msg.php',{postfname:fname,postsubject:subject,postemail:email,postwebsite:website,postmsgtxt:msgtxt},
		function(data){
			console.log('working');
			$('#notification').html(data);
			$('#notification').css('color', 'black');
			$('#fname').val('');
			$('#subject').val('');
			$('#email').val('');
			$('#website').val('');
			$('#msgtxt').val('');
		});
		$('.notification').css("border","2px solid #2ecc71");
	}
}
