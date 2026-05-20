import React, { useState } from "react";

export default function JoinMeeting() {
  const [meetingCode, setMeetingCode] = useState("");

  const handleJoin = () => {
    if (!meetingCode.trim()) {
      alert("Please enter a meeting code");
      return;
    }
    alert(`Joining meeting: ${meetingCode}`);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <div
        className="card shadow-lg p-4 border-0"
        style={{
          width: "400px",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold">Join Video Conference</h2>
          <p className="text-muted">
            Enter your meeting code below
          </p>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">
            Meeting Code
          </label>

          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter code"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
            style={{
              borderRadius: "12px",
            }}
          />
        </div>

        <button
          className="btn btn-primary btn-lg w-100"
          onClick={handleJoin}
          style={{
            borderRadius: "12px",
          }}
        >
          Join Meeting
        </button>

        <div className="text-center mt-3">
          <small className="text-muted">
            Secure & Fast Video Meetings
          </small>
        </div>
      </div>
    </div>
  );
}