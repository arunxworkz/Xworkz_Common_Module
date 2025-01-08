<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>X Workz ODC</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            background: linear-gradient(90deg, #1d0b39 0%, #3d167a 35%, #6122c6 100%);
            color: white;
            overflow: hidden;
        }

        .title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
            text-transform: uppercase;
            margin-bottom: 2rem;
            position: relative;
            animation: slideInFromTop 1s ease-out, pulse 2s infinite;
        }

        @keyframes slideInFromTop {
            from {
                transform: translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes pulse {
            0%, 100% {
                text-shadow: 0 0 10px #7429ec, 0 0 20px #7429ec;
            }
            50% {
                text-shadow: 0 0 20px #7429ec, 0 0 30px #7429ec;
            }
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 2rem;
            border: 2px solid #7429ec;
            border-radius: 10px;
            box-shadow: 0 0 10px #7429ec;
            animation: glow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            width: 400px;
        }

        @keyframes glow {
            0%, 100% {
                box-shadow: 0px 0px 10px 1px #7429ec;
            }
            50% {
                box-shadow: 0px 0px 20px 5px #7429ec;
            }
        }

        .container h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            animation: fadeIn 2s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .container p {
            font-size: 1rem;
            margin-bottom: 2rem;
            color: #dcdcdc;
        }

        .button-group {
            display: flex;
            gap: 1rem;
        }

        .button-group button {
            background: linear-gradient(to right, #541eab 0%, #26a0da 51%, #541eab 100%);
            padding: 10px 20px;
            font-size: 1rem;
            color: white;
            border: none;
            border-radius: 100px;
            cursor: pointer;
            transition: background 0.5s, transform 0.3s;
        }

        .button-group button:hover {
            background-position: right center;
            transform: scale(1.1);
        }

        @media (max-width: 768px) {
            .container {
                width: 90%;
            }
        }
    </style>
</head>
<body>
    <div class="title">X Workz ODC</div>
    <div class="container">
        <h1>Welcome</h1>
        <p>Manage your data securely with our platform.</p>
        <div class="button-group">
            <button><a href = "signupact">Sign Up</a></button>
            <button><a href='Signin.jsp'>Sign In</a></button>
            <button onclick="location.href='Update.jsp'">Update</button>
        </div>
    </div>
</body>
</html>
