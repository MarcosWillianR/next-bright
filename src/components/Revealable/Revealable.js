'use client'
import React from 'react';

function Revealable({ children }) {
  const [isReavealed, setIsReavealed] = React.useState(false)
  
  if (isReavealed) {
    return children;
  }

  return (
    <div className="reveal">
      <button
        onClick={() =>
          setIsReavealed(true)
        }
      >
        Reveal Content
      </button>
    </div>
  )
}

export default Revealable;
