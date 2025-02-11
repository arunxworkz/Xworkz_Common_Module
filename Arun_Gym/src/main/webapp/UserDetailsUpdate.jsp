<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Details UPDATE</title>
    <style>
        body {
            background-image: url('https://t3.ftcdn.net/jpg/08/27/87/60/360_F_827876077_k0EWo3jSiWZPR8fRgsSbZFT9SkrozNuj.jpg');
            background-size: cover;
            background-position: center;
            filter: grayscale(100%);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }

        form {
            background: rgba(0, 0, 0, 0.6);
            padding: 20px;
            border-radius: 10px;
            display: inline-block;
        }

        label, input, button {
            display: block;
            margin: 10px auto;
        }

        input, button {
            padding: 10px;
            width: 80%;
            border-radius: 5px;
            border: none;
        }

        button {
            background-color: #ffffff;
            color: black;
            cursor: pointer;
        }

        button:hover {
            background-color: #ddd;
        }
    </style>
</head>
<body>
    <form action="updateUserDetails" method="post" enctype="multipart/form-data"  onsubmit = "validateForm()">
        <input name="id" id="id" type="hidden" value="${id}">

        <label for="height">Height (cm):</label>
        <input type="number" id="height" name="height"  onchange = "validateHeight()">
        <span id = "heightError" style = "color: red"></span>

        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight" name="weight"  onchange = "validateWeight()">
        <span id = "weightError" style = "color: red"></span>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age"  onchange = "validateAge()">
        <span id = "ageError" style = "color: red"></span>

        <label for="fileUpload">Upload a File:</label>
        <input type="file" id="fileUpload" name="fileUpload" accept=".jpg, .jpeg, .png, .pdf, .docx" >

        <button type="submit">Submit</button>
    </form>
</body>
<script>

    function validateHeight(){
        let height = document.getElementById("height").value;
        if(height > 300){
            document.getElementById("heightError").innerHtml = "Height is not valid";
            return false;
        }else{
            document.getElementById("heightError").innerHtml = "";
        }
    }

    function validateWeight(){
        let weight = document.getElementById("weight").value;
        if(isNaN(weight)){
            document.getElementById("weightError").innerHtml = "Weight can not be null";
            return false;
        }else{
            document.getElementById("weightError").innerHtml = "";
        }
    }

    function validateAge(){
        let age = document.getElementById("age").value;
        if(isNaN(age)){
             document.getElementById("ageError").innerHtml = "Age can not empty";
             return false;
        }
        else if(age > 100){
              document.getElementById("ageError").innerHtml = "Age should be lee than 100";
              return false;
        }
        else{
             document.getElementById("ageError").innerHtml = "";
        }
    }

    function validateForm(){
        let isHeight = validateHeight();
        let isWeight = validateWeight();
        let isAge = validateAge();

        return isHeight && isWeight && isAge;
    }

</script>
</html>
