import React from "react";
import {
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

export default function Landing() {
  return (
    <div
      style={{
        overflowX: "hidden",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#0b1120",
      }}
    >

      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark py-3 position-fixed top-0 start-0 w-100"
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(15,23,42,0.7)",
          zIndex: "1000",
        }}
      >
        <div className="container">

          <a
            className="navbar-brand fw-bold"
            href="/"
            style={{
              fontSize: "1.8rem",
              letterSpacing: "1px",
            }}
          >
            Mysa<span style={{ color: "#38bdf8" }}>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-lg-center gap-lg-4">

              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Contact
                </a>
              </li>

              <li className="nav-item mt-3 mt-lg-0">
                <button
                  className="btn px-4 py-2"
                  style={{
                    background: "#38bdf8",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: "600",
                  }}
                >
                  Get Started
                </button>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="container-fluid position-relative"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "120px",
          background:
            "radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 30%), #0b1120",
        }}
      >

        {/* GLOW EFFECT */}
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            background: "#38bdf8",
            filter: "blur(180px)",
            opacity: "0.2",
            top: "0",
            left: "-100px",
          }}
        ></div>

        <div className="container">

          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-12 col-lg-6 text-center text-lg-start">

              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-2 mb-4"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "30px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ color: "#38bdf8" }}>●</span>

                <small style={{ color: "#cbd5e1" }}>
                  Trusted By Modern Brands
                </small>
              </div>

              <h1
                className="fw-bold text-white mb-4"
                style={{
                  fontSize: "clamp(2.8rem,7vw,5.5rem)",
                  lineHeight: "1.1",
                }}
              >
                Build The Future <br />

                <span style={{ color: "#38bdf8" }}>
                  With Modern Web
                </span>
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "1.1rem",
                  lineHeight: "2",
                  maxWidth: "600px",
                }}
              >
                We create high-performance digital experiences,
                modern interfaces, and scalable web solutions that
                help businesses grow faster in the online world.
              </p>

              {/* BUTTONS */}
              <div
                className="d-flex flex-column flex-sm-row gap-3 mt-5 justify-content-center justify-content-lg-start"
              >

                <button
                  className="btn px-4 py-3 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    background: "#38bdf8",
                    color: "white",
                    borderRadius: "14px",
                    fontWeight: "600",
                    minWidth: "180px",
                  }}
                >
                  Get Started
                  <FaArrowRight />
                </button>

                <button
                  className="btn px-4 py-3 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    borderRadius: "14px",
                    minWidth: "180px",
                  }}
                >
                  <FaPlay />
                  Watch Demo
                </button>

              </div>

              {/* STATS */}
              <div className="row mt-5 g-4">

                <div className="col-4">
                  <h2 className="text-white fw-bold">120+</h2>
                  <p className="text-secondary mb-0">Projects</p>
                </div>

                <div className="col-4">
                  <h2 className="text-white fw-bold">50+</h2>
                  <p className="text-secondary mb-0">Clients</p>
                </div>

                <div className="col-4">
                  <h2 className="text-white fw-bold">99%</h2>
                  <p className="text-secondary mb-0">Success</p>
                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="col-12 col-lg-6 mt-5 mt-lg-0">

              <div
                className="position-relative"
                style={{
                  maxWidth: "550px",
                  margin: "auto",
                }}
              >

                {/* MAIN CARD */}
                <div
                  className="p-3"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "30px",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >

                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="hero"
                    className="img-fluid rounded-4"
                  />

                </div>

                {/* FLOAT CARD */}
                <div
                  className="position-absolute p-3"
                  style={{
                    bottom: "-20px",
                    left: "-20px",
                    background: "white",
                    borderRadius: "20px",
                    width: "220px",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                  }}
                >

                  <div className="d-flex align-items-center gap-3">

                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "#38bdf8",
                        borderRadius: "12px",
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      <FaRocket />
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Fast Growth
                      </h6>

                      <small className="text-muted">
                        Scalable Solutions
                      </small>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-5">

        <div className="text-center mb-5">

          <h2
            className="fw-bold text-white"
            style={{
              fontSize: "clamp(2rem,5vw,3rem)",
            }}
          >
            Why Choose Us
          </h2>

          <p
            style={{
              color: "#94a3b8",
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            Premium digital solutions designed with performance,
            creativity, and modern technologies.
          </p>

        </div>

        <div className="row g-4">

          {[
            {
              icon: <FaCode />,
              title: "Clean Development",
              desc: "Modern scalable architecture using latest technologies.",
            },
            {
              icon: <FaMobileAlt />,
              title: "Mobile Responsive",
              desc: "Perfectly optimized for all mobile and desktop devices.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Secure Systems",
              desc: "Security-first approach with optimized performance.",
            },
          ].map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>

              <div
                className="h-100 p-4"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >

                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "18px",
                    background: "#38bdf8",
                    color: "white",
                    fontSize: "28px",
                  }}
                >
                  {item.icon}
                </div>

                <h4 className="text-white fw-bold mb-3">
                  {item.title}
                </h4>

                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: "1.8",
                  }}
                >
                  {item.desc}
                </p>

                <div className="mt-4 d-flex align-items-center gap-2">
                  <FaCheckCircle style={{ color: "#38bdf8" }} />

                  <small style={{ color: "#cbd5e1" }}>
                    Premium Quality
                  </small>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}