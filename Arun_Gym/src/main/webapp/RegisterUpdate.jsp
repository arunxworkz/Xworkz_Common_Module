<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Package</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
        body {
            background-color: black;
            color: white;
        }
        .form-control {
            background-color: #2c2c2c;
            color: white;
            border: 1px solid #555;
        }
        .form-control:focus {
            background-color: #1a1a1a;
            color: white;
            border-color: #777;
            box-shadow: none;
        }
        .btn {
            border-color: white;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h2>Update Package</h2>
        <form action="updatePackageServlet" method="post">
        <input type = "hidden" value = ${getId} name = "id" id = "id">

        <div class="mb-3">
               <span style = "color: white">${packageTake}</span>
        </div>

            <div class="mb-3">
                <label for="package">Package:</label>
                <select id="package" name="packages" class="form-control mb-3" required value="${entityPakcage}">
                    <option value="" disabled selected>Select Package</option>
                    <option value="5000" data-discount="5">Basic (5% Discount)</option>
                    <option value="7000" data-discount="10">Silver (10% Discount)</option>
                    <option value="10000" data-discount="15">Gold (15% Discount)</option>
                    <option value="15000" data-discount="20">Platinum (20% Discount)</option>
                </select>
            </div>

            <label for="trainer">Trainer:</label>
            <div class="mb-3">
                  <input type="radio" id="trainerYes" name="trainer" value="2000">
                  <label for="trainerYes">Yes (+ &#8377; 2000)</label>
                  <input type="radio" id="trainerNo" name="trainer" value="0" >
                  <label for="trainerNo">No</label>
            </div>


            <div class="mb-3">
                <label for="amount">Amount:</label>
                <span style = "color: white">Your last total amount was: ${entityAmount}</span>
                <input type="number" id="amount" name="amount" class="form-control" required  onblur = "calculateTotalAmount()">
            </div>

            <div class="mb-3">
                <label for="balance">Balance:</label>
                <span style = "color: white">Your last balance was: ${entityBalance}</span>
                <input type="text" id="balance" name="balance" class="form-control" readonly  onblur = "calculateBalance()">
            </div>

            <div class="mb-3">
                 <label for="installmentAmount">Installment Amount:</label>
                 <span style = "color: white">Your last installment was:${installmentAmount}</span>
                 <input type="text" id="installmentAmount" name="installmentAmount" class="form-control" >
            </div>

            <div class="mb-3">
                <span style = "color: white">Your last installment option was: ${installmentTaken}</span>
            </div>

            <label for="installment">Installment:</label>
            <select id="installment" name="installment" class="form-control mb-3" required value = "${entityInstallment}">
                            <option value="" disabled selected>Select Installment</option>
                            <option value="2">2 months</option>
                            <option value="5">5 months</option>
                            <option value="7">7 months</option>
                            <option value="10">10 months</option>
            </select>

            <button type="submit" class="btn btn-primary">Update</button>
        </form>
        <span style="color: red">${noMatchForEmail}</span>
    </div>

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
                        document.getElementById("amount").value = this.responseText;
                        console.log(this.totalAmount);
                    }
           }

            function calculateBalance(){
                const totalAmount = document.getElementById("amount").value;
                const installment = document.getElementById("installment").value;

                var xhttp = new XMLHttpRequest();
                    xhttp.open("GET", "http://localhost:8080/Arun_Gym/balance/"+totalAmount + "/" + installment);
                    xhttp.send();
                    xhttp.onload = function(){
                        console.log(this.responseText)
                        document.getElementById("balance").value = this.responseText;
                        console.log(this.balance);
                    }
            }
        </script>
</body>
</html>
