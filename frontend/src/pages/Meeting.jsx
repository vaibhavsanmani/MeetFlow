import { useEffect, useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import server from '../environment'

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
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 3,
        p: 4,
      }}
    >
      <Typography variant="h4" component="h1">
        Meeting Room
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Meeting code: <strong>{meetingCode}</strong>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Status: {status}
      </Typography>

      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <Typography variant="h6">Participants</Typography>
        <List dense>
          {participants.length > 0 ? (
            participants.map((participant) => (
              <ListItem key={participant}>
                {participant === socket.id ? 'You' : participant}
              </ListItem>
            ))
          ) : (
            <ListItem>No participants yet</ListItem>
          )}
        </List>
      </Box>

      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <Typography variant="h6">Chat</Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
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
          />
          <Button variant="contained" onClick={handleSendMessage}>
            Send
          </Button>
        </Box>
        <List dense>
          {chatMessages.map((item, index) => (
            <ListItem key={index}>
              <strong>{item.senderId}:</strong>&nbsp;{item.data}
            </ListItem>
          ))}
        </List>
      </Box>

      <Button variant="outlined" onClick={() => navigate('/home')}>
        Leave Meeting
      </Button>
    </Box>
  )
}
