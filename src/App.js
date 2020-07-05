import React, {useState} from 'react';
import './App.css';

import Form from './Form';

function App() {
  const [teamMembers, setTeamMember] = useState([
    {name: "Jack", email: "jack@gmail.com", role: "Backend"},
    {name: "Mary", email: "mary@hotmail.com", role: "Frontend"},
    {name: "Sam", email: "sam@gmail.com", role: "UI"}
  ]);
  return (
    <div className="App">
      <div className="team-members">
        <h1>Team Members</h1>
        <Form/>
        {teamMembers.map(person=>{
          return (
            <div className='member'>
              <p>{person.name}</p>
              <p>{person.email}</p>
              <p>{person.role}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
