<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <title>Sign-Up Form</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            height: 100vh;
            font-family: 'Poppins', sans-serif;
        }

        .auth-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 2px solid #7429ec;
            padding: 2rem;
            width: 50%;
            max-width: 600px;
            animation: glow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes glow {
            0%, 100% {
                box-shadow: 0px 0px 10px 1px #7429ec;
            }
            50% {
                box-shadow: 0px 0px 20px 5px #7429ec;
            }
        }

        .auth-form-heading {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        .auth-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
        }

        .auth-input-container {
            position: relative;
            margin-bottom: 1.5rem;
            width: 100%;
        }

        .auth-input-field {
            border: none;
            padding: 0.5rem 1rem;
            border-bottom: 1px solid white;
            width: 100%;
            color: white;
            background-color: transparent;
        }

        .auth-input-field:focus {
            outline: none;
        }

        .auth-input-field:placeholder-shown ~ .auth-input-label {
            color: gray;
        }

        .auth-input-field:focus ~ .auth-input-label,
        .auth-input-field:not(:placeholder-shown) ~ .auth-input-label {
            transform: translateY(-1.5rem);
            font-size: 12px;
            color: white;
        }

        .auth-input-label {
            position: absolute;
            top: 0.8rem;
            left: 1rem;
            color: white;
            font-size: 14px;
            pointer-events: none;
            transition: transform 0.3s ease, font-size 0.3s ease, color 0.3s ease;
        }

        .input-icon {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            font-size: 1rem;
            pointer-events: none;
        }

        .auth-submit-button {
            background-image: linear-gradient(to right, #541eab 0%, #26a0da 51%, #541eab 100%);
            margin-bottom: 1rem;
            padding: 12px 45px;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            border-radius: 100px;
            border: none;
            width: 100%;
        }

        .auth-submit-button:hover {
            background-position: right center;
            cursor: pointer;
            text-decoration: none;
        }

        .auth-link {
            color: #6e27df;
            text-decoration: none;
            transition: all 0.5s;
            font-size: 12px;
        }

        .auth-link:hover {
            text-decoration: none;
            color: #7a32e6;
            font-size: 13px;
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <h1 class="auth-form-heading">Update</h1>
        <form action="updateAction" method = "post" class="auth-form" enctype="multipart/form-data">
            <div class="auth-input-container">
                <input type="text" class="auth-input-field" placeholder="" id="name" name="userName" value = "${userName}" readonly onchange = checkName()/>
                <label for="name" class="auth-input-label">User Name</label>
                <i class="input-icon fa fa-user"></i>
                <span id = "nameError" style = "color: red"></span>
            </div>

            <div class="auth-input-container">
                <input type="text" class="auth-input-field" placeholder="" id="email" name="email" onchange = "checkEmail()"/>
                <label for="email" class="auth-input-label">Enter Email</label>
                <i class="input-icon fa fa-envelope"></i>
                <span id = "emailError" style = "color: red"></span>
            </div>

            <div class="auth-input-container">
                <input type="text" class="auth-input-field" placeholder="" id="altEmail" name="altEmail"/>
                <label for="altEmail" class="auth-input-label">Enter Alternate Email</label>
                <i class="input-icon fa fa-envelope"></i>
                <span style = "color: red; font-family : 'Poppins', sans-serif; font-size : 15px" id = "message"></span>
            </div>

            <div class="auth-input-container">
                <input type="text" class="auth-input-field" placeholder="" id="phNo" name="phNo" onchange = "checkPhNo()"/>
                <label for="phNo" class="auth-input-label">Enter Phone Number</label>
                <i class="input-icon fa fa-phone"></i>
                <span id = "phNoError" style = "color: red"></span>
            </div>

            <div class="auth-input-container">
                <input type="text" class="auth-input-field" placeholder="" id="altPhNo" name="altPhNo"/>
                <label for="altPhNo" class="auth-input-label">Enter Alternate Phone Number</label>
                <i class="input-icon fa fa-phone"></i>
            </div>

            <div class="auth-input-container">
               <input type="text" class="auth-input-field" placeholder="" id="location" name="location" />
               <label for="location" class="auth-input-label">Enter Location</label>
               <i class="input-icon fa fa-location"></i>
            </div>

            <label for="fileUpload">Upload a File:</label>
            <input type="file" id="fileUpload" name="fileUpload" accept=".jpg, .jpeg, .png, .pdf, .docx" required>
            <br><br>

            <button class="auth-submit-button"  type = "submit">Update</button>
        </form>
    </div>


    <script>


    function checkEmail(){
            var checkEmailValue = document.getElementById('email').value;
            console.log(checkEmailValue);
            if(checkEmailValue !== null){
                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", "http://localhost:8080/Xworkz_Commou_Module_Arun1/checkEmailValue/"+checkEmailValue);
                xhttp.send();
                xhttp.onload = function(){
                    console.log(this.responseText)
                    document.getElementById("emailError").innerHTML = this.responseText;
                }
            }
        }


        function checkPhNo(){
            var checkPhnoValue = document.getElementById("phNo").value;
            console.log(checkPhnoValue)
            if(checkPhnoValue != ""){
                var xhttp = new XMLHttpRequest()
                xhttp.open("GET", "http://localhost:8080/Xworkz_Commou_Module_Arun1/checkPhnoValue/" + checkPhnoValue)
                xhttp.send()
                xhttp.onload = function(){
                    console.log(this.responseText)
                    document.getElementById("phNoError").innerHTML = this.responseText;
                }
            }
        }

    </script>
</body>
</html>
