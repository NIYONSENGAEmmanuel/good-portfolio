import { FaGithub, FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-200 px-4 sm:px-6 lg:px-8"
    >
      <img
        className="w-16 h-16 fixed top-8 left-0 rounded-full border-4 border-blue-600 shadow-lg z-50"
        src="/images/images (1).jpeg"
        alt="Logo"
      />
      <div className="bg-white p-6 sm:p-12 md:p-16 lg:p-20 bg-opacity-90 rounded-lg w-full max-w-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Personal Information</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Name:</strong> Niyonsenga Emmanuel</li>
              <li><strong>Email:</strong> <a href="mailto:niyonsengaemmy60@gmail.com" className="text-blue-500 hover:underline">niyonsengaemmy60@gmail.com</a></li>
              <li><strong>Phone/WhatsApp:</strong> <a href="tel:+250786104974" className="text-blue-500 hover:underline">0786104974</a></li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Social Media</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center gap-3"><FaGithub /><strong>GitHub:</strong> <a href="https://github.com/NIYONSENGAEmmanuel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">NIYONSENGAEmmanuel</a></li>
              <li className="flex items-center gap-3"><FaLinkedin /><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/niyonsenga-emmanuel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">NIYONSENGA Emmanuel</a></li>
              <li className="flex items-center gap-3"><FaXTwitter /><strong>Twitter:</strong> <a href="https://twitter.com/NiyonsengaEmmy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Niyonsenga Emmy</a></li>
              <li className="flex items-center gap-3"><FaFacebook /><strong>Facebook:</strong> <a href="https://www.facebook.com/niyonsenga.emmanuel.58323/followers" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Niyonsenga Emmanuel</a></li>
              <li className="flex items-center gap-3"><FaInstagramSquare /><strong>Instagram:</strong> <a href="https://www.instagram.com/nemmypracide/followers/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Niyonsenga Emmanuel</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
