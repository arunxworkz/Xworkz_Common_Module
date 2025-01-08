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
    <title>Sign-In</title>

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

        .auth-extra {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            margin-bottom: 1rem;
        }

        .auth-checkbox {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .auth-checkbox input {
            width: auto;
        }
    </style>
</head>
<body>
    <div class="auth-container">
        <h1 class="auth-form-heading">Sign In</h1>
        <form action="logIn" class="auth-form" method = "post">
            <div class="auth-input-container">
                <input type="email" class="auth-input-field" placeholder=" " id="email" name="email" />
                <label for="email" class="auth-input-label">Enter Email</label>
                <i class="input-icon fa fa-envelope"></i>
            </div>

            <div class="auth-input-container">
                <input type="password" class="auth-input-field" placeholder=" " id="password" name="password" />
                <label for="password" class="auth-input-label">Enter Password</label>
                <i class="input-icon fa fa-lock"></i>
            </div>

            <div class="auth-extra">
                <div class="auth-checkbox">
                    <input type="checkbox" id="remember" name="remember" />
                    <label for="remember">Remember Me</label>
                </div>
                <a href="PasswordUpdate.jsp" class="auth-link">Forgot Password?</a>
            </div>

            <button class="auth-submit-button" type = "submit">Sign In</button>



            <a href="Signup.jsp" class="auth-link">Don't Have an Account? Sign Up</a>
        </form>
        <span style="color:red">${lock}</span>
    </div>
</body>
</html>
