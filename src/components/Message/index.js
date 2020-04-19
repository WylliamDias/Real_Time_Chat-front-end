import React, { memo } from 'react'

function Messages({ data: messages }) {
  console.log(`Messages Component:`, messages)
  return (
    <>
      {messages.map((element, index) => {
        if (element.text !== '') {
          return (
            <div key={index} id={element.id}>
              <span>{element.text}</span>
            </div>
          )
        }
        return <></>
      })}
    </>
  )
}

export default memo(Messages)