import { useState } from "react";

type Link = {
  id: number,
  title: string,
  description: string
}

function Component() {
  const [links, setLinks] = useState<Link[]>([
    {
      id: 10,
      description: "Hello",
      title: "Hey son"
    },
    {
      id: 13,
      description: "Hello",
      title: "Hey son"
    }
  ])
  const [name, setName] = useState('Michael Scoffield')
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>State</h2>
      <h3>{name}</h3>
      <button className="btn" onClick={() => {
        setLinks([...links, { description: "123", id: 7, title: "title" }])

        setName(name == "Rethabile Siase" ? 'Michael Scoffield' : "Rethabile Siase")
      }}>Change name</button>
      <ul>
        {links.map((l) => {
          return <li>{l.title} + {l.description}</li>
        })}
      </ul>
    </div>
  );
}
export default Component;
  