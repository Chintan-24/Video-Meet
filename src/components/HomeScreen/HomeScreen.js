import React from 'react';
import './HomeScreen.css';

export default function HomeScreen({ createCall, startHairCheck }) {
  const startDemo = () => {
    createCall().then((url) => {
      startHairCheck(url);
    });
  };

  return (
    <div className="home-screen">
      <h1>React video meeting application</h1>
      <p>Create room by clicking the button below.</p>
      <button onClick={startDemo} type="button">Start a call</button>
      <p className="small">Select “Allow” to use your camera and mic for this call if prompted</p>
    </div>
  );
}
