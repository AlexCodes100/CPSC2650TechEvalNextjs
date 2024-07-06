import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="w-full max-w-md mx-auto mt-12 p-4">
        <br></br>
        <h1 className="text-center text-2xl font-bold">About This ToDo List App</h1>
        <div className="mt-6">
          <p className="text-lg leading-7">
            Welcome to our ToDo List App! This application is designed to help you manage your tasks efficiently and effectively. Whether you need to keep track of daily chores, work assignments, or personal projects, our app provides a simple and intuitive interface to stay organized.
          </p>
          <p className="text-lg leading-7 mt-4">
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc list-inside text-lg leading-7 mt-2">
            <li>Add new tasks easily</li>
            <li>Mark tasks as completed or incomplete</li>
            <li>Edit tasks to update their details</li>
            <li>Delete tasks you no longer need</li>
            <li>Filter tasks by their status</li>
            <li>Search tasks by keywords</li>
          </ul>
          <p className="text-lg leading-7 mt-4">
            This app is built using the latest web technologies including React, Next.js, and Tailwind CSS. Our goal is to provide a fast, responsive, and user-friendly experience to help you stay on top of your tasks.
          </p>

          <p className="text-lg leading-7 mt-4">
            We hope you find this app useful and it helps you boost your productivity. If you have any feedback or suggestions, feel free to reach out to us.
          </p>
          <p className="text-lg leading-7 mt-4">
            Thank you for using our ToDo List App!
          </p>
        </div>
      </div>
    </>
  );
}
