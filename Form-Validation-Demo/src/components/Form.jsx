import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Required validation
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    // Email format validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (email && !emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Password length validation
    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // If no errors
    if (Object.keys(newErrors).length === 0) {
      setSuccess("Form submitted successfully!");

      setName("");
      setEmail("");
      setPassword("");
    } else {
      setSuccess("");
    }
  };

  return (
    <div>
      <h2>Form Validation Demo</h2>

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.name}</p>
        </div>

        {/* EMAIL */}
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.email}</p>
        </div>

        {/* PASSWORD */}
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* SUCCESS MESSAGE */}
      <p style={{ color: "green" }}>{success}</p>
    </div>
  );
}

export default Form;