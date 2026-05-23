import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
      }}
    >
      <div className="container">
        <div className="row">

          {/* LOGO & DESCRIPTION */}
          <div className="col-md-4 mb-4">
            <h2 className="fw-bold">
              Meet<span className="text-info">Flow</span>
            </h2>
            <p className="text-light-emphasis mt-3">
              MeetFlow is a modern video conferencing platform for seamless
              meetings, team collaboration, and secure communication.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-decoration-none text-light">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/features" className="text-decoration-none text-light">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* FEATURES */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Features</h5>
            <ul className="list-unstyled text-light-emphasis">
              <li className="mb-2">HD Video Meetings</li>
              <li className="mb-2">Screen Sharing</li>
              <li className="mb-2">Live Chat</li>
              <li className="mb-2">Secure Rooms</li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-semibold mb-3">Connect</h5>

            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-github"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#" className="text-light">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <hr className="border-secondary" />

        <div className="text-center text-light-emphasis">
          © {new Date().getFullYear()} MeetFlow. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}