import protein from './assets/projectImages/protein.png'
import dashboard from './assets/projectImages/dashboard.png'
import cpu from './assets/projectImages/cpu.png'
import motor from './assets/projectImages/motor.gif'
import cig from './assets/projectImages/cig.png'
import brain from './assets/projectImages/brain.png'
import profile from './assets/projectImages/profile.png'
import catHouseCircuit from './assets/projectImages/CatHouseCircuit.png'
import ducks from './assets/projectImages/duck_background.png'

const config = {
  projectsList: [
    {
      title: 'Protein Structure Evaluation',
      description: 'Developed a Python library and advanced data analysis and ML techniques to evaluate protein structure predictions in the absence of experimentally determined structures. The library calculates an accuracy metric comparable to the industry standard RMSD, providing robust evaluation capabilities.',
      image: protein,
      projectURL: 'https://github.com/Musa-Azeem/protein-dihedral-visualization'
    },
    {
      title: 'Faculty Dashboard',
      description: 'Developed a full stack faculty dashboard app, which allows Professors and Department Chairs at UofSC to access a consolidated view of student evaluations, research information, and relative performance of themselves and their team members. The website was built with Flask, React, and MySQL. The backend serves as a REST API and processes large CSV files to gather data, input this data into the database, and performed calculations to analyze data. The frontend provides a seamless, multi-page, and in-depth dashboard for faculty members to view all of this information. The app was deployed on a server using Apache.',
      image: dashboard,
      projectURL: 'https://github.com/SCCapstone/K3MS',
      extraLink: 'https://sccapstone.github.io/K3MS/'
    },
    {
      title: 'Smartwatch Smoking Recognition',
      description: 'Android watch app in to record, annotate, and process data from the watch\'s accelerometer to live feed into a running machine learning model and detect if the wearer is smoking. The neural network was developed in pytorch and was trained on many sample smoking gestures. The Android app was built in Kotlin and jetpack compose and utilizes the Android Lifecycle to control user interaction and gesture detection.',
      image: cig,
      projectURL: 'https://github.com/smithandrewk/delta'
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
      title: 'Smart Cat House',
      description: 'Built a wooden "smart" cat house. It used a microcontroller and environment sensitive variable resistors to moderate heating and lighting in the cat house. The house also consisted of a pressure pad activated motorized door.',
      image: catHouseCircuit,
      projectURL: 'https://github.com/Musa-Azeem/elct201_final_project',
      extraLink: 'https://drive.google.com/file/d/1m0yIN3qQHxl2ouXgyICxia8AekiMA74T/view'
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