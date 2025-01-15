<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f4f4f4;
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: auto;
        }

        .main-content {
            margin-left: 250px; /* Sidebar width */
            padding: 20px;
            flex-grow: 1;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .form-container {
            width: 100%;
            max-width: 600px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .form-container label {
            font-weight: bold;
        }

        .form-container button {
            background-color: #333;
            color: white;
            font-weight: bold;
        }

        .form-container button:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <!-- Sidebar -->
    <nav class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar">
        <div class="d-flex flex-column p-3">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">Sidebar</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="inquiry" class="nav-link active" aria-current="page">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                            <circle cx="15" cy="15" r="12" fill="#2196f3" />
                            <text x="14.5" y="20" fill="#fff" font-size="15" text-anchor="middle" font-family="Arial" font-weight="bold">?</text>
                       </svg>
                       Inquiry
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                        Follow
                    </a>
                </li>
                <li>
                    <a href="Register.jsp" class="nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                        Register
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                        Customers
                    </a>
                </li>
            </ul>
            <hr>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                    <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu text-small shadow">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        <div class="form-container">
            <h2 class="text-center mb-4">Registration Form</h2>
            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="form-control mb-3" placeholder="Enter your name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" class="form-control mb-3" placeholder="Enter your email" required>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" class="form-control mb-3" placeholder="Enter password" required>

                <label for="package">Package:</label>
                <input type="text" id="package" name="package" class="form-control mb-3" placeholder="Enter package name" required>

                <label for="trainer">Trainer:</label>
                <input type="text" id="trainer" name="trainer" class="form-control mb-3" placeholder="Enter trainer name" required>

                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" class="form-control mb-3" placeholder="Enter phone number" required>

                <label for="amount">Amount:</label>
                <input type="number" id="amount" name="amount" class="form-control mb-3" placeholder="Enter amount" required>

                <label for="discount">Discount:</label>
                <input type="number" id="discount" name="discount" class="form-control mb-3" placeholder="Enter discount" required>

                <label for="gymname">Gym Name:</label>
                <input type="text" id="gymname" name="gymname" class="form-control mb-3" placeholder="Enter gym name" required>

                <label for="balance">Balance Amount:</label>
                <input type="number" id="balance" name="balance" class="form-control mb-3" placeholder="Enter balance amount" required>

                <label for="installment">Installment:</label>
                <input type="text" id="installment" name="installment" class="form-control mb-3" placeholder="Enter installment details" required>

                <button type="submit" class="btn btn-dark w-100">Register</button>
            </form>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
