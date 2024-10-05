import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Layout from './Layout'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

function CareerDetails() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone) {
      newErrors.phone = 'Mobile No. is required';
    }
    if (!formData.position) {
      newErrors.position = 'Position is required';
    }
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }
    if (!formData.message) {
      newErrors.message = 'Message cannot be empty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // Stop submission if validation fails
    }

    const formPayload = new FormData();
    for (const key in formData) {
      formPayload.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/send-email', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        message: '',
      });
      setErrors({}); // Clear errors on successful submission
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  return (
    <div>
    <Helmet>
      <title>Career Details | Join Codezion Softwares</title>
      <meta name="title" content="Careers | Join Codezion Softwares"/>
      <meta name="description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta name="keywords" content="career, career option in it, it jobs, jobs in it company"/>
      <meta property="og:title" content="Careers | Join Codezion Softwares"/>
      <meta property="og:site_name" content="codezion"/>
      <meta property="og:url" content="https://www.codezion.com/careers"/>
      <meta property="og:description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Careers | Join Codezion Softwares"/>
      <meta name="twitter:site" content="@codezion"/>
      <meta name="twitter:description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta name="twitter:image" content="https://www.codezion.com/"/>
      <meta name="twitter:image:alt" content="codezionsoftware"/>
      <meta name="robots" content="index, follow" />

    </Helmet>
    {/* ---meta tag end--------- */}
    <Layout/>
    <section className="section-padding subheader-section">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <div className="subheader">
                  <h1>Career Details</h1>
                  <span><Link to="/">Home <i className="fa fa-chevron-right"></i></Link> Career Details</span>
                </div>
              </div>
          </div>
        </div>
    </section>
    <section className='section-padding'>
      <div className="container">
        {/* <div className="row justify-content-center">
        <div className="col-lg-10">
            <div className="career-deatils">
            <div className='text-center mb-5'>
            <h2 className='fw-600'>Current Openings</h2>
            <p>Feel fulfilled. Have fun. Help us to shape the future.</p>
            </div>
            <div className="career-table table-responsive">
                <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>Role</th>
                    <th>Location</th>
                    <th>Minimum Experience</th>
                    <th>Type</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th>HR Generalist</th>
                    <td>Jaipur, India.</td>
                    <td>1 years minimum excluding the training period.</td>
                    <td>Full Time</td>
                    <td><button className='btn btn-apply'>Apply Now</button></td>
                    </tr>
                    <tr>
                    <th>PHP Developer</th>
                    <td>Jaipur, India.</td>
                    <td>1 years minimum excluding the training period.</td>
                    <td>Full Time</td>
                    <td><button className='btn btn-apply'>Apply Now</button></td>
                    </tr>
                    <tr>
                    <th>React Native Developer</th>
                    <td>Jaipur, India.</td>
                    <td>1.5 years minimum excluding the training period.</td>
                    <td>Full Time</td>
                    <td><button className='btn btn-apply'>Apply Now</button></td>
                    </tr>
                    <tr>
                    <th>Laravel Developer</th>
                    <td>Jaipur, India.</td>
                    <td>2 years minimum excluding the training period.</td>
                    <td>Full Time</td>
                    <td><button className='btn btn-apply'>Apply Now</button></td>
                    </tr>
                    <tr>
                    <th>International Marketing Executive</th>
                    <td>Jaipur, India.</td>
                    <td>1 years minimum excluding the training period.</td>
                    <td>Full Time</td>
                    <td><button className='btn btn-apply'>Apply Now</button></td>
                    </tr>
                </tbody>
                </table>
                <p className='text-center'>We are always on the lookout for talented folk to join our team. Follow us on <Link to="#">LinkedIn</Link>!</p>
            </div>
            </div>
        </div>
        </div> */}
        <div className="row pt-5">
        <div className="col-lg-6">
            <div className="career-image">
            <img src="assets/images/career-bg.png" alt="" />
            </div>
        </div>
        <div className="col-lg-6">
          <div className="career-form">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Name"
                    
                  />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="col-md-6">
                  <label>Email address *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    
                  />
                   {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="col-md-6">
                  <label>Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile No."
                  />
                  {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>
                <div className="col-md-6">
                  <label>Post *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Position"
                    
                  />
                   {errors.position && <div className="text-danger">{errors.position}</div>}
                </div>
                <div className="col-md-6">
                  <label>Resume *</label>
                  <input
                    type="file"
                    className="form-control"
                    name="resume"
                    onChange={handleChange}
                    
                  />
                  {errors.resume && <div className="text-danger">{errors.resume}</div>}
                </div>
                <div className="col-12">
                  <label>Message</label>
                  <textarea
                    rows="5"
                    className="outline-0 border-light-subtle rounded-3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Your Message'
                  >
                     {errors.message && <div className="text-danger">{errors.message}</div>}
                  </textarea>
                </div>
              </div>
              <button type="submit" className="btn thm-btn text-black rounded-5 btn-lg bg-white w-100 px-5 mt-4">
                Submit Your Request
              </button>
            </form>
          </div>
        </div>
        </div>
    </div>
    </section>
    <Footer/>
    </div>
  )
}

export default CareerDetails