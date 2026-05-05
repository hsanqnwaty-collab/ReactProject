import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      setError("Invalid email");
      return;
    }

    setError("");
    console.log("Registered successfully"); // بدل alert
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          data-testid="email-input"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;