<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquiry Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(45deg, white, black);
      background-size: 400% 400%;
      animation: gradientBG 10s ease infinite;
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    form {
      max-width: 400px;
      width: 100%;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.85);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #333;
    }

    input, select, button {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 14px;
    }

    button {
      background-color: #333;
      color: white;
      border: none;
      cursor: pointer;
      font-weight: bold;
    }

    button:hover {
      background-color: #555;
    }
  </style>
</head>
<body>
  <form action="onSave" method="post">

    <span id = "data" style = "color: green; text-align: center;">${savedData}</span>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required>

    <label for="phone">Phone Number:</label>
    <input type="text" id="phone" name="phNo" placeholder="Enter your phone number" required>
    <span id = "phone" style: ""></span>

    <label for="distance">Distance (in km):</label>
    <input type="number" id="distance" name="distance" placeholder="Enter distance" step="0.01" required>

    <label for="age">Age:</label>
    <input type="text" id="age" name="age" placeholder="Enter your age" required>

    <div class="auth-input-container">
        <label for="status">Status:</label>
        <select id = "status" name = "status">
            <option>Status</option>
            <c:forEach items = "${status}" var = "status">
                <option value = "${status}">${status}</option>
            </c:forEach>
        </select>
    <div>

    <label for="message">Reason</label>
    <input type="text" id="reason" name="reason" placeholder="Enter the statement" required>


    <div class="auth-input-container">
        <label>Area</label>
        <select id="area" name="area">
            <option>Select the areas</option>
            <c:forEach items="${locations}" var="location">
                <option value="${location}">${location}</option>
            </c:forEach>
        </select>
    <div>

    <button type="submit">Submit</button>
  </form>
</body>
</html>
