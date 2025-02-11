<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Slots</title>
    <style>
        body {
            background-image: url('https://media.istockphoto.com/id/1084066222/photo/athletic-woman-checking-the-time-on-wristwatch.jpg?s=612x612&w=0&k=20&c=CWdV7oXvqBhDvgmq-7xXfbPUZNubqa502RaT4Rswmpg=');
            background-size: cover;
            background-position: center;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .sidebar {
            width: 250px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.9);
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
            position: fixed;
            left: 0;
            top: 0;
            overflow-y: auto;
        }
        .form-container {
            background: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            text-align: center;
            margin-left: 280px;
        }
        input {
            margin: 10px;
            padding: 8px;
            font-size: 16px;
        }
        button {
            padding: 10px 15px;
            font-size: 16px;
            background: blue;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <nav class="sidebar">
        <div class="d-flex flex-column p-3">
            <a href="Success.jsp" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span class="fs-4">Admin Base</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="inquiry" class="nav-link active" aria-current="page">Inquiry</a>
                </li>
                <li><a href="follow" class="nav-link link-body-emphasis">Follow</a></li>
                <li><a href="register" class="nav-link link-body-emphasis">Register</a></li>
                <li><a href="getData" class="nav-link link-body-emphasis">Update</a></li>
                <li><a href="AddSlots.jsp" class="nav-link link-body-emphasis">Slots</a></li>
                <li><a href = "trainerAllotment" class="nav-link link-body-emphasis">Slot Allotment</a></li>
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

    <div class="form-container">
        <h2>Time Duration Calculator</h2>
        <form action = "getDuration" method = "POST">
            <label for="startTime">Start Time:</label>
            <input type="time" id="startTime" name = "startTime" required><br>

            <label for="endTime">End Time:</label>
            <input type="time" id="endTime" name = "endTime" required><br>

            <label for="duration">Duration:</label>
            <input type="text" id="duration" name = "duration" value = "${timeDuration}" onclick = "timeDuration()" readonly><br>

            <button type="submit">Save Slot</button>
        </form>
    </div>
</body>
<script>
    function timeDuration(){
        var start_time = document.getElementById("startTime").value;
        var end_time = document.getElementById("endTime").value;

        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:8080/Arun_Gym/getTime/" + start_time + "/" + end_time)
        xhttp.send();
        xhttp.onload = function(){
                console.log(this.response)
                document.getElementById("duration").value = this.responseText;
                console.log(this.duration);
        }
    }
</script>
</html>
