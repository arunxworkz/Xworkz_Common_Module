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
            background: url('https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-an-empty-gym-with-some-machines-image_2949921.jpg') no-repeat center center fixed;
            background-size: cover;
            filter: grayscale(100%); /* Black & White effect */
        }

        .sidebar {
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: auto;
            background-color: rgba(0, 0, 0, 0.85); /* Dark sidebar */
            color: white;
            padding: 20px;
        }

        .sidebar a {
            color: white;
        }

        .content {
            margin-left: 250px;
            flex-grow: 1;
            padding: 20px;
            color: white;
            background: rgba(0, 0, 0, 0.7); /* Slight overlay for readability */
        }

        .search-bar {
            position: fixed;
            top: 10px;
            right: 20px;
            z-index: 1030;
        }

        /* Table Styling */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 16px;
            text-align: left;
            background: rgba(255, 255, 255, 0.1); /* Transparent effect */
            color: white;
        }

        table th, table td {
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 12px;
        }

        table th {
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            font-weight: bold;
            text-align: center;
        }

        table tr:nth-child(even) {
            background-color: rgba(255, 255, 255, 0.1);
        }

        table tr:hover {
            background-color: rgba(255, 255, 255, 0.3);
            cursor: pointer;
        }

        table a {
            color: #ffcc00; /* Contrasting color */
            text-decoration: none;
            font-weight: bold;
        }

        table a:hover {
            text-decoration: underline;
        }

        tbody td, thead th {
            text-align: center;
        }

    </style>
</head>
<body>
    <!-- Sidebar -->
    <nav class="col-md-3 col-lg-2 d-md-block sidebar">
        <div class="d-flex flex-column p-3">
            <a href="Success.jsp" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <span class="fs-4">Admin Base</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="inquiry" class="nav-link"> Inquiry </a>
                </li>
                <li>
                    <a href = "follow" class = "nav-link"> Follow </a>
                </li>
                <li>
                    <a href="Register.jsp" class="nav-link"> Register </a>
                </li>
                <li>
                    <a href="getData" class="nav-link"> Update </a>
                </li>
                <li>
                    <a href="AddSlots.jsp" class="nav-link"> Slots </a>
                </li>
                <li>
                    <a href="trainerAllotment" class="nav-link"> Trainer Allotment </a>
                </li>
            </ul>
            <hr>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                    <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu text-small shadow">
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
        <div class="search-bar" style="margin-top: 20px">
            <form action="getSearch" method="post" class="d-flex">
                <input class="form-control me-2" type="search" name="search" placeholder="Search">
                <button class="btn btn-outline-warning" type="submit">Search</button>
            </form>
        </div>

        <div style="margin-left: 20px; margin-top: 20px">
            <h1>Welcome</h1>
            <p>Update the details</p>
        </div>

        <div class="container">
            <table border="1" cellspacing="0" cellpadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach var="details" items="${entity}">
                        <tr>
                            <input type="hidden" name="id" value="${details.id}">
                            <td>${details.name}</td>
                            <td>${details.phNo}</td>
                            <td>${details.reason}</td>
                            <td>${details.status}</td>
                            <td><a href="updation/${details.id}">Update</a></td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
            <span style="color: red">${error}</span>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3
