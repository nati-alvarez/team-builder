import React, {useState} from 'react';
import './App.css';

import Form from './Form';
import TeamMember from './TeamMember';

function App() {
  const [teamMembers, setTeamMember] = useState([
    {name: "Jack", email: "jack@gmail.com", role: "Backend"},
    {name: "Mary", email: "mary@hotmail.com", role: "Frontend"},
    {name: "Sam", email: "sam@gmail.com", role: "UI"}
  ]);
  const [memberToEdit, setMemberToEdit] = useState();
  
  function addMember(e, person){
    e.preventDefault();
    setTeamMember(teamMembers.concat(person));
  }

  function editMember(e, oldData, newData){
    e.preventDefault();
    setMemberToEdit(null);
    setTeamMember(teamMembers.map(member=>{
      if(JSON.stringify(oldData) === JSON.stringify(member)){
        return newData;
      }else return member;
    }))
  }

  return (
    <div className="App">
      <div className="team-members">
        <h1>Team Builder</h1>
        <Form memberToEdit={memberToEdit} editMember={editMember} addMember={addMember}/>
        {teamMembers.map(person=>{
          return (
            <TeamMember setMemberToEdit={setMemberToEdit} person={person}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
