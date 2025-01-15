<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sidebar with Search Bar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            display: flex;
        }
        .sidebar {
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: auto;
        }
        .content {
            margin-left: 250px; /* Adjust width according to sidebar */
            flex-grow: 1;
        }
        .search-bar {
            position: fixed;
            top: 10px;
            right: 20px;
            z-index: 1030;
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

    <!-- Main content -->
    <div class="content">
        <div class="search-bar">
            <form action = "getSearch" method = "post" class="d-flex" role="search">
                <input class="form-control me-2" type="search" name = "search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        <div class="container mt-5">
            <h1>Welcome</h1>
            <p>Update the details</p>
            <c:forEach var = "details" items = "${data}">
                <p>${details.name}</p>
                <hr>
                <p>${details.age}</p>
            </c:forEach>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
