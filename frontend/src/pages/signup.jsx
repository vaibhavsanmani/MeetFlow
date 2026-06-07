import React from "react";

export default function Signup() {
  return (
    <section id="signup" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm p-4 rounded-4">
            <h2 className="mb-3 text-center">Create your MeetFlow account</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input type="text" className="form-control" placeholder="Your name" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@company.com" />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Create a password" />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm password</label>
                <input type="password" className="form-control" placeholder="Repeat your password" />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
              </div>
            </form>

            <div className="text-center mt-3 small text-muted">
              Already have an account? <a href="#login">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
