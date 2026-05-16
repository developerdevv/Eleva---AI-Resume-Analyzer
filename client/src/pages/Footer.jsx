import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-blue-600">Eleva</h2>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              AI-powered resume analysis to help you land your dream job faster.
            </p>
          </div>

        
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-sm text-gray-500 hover:text-blue-600 transition">
                  Upload Resume
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-gray-500 hover:text-blue-600 transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
              Account
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/login" className="text-sm text-gray-500 hover:text-blue-600 transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-gray-500 hover:text-blue-600 transition">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@eleva.ai"
                  className="text-sm text-gray-500 hover:text-blue-600 transition"
                >
                  hello@eleva.ai
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

     
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Eleva. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-blue-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-600 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
