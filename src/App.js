import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currDeviceTime, setCurrDeviceTime] = useState()
  const [currDeviceDate, setCurrDeviceDate] = useState('')
  const [visitTime, setVisitTime] = useState('')
  const [visitDate, setVisitDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    // Get current date and time
    const now = new Date();

    // Format date to YYYY-MM-DD
    const date = now.toISOString().split('T')[0];

    // Format time to HH:MM (24-hour format)
    const time = now.toTimeString().slice(0, 5);

    setCurrDeviceDate(date);
    setCurrDeviceTime(time);
    setVisitDate(date)
    setVisitTime(time)
  }, []);

  const timeDiff = () => {
  const deviceNow = new Date(`${currDeviceDate}T${currDeviceTime}`); 
  const targetTime = new Date(`${visitDate}T${visitTime}`); 
  const currTime = new Date(); 

  const diffrence = currTime - deviceNow;
  const deviceTargetTime = new Date(targetTime.getTime() - diffrence);

  const readable = deviceTargetTime.toLocaleString();

  setTime(`Time ${readable}`);
};


  return (
    <div className="App">
      <div className="container">
        <h1>Faulty Clock</h1>
        <div>
          <h2>Enter Device Current Time</h2>
          <input type="time" value={currDeviceTime} onChange={(e) => setCurrDeviceTime(e.target.value)} />
          <input type="date" value={currDeviceDate} onChange={(e) => setCurrDeviceDate(e.target.value)} />
        </div>

        <div>
          <h2>Enter time you want to visit</h2>
          <input type="time" value={visitTime} onChange={(e) => setVisitTime(e.target.value)} />
          <input type="date" value={visitDate} onChange={(e) => setVisitDate(e.target.value)} />
        </div>

        <button onClick={timeDiff}>Check Time</button>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default App;
