import protein from './assets/projectImages/protein.png'
import dashboard from './assets/projectImages/dashboard.png'
import cpu from './assets/projectImages/cpu.png'
import motor from './assets/projectImages/motor.gif'
import brain from './assets/projectImages/brain.png'
import profile from './assets/projectImages/profile.png'
import ducks from './assets/projectImages/duck_background.png'
import dumbbell from './assets/projectImages/dumbbell.jpg'
import activity from './assets/projectImages/activity.jpg'

const config = {
  projectsList: [
    {
      title: 'Protein Structure Evaluation',
      description: 'Developed a Python library and advanced data analysis and ML techniques to evaluate protein structure predictions in the absence of experimentally determined structures. The library calculates an accuracy metric comparable to the industry standard RMSD, providing robust evaluation capabilities.',
      image: protein,
      projectURL: 'https://github.com/Musa-Azeem/pdbmine_analytics_lib',
      extraLink: 'https://doi.org/10.3389/fmolb.2025.1694750'
    },
    {
      title: 'Human Activity Recognition',
      description: 'Researched and implemented deep learning models using PyTorch, including LSTM, CNN, and Autoencoder architectures, to achieve high accuracy in human activity recognition using tri-axis accelerometer data. The models were trained on a modest dataset of labelled human activity data and learned to classify windows of time into different activities, such as eating, smoking, and exercising.',
      image: activity,
      projectURL: 'https://github.com/musa-azeem/eating-detection',
      extraLink: 'https://doi.org/10.3390/s24144542'
    },
    {
      title: 'AI Fitness Coaching',
      description: 'Developed a real-time, deep learning powered system to identify near-failure states during resistance training using a single wrist-mounted IMU. Engineered a two-stage, edge-deployable machine learning pipeline that combines a ResNet-based model for repetition segmentation with an LSTM-powered classifier, achieving low-latency inference on mobile and wearable devices.',
      image: dumbbell,
      projectURL: 'https://github.com/Musa-Azeem/RepAI',
      extraLink: 'https://doi.org/10.48550/arXiv.2512.11854'
    },
    {
      title: 'Faculty Dashboard',
      description: 'Developed a full stack faculty dashboard app, which allows Professors and Department Chairs at UofSC to access a consolidated view of student evaluations, research information, and relative performance of themselves and their team members. The website was built with Flask, React, and MySQL. The backend serves as a REST API and processes large CSV files to gather data, input this data into the database, and performed calculations to analyze data. The frontend provides a seamless, multi-page, and in-depth dashboard for faculty members to view all of this information. The app was deployed on a server using Apache.',
      image: dashboard,
      projectURL: 'https://github.com/SCCapstone/K3MS',
      extraLink: 'https://sccapstone.github.io/K3MS/'
    },
    {
      title: 'Sleep Stage Classification Web App',
      description: 'Flask web application with an SQL database that allows the UofSC School of Medicine to upload files of rodent EMG/EEG neural data, classify the brain waves as different stages of sleep using trained neural network models, download files in the required format, and view past activity on the web app.',
      image: brain,
      projectURL: 'https://github.com/smithandrewk/aurora'
    },
    {
      title: 'Embedded PID Motor Controller',
      description: 'Developed hardware and software components of an embedded PID controller to synchronize a motor to rotate at a desired rate. Hardware components were designed in SystemVerilog and synthesized on an FPGA board to supply a positive or negative PWM signal to a motor and read the motor encoding (conveying its actual speed). Additional hardware circuits were constructed on a breadboard with the motor. Software components were developed in C and implemented a PID controller to read motor encodings and send appropriate signals back.',
      image: motor,
      projectURL: 'https://github.com/Musa-Azeem/embedded-motor-PID	Au'
    },
    {
      title: 'Portfolio Website',
      description: 'My old, over-engineered, portfolio website. It allows users (me) to log in and add new, edit, or delete projects on the page. The frontend is built in React JS and deployed on github pages using gh-pages. The backend is build in Express.js and provides an API for the website. Projects are stored in MongoDB Atlas and the backend app is deployed on an AWS lambda function using SAM. Simple functionality but a lot of moving parts and potential for expansion.',
      image: profile,
      projectURL: 'https://github.com/Musa-Azeem/portfolio',
      extraLink: 'https://www.portfolio.musaazeem.com/'
    },
    {
      title: 'CPU Design',
      description: 'Designed a 3-stage pipelined CPU to run RISC-V assembly instructions in SystemVerilog and synthesized it on a FPGA board.',
      image: cpu,
      projectURL: 'https://github.com/Musa-Azeem/CSCE611'
    },
    {
      title: 'Duckiebot Robotics',
      description: "Used rospy to direct a wheeled robot to follow a defined track. ROS nodes were used to establish communication between the robot's camera, which processed video with OpenCV, and its wheels, which were controlled with motor voltage.",
      image: ducks,
      projectURL: 'https://github.com/Musa-Azeem/duckiebot',
      extraLink: 'https://www.youtube.com/watch?v=gtYVM_3okz4'
    }
  ]
}

export default config