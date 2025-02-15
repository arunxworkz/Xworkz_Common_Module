<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
             integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: url('https://kayradecor.com/cdn/shop/products/2_787e9bf4-8ef7-445a-b325-de12f39c29fb.jpg?v=1680179305&width=1445') no-repeat center center/cover;
    filter: grayscale(100%);
    display: flex;
    min-height: 100vh;
}

        .sidebar {
            width: 250px;
            min-height: 100vh;
            background-color: #f8f9fa;
            border-right: 1px solid #dee2e6;
        }

        .main-content {
            flex: 1;
            padding: 20px;
        }

.form-container {
    background: rgba(255, 255, 255, 0.3); /* Semi-transparent white */
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: auto;
    backdrop-filter: blur(10px); /* Adds blur effect */
}

/* Ensure input fields are visible */
.form-container input,
.form-container select {
    background: rgba(255, 255, 255, 0.8); /* Semi-solid background for visibility */
    color: black; /* Ensures text is readable */
    border: 1px solid #555; /* Dark border for contrast */
    padding: 8px;
}

/* Adjust placeholder text visibility */
.form-container input::placeholder {
    color: #333; /* Darker placeholder text */
}



        .form-container label {
            font-weight: bold;
        }

        .form-container button {
            background-color: #333;
            color: white;
            font-weight: bold;
        }

        .form-container button:hover {
            background-color: #555;
        }

        /* Responsive: adjust form width on small screens */
        @media (max-width: 768px) {
            .form-container {
                max-width: 100%; /* Make the form responsive on smaller screens */
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <nav class="sidebar">
        <div class="d-flex flex-column p-3">
            <a href="Success.jsp" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">Sidebar</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="inquiry" class="nav-link" aria-current="page">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                            <circle cx="15" cy="15" r="12" fill="#2196f3" />
                            <text x="14.5" y="20" fill="#fff" font-size="15" text-anchor="middle" font-family="Arial" font-weight="bold">?</text>
                        </svg>
                        Inquiry
                    </a>
                </li>
                <li>
                    <a href="follow" class="nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                        Follow
                    </a>
                </li>
                <li>
                    <a href="register" class="nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                        Register
                    </a>
                </li>
                <li>
                    <a href="registerUpdate" class="nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                        Update
                    </a>
                </li>
                <li>
                    <a href="AddSlots.jsp" class="nav-link link-body-emphasis">
                        <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                        Slots
                    </a>
                </li>
                <li>
                    <a href="trainerAllotment" class="nav-link link-body-emphasis">
                       <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                       Trainer Allotment
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

    <main class="main-content">
        <div class="form-container">
            <h2 class="text-center mb-4">Registration Form</h2>
            <form id="register" action = "registering" method = "post">

                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="form-control mb-3" placeholder="Enter your name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" class="form-control mb-3" placeholder="Enter your email" required>



                <label for="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phNo" class="form-control mb-3" placeholder="Enter your phone number" required>

                <label for = "gender">Gender</label>
                <div class = "mb-3">
                    Male <input type = "radio" id = "male" name = "gender" value = "male">
                    Female <input type = "radio" id = "female" name = "gender" value = "female">
                <div>

                <label for="package">Package:</label>
                <select id="package" name="packages" class="form-control mb-3" required>
                    <option value="" disabled selected>Select Package</option>
                    <option value="5000" data-discount="5">Basic (5% Discount)</option>
                    <option value="7000" data-discount="10">Silver (10% Discount)</option>
                    <option value="10000" data-discount="15">Gold (15% Discount)</option>
                    <option value="15000" data-discount="20">Platinum (20% Discount)</option>
                </select>


                <label for="trainer">Trainer:</label>
                <div class="mb-3">
                    <input type="radio" id="trainerYes" name="trainer" value="2000">
                    <label for="trainerYes">Yes (+₹2000)</label>
                    <input type="radio" id="trainerNo" name="trainer" value="0" >
                    <label for="trainerNo">No</label>
                </div>


                <label for="installment">Installment:</label>
                <select id="installment" name="installment" class="form-control mb-3" required onblur = "calculateTotalAmount()">
                    <option value="" disabled selected>Select Installment</option>
                    <option value="2">2 months</option>
                    <option value="5">5 months</option>
                    <option value="7">7 months</option>
                    <option value="10">10 months</option>
                </select>

                <!-- Calculated Fields -->
                <label for="totalAmount">Total Amount:</label>
                <input type="text" id="totalAmount" name = "totalAmmount" class="form-control mb-3"  value = "${totalAmmount}">

                <label for="balance">Balance Amount:</label>
                <input type="text" id="balannce" class="form-control mb-3" name = "balance" value = "${balannce}" onblur = "calculateBalance()">

                <label for = "installmentAmmount">Installment Amount</label>
                <input type = "hidden" id = ""/>

                <button type="submit" class="btn btn-dark w-100">Register</button>
            </form>
        </div>
    </main>

    <script>
       function calculateTotalAmount(){
            const package =  document.getElementById("package").value;
            console.log(package);
            const installement = document.getElementById("installment").value;
            console.log(installement);

           // const trainerYes = document.getElementById("trainerYes").value;
           // console.log(trainerYes);
          //  const trainerNo = document.getElementById("trainerNo").value;
            //console.log(trainerNo);

            var trainerYes

            if(document.getElementById("trainerYes").checked) {
                trainerYes = document.getElementById("trainerYes").value;
                console.log(trainerYes);
            }
            if(document.getElementById("trainerNo").checked) {
                trainerYes = document.getElementById("trainerNo").value;
                console.log(trainerYes);
            }

            var xhttp = new XMLHttpRequest();
                xhttp.open("GET", "http://localhost:8080/Arun_Gym/forTotalAmmount/"+package + "/"+installement + "/" + trainerYes);
                xhttp.send();
                xhttp.onload = function(){
                    console.log(this.responseText)
                    document.getElementById("totalAmount").value = this.responseText;
                    console.log(this.totalAmount);
                }
       }

        function calculateBalance(){
            const totalAmount = document.getElementById("totalAmount").value;
            const installment = document.getElementById("installment").value;

            var xhttp = new XMLHttpRequest();
                xhttp.open("GET", "http://localhost:8080/Arun_Gym/balance/"+totalAmount + "/" + installment);
                xhttp.send();
                xhttp.onload = function(){
                    console.log(this.responseText)
                    document.getElementById("balannce").value = this.responseText;
                    console.log(this.balance);
                }
        }
    </script>


</body>
</html>
