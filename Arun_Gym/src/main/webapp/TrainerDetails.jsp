<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<style>
<style>
    .container {
        margin: 20px auto;
        width: 80%;
        text-align: center;
    }

    table {
        width: 50%;
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
</style>

</style>
</head>
<body>
    <div class="container">
        <table border="1" cellspacing="0" cellpadding="8">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Time Range</th>
                                <th>Remove Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach var="details" items="${trainerTimeAllotmentEntities}">
                                <tr>
                                    <td>${details.name}</td>
                                    <td>${details.trainerphno}</td>
                                    <td>${details.timeRange}</td>
                                    <input type = "hidden" name = "id" value = "${details.id}">
                                    <td><button type = "submit"><a href = "remove/${details.id}">Delete</a></button></td>
                                </tr>
                            </c:forEach>
                        </tbody>
        </table>
    <div>

</body>
</html>