import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/Form';
import List from './components/List';

function App() 
{
  const [members, setMembers] = useState([
    {
      name: "test",
      email: "test@test.com",
      role: "tester"
    }
  ]);

  const addNewMember = person => {
    const newMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className = "App">
      <h1>Members</h1>
      <Form addNewMember={addNewMember} />
      <List members = {members} />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));