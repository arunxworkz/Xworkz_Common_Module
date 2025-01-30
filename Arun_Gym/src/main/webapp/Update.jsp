<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Update Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f9;
        }
        .update-container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        .update-container h2 {
            margin-bottom: 20px;
            text-align: center;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input, .form-group select, .form-group textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }
        .form-group textarea {
            resize: none;
        }
        .set-button {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }
        .set-button:hover {
            background-color: #45a049;
        }

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
                        <a href="Follow.jsp" class="nav-link link-body-emphasis">
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


    <div class="update-container">
        <h2>Update Information</h2>
        <form action = "settingData" method ="post">
       <input type = "hidden" name = "id" value = "${id}">
            <div class="form-group">
                <label for="status">Status</label>
                    <select id="status" name="status" required>
                        <option>Select the status</option>
                        <c:forEach items = "${status}" var = "status">
                            <option value = "${status}">${status}</option>
                        </c:forEach>
                    </select>
            </div>
            <div class="form-group">
                <label for="reason">Reason</label>
                <textarea type = "text" id="reason" name="reason" rows="4" placeholder="Enter the reason" required></textarea>
            </div>
           <input type="submit" value="Submit">
           <span style = "color: green">${data}</span>
        </form>
    </div>
</body>
</html>
