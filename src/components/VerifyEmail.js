import { useState } from "react";

function VerifyEmail() {
  const [code, setCode] = useState("");

  const handleVerify = () => {
    console.log("Code:", code);
  };

  return (
    <div className="verify-container">
      <h2>Verify Your Email 📩</h2>

      <input
        type="text"
        placeholder="Enter verification code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}

export default VerifyEmail;