import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5001/forgot-password",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ email }),
        }
      );

      const data = await response.text();

      alert(data);
      setOtpSent(true);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  const handleVerifyOTP = async () => {

  try {

    const response = await fetch(
      "http://localhost:5001/verify-otp",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ otp }),
      }
    );

    const data = await response.text();

    if (response.ok) {
      alert(data);
      navigate("/");
    } else {
      alert(data);
    }

  } catch (error) {

    console.log(error);

    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-blue-600">
            Forgot Password
          </h1>

          <p className="mt-2 text-gray-600">
            Enter your email to receive OTP
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
        >

          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"

              placeholder="Enter your email"

              value={email}

              onChange={(e) => setEmail(e.target.value)}

              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold bg-blue-600 rounded-xl hover:bg-blue-700 transition"
          >
            Send OTP
          </button>

        </form>

        {
        otpSent && (
        
        <div className="mt-6">
          <label 
          className="block mb-2 text-sm font-medium text-gray-700">
          Enter OTP
          </label>
          
          <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <button
          onClick={handleVerifyOTP}
          className="w-full mt-4 py-3 text-white font-semibold bg-green-600 rounded-xl hover:bg-green-700 transition"
          >
          Verify OTP
          </button>
          </div>
        )
        }

        <p className="mt-6 text-center text-gray-600">

          Remember your password?{" "}

          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Back to Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;