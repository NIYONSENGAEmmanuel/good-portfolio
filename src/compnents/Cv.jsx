



const Cv = () => {
  return (

    <div id="cv" className="bg-gray-100 min-h-screen mt-10  flex justify-center items-center p-4">
        <img
        className="w-16 h-16 fixed top-8 left-0 rounded-full border-4 border-blue-600 shadow-lg z-50"
        src="/images/images (1).jpeg"
        alt="Logo"
      />

      <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-4xl">
        <div className="bg-blue-900 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
        </div>

        <div className="bg-blue-900 text-white p-[-100px] flex flex-col items-center">
        <div className=" overflow-hidden  sm:w-52  ">
        <img
        
               src="/images/171128359.jpeg"
              alt="Niyonsenga Emmanuel"
            className="w-32  object-cover h-32 rounded-full border-4 border-white mb-4"
          />
          </div>
          <h1 className="text-3xl font-bold">Niyonsenga Emmanuel</h1>
          <p className="text-lg mt-2">Software Developer</p>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>📞 +250 786 104 974</li>
              <li>📧 niyonsengammy60@gmail.com</li>
              <li>📍 Eastern Province, Rwanda</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <ul className="space-y-2">
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Figma (UI/UX Design)</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
            <p>
              A passionate and self-driven coder with skills in HTML, CSS,
              JavaScript, React, and Figma. Eager to contribute to modern web
              development projects while continuously learning and improving.
              Known for teamwork, responsibility, and problem-solving
              abilities.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <ul className="space-y-2">
              <li>
                <strong>2020 - 2023:</strong> E.S. Kabarondo - MCE (Mathematics,
                Computer Science, and Economics)
              </li>
              <li>
                <strong>2017 - 2019:</strong> G.S. Paysannat I B - O-Level
              </li>
              <li>
                <strong>2011 - 2016:</strong> G.S. Paysannat I - Primary Level
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <ul className="space-y-2">
              <li>
                <strong>Portfolio Website:</strong> Designed and developed a
                personal portfolio using React and Figma for UI/UX.
              </li>
              <li>
                <strong>To-Do App:</strong> Built a dynamic to-do application
                with React, incorporating user authentication and real-time
                updates.
              </li>
              <li>
                <strong>Responsive Blog Website:</strong> Created a blog
                website using HTML, CSS, and JavaScript, ensuring mobile-
                friendly designs.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <ul className="space-y-2">
              <li>Kinyarwanda: Excellent (Speaking, Writing, Reading)</li>
              <li>English: Good Speaking, Very Good Writing and Reading</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Hobbies & Interests</h2>
            <ul className="space-y-2">
              <li>🎶 Listening to gospel music and singing</li>
              <li>🙏 Praying</li>
              <li>💻 Exploring new technologies and coding challenges</li>
            </ul>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">References</h2>
          <ul className="space-y-2">
            <li>
              <strong>Tuyishimire Elia:</strong> Teacher - +250 780 283 500
            </li>
            <li>
              <strong>Nsegimana Joseph:</strong> Head Master - +250 783 158 631
            </li>
            <li>
              <strong>Twizerimana Pacifique:</strong> Teacher - +250 780 457 844
            </li>
            <li>
              <strong>Jonathan Kalisa:</strong> Coding Teacher - +250 788 393
              331
            </li>
          </ul>
        </div>
      </div>
      
      
    </div>
   
  );
};

export default Cv;
