import React from 'react'

const About = () => {
    let aboutStyle = {
        minHeight: 70,
        margin: '40px auto'
    }
    return (
        <div className='container' style={aboutStyle}>

            <h3 className='my-5'>My Todos List Project</h3>

            <h5 className="font-weight-bold">Overview</h5>
            <p>
                Welcome to My Todos List Project - a simple and efficient way to manage your tasks! This project is designed to help users organize their daily activities, set goals, and stay on top of their to-do lists effortlessly.
                <br /><br />
            </p>

            <h5 className="font-weight-bold">Features</h5>
            <p>
                <b>Add New Todos:</b> Easily add new tasks with titles and descriptions to keep track of your responsibilities and goals. <br />
                <b>Delete Todos:</b> Remove completed or unnecessary tasks to maintain a clutter-free list. <br />
                <b>About Section:</b> Learn more about the project and its creators in the dedicated "About" section. <br/>
                <b>Responsive Design:</b> The application is built with a responsive design, ensuring a seamless experience across various devices.
                <br /><br />    
            </p>

            <h5 className="font-weight-bold">How to Use</h5>
            <p>
                Navigate to the project website.
                Explore the intuitive interface to add new todos or delete completed ones.
                Visit the "About" section to discover more about the inspiration and creators behind this project.
                <br /><br />
            </p>

            <h5 className="font-weight-bold">Technologies Used</h5>
            <p>
                React: The project is built using the React JavaScript library, providing a dynamic and interactive user interface.
                React Router: Navigation within the application is handled by React Router, allowing for a smooth and single-page application experience.
                <br /><br />
            </p>

            <h5 className="font-weight-bold">About Us</h5>
            <p>
                This project is a labor of love created by <b>Vaibhav Kakde</b>. We believe in the power of simplicity when it comes to task management and hope that this tool helps you stay organized and focused.
                <br /><br />
            </p>

            <h5 className="font-weight-bold">Feedback</h5>
            <p>
                We value your feedback! If you have suggestions, encounter issues, or simply want to share your experience, feel free to contact us or leave a comment.
                <br /><br />
                Thank you for choosing <b>My Todos List Project</b> to enhance your productivity journey!</p>
        </div>
    )
}

export default About
