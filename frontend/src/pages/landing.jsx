import React from "react";

export default function Landing() {
  return (
    <div style={{ backgroundColor: "#f8fafc" }}>

      <section
        className="container-fluid min-vh-100 d-flex align-items-center"
        style={{
          background:
            "linear-gradient(135deg, #ffffff, #f1f5f9, #e2e8f0)",
        }}
      >
        <div className="container py-5">

          <div className="row align-items-center g-5">

            {/* LEFT CONTENT */}
            <div className="col-12 col-lg-6 text-center text-lg-start">

              <p
                className="mb-3"
                style={{
                  color: "#0ea5e9",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                MODERN DIGITAL EXPERIENCE
              </p>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(2.7rem, 7vw, 5rem)",
                  lineHeight: "1.1",
                  color: "#0f172a",
                }}
              >
                Build Stunning <br />
                Digital Products
              </h1>

              <p
                className="mb-4"
                style={{
                  fontSize: "1.1rem",
                  color: "#475569",
                  lineHeight: "1.9",
                  maxWidth: "600px",
                }}
              >
                We create modern, scalable and high-performance web
                experiences that help brands grow faster and stand out in
                the digital world.
              </p>

              {/* BUTTONS */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">

                <button
                  className="btn px-4 py-3 shadow-sm"
                  style={{
                    backgroundColor: "#0ea5e9",
                    color: "white",
                    borderRadius: "14px",
                    fontWeight: "600",
                    border: "none",
                  }}
                >
                  Get Started
                </button>

                <button
                  className="btn px-4 py-3"
                  style={{
                    borderRadius: "14px",
                    fontWeight: "600",
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    backgroundColor: "white",
                  }}
                >
                  Learn More
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="col-12 col-lg-6 text-center">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team"
                className="img-fluid rounded-5 shadow-lg"
                style={{
                  maxHeight: "550px",
                  width: "100%",
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

          <h2
            className="fw-bold"
            style={{
              color: "#0f172a",
              fontSize: "clamp(2rem,5vw,3rem)",
            }}
          >
            Why Choose Us
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "1.05rem",
            }}
          >
            Powerful solutions designed for modern businesses.
          </p>

        </div>

        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="p-4 rounded-5 h-100 shadow-sm"
              style={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
            >

              <div
                className="mb-3"
                style={{
                  fontSize: "45px",
                }}
              >
                🚀
              </div>

              <h4
                className="fw-bold mb-3"
                style={{ color: "#0f172a" }}
              >
                Fast Performance
              </h4>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.8",
                }}
              >
                Optimized and responsive websites that deliver smooth
                performance across all devices.
              </p>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="p-4 rounded-5 h-100 shadow-sm"
              style={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
              }}
            >

              <div
                className="mb-3"
                style={{
                  fontSize: "45px",
                }}
              >
                🎨
              </div>

              <h4
                className="fw-bold mb-3"
                style={{ color: "#0f172a" }}
              >
                Modern Design
              </h4>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.8",
                }}
              >
                Clean and visually engaging UI/UX designs that improve user
                experience and branding.
              </p>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
            <div
              className="p-4 rounded-5 h-100 shadow-sm"
              style={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
              }}
            >

              <div
                className="mb-3"
                style={{
                  fontSize: "45px",
                }}
              >
                🔒
              </div>

              <h4
                className="fw-bold mb-3"
                style={{ color: "#0f172a" }}
              >
                Secure Platform
              </h4>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.8",
                }}
              >
                We build scalable and secure systems using modern web
                technologies and best practices.
              </p>

            </div>
          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section
        className="container py-5"
      >
        <div
          className="rounded-5 p-5 text-center shadow-sm"
          style={{
            background:
              "linear-gradient(135deg, #0ea5e9, #2563eb)",
            color: "white",
          }}
        >

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
              maxWidth: "700px",
              margin: "auto",
              lineHeight: "1.8",
              color: "#e0f2fe",
            }}
          >
            Let’s build something amazing together with modern web
            technologies and creative digital solutions.
          </p>

          <button
            className="btn px-5 py-3"
            style={{
              backgroundColor: "white",
              color: "#0f172a",
              borderRadius: "14px",
              fontWeight: "600",
              border: "none",
            }}
          >
            Contact Us
          </button>

        </div>
      </section>

    </div>
  );
}