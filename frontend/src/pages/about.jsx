import React from "react";

function About() {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5 text-center">

                <h1 className="display-4 fw-bold text-primary mb-4">
                  About MeetFlow
                </h1>

                <p className="lead text-muted">
                  MeetFlow is a modern platform designed to simplify
                  meetings, collaboration, and communication.
                </p>

                <p className="text-secondary mt-3">
                  Our goal is to provide users with a smooth and
                  professional experience for scheduling meetings,
                  managing teams, and improving productivity.
                </p>

                <button className="btn btn-primary btn-lg mt-4 px-4">
                  Learn More
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;