<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* Sidebar Styling */
        .sidebar {
            height: 100vh;
            width: 250px;
            position: fixed;
            left: 0;
            top: 0;
            background-color: #212529; /* Dark background */
            padding-top: 20px;
            border-right: 3px solid #343a40;
            color: white;
        }

        .sidebar h4 a {
            color: #f8f9fa;
            text-decoration: none;
        }

        .sidebar ul {
            padding-left: 0;
        }

        .sidebar .nav-item {
            padding: 10px;
        }

        .sidebar .nav-link {
            color: #f8f9fa;
            font-weight: 500;
            transition: 0.3s;
        }

        .sidebar .nav-link:hover {
            background-color: #495057; /* Highlight on hover */
            border-radius: 5px;
        }

        /* Main content */
        .content {
            margin-left: 270px;
            padding: 20px;
        }

        /* Table Styling */
        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #ffffff;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
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
            background-color: #e9ecef;
            transition: 0.3s;
        }
    </style>
<body>

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
            <li class="nav-item"><a href = "noTrainer"></a></li>
        </ul>
        <hr>
    </nav>

    <div class="content">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Package</th>
                    <th>Trainer</th>
                    <th>Installment</th>
                    <th>Total Amount</th>
                    <th>Balance Amount</th>
                    <th>Installment Amount</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="details" items="${noTrainerList}">
                    <tr>
                        <td>${details.name}</td>
                        <td>${details.phoneNumber}</td>
                        <td>${details.packages}</td>
                        <td>${details.trainer}</td>
                        <td>${details.installement}</td>
                        <td>${details.totalammount}</td>
                        <td>${details.balanceAmmount}</td>
                        <td>${details.installmentAmount}</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>

</body>
</html>
