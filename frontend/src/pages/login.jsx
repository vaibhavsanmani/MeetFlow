import React from "react";

export default function Login() {
  return (
    <section id="login" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="login-card p-4 rounded-4">
            <h2 className="mb-3 text-center">Sign in to MeetFlow</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="you@company.com" />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <input type="checkbox" id="remember" /> <label htmlFor="remember"> Remember me</label>
                </div>
                <a href="#" className="small">Forgot?</a>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">Sign In</button>
              </div>
            </form>

            <div className="text-center mt-3 small text-muted">
              Don't have an account? <a href="#signup">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
