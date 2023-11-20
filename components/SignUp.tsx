import { useState } from "react";
import { Loader } from "lucide-react";
import styles from "../app/loading.module.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [loading, setLoading] = useState(false);

  const [submissionStatus, setSubmissionStatus] = useState("");

  // Handle form field changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setLoading(true);

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      company: event.target.company.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    setLoading(false);
    setSubmissionStatus("You have successfuly submitted the form. Thank you!");
  };
  return (
    <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
      <div className="flex flex-col space-y-10 mt-4 mb-16">
        <div className="flex sm:space-x-8 sm:flex-row flex-col">
          {loading ? <Loader className={styles.loaderIcon} /> : ""}
          {!submissionStatus && !loading ? (
            <div className="sm:mt-0 mt-8">
              <p className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Sign-Up
              </p>
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-xs font-bold mb-2"
                      htmlFor="grid-name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none placeholder:text-slate-400 block w-full bg-slate-600 text-gray-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-500 focus:border-gray-500"
                      id="grid-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-xs font-bold mb-2"
                      htmlFor="grid-email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none placeholder:text-slate-400 block text-gray-100 w-full bg-slate-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-500 focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-xs font-bold mb-2"
                      htmlFor="grid-company"
                    >
                      Company name
                    </label>
                    <input
                      className="appearance-none placeholder:text-slate-400 block w-full bg-slate-600 text-gray-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-500 focus:border-gray-500"
                      id="grid-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-neon-green hover:bg-green-800 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <h3 className="mb-1 font-medium text-lg">{submissionStatus}</h3>
          )}
        </div>
      </div>
    </div>
  );
}
