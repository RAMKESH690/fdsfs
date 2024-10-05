import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [experience, setExperience] = useState(0);
  const [member, setMember] = useState(0);

  useEffect(() => {
    const animateCount = (setCount, target, speed, step) => {
        let count = 0;
        const interval = setInterval(() => {
          count += step;
          setCount(count);
          if (count >= target) {
            clearInterval(interval);
            setCount(target); // Ensure final value is exactly the target
          }
        }, speed); // Speed in milliseconds
      };
  
      animateCount(setProjects, 50, 100, 1);   // Projects: Target 120, Speed: 10ms, Step: 1
      animateCount(setCustomers, 150, 70, 2);  // Customers: Target 350, Speed: 15ms, Step: 2
      animateCount(setExperience, 7, 700, 1);  // Experience: Target 10, Speed: 20ms, Step: 1
      animateCount(setMember, 20, 150, 1);  // Experience: Target 10, Speed: 20ms, Step: 1
  
    }, []);

  return (
    <div className="row justify-content-center mt-5 milestone-cont">
      <div className="col-lg-3 col-sm-6 justify-content-center text-center">
      <div className="counter-boxs">
        <img src="assets/images/counter/1.png" alt="" />
        <h1 id="projects" className="num_bold">{experience}<span className='count-plus'>+</span></h1>
        <p className="num_desc">Years Of Experience</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 justify-content-center text-center">
      <div className="counter-boxs">
      <img src="assets/images/counter/2.png" alt="" />
        <h1 id="customers" className="num_bold">{customers}<span className='count-plus'>+</span></h1>
        <p className="num_desc">Happy & Satisfied Client</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 justify-content-center text-center">
      <div className="counter-boxs">
      <img src="assets/images/counter/3.png" alt="" />
        <h1 id="experience" className="num_bold">{member}<span className='count-plus'>+</span></h1>
        <p className="num_desc">Team Members</p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 justify-content-center text-center">
      <div className="counter-boxs">
      <img src="assets/images/counter/4.png" alt="" />
        <h1 id="experience" className="num_bold">{projects}<span className='count-plus'>+</span></h1>
        <p className="num_desc">complete Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
