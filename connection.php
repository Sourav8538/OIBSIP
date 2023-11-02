<?php
$servername ="localhost";
$username ="root";
$password="1234";
$db_name="phplogin"; 
$conn=new mysqli($servername,$username,$password,$db_name);
if($conn->connect_error){
    die("connection failed".$conn->connect_error);
}
echo "";

?>