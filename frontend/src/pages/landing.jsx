import React from "react";

export default function Landing() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="container-fluid min-vh-100 d-flex align-items-center"
        style={{
          background:
            "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
          color: "white",
        }}
      >
        <div className="container">

          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-6 text-center text-lg-start">

              <p
                className="mb-3"
                style={{
                  color: "#38bdf8",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                MODERN DIGITAL EXPERIENCE
              </p>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  lineHeight: "1.1",
                }}
              >
                Build Stunning <br />
                Digital Products
              </h1>

              <p
                className="mb-4"
                style={{
                  fontSize: "1.1rem",
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                We create modern, scalable and high-performance web
                experiences that help brands grow faster and stand out in
                the digital world.
              </p>

              {/* BUTTONS */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">

                <button
                  className="btn px-4 py-3"
                  style={{
                    backgroundColor: "#38bdf8",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: "600",
                  }}
                >
                  Get Started
                </button>

                <button
                  className="btn btn-outline-light px-4 py-3"
                  style={{
                    borderRadius: "12px",
                    fontWeight: "600",
                  }}
                >
                  Learn More
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="col-12 col-lg-6 text-center mt-5 mt-lg-0">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team"
                className="img-fluid rounded-5 shadow-lg"
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container py-5">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Us</h2>

          <p className="text-muted">
            Powerful solutions designed for modern businesses.
          </p>
        </div>

        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="p-4 shadow-sm rounded-4 h-100"
              style={{
                backgroundColor: "#fff",
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontSize: "40px",
                }}
              >
                🚀
              </div>

              <h4 className="fw-bold">Fast Performance</h4>

              <p className="text-muted">
                Optimized and responsive websites that deliver smooth
                performance across all devices.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="p-4 shadow-sm rounded-4 h-100"
              style={{
                backgroundColor: "#fff",
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontSize: "40px",
                }}
              >
                🎨
              </div>

              <h4 className="fw-bold">Modern Design</h4>

              <p className="text-muted">
                Clean and visually engaging UI/UX designs that improve user
                experience and branding.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
            <div
              className="p-4 shadow-sm rounded-4 h-100"
              style={{
                backgroundColor: "#fff",
              }}
            >
              <div
                className="mb-3"
                style={{
                  fontSize: "40px",
                }}
              >
                🔒
              </div>

              <h4 className="fw-bold">Secure Platform</h4>

              <p className="text-muted">
                We build scalable and secure systems using modern web
                technologies and best practices.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section
        className="container-fluid py-5"
        style={{
          backgroundColor: "#0f172a",
          color: "white",
        }}
      >
        <div className="container text-center">

          <h2
            className="fw-bold mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3rem)",
            }}
          >
            Ready To Grow Your Brand?
          </h2>

          <p
            className="mb-4"
            style={{
              color: "#cbd5e1",
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.8",
            }}
          >
            Let’s build something amazing together with modern web
            technologies and creative digital solutions.
          </p>

          <button
            className="btn px-5 py-3"
            style={{
              backgroundColor: "#38bdf8",
              color: "white",
              borderRadius: "12px",
              fontWeight: "600",
            }}
          >
            Contact Us
          </button>

        </div>
      </section>

    </div>
  );
}
