<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Trainer Management</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<style>
    /* Make sidebar full height */
    .sidebar {
        height: 100vh; /* Full height of viewport */
        position: fixed;
        left: 0;
        top: 0;
        width: 250px; /* Adjust width as needed */
        background-color: #f8f9fa;
        padding-top: 20px;
        border-right: 2px solid #ddd;
        overflow-y: auto; /* Allow scrolling if needed */
    }

    /* Main content should not overlap with sidebar */
    .content {
        margin-left: 260px; /* Adjust based on sidebar width */
        padding: 20px;
    }

    /* Table styling */
    table {
        width: 100%;
        border-collapse: collapse;
        background-color: #f8f9fa;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        overflow: hidden;
    }

    th, td {
        padding: 12px;
        border: 1px solid #ddd;
        text-align: left;
    }

    th {
        background-color: #007bff;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #d1ecf1;
        transition: 0.3s;
    }

    .btn-delete {
        background-color: #dc3545;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        text-decoration: none;
    }

    .btn-delete:hover {
        background-color: #c82333;
        color: white;
    }
</style>
<body>

    <!-- Sidebar Navigation (Full Height) -->
    <nav class="sidebar">
        <h4 class="text-center"><a href="adminPage" class="nav-link">Admin Base</a></h4>
        <hr>
        <ul class="nav flex-column">

            <li class="nav-item"><a href="inquiry" class="nav-link">Inquiry</a></li>
            <li class="nav-item"><a href="follow" class="nav-link">Follow</a></li>
            <li class="nav-item"><a href="register" class="nav-link">Register</a></li>
            <li class="nav-item"><a href="getData" class="nav-link">Update</a></li>
            <li class="nav-item"><a href="AddSlots.jsp" class="nav-link">Slots</a></li>
            <li class="nav-item"><a href="trainerAllotment" class="nav-link">Trainer Allotment</a></li>
        </ul>
        <hr>
    </nav>

    <!-- Main Content -->
    <div class="content">
        <h2 class="my-4">Trainer Time Allotment</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Time Range</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="details" items="${trainerTimeAllotmentEntities}">
                    <tr>
                        <td>${details.name}</td>
                        <td>${details.trainerphno}</td>
                        <td>${details.timeRange}</td>
                        <td>
                            <a href="remove/${details.id}" class="btn-delete">Delete</a>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>

</body>
</html>
