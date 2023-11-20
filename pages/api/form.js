import { supabase } from "../../supabaseClient";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for required params
  // and returns early if they are not found
  console.log(body.name);
  console.log(body);
  if (!body.name || !body.email | !body.company) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Missing form param" });
  }

  // Insert to supabase db
  const { error } = await supabase
    .from("sponsor_leads")
    .insert({ name: body.name, email: body.email, company_name: body.company });
  if (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error inserting data into Supabase" });
  }

  // Found the name.
  // Sends a HTTP success code
  return res.status(200).json({ data: `Registration successful.` });
}
