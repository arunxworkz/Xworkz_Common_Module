<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Gym BODY</title>
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
            background: linear-gradient(135deg, #1a1a1a, #333333);
            color: #e6e6e6;
        }

        .container {
            text-align: center;
            padding: 20px;
            background: #262626;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
            max-width: 800px;
            width: 90%;
        }

        .content-over-media {
            position: relative;
            display: inline-block;
            overflow: hidden;
            border-radius: 15px;
            margin-top: 30px;
            width: 100%;
        }

        .content-over-media img {
            width: 100%;
            height: auto;
            object-fit: cover;
            animation: moveImage 4s ease-in-out infinite; /* Add animation */
        }

        .collection-card__content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            color: #fff;
            text-align: left;
        }

        .collection-card__content p {
            margin: 5px 0;
        }

        .button {
            background-color: #ff4500;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .button:hover {
            background-color: #ff7b50;
        }

        /* Animation Keyframes */
        @keyframes moveImage {
            0%, 100% {
                transform: scale(1); /* Original size */
            }
            50% {
                transform: scale(1.1); /* Scaled size */
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <button class="btn btn-danger rounded-pill px-3" type="button" style="background-color: #e6e6e6; padding-left: 20px; padding-right: 20px;">
            <a href="sigin" class="login-button" style="font-size: 24px; text-decoration: none;">Admin Login</a>
        </button>
        <!-- Product Card -->
        <div class="content-over-media">
            <img src="//hulkfitproducts.com/cdn/shop/files/Hulkfit-DaneDeaner-4349.jpg?v=1634219935&amp;width=4669" alt="Bars & Barbells">
            <div class="collection-card__content">
                <p class="h6">Be FIT</p>
                <p class="h3">JOIN Up to Make MUSCLE</p>
                <button class="btn btn-danger rounded-pill px-3" type="button" style="background-color: #e6e6e6; padding-left: 20px; padding-right: 20px;">
                    <a href="UserLogin.jsp" style="font-size: 24px; text-decoration: none;">User Login</a>
                </button>
            </div>
        </div>
    </div>
</body>
</html>
