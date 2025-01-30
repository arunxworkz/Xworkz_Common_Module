<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-In Page</title>
    <style>
        /* General Styles */
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
        }

        /* Background Styling */
        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            filter: grayscale(80%);
            z-index: -1;
        }

        /* Overlay for Black and White Shade */
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            z-index: 0;
        }

        /* Centered Form */
        .form-container {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 400px;
            margin: auto;
            margin-top: 15%;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
            text-align: center;
            color: #fff;
        }

        h1 {
            margin-bottom: 20px;
            font-size: 2rem;
            font-weight: 700;
        }

        label {
            display: block;
            text-align: left;
            font-weight: bold;
            margin-bottom: 8px;
            font-size: 0.9rem;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
        }

        input[type="email"], input[type="password"] {
            background: rgba(255, 255, 255, 0.8);
        }

        .login-button {
            width: 100%;
            padding: 10px;
            border: none;
            background-color: #ff4500;
            color: #fff;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .login-button:hover {
            background-color: #ff7b50;
        }
    </style>
</head>
<body>
     <!-- Background -->
    <div class="background">
        <img src = "download?fileName=${fileName}" alt ="${fileName}">
    </div>
    <div class="overlay"></div> <!-- Overlay -->
    <div class="form-container">
        <h1>Sign In</h1>
        <form action="onSignin" method="post">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" required>

            <label for="password">Password</label>
            <input type="text" id="password" name="password" placeholder="Enter your password" required>

            <button type="submit" class="login-button">Login</button>
            <span style="color: red">${wrongCreditientials}</span>
        </form>
    </div>
</body>
</html>
