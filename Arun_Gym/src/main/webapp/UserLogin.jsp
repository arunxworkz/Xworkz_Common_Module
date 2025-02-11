<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Sign In</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-image: url('https://static.wixstatic.com/media/ad64ba_6310d3ab26f44cf784c6eca047147b96~mv2.jpg/v1/fill/w_950,h_489,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad64ba_6310d3ab26f44cf784c6eca047147b96~mv2.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;

            /* Increase clarity */
            filter: brightness(1.2) contrast(1.3);
        }

        .signin-container {
            background: rgba(0, 0, 0, 0.7);
            padding: 40px 50px;
            border-radius: 12px;
            width: 400px;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }

        .signin-container h2 {
            margin-bottom: 30px;
            font-size: 2rem;
            color: #fff;
        }

        .signin-container input {
            width: 100%;
            padding: 15px;
            margin: 15px 0;
            border: none;
            border-radius: 8px;
            outline: none;
            font-size: 1.1rem;
        }

        .signin-container input[type="email"],
        .signin-container input[type="password"] {
            background: #333;
            color: #fff;
        }

        .signin-container input[type="submit"] {
            background: #555;
            color: white;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .signin-container input[type="submit"]:hover {
            background: #777;
        }

        .signin-container a {
            display: block;
            margin-top: 15px;
            font-size: 1rem;
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .signin-container a:hover {
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="signin-container">
        <h2>Sign In</h2>
        <form action = "userLogin" method = "post">
            <input type="text" name = "email" placeholder="Email" required>
            <input type="text" name = "password" placeholder="Password" required>
            <input type="submit" value="Sign In">
        </form>
        <a href="UpdatePassword.jsp">Forgot your password?</a>
        <span style="color:red">${lock}</span>
    </div>
</body>
</html>
