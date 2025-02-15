<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slots Allotment</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            display: flex;
            height: 100vh;
            margin: 0;
            background-image: url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600');
            background-size: cover;
            background-position: center;
            filter: grayscale(80%); /* Adds black-and-white effect */
        }

        .sidebar {
            width: 250px;
            height: 100vh;
            background: #2c3e50; /* Dark blue */
            padding: 20px;
            color: white;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
            position: fixed;
            left: 0;
            top: 0;
            overflow-y: auto;
        }

        .sidebar a {
            color: #ecf0f1;
            text-decoration: none;
            font-size: 18px;
        }

        .sidebar a:hover {
            color: #f39c12; /* Golden highlight */
        }

        .nav-link.active {
            background-color: #f39c12;
            color: white !important;
            border-radius: 5px;
        }

        .dropdown-toggle {
            color: white;
        }

        .dropdown-menu {
            background-color: #34495e;
        }

        .dropdown-menu a {
            color: white;
        }

        .dropdown-menu a:hover {
            background-color: #f39c12;
        }

        .content {
            margin-left: 280px; /* Space for sidebar */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
        }

                .content {
                    margin-left: 280px; /* Space for sidebar */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    width: calc(100% - 280px);
                }

                .form-container {
                    background: rgba(255, 255, 255, 0.95);
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    max-width: 450px;
                    width: 100%;
                }

                h2 {
                    margin-bottom: 20px;
                    font-weight: bold;
                    color: #2c3e50;
                }

                label {
                    font-size: 16px;
                    font-weight: 500;
                    color: #2c3e50;
                    display: block;
                    text-align: left;
                    margin: 10px 0 5px;
                }

                input, select {
                    width: 100%;
                    padding: 12px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 6px;
                    background: #f8f9fa;
                    transition: 0.3s ease-in-out;
                }

                input:focus, select:focus {
                    border-color: #f39c12;
                    background: white;
                    outline: none;
                    box-shadow: 0 0 5px rgba(243, 156, 18, 0.5);
                }

                select {
                    appearance: none;
                    cursor: pointer;
                }

                button {
                    margin-top: 20px;
                    padding: 12px;
                    font-size: 18px;
                    background: #2c3e50;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 6px;
                    width: 100%;
                    transition: 0.3s;
                }

                button:hover {
                    background: #f39c12;
                }

                /* Responsive Styles */
                @media (max-width: 768px) {
                    .content {
                        margin-left: 0;
                        width: 100%;
                        padding: 20px;
                    }

                    .form-container {
                        width: 90%;
                    }
                }

    </style>
</head>
<body>

    <nav class="sidebar">
        <div class="d-flex flex-column p-3">
            <a href="Success.jsp" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                <span class="fs-4">Admin Base</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="inquiry" class="nav-link active" aria-current="page">Inquiry</a>
                </li>
                <li><a href="follow" class="nav-link">Follow</a></li>
                <li><a href="register" class="nav-link">Register</a></li>
                <li><a href="getData" class="nav-link">Update</a></li>
                <li><a href="AddSlots.jsp" class="nav-link">Slots</a></li>
                <li><a href = "trainerAllotment" class="nav-link">Slots Allotment</a></li>
            </ul>
            <hr>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                    <strong>Admin</strong>
                </a>
            </div>
        </div>
    </nav>

    <div class="content">
        <div class="form-container">
            <h2>Contact Form</h2>
            <form action="trainerTimingAllotment" method="POST" onsubmit = "return validForm()">
                <select id = "names" name = "name">
                    <option>Select Trainer</option>
                    <c:forEach items = "${trainerNames}" var = "names">
                        <option value = "${names}">${names}</option>
                    </c:forEach>
                </select>

                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" required onchange = "return validPhnoNumer()">
                <span id = "phNoError" style="color: red"></span>

                <select id="timeRange" name="timeRange">
                    <option>Select Time Range</option>
                    <c:forEach var="startIndex" begin="0" end="${fn:length(startTime) - 1}">
                        <option value="${startTime[startIndex]} - ${endTime[startIndex]}">
                            ${startTime[startIndex]} - ${endTime[startIndex]}
                        </option>
                    </c:forEach>
                </select>

                <button type="submit">Submit</button>
                <a href = "viewDetails">View Details</a>
            </form>
        </div>
    </div>

    <script>

            function validPhnoNumer(){
                let phNo = document.getElementById("phone").value;
                let regexNo = /^[0-9]{10}$/;
                if(!regexNo.test(phNo)){
                    document.getElementById("phNoError").innerHTML = "Phone number should be of 10 numbers";
                    return false;
                }else{
                    document.getElementById("phNoError").innerHTML = "";
                    return true;
                }
            }

            function validForm(){
                let validPhnoNumer = validPhnoNumer()
                return validPhnoNumer;
            }
    </script>

</body>
</html>
