<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <title>Final Success</title>
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

        p {
            font-size: 20px;
            margin-bottom: 20px;
        }

        img {
            margin-top: 20px;
            border: 2px solid #7429ec;
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Final Success</p>
        ${fileName}
        <span>${userName}</span>
        <img src="download?fileName=${fileName}" alt="${fileName}" width="500" height="400">
    </div>
</body>
</html>
