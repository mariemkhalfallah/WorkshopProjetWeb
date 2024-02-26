<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'inscription</title>
</head>
<body>
    <form action="Verification.php" method="POST">
        <table>
            <tr>
                <td><label for="fName">First Name</label></td>
                <td><input type="text" name="fName" id="fName" required></td>
            </tr>
            <tr>
                <td><label for="lName">Last Name</label></td>
                <td><input type="text" name="lName" id="lName" required></td>
            </tr>
            <tr>
                <td><label for="phone">Phone</label></td>
                <td><input type="text" name="phone" id="phone" required></td>
            </tr>
            <tr>
                <td><label for="email">Email</label></td>
                <td><input type="email" name="email" id="email" required></td>
            </tr>
            <tr>
                <td><label for="dob">Date of Birth</label></td>
                <td><input type="text" name="dob" id="dob" required></td>
            </tr>
            <tr>
                <td><label for="pass1">Password</label></td>
                <td><input type="password" name="pass1" id="pass1" required></td>
            </tr>
            <tr>
                <td><label for="pass2">Confirm Password</label></td>
                <td><input type="password" name="pass2" id="pass2" required></td>
            </tr>
            <tr>
                <td><input type="submit" value="Submit"></td>
                <td><input type="reset" value="Reset"></td>
            </tr>
        </table>
    </form>
</body>
</html>
