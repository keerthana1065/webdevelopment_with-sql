<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $con = mysqli_connect('localhost', 'root', '', 'portfolio_form');

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $txtName = mysqli_real_escape_string($con, $_POST['txtName']);
    $txtEmail = mysqli_real_escape_string($con, $_POST['txtEmail']);
    $txtPhone = mysqli_real_escape_string($con, $_POST['txtPhone']);
    $txtMessage = mysqli_real_escape_string($con, $_POST['txtMessage']);

    $sql = "INSERT INTO form_datas (name, email, phone, message) 
            VALUES ('$txtName', '$txtEmail', '$txtPhone', '$txtMessage')";

    if (mysqli_query($con, $sql)) {
        echo "<h3>Thank you! Your message has been sent.</h3>";
    } else {
        echo "Error: " . mysqli_error($con);
    }

    mysqli_close($con);
} else {
    echo "Invalid request.";
}
?>
