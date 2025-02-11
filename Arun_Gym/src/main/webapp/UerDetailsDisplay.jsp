<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: url('https://png.pngtree.com/thumb_back/fh260/background/20240329/pngtree-rows-of-dumbbells-in-the-gym-image_15662386.jpg') no-repeat center center fixed;
            background-size: cover;
            text-align: center;
            margin: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            width: 50%;
            background: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
        }

        .profile {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }

        .profile img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 15px;
            border: 3px solid white;
        }

        .profile h2 {
            color: white;
            margin: 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: linear-gradient(to right, #333, #555);
            color: white;
            border-radius: 8px;
            overflow: hidden;
        }

        th, td {
            padding: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        th {
            background-color: rgba(255, 255, 255, 0.3);
            color: white;
            font-weight: bold;
        }

        td {
            background: rgba(0, 0, 0, 0.5);
            text-align: left;
        }

        button {
            padding: 10px 20px;
            background: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
            text-decoration: none;
        }

        button:hover {
            background: #218838;
        }

        button a {
            color: white;
            text-decoration: none;
            display: inline-block;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="profile">
            <img src="getImage?fileName=${userdetails.filename}" alt="${fileName}">
            <h2><c:out value="${userdetails.name}"/></h2>
        </div>

        <table>
            <tr>
                <th>Details</th>
                <th>Values</th>
            </tr>
            <tr>
                <td>Email</td>
                <td><c:out value="${userdetails.email}"/></td>
            </tr>
            <tr>
                <td>Phone Number</td>
                <td><c:out value="${userdetails.phoneNumber}"/></td>
            </tr>
            <tr>
                <td>Package</td>
                <td><c:out value="${userdetails.packages}"/></td>
            </tr>
            <tr>
                <td>Balance</td>
                <td><c:out value="${userdetails.balanceAmmount}"/></td>
            </tr>
            <tr>
                <td>Trainer</td>
                <td c:out value = "${userdetails.trainername}"></td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: center;">
                    <button><a href="userDetailsUpdate/${userdetails.id}">Update</a></button>
                </td>
            </tr>
        </table>
    </div>

</body>
</html>
