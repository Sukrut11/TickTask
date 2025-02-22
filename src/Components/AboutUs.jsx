import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-2xl mx-auto p-6" style={{marginTop: 70}}>
      <p className="text-lg font-serif text-gray-800 leading-relaxed">
        <span className="block mb-2 font-semibold text-xl">Hey there, </span>
        I am <strong>Sukrut Mayekar</strong>, the creator of this fun and simple web application.
        As a budding software engineer, I am passionate about building great applications
        that make everyday tasks easier.
      </p>

      <p className="text-lg font-serif text-gray-800 leading-relaxed mt-4">
        Currently, I am exploring <strong>React.js</strong> and wanted to implement my learnings by
        creating a useful project. While managing my daily tasks, I noticed the need for a simple
        and efficient tool to keep everything organized. So, I created <strong>TickTask</strong>, a simple and beautiful To-Do application!
        It helps me categorize, track, and complete my tasks in an organized manner.
      </p>

      <h3 className="text-xl font-semibold mt-6 text-gray-900">How to Use TickTask</h3>

      <ul className="list-disc list-inside mt-3 text-lg text-gray-700 leading-relaxed">
        <li>
          <strong>Adding a Task:</strong> Enter the task title and description, then click on
          <span className="text-green-600 font-semibold"> Submit</span> button.
        </li>
        <li>
          <strong>Clearing Text Fields:</strong> Click on
          <span style={{color: "red"}}> Clear Text</span> button to reset the input fields.
        </li>
        <li>
          <strong>Managing Tasks:</strong> Your tasks will be stored in the 
          <span className="text-yellow-600 font-semibold"> Pending tasks</span> list.
          You can mark your pending task as
          <strong style={{color: "green"}}> Completed</strong> by clicking on the <span style = {{color: "green"}}>Completed</span> button inside the task.
        </li>
        <li>
          <strong>Removing a specific Task:</strong> To remove pending or completed tasks, click on the 
          <span className="text-red-600 font-semibold" style={{color: "red"}}> Clear</span> button.
          <br />
          <span className="text-sm text-gray-500"><strong style = {{color: "red"}}>Note:</strong> This action is permanent and cannot be undone!</span>
        </li>
        <li>
          <strong>Removing all your Tasks:</strong> To remove all tasks, click on the 
          <span className="text-red-600 font-semibold" style={{color: "red"}}> Clear All Tasks</span> button.
          <br />
          <span className="text-sm text-gray-500"><strong style = {{color: "red"}}>Note:</strong> This action will delete all your tasks permanently!</span>
        </li>
      </ul>

      {/* Contact Information Section */}
      <h3 className="text-xl font-semibold mt-8 text-gray-900">How to Contact Me</h3>
      <p className="text-lg font-serif text-gray-800 leading-relaxed mt-2">
        I would love to collaborate with you on your project or startup! Feel free to reach out to me via the following platforms:
      </p>

      <ul className="mt-4 space-y-2 text-lg">
        <li>
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:SukrutSwapnilMayekar@gmail.com" className="text-blue-600 hover:underline">
            SukrutSwapnilMayekar@gmail.com
          </a>
        </li>
        <li>
          💼 <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/sukrutmayekar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            linkedin.com/in/sukrutmayekar
          </a>
        </li>
        <li>
          🖥️ <strong>GitHub:</strong>{" "}
          <a href="https://github.com/Sukrut11" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            github.com/Sukrut11
          </a>
        </li>
      </ul>

      <p className="text-lg font-serif text-gray-800 leading-relaxed mt-6">
        I will keep adding more features to TickTask to make it even better!  
        Thank you for using this app, and I hope it helps you as much as it helps me.  
      </p>

      <p className="text-lg font-serif text-gray-800 leading-relaxed mt-4">
        <strong className="block font-semibold">Best Regards,</strong>
        <br />
        <strong className="block text-gray-900 font-bold text-xl">Sukrut Mayekar</strong>
      </p>
    </div>
  );
}
