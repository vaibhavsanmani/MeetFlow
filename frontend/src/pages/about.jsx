import React from "react";

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
    <main className="container py-5">
      <section className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
            <div className="row g-0 align-items-center">
              <div className="col-md-6 p-5">
                <h1 className="display-5 fw-bold text-primary">About MeetFlow</h1>
                <p className="lead text-muted mt-3">
                  MeetFlow helps teams run efficient meetings that move work
                  forward. We combine fast scheduling, collaborative note-taking,
                  and simple action tracking so meetings become the most productive
                  part of your day.
                </p>
                <p className="text-secondary">
                  Built for clarity and speed — MeetFlow reduces friction so
                  teams spend less time coordinating and more time doing.
                </p>
                <a href="#features" className="btn btn-primary btn-lg mt-3">
                  Explore features
                </a>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <div className="p-5 h-100 d-flex align-items-center justify-content-center bg-light">
                  <div>
                    <img
                      src="/public/meet-illustration.png"
                      alt="Meetings illustration"
                      style={{ maxWidth: "320px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h2 className="h3 fw-bold">Core features</h2>
          <p className="text-muted">Tools that make meetings fast and actionable.</p>
        </div>

        {features.map((f) => (
          <div key={f.title} className="col-md-4 mb-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="display-6 mb-3">{f.emoji}</div>
                <h5 className="card-title fw-bold">{f.title}</h5>
                <p className="card-text text-muted mt-2">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="row mb-5">
        <div className="col-12 text-center mb-4">
          <h2 className="h3 fw-bold">Our team</h2>
          <p className="text-muted">Small, focused, and customer-first.</p>
        </div>

        {team.map((m) => (
          <div key={m.name} className="col-sm-6 col-md-4 mb-3">
            <div className="card text-center border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width:64,height:64}}>
                  {m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
                </div>
                <h6 className="fw-bold mb-1">{m.name}</h6>
                <p className="text-muted small mb-0">{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="row">
        <div className="col-12 text-center">
          <p className="text-secondary mb-2">Want to see MeetFlow in action?</p>
          <a href="/signup" className="btn btn-outline-primary btn-lg">Get started — it's free</a>
        </div>
      </section>
    </main>
  );
}

export default About;