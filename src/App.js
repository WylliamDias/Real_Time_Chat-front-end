import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'

import './styles.css'

import Messages from './components/Message'

const socket = io('http://localhost:8000')

function App() {
  const [message, setMessage] = useState({
    text: '',
    id: ''
  })
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('newMsg', data => {
      setMessages(prevValue => [...prevValue, {
        text: data.text,
        id: data.id
      }])
    })
  }, [])

  useEffect(() => {
    if (message.text !== '') {
      setMessages(prevValue => [...prevValue, message])

      socket.emit('sendMsg', {
        text: message.text,
        id: 'other-message'
      })
    }
  }, [message])

  function handleSubmit() {
    setMessage({
      text: document.querySelector('input').value,
      id: 'my-message'
    })
    document.querySelector('input').value = ''
  }

  return (
    <>
      <header>
        <div>
          <h1>Chat</h1>
        </div>
      </header>

      <form onSubmit={e => {
        e.preventDefault()
        handleSubmit()
      }}>
        <input
          type="text"
          name="valor"
          autoComplete="off"
          placeholder="Digite sua mensagem ;)" />
      </form>

      <div id="chat-box">
        <Messages data={messages} />
      </div>
    </>
  );
}

export default App;
