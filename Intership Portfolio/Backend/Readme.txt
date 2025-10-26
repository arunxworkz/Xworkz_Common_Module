The senario is when the second user comes and tries to signup his/her domain from the business email id is taken and checked whether the compnay is present or not. Ifthe compnany exists than the user will be redirected to the compnay profile, where the user can see the compnau profile. I will provide you the flowof this where i am not able to fetch the compnay by its unique_compnay_id.

1)  const response = await axios.post("http://localhost:8080/auth/signUp", formData); - the email is sent ot backend
2)  const result = await authService.signUp(email); 
3) const [compnayRows] = await pool.query("SELECT * FROM company_profile WHERE company_domain = ?", [domainPart]); - checkd whether the compnay exists
4) conside only yes for know - 
    const unique_company_id = compnayRows[0].unique_company_id;

            console.log("Compnay id: ", unique_company_id);

            // console.log("Compnay Id: ", companyId);

            await pool.query("INSERT INTO user_table (business_email_id, code, is_verified, company_id, role, co_admin) values(?, ?, ?, ?, ?, ?)",
                [email, code, 0, unique_company_id, null, 0]
            );

            await sendMail(email, "Email verification code", `${code}`);

            return {status : 'COMPANY_EXISTS', message: 'Ask admin to Access', unique_company_id: unique_company_id };

5) case 'COMPANY_EXISTS':
            res.status(200).json({ status: 'COMPANY_EXISTS', message: 'Company exists. Ask admin for access.', unique_company_id: result.unique_company_id }); - id is returned from service to controller
6) const { status, message, unique_company_id } = response.data; // <-- JSON from backend - id from controller to frontend 
7) navigate(`/company-details/${unique_company_id}`); - navigated to the compnay profile page
8) const { unique_company_id } = useParams<{ unique_company_id: string }>(); - unique_company_id is provided to the compnay details page
9) const response = await axios.get(
          `http://localhost:8080/auth/company-details/${unique_company_id}`
        ); - passed unique_compnay_id to get the compnay profile
10) router.get("/company-details/:unique_company_id", authController.getCompnayProfileById); - routed to the contoller
11) const getCompnayProfileById = async (req, res) => {
  const { id } = req.params;
  console.log("Id from controller is:", id);

  try {
    const rows = await authService.getCompnayProfileById(id);

    console.log("Thsi is from Controller:", rows)


    if (rows.length === 0) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res.status(200).json(rows[0]); // send only the first company
  } catch (error) {
    console.error("Error in controller:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

12) const getCompnayProfileById = async (id) => {
    console.log("Id from Service is: ", id);
    try{
        const [rows] = await pool.query("SELECT * FROM company_profile WHERE unique_company_id = ?", [id]);
        if(rows.length == null){
            return [];
        }
        console.log("this is form service:", rows);
        return rows;
    }catch (error) {
    console.error("Error fetching company:", error);
    throw error;
  }
};

Here whenr i am not able to get the details of the compnay by unique_compnay_id