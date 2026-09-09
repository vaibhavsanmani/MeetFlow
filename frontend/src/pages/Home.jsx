import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";

import {
  Button,
  IconButton,
  TextField,
  Snackbar,
} from "@mui/material";

import RestoreIcon from "@mui/icons-material/Restore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  const navigate = useNavigate();
  const { addToUserHistory } = useContext(AuthContext);

  const [meetingCode, setMeetingCode] = useState("");
  const [open, setOpen] = useState(false);

  const normalizeMeetingCode = (value = "") =>
    value.replace(/\s+/g, "").toUpperCase();

  // Join Existing Meeting
  const handleJoinVideoCall = async () => {
    const code = normalizeMeetingCode(meetingCode);

    if (!code) {
      alert("Please enter meeting code.");
      return;
    }

    setMeetingCode(code);
    await addToUserHistory(code);
    navigate(`/${code}`);
  };

  // Generate Random Meeting Code
  const generateMeetingCode = () => {
    const code = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();

    setMeetingCode(code);
  };

  // Create New Meeting
  const handleCreateMeeting = async () => {
    const code = Math.random()
      .toString(36)
      .substring(2, 10)
      .toUpperCase();

    setMeetingCode(code);

    await addToUserHistory(code);

    navigate(`/${code}`);
  };

  // Copy Meeting Code
  const copyMeetingCode = () => {
    const code = normalizeMeetingCode(meetingCode);
    if (!code) return;

    navigator.clipboard.writeText(code);
    setMeetingCode(code);
    setOpen(true);
  };

  const handlePasteCode = async () => {
    try {
      const pastedText = await navigator.clipboard.readText();
      const code = normalizeMeetingCode(pastedText);

      if (!code) {
        alert("Clipboard is empty.");
        return;
      }

      setMeetingCode(code);
    } catch (error) {
      alert("Clipboard access was denied. Please paste the code manually.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Apna Video Call</h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <IconButton onClick={() => navigate("/history")}>
            <RestoreIcon />
          </IconButton>

          <p style={{ cursor: "pointer" }}>History</p>

          <Button
            color="error"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main */}
      <div className="meetContainer">
        {/* Left */}
        <div className="leftPanel">
          <div>
            <h1 style={{ marginBottom: "10px" }}>
              Premium Video Meetings
            </h1>

            <p
              style={{
                color: "#666",
                marginBottom: "30px",
                maxWidth: "500px",
              }}
            >
              Create a secure meeting or join an existing one instantly.
            </p>

            <TextField
              fullWidth
              label="Meeting Code"
              variant="outlined"
              value={meetingCode}
              onChange={(e) => setMeetingCode(normalizeMeetingCode(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleJoinVideoCall();
                }
              }}
            />

            <div className="meetingActionsRow">
              <Button
                variant="contained"
                startIcon={<VideoCallIcon />}
                onClick={handleJoinVideoCall}
              >
                Join Meeting
              </Button>

              <Button
                variant="outlined"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleCreateMeeting}
              >
                New Meeting
              </Button>

              <Button
                variant="outlined"
                startIcon={<ContentPasteIcon />}
                onClick={handlePasteCode}
              >
                Paste
              </Button>

              <Button
                variant="outlined"
                startIcon={<ContentCopyIcon />}
                onClick={copyMeetingCode}
                disabled={!meetingCode}
              >
                Copy
              </Button>

              <Button
                variant="text"
                onClick={generateMeetingCode}
              >
                Generate Code
              </Button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          className="rightPanel"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/logo3.png"
            alt="Video Call"
            style={{
              width: "100%",
              maxWidth: "500px",
            }}
          />
        </div>
      </div>

      {/* Copy Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Meeting code copied!"
      />
    </>
  );
}

export default withAuth(HomeComponent);