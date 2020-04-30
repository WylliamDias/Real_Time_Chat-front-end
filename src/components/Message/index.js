import React, { memo } from 'react';

import './styles.css';

function Message({ data: messages }) {
  console.log(`Message Component:`, messages);
  return (
    <>
      {messages.map((element, index) => {
        if (element.text !== '') {
          return (
            <div key={index} id={element.id}>
              <span className="chatSpan">{element.text}</span>
            </div>
          );
        }
        return <></>;
      })}
    </>
  );
}

export default memo(Message);
