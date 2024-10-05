import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // Track email send status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend
    axios
      .post("https://codezion-backend.vercel.app/send-email", formData)
      .then((response) => {
        console.log("Email sent successfully:", response.data);
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
        setStatus("success"); // Show success message
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("failure"); // Show failure message
      });
  };
  return (
    <div>
      <Helmet>
        <title>Contact Us | Codezion Softwares</title>
        <meta name="title" content="Contact Us | Codezion Softwares" />
        <meta
          name="description"
          content="Reach out to us to discuss your project requirements and receive a free quote or project estimation. We're ready to respond promptly and assist you with your needs!"
        />
        <meta name="keywords" content="contact us, contact codezion" />
        <meta property="og:title" content="Contact Us | Codezion Softwares" />
        <meta property="og:site_name" content="codezion" />
        <meta property="og:url" content="https://www.codezion.com/contactus" />
        <meta
          property="og:description"
          content="Reach out to us to discuss your project requirements and receive a free quote or project estimation. We're ready to respond promptly and assist you with your needs!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.codezion.com/assets/images/logo 1.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us | Codezion Softwares" />
        <meta name="twitter:site" content="@codezion" />
        <meta
          name="twitter:description"
          content="Reach out to us to discuss your project requirements and receive a free quote or project estimation. We're ready to respond promptly and assist you with your needs!"
        />
        <meta name="twitter:image" content="https://www.codezion.com/" />
        <meta name="twitter:image:alt" content="codezionsoftware" />
        <meta name="robots" content="index, follow" />

      </Helmet>
      <Layout />
      <section className="section-padding subheader-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subheader">
                <h1>Contact Us</h1>
                <span>
                  <Link to="/">
                    Home <i className="fa fa-chevron-right"></i>
                  </Link>{" "}
                  Contact Us
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --section start---- */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-title">
                <p>Get In Touch</p>
                <h2>
                  Get answers of your queries by filling this form with all the
                  details requested.
                </h2>
                {/* <p>There are many variations of passages of lorem Ipsum available..</p> */}
                <div className="media">
                  <div
                    className="media-icon-part align-self-center"
                    style={{ width: "115px" }}
                  >
                    {/* <i className="fa fa-location"></i> */}
                    <img src="assets/images/location.gif" alt="" />
                  </div>
                  <div className="media-body">
                    <h4 className="feature-box-title">Location</h4>
                    <div className="fbox-content">
                      C-188, B-2, Ground Floor, Ayesha Majestic Near LBS College
                      Sunder Marg Tilak Nagar, Raja Park, Jaipur, Rajasthan
                      302004
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon-part align-self-center">
                    <img src="assets/images/phone.gif" alt="" />
                    {/* <i className="fa fa-phone"></i> */}
                  </div>
                  <div className="media-body">
                    <h4 className="feature-box-title">Any Questions?</h4>
                    <div className="fbox-content">8386893777, 9772564292</div>
                  </div>
                </div>
                <div className="media">
                  <div className="media-icon-part align-self-center">
                    <img src="assets/images/briefcase.gif" alt="" />
                    {/* <i className="fa fa-envelope"></i> */}
                  </div>
                  <div className="media-body">
                    <h4 className="feature-box-title">Write Email</h4>
                    <div className="fbox-content">info@codezion.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {status === "success" && (
                <p className="success-message">
                  Your message was sent successfully!
                </p>
              )}
              {status === "failure" && (
                <p className="error-message">
                  There was an error sending your message. Please try again.
                </p>
              )}

              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-thm-main">
                    SEND NOW
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.445659919379!2d75.82569970000002!3d26.8893479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db773ba5e425d%3A0x9dd21d0d16f9ac3a!2sCodezion%20Softwares%20Pvt.%20Ltd.%20%7C%20Mobile%20App%20Game%20Development%20Company!5e0!3m2!1sen!2sin!4v1726832725606!5m2!1sen!2sin"
          width="100%"
          height="600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map Location"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
