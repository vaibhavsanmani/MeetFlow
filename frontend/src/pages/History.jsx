import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import withAuth from '../utils/withAuth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { EmptyHistory } from '../components/EmptyState';
import '../App.css';

function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }

    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        const sortedHistory = [...(history || [])].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setMeetings(sortedHistory);
      } catch (error) {
        setMeetings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';

    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleCopyCode = async (meetingCode) => {
    if (!meetingCode) return;

    try {
      await navigator.clipboard.writeText(meetingCode);
    } catch (error) {
      console.error('Clipboard copy failed', error);
    }
  };

  const handleOpenMeeting = (meetingCode) => {
    if (!meetingCode) return;
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="historyPage">
      <div className="navBar">
        <div className="brandWrap">
          <div className="brandBadge">VC</div>
          <h2>Meeting History</h2>
        </div>

        <div className="navActions">
          <button
            type="button"
            className="themeToggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Brightness4Icon fontSize="small" />
            ) : (
              <Brightness7Icon fontSize="small" />
            )}
          </button>

          <button type="button" className="historyLink" onClick={() => navigate('/home')}>
            <HomeIcon fontSize="small" />
            Home
          </button>
        </div>
      </div>

      <main className="historyContent">
        <div className="historyHeader">
          <div>
            <div className="heroBadge historyBadge">Recent meetings</div>
            <h1>Call history</h1>
          </div>

          <div className="historyStats">
            <div className="historyStatCard">
              <span className="historyStatLabel">Total</span>
              <strong>{meetings.length}</strong>
            </div>
            <div className="historyStatCard">
              <span className="historyStatLabel">Latest</span>
              <strong>{meetings.length ? meetings[0].meetingCode : '—'}</strong>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="historyLoading">Loading your meeting history...</div>
        ) : meetings.length === 0 ? (
          <EmptyHistory action={() => navigate('/home')} actionLabel="Create a meeting" />
        ) : (
          <div className="historyGrid">
            {meetings.map((entry, index) => (
              <Card key={`${entry.meetingCode}-${index}`} className="historyCard" variant="outlined">
                <CardContent className="historyCardContent">
                  <div className="historyCardHeader">
                    <div>
                      <Typography className="historyMetaLabel" color="text.secondary" variant="overline">
                        Meeting code
                      </Typography>
                      <Typography className="historyCode">{entry.meetingCode}</Typography>
                    </div>

                    <div className="historyChip">
                      <RestoreIcon fontSize="small" />
                      Recent
                    </div>
                  </div>

                  <div className="historyDetails">
                    <Typography color="text.secondary">
                      Joined on: {formatDate(entry.date)}
                    </Typography>
                  </div>

                  <div className="historyActions">
                    <Button
                      variant="contained"
                      className="primaryAction"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => handleOpenMeeting(entry.meetingCode)}
                    >
                      Open
                    </Button>

                    <Button
                      variant="outlined"
                      className="historyCopyButton"
                      startIcon={<ContentCopyIcon />}
                      onClick={() => handleCopyCode(entry.meetingCode)}
                    >
                      Copy code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default withAuth(History);