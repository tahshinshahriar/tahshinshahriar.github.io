<?php

$host = "localhost";
$database = "tshahriar";
$user = "root";
$password = "***";

$connect = mysqli_connect($host, $user, $password, $database) 
or die(mysqli_error());
echo "<div>Connected to MySQL Database <b>$database</b></div>";

// creating a table with 5 fields
$sql = "CREATE TABLE Reveiew (
   num    INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
   first_name   VARCHAR(20) NOT NULL, 
   last_name VARCHAR(20) NOT NULL, 
   email VARCHAR(30) NOT NULL,
   message_data VARCHAR(250)); ";

if (mysqli_query($connect, $sql)) {
    echo "New table created successfully.<br>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connect);
}

$sql = "CREATE TABLE Reveiew (
   num    INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
   first_name   VARCHAR(20) NOT NULL, 
   last_name VARCHAR(20) NOT NULL, 
   email VARCHAR(30) NOT NULL,
   message_data VARCHAR(250)); ";

if (mysqli_query($connect, $sql)) {
    echo "New table created successfully.<br>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connect);
}



if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fname = $_POST['first-name'];
  $lname = $_POST['last-name'];
  $mail = $_POST['email'];
  $msg = $_POST['bio'];
}
$sql = "INSERT INTO Reveiew VALUES ('$fname','$lname','$mail','$msg')";

if (mysqli_query($connect, $sql)) {
    echo "Data Inserted Succesfully <br>";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($connect);
}

?>
