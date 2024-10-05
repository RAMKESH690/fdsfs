import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async';


function TermsConditions() {
  return (
    <div>
      <Helmet>
      <meta name="robots" content="index, follow" />

      </Helmet>
      <Layout/>
      <section className="section-padding subheader-section">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <div className="subheader">
                  <h1>Terms & Conditions</h1>
                  <span><Link to="/">Home <i className="fa fa-chevron-right"></i></Link> Terms & Conditions</span>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className='section-padding'>
        <div className="container">
          <div className="pricacy-policy-text">
            <h4>Terms and Conditions</h4>
            <h5>Effective Date: 23/09/2024</h5>
            <p>Welcome to Codezion Software Private Limited ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website, services, products, and software solutions provided by Codezion Software Private Limited. By accessing or using our services, you agree to be bound by these Terms.</p>
            <p>Please read these Terms carefully. If you do not agree with any part of these Terms, you must not use our services.</p>
            <h5>1. Introduction</h5>
            <p>By using Codezion Software Private Limited's services, you acknowledge that you have read, understood, and agreed to be bound by these Terms, as well as our Privacy Policy, which is incorporated by reference into these Terms.</p>
            <h5>2. Eligibility</h5>
            <p>You must be at least 18 years of age to use our services. By using our services, you represent and warrant that you are legally capable of entering into a binding contract and are not barred from using our services under applicable law.</p>
            <h5>3. Services Provided</h5>
            <p>Codezion Software Private Limited provides software development, IT consultancy, and related services. The specific nature of the services will be governed by the individual contracts or agreements signed between you and Codezion Software Private Limited. All services are provided on an "as-is" basis.</p>
            <h5>4. Intellectual Property</h5>
            <p>All content, trademarks, logos, and other intellectual property related to our services and website are the exclusive property of Codezion Software Private Limited, unless otherwise noted. You are granted a limited license to access and use our services for personal and business use only. You agree not to modify, copy, distribute, or use any content from our services for commercial purposes without our explicit written consent.</p>
            <h5>5. User Responsibilities</h5>
            <h6>By using our services, you agree:</h6>
            <ul className="p-0">
              <li>To provide accurate and complete information where required.</li>
              <li>To comply with all applicable laws and regulations.</li>
              <li>Not to misuse our services in any manner.</li>
              <li>Not to attempt to hack, disable, or disrupt the integrity or performance of our systems or services.</li>
              <li>Not to reverse-engineer any software solutions or tools provided by Codezion Software Private Limited.</li>
              
            </ul>
            <h5>6. Fees and Payment</h5>
            <p>If applicable, fees for services will be as agreed upon in a separate contract or service agreement. Payment terms, including due dates and penalties for late payments, will be outlined in these agreements. Codezion Software Private Limited reserves the right to suspend or terminate services in the event of non-payment.</p>
            <h5>7. Privacy</h5>
            <p>Your privacy is important to us. Please refer to our [Privacy Policy] for information on how we collect, use, and protect your personal data.</p>
            <h5>8. Third-Party Services</h5>
            <p>Our services may contain links to third-party websites or services that are not owned or controlled by Codezion Software Private Limited. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party services.</p>
            <h5>9. Limitation of Liability</h5>
            <p>To the maximum extent permitted by law, Codezion Software Private Limited will not be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of our services, including, but not limited to, any loss of profits, data, or goodwill.</p>
            <h5>10. Disclaimer</h5>
            <p>Codezion Software Private Limited provides its services on an "as-is" and "as-available" basis, without warranties of any kind, whether express or implied. We do not warrant that the services will be uninterrupted or error-free, nor do we make any warranties as to the results that may be obtained from using our services.</p>
            <h5>11. Termination</h5>
            <p>Codezion Software Private Limited reserves the right to terminate or suspend your access to our services at any time, with or without cause, and without notice. Upon termination, all provisions of these Terms that by their nature should survive termination, including, but not limited to, ownership provisions, warranty disclaimers, and limitations of liability, shall survive.</p>
            <h5>12. Governing Law</h5>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts located in [Your Company’s Jurisdiction].</p>
            <h5>13. Changes to Terms</h5>
            <p>Codezion Software Private Limited reserves the right to modify these Terms at any time. When we do, we will post the revised Terms on our website and update the "Effective Date." Your continued use of our services after the changes become effective will constitute your acceptance of the new Terms.</p>
            <h5>14. Contact Us</h5>
            <p>If you have any questions about these Terms or wish to report any violations, please contact us at:</p>
            <h5>Codezion Software Private Limited</h5>
            <ul className='p-0'>
              <li>Address: C-188, B-2, Ground Floor, Ayesha Majestic Near LBS College Sunder Marg Tilak Nagar, Raja Park, Jaipur, Rajasthan 302004</li>
              <li>Email: info@codezion.com</li>
              <li>Phone: 8386893777, 9772564292</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default TermsConditions