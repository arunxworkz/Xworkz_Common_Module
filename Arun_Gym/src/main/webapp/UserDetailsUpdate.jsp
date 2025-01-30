<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Example</title>
</head>
<body>
    <input name = "id" id = "id" value = "${id}">
    <form action="updateUserDetails" method="post" enctype="multipart/form-data">
        <label for="height">Height (cm):</label>
        <input type="number" id="height" name="height" required><br><br>

        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight" name="weight" required><br><br>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required><br><br>

        <label for="file">Upload File:</label>
        <input type="file" id="file" name="file" required><br><br>

        <button type="submit">Submit</button>
    </form>
</body>
</html>