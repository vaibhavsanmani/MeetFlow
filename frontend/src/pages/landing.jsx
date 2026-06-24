import React from "react";

export default function Landing() {
  return (
    <div className="page-shell">

      <section className="hero-section container-fluid min-vh-100 d-flex align-items-center">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <p className="hero-badge mb-3">MEETFLOW</p>

              <h1 className="hero-title fw-bold mb-4">
                Host Seamless <br />
                Video Meetings Instantly
              </h1>

              <p className="hero-copy mb-4">
                MeetFlow helps teams connect faster with secure, no-fuss meeting rooms, live collaboration, and smooth video calls for every device.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start hero-actions">
                <button className="btn btn-primary btn-lg">Start Meeting</button>
                <button className="btn btn-light btn-lg">Join Now</button>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <div className="hero-image-card shadow-lg rounded-5 overflow-hidden mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="People in a video meeting"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-heading fw-bold">Why MeetFlow</h2>
          <p className="section-copy">Video meetings built for teamwork, speed, and security.</p>
        </div>

        <div className="row g-4">

          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-card h-100">
              <div className="feature-icon mb-3">⚡</div>
              <h4 className="feature-title fw-bold mb-3">Instant Rooms</h4>
              <p className="feature-copy">Create or join meetings in seconds without downloads, waiting rooms, or complicated setup.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-card h-100">
              <div className="feature-icon mb-3">🔒</div>
              <h4 className="feature-title fw-bold mb-3">Secure Calls</h4>
              <p className="feature-copy">Encrypted sessions and privacy-first controls keep every conversation safe and trusted.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
            <div className="feature-card h-100">
              <div className="feature-icon mb-3">🌐</div>
              <h4 className="feature-title fw-bold mb-3">Any Device</h4>
              <p className="feature-copy">Affordable video collaboration that works smoothly across desktop, mobile, and tablet browsers.</p>
            </div>
          </div>

        </div>

      </section>

      <section className="container py-5">
        <div className="brand-cta-box rounded-5 p-5 text-center shadow-sm">
          <h2 className="cta-heading fw-bold mb-4">Ready to launch your first meeting?</h2>
          <p className="cta-copy mb-4">Get started with MeetFlow today and turn every call into a productive collaboration.</p>
          <button className="btn btn-light btn-lg">Create a Room</button>
        </div>
      </section>

    </div>
  );
}