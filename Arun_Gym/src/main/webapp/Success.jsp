<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        body {
            background: url('https://t4.ftcdn.net/jpg/02/51/45/49/360_F_251454966_MSoiZITSgkSgIs2qGr1SnfJOYdhd6ieJ.jpg') no-repeat center center fixed;
            background-size: cover;
            color: white;
            position: relative;
        }

        /* Adding Black and White Shades */
        body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.1));
            z-index: -1;
        }

        .sidebar {
            height: 100vh; /* Make sidebar full height */
        }

        .form-control {
            background-color: #2c2c2c;
            color: white;
            border: 1px solid #555;
        }

        .form-control:focus {
            background-color: #1a1a1a;
            color: white;
            border-color: #777;
            box-shadow: none;
        }

        .btn {
            border-color: white;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <nav class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar">
                <div class="d-flex flex-column p-3">
                    <a href="adminPage" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                        <span class="fs-4">Admin Base</span>
                    </a>
                    <hr>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="inquiry" class="nav-link" aria-current="page">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                                    <circle cx="15" cy="15" r="12" fill="#2196f3" />
                                    <text x="14.5" y="20" fill="#fff" font-size="15" text-anchor="middle" font-family="Arial" font-weight="bold">?</text>
                               </svg>
                               Inquiry
                            </a>
                        </li>
                        <li>
                            <a href="follow" class="nav-link link-body-emphasis">
                                <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                                Follow
                            </a>
                        </li>
                        <li>
                            <a href="register" class="nav-link link-body-emphasis">
                                <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                                Register
                            </a>
                        </li>
                        <li>
                            <a href="getData" class="nav-link link-body-emphasis">
                                <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                                Update
                            </a>
                        </li>

                        <li>
                            <a href="AddSlots.jsp" class="nav-link link-body-emphasis">
                                <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                                Slots
                            </a>
                        </li>
                        <li>
                            <a href="trainerAllotment" class="nav-link link-body-emphasis">
                            <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                                 Trainer Allotment
                            </a>
                        </li>

                        <li>
                            <a href = "noTrainer" class="nav-link link-body-emphasis">NoTrainer</a>
                        </li>

                        <li>
                            <a href = "customerTrainer" class="nav-link link-body-emphasis">Customer With Trainer</a>
                        </li>
                    </ul>
                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                            <strong>mdo</strong>
                        </a>
                    </div>
                </div>
            </nav>

            <!-- Main Content -->
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <h1 style = "padding: 10px; padding-top: 20px; display: inline-block; font-family: Georgia, serif; font-size: 40px">Welcome Admin: ${AdminName}</h1>
                <p style = "padding: 10px; padding-top: 20px; display: inline-block; font-size: 35px">Check for the Updates</p>

            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ENjdO4Dr2bkBIFxQpeoHeF2JSmVZHi0vTQ5zxOVprZoPbO7E2bpFRVXK8NSOnI7f" crossorigin="anonymous"></script>
</body>
</html>
