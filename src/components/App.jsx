import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        src={contacts[0].imgURL}
        phone={contacts[0].phone}
        mail={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        src={contacts[1].imgURL}
        phone={contacts[1].phone}
        mail={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        src={contacts[2].imgURL}
        phone={contacts[2].phone}
        mail={contacts[2].email}
      />
    </div>
  );
}

export default App;
