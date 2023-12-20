import kmeans from './assets/projectImages/cluster.png'
import cpu from './assets/projectImages/cpu.png'
import quicksort from './assets/projectImages/sort.png'
import ipc from './assets/projectImages/ipc.png'
import cig from './assets/projectImages/cig.png'
import brain from './assets/projectImages/brain.png'
import profile from './assets/projectImages/profile.png'
import catHouseCircuit from './assets/projectImages/CatHouseCircuit.png'
import ducks from './assets/projectImages/duck_background.png'

const config = {
  projectsList: [
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
      title: 'K-Means-Cluster Analysis', 
      description: 'Built a C++ program from scratch to preform k-Means-Cluster analysis on a given set of data, with a focus on object-oriented programming and algorithm design.', 
      image: kmeans,
      projectURL: 'https://github.com/Musa-Azeem/K-Means-Clustering'
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
      title: 'Quicksort',
      description: 'Implementation of the quick sort algorithm in C++ with an emphasis on OOP and efficiency.',
      image: quicksort,
      projectURL: 'https://github.com/Musa-Azeem/quick-sort'
    },
    {
      title: 'IPC',
      description: 'Client-server pair that searches for a string in a certain file using POSIX IPC. The client is given a filename and a search string. It then sends the file name to the server using Shared Memery. The server opens and loads the file of the given name into Shared Memory and signals the client to start searching the file in shared memory using threads. The client outputs any lines containing the given string.',
      image: ipc,
      projectURL: 'https://github.com/Musa-Azeem/IPC-String-Search'
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
      description: 'A simple game built in Unity. The player controls a duck and must collect as many coins as possible while avoiding enemies. The game is built in Unity and written in C#.',
      image: ducks,
      projectURL: 'https://github.com/Musa-Azeem/duckiebot',
      extraLink: 'https://www.youtube.com/watch?v=gtYVM_3okz4'
    }
  ]
}

export default config