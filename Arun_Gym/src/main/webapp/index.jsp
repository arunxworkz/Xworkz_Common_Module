<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        /* General Styling */
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #000000, #444444);
            color: #fff;
        }

        .container {
            text-align: center;
        }

        /* Login Button Styling */
        .login-button {
            background-color: #ff4500;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        }

        .login-button:hover {
            background-color: #ff7b50;
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Our Platform</h1>
        <p>Click below to log in</p>
        <a href = "sigin">Login</a>
    </div>
</body>
</html>
