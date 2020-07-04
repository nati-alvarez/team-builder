import React, {useState} from 'react';
import './App.css';

import Form from './Form';

function App() {
  const [teamMembers, setTeamMember] = useState(["Jack", "Sally", "Ron"]);
  return (
    <div className="App">
      <div className="team-members">
        <h1>Team Members</h1>
        <Form/>
        {teamMembers.map(person=>{
          return (
            <div className='member'>
              <p>{person}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
