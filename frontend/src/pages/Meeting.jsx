import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import server from '../environment'
import styles from '../styles/videoComponent.module.css'

export default function Meeting() {
  const { meetingCode } = useParams()
  const navigate = useNavigate()
  const [status, setStatus] = useState('Connecting...')
  const [participants, setParticipants] = useState([])
  const [chatMessages, setChatMessages] = useState([])
  const [message, setMessage] = useState('')

  const socket = useMemo(
    () => io(server, { transports: ['websocket'], autoConnect: false }),
    []
  )

  useEffect(() => {
    if (!meetingCode) {
      setStatus('Invalid meeting code')
      return
    }

    const handleConnect = () => {
      setStatus('Connected')
      socket.emit('join-call', meetingCode)
    }

    const handleDisconnect = () => {
      setStatus('Disconnected')
    }

    const handleConnectError = (error) => {
      setStatus('Connection error')
      console.error('Socket connection error:', error)
    }

    const handleUserJoined = (_, roomParticipants) => {
      setParticipants(roomParticipants)
    }

    const handleUserLeft = (socketId) => {
      setParticipants((current) => current.filter((id) => id !== socketId))
    }

    const handleChatMessage = (data, senderId) => {
      setChatMessages((current) => [...current, { senderId, data }])
    }

    socket.on('connect', handleConnect)
    socket.on('disconnect', handleDisconnect)
    socket.on('connect_error', handleConnectError)
    socket.on('user-joined', handleUserJoined)
    socket.on('user-left', handleUserLeft)
    socket.on('chat-message', handleChatMessage)

    socket.connect()

    return () => {
      socket.off('connect', handleConnect)
      socket.off('disconnect', handleDisconnect)
      socket.off('connect_error', handleConnectError)
      socket.off('user-joined', handleUserJoined)
      socket.off('user-left', handleUserLeft)
      socket.off('chat-message', handleChatMessage)
      socket.disconnect()
    }
  }, [meetingCode, socket])

  const handleSendMessage = () => {
    if (!message.trim()) return
    socket.emit('chat-message', message.trim(), 'Me')
    setChatMessages((current) => [...current, { senderId: 'Me', data: message.trim() }])
    setMessage('')
  }

  return (
    <Box className={styles.meetingShell}>
      <Box className={styles.topBar}>
        <Box>
          <Typography variant="overline" className={styles.eyebrow}>
            Video Call
          </Typography>
          <Typography variant="h4" className={styles.heading}>
            Meeting Room
          </Typography>
        </Box>

        <Box className={styles.codePill}>Code: {meetingCode}</Box>
      </Box>

      <Box className={styles.statusBar}>
        <span
          className={
            status === 'Connected' ? styles.statusDotConnected : styles.statusDot
          }
        />
        <Typography variant="body2" className={styles.statusText}>
          Status: {status}
        </Typography>
      </Box>

      <Box className={styles.mainGrid}>
        <Box className={styles.panel}>
          <Box className={styles.panelHeader}>
            <Typography variant="h6">Participants</Typography>
            <Box className={styles.badge}>{participants.length}</Box>
          </Box>

          <Box className={styles.participantList}>
            {participants.length > 0 ? (
              participants.map((participant) => (
                <Box key={participant} className={styles.participantCard}>
                  <span className={styles.avatar}>
                    {participant === socket.id ? 'Y' : participant.charAt(0).toUpperCase()}
                  </span>
                  <Typography variant="body1">
                    {participant === socket.id ? 'You' : participant}
                  </Typography>
                </Box>
              ))
            ) : (
              <Box className={styles.emptyState}>No participants yet</Box>
            )}
          </Box>
        </Box>

        <Box className={`${styles.panel} ${styles.chatPanel}`}>
          <Box className={styles.panelHeader}>
            <Typography variant="h6">Chat</Typography>
          </Box>

          <Box className={styles.messages}>
            {chatMessages.length > 0 ? (
              chatMessages.map((item, index) => (
                <Box
                  key={index}
                  className={
                    item.senderId === 'Me' ? styles.messageBubbleSelf : styles.messageBubble
                  }
                >
                  <Typography variant="caption" className={styles.messageMeta}>
                    {item.senderId}
                  </Typography>
                  <Typography variant="body2">{item.data}</Typography>
                </Box>
              ))
            ) : (
              <Box className={styles.emptyState}>Start the conversation</Box>
            )}
          </Box>

          <Box className={styles.inputRow}>
            <TextField
              fullWidth
              label="Type a message"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage()
                }
              }}
              className={styles.messageInput}
            />
            <Button variant="contained" onClick={handleSendMessage} className={styles.sendButton}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={styles.footerBar}>
        <Button
          variant="outlined"
          onClick={() => navigate('/home')}
          className={styles.leaveButton}
        >
          Leave Meeting
        </Button>
      </Box>
    </Box>
  )
}
