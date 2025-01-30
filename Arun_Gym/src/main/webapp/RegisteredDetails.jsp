<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search and Display</title>
    <style>
        body {
            background-color: #1a1a1a; /* Shady black */
            color: #f0f0f0; /* Light text for contrast */
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .search-bar {
            margin: 20px auto;
            text-align: center;
        }

        .form-control {
            padding: 8px;
            width: 300px;
            border-radius: 5px;
            border: 1px solid #555;
            background-color: #2c2c2c;
            color: #fff;
        }

        .form-control:focus {
            border-color: #00aaff;
            outline: none;
            box-shadow: 0 0 5px #00aaff;
        }

        .btn {
            padding: 8px 12px;
            border-radius: 5px;
            border: none;
            background-color: #00aaff;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .btn:hover {
            background-color: #007acc;
        }

        table {
            width: 90%;
            margin: 20px auto;
            border-collapse: collapse;
            background-color: #2c2c2c;
            color: #f0f0f0;
        }

        th, td {
            padding: 10px;
            text-align: left;
            border: 1px solid #555;
        }

        th {
            background-color: #333;
            color: #00aaff;
        }

        tr:nth-child(even) {
            background-color: #1e1e1e;
        }

        tr:nth-child(odd) {
            background-color: #262626;
        }

        tr:hover {
            background-color: #333;
            color: #fff;
        }

        a {
            color: #00aaff;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #007acc;
        }
    </style>
</head>
<body>
    <div class="search-bar">
        <form action="getSearchByName" method="post" class="d-flex" role="search">
            <input class="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Packages</th>
                <th>Trainer</th>
                <th>Installment</th>
                <th>Total Amount</th>
                <th>Balance Amount</th>
                <th>Gender</th>
                <th>Installment Amount</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="details" items="${getAllDetails}">
                <tr>
                    <td>${details.name}</td>
                    <td>${details.phoneNumber}</td>
                    <td>${details.email}</td>
                    <td>${details.packages}</td>
                    <td>${details.trainer}</td>
                    <td>${details.installement}</td>
                    <td>${details.totalammount}</td>
                    <td>${details.balanceAmmount}</td>
                    <td>${details.gender}</td>
                    <td>${details.installmentAmount}</td>
                    <td>
                        <a href="getSearchByEmail?id=${details.id}">Update</a>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</body>
</html>
