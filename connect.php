<?php
$Clientname = $_POST['Clientname'];
$Clientemail = $_POST['Clientemail'];
$Clientphone = $_POST['Clientphone'];
$Query = $_POST['Query'];
//$checkbox = $_POST['checkbox'];

//Database Connection
$conn = new mysqli('localhost','root','','phpmyadmin');
if($conn->connect_error){
    die('connection failed :' .$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into submission(Clientname,Clientemail,Clientphone,Query)values(?,?,?,?)");
    $stmt->bind_param("ssis",$Clientname,$Clientemail,$Clientphone,$Query);
    $stmt->execute();
    echo "Submission Successful ";
    $stmt->close();
    $conn->close();
}




?>