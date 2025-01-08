<%@page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Password-Reset</title>
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

        .container {
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

        .signin-container {
            margin-top: 50px;
        }

        .form-container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form-title {
            text-align: center;
            margin-bottom: 20px;
        }

        a {
            color: #6e27df;
            text-decoration: none;
            transition: all 0.5s;
            font-size: 16px;
        }

        a:hover {
            text-decoration: none;
            color: #7a32e6;
            font-size: 17px;
        }
    </style>
</head>
<body>
    <%@page isELIgnored="false" %>

    <header class="bg-dark py-3">
    </header>
    <div class="container">
        <h3 class="text-center">Update Your Password</h3>
        <form action="updatePassword" method="post">
             <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="text" class="form-control" id="email" name="email" placeholder="Enter your Email" onblur="checkEmail()">
                  <span id="displayEmail"></span>
             </div>
            <div class="mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <input type="password" class="form-control" id="newPassword" name="newPassword" placeholder="Enter your New password" required>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="" required>
            </div>
            <button type="submit" class="btn btn-success w-100">Update Password</button>
        </form>
    </div>

    <script>
        function checkEmail(){
            var checkEmail = document.getElementById('email').value;
            var checkEmailValue = checkEmail.value;
            console.log(checkEmail)
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET",  "http://localhost:8080/Xworkz_Commou_Module_Arun1/checkEmailValue/"+checkEmailValue);
            xhttp.send()

            xhttp.onload = function(){
                console.log(this.responseText)
                document.getElementById("displayEmail").innerHTML = this.responseText;
            }
        }
    </script>

</body>
</html>
