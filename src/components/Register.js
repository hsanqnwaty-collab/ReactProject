import "./Register.css";

import { useNavigate } from "react-router-dom"; // ⭐ مهم
import { useState } from "react";

function Register() {
  const navigate = useNavigate(); // ⭐ هون

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ⭐ هون تحط الكود تبعك
  const handleRegister = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    navigate("/verify"); // ينقله لصفحة التحقق
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account ✨</h2>

        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />

        {/* ⭐ لازم تربطه بالزر */}
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;