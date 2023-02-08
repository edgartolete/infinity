<?php
	$fname = $_POST['postfname'];
	$subject = $_POST['postsubject'];
	$email = $_POST['postemail'];
	$website = $_POST['postwebsite'];
	$msgtxt = $_POST['postmsgtxt'];
	
	$mailhdr = "From: ".$fname."<".$email.">\r\n";
	$mailhdr .= "Reply-To: ".$email."\r\n";
	$mailhdr .= "Content-type: text/html\r\n";
	mail('edgartolete@outlook.com', $subject, $msgtxt, $mailhdr);
	echo "Thank you for your message. We will get back to you.";
?>