import React from "react";
import "./about.css";

function About() {
  const features = [
    {
      title: "Quick Scheduling",
      desc: "Create meetings in seconds with smart suggestions and calendar sync.",
      emoji: "⏱️",
    },
    {
      title: "Collaborative Notes",
      desc: "Capture decisions, assign action items, and share summaries instantly.",
      emoji: "📝",
    },
    {
      title: "Secure by Design",
      desc: "End-to-end encryption and role-based permissions keep your data safe.",
      emoji: "🔒",
    },
  ];

  const team = [
    { name: "Alex Morgan", role: "Product Lead" },
    { name: "Samira Khan", role: "Frontend Engineer" },
    { name: "Luis Ortega", role: "Backend Engineer" },
  ];

  return (
    <div className="page-shell about-page">
      {/* Hero Section */}
      <section className="hero-section about-hero-section container-fluid min-vh-100 d-flex align-items-center">
        <div className="container py-5">
          <div className="row align-items-center g-5 justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <p className="hero-badge mb-3">ABOUT MEETFLOW</p>

              <h1 className="hero-title fw-bold mb-4">
                Meetings That Drive Results
              </h1>

              <p className="hero-copy mb-4">
                MeetFlow helps teams run efficient meetings that move work forward. We combine fast scheduling, collaborative note-taking, and simple action tracking so meetings become the most productive part of your day.
              </p>

              <p className="hero-copy mb-5">
                Built for clarity and speed — MeetFlow reduces friction so teams spend less time coordinating and more time doing.
              </p>

              <div className="d-flex flex-column justify-content-center gap-3 hero-actions">
                <a href="#features" className="btn btn-primary btn-lg">Explore our features</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="section-heading fw-bold mb-2">Core features</h2>
            <p className="section-copy">Tools that make meetings fast and actionable.</p>
          </div>
        </div>

        <div className="row g-4">
          {features.map((f) => (
            <div key={f.title} className="col-12 col-md-6 col-lg-4">
              <div className="feature-card h-100">
                <div className="feature-icon mb-4">{f.emoji}</div>
                <h5 className="feature-title fw-bold mb-3">{f.title}</h5>
                <p className="feature-copy">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="section-heading fw-bold mb-2">Our team</h2>
            <p className="section-copy">Small, focused, and customer-first.</p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {team.map((m) => (
            <div key={m.name} className="col-sm-8 col-md-6 col-lg-4">
              <div className="feature-card team-card text-center h-100">
                <div 
                  className="avatar bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 fw-bold" 
                  style={{ width: 72, height: 72, fontSize: "1.5rem" }}
                >
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h6 className="feature-title fw-bold mb-2">{m.name}</h6>
                <p className="section-copy small">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="brand-cta-box about-cta-box container-fluid py-5">
        <div className="container text-center py-5">
          <p className="mb-3">Ready to transform your meetings?</p>
          <h3 className="cta-heading fw-bold mb-4">Get started with MeetFlow today</h3>
          <p className="cta-copy mb-4">
            Join teams that are already running more productive meetings. Try MeetFlow free.
          </p>
          <a href="/signup" className="btn btn-light btn-lg">Start free — no credit card required</a>
        </div>
      </section>
    </div>
  );
}

export default About;