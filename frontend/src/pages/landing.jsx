import React from "react";

export default function Landing() {
  return (
    <div className="page-shell">

      <section className="hero-section container-fluid min-vh-100 d-flex align-items-center">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <p className="hero-badge mb-3">MODERN DIGITAL EXPERIENCE</p>

              <h1 className="hero-title fw-bold mb-4">
                Build Stunning <br />
                Digital Products
              </h1>

              <p className="hero-copy mb-4">
                We create modern, scalable and high-performance web experiences that help brands grow faster and stand out in the digital world.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start hero-actions">
                <button className="btn btn-primary btn-lg">Get Started</button>
                <button className="btn btn-light btn-lg">Learn More</button>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <div className="hero-image-card shadow-lg rounded-5 overflow-hidden mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Meeting collaboration"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-heading fw-bold">Why Choose Us</h2>
          <p className="section-copy">Powerful solutions designed for modern businesses.</p>
        </div>

        <div className="row g-4">

          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-card h-100">
              <div className="feature-icon mb-3">🚀</div>
              <h4 className="feature-title fw-bold mb-3">Fast Performance</h4>
              <p className="feature-copy">Optimized and responsive websites that deliver smooth performance across all devices.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-card h-100">
              <div className="feature-icon mb-3">🎨</div>
              <h4 className="feature-title fw-bold mb-3">Modern Design</h4>
              <p className="feature-copy">Clean and visually engaging UI/UX designs that improve user experience and branding.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
            <div className="feature-card h-100">
              <div className="feature-icon mb-3">🔒</div>
              <h4 className="feature-title fw-bold mb-3">Secure Platform</h4>
              <p className="feature-copy">We build scalable and secure systems using modern web technologies and best practices.</p>
            </div>
          </div>

        </div>

      </section>

      <section className="container py-5">
        <div className="brand-cta-box rounded-5 p-5 text-center shadow-sm">
          <h2 className="cta-heading fw-bold mb-4">Ready To Grow Your Brand?</h2>
          <p className="cta-copy mb-4">Let’s build something amazing together with modern web technologies and creative digital solutions.</p>
          <button className="btn btn-light btn-lg">Contact Us</button>
        </div>
      </section>

    </div>
  );
}