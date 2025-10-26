const db = require("../dbConfig/db")

const signUp = async (req, res) =>{
    const { userName, email } = req.body;

    console.log("This is from controller ", userName, email)

    if(!userName || !email){
        return res.status(400).json({message:"Username and email are must"})
    }

    try {
        const sql = "INSERT INTO signup (userName, email) VALUES (?, ?)";
        await db.query(sql, [userName, email]);
        return res.status(200).json({ message: "Data saved successfully" });
  } catch (err) {
        console.error("Database error:", err.message);
        return res.status(500).json({ message: "Internal server error" });
  }

}

module.exports = { signUp }