import React, { useState } from "react";

export default function JoinMeeting() {
  const [meetingCode, setMeetingCode] = useState("");

  const handleJoin = () => {
    if (!meetingCode.trim()) {
      alert("Please enter room code");
      return;
    }

    alert(`Joining meeting: ${meetingCode}`);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 px-3"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      }}
    >
      <div
        className="card border-0 shadow-lg p-4 p-md-5"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "24px",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="text-center mb-4">
          <div className="d-inline-flex justify-content-center align-items-center mb-3">
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ borderRadius: 20, background: "linear-gradient(135deg,#c7d2fe,#93c5fd)", padding: 12 }}
              aria-hidden="true"
            >
              <path d="M17 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 4v-11l-4 4z" fill="#fff" />
            </svg>

          <h2 className="fw-bold mb-2">Join Meeting</h2>

          <p className="text-muted mb-0">Paste your meeting code and press Enter</p>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold text-secondary">
            Meeting Code
          </label>

          <input
            type="text"
            className="form-control form-control-lg border-0 shadow-sm"
            placeholder="e.g. ABCD-1234"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleJoin();
            }}
            aria-label="Meeting code"
            style={{ borderRadius: "14px", padding: "14px", backgroundColor: "#f8fafc" }}
          />
        </div>

        <button
          className="btn btn-primary btn-lg w-100 fw-semibold"
          onClick={handleJoin}
          style={{
            borderRadius: "14px",
            padding: "12px",
            background: "linear-gradient(135deg,#2563eb,#3b82f6)",
            border: "none",
            transition: "transform 150ms ease, box-shadow 150ms ease",
          }}
        >
          Join Now
        </button>

        <div className="text-center mt-4">
          <small className="text-muted">
            Secure • Fast • Reliable Meetings
          </small>
        </div>
      </div>
    </div>
  );
}