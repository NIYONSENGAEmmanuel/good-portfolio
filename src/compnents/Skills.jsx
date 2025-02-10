import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";





const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 bg-gradient-to-r h-[100vh] from-gray-200 to-gray-200 text-gray-800"
    >
       <img
        className="w-16 h-16 fixed top-8 left-0 rounded-full border-4 border-blue-600 shadow-lg z-50"
        src="/images/images (1).jpeg"
        alt="Logo"
      />

      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-300">
        My Skills
      </h2>
      <div className="  bg-white justify-center items-center shadow-lg rounded-xl p-8 md:p-32">
      <ul className="grid   md:grid-cols-3 gap-2 items-center justify-center max-w-4xl mx-auto">
     <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
     <a href="https://www.w3schools.com/tags/att_content.asp"><FaHtml5 className="text-2xl ml-24  text-black   " /></a>
          HTML
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <a href="https://www.w3schools.com/cssref/pr_gen_content.php"><IoLogoCss3 className="text-2xl  text-black ml-24" /></a>

          CSS
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <a href="https://www.w3schools.com/Js/js_htmldom_html.asp"><IoLogoJavascript className="text-2xl  text-black ml-24" /></a>
          JavaScript
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <a href="https://legacy.reactjs.org/docs/context.html">  <FaReact className="text-2xl animate-spin text-black ml-24" /></a>

          React
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <a href="https://www.figma.com/resource-library/content-research//">  <FaFigma className="text-2xl  text-black ml-24" /></a>
          Figma
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <a href="https://www.techtarget.com/searchdatamanagement/definition/database"><GoDatabase className="text-2xl  text-black ml-24" /></a>
          Database Management
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <a href="https://github.com/NIYONSENGAEmmanuel?tab=repositories"><FaGithub className="text-2xl  text-black ml-24"/></a>
          Github
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <a href="https://tailwindcss.com/docs/installation/using-vite"><RiTailwindCssFill className="text-2xl text-black ml-24" /></a>
          Tailwind CSS
        </li>

        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <a href="https://www.youtube.com/watch?v=yoZ910JQzrg"><FaGitAlt className="text-2xl  text-black ml-24" /></a>
        Git
        </li>
      </ul>
      </div>
    </section>
  );
};

export default Skills;
