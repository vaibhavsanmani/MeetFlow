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
          <div
            className="d-inline-flex justify-content-center align-items-center mb-3"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, #bfc8de, #bfc8de)",
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            M
          </div>

          <h2 className="fw-bold mb-2">Join Meeting</h2>

          <p className="text-muted mb-0">
            Enter your meeting code to continue
          </p>
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
            style={{
              borderRadius: "14px",
              padding: "14px",
              backgroundColor: "#f8fafc",
            }}
          />
        </div>

        <button
          className="btn btn-primary btn-lg w-100 fw-semibold"
          onClick={handleJoin}
          style={{
            borderRadius: "14px",
            padding: "12px",
            background:
              "linear-gradient(135deg, #2563eb, #3b82f6)",
            border: "none",
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