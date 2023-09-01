import "./styles.css";
import { useState } from "react";

export default function App() {
  let names = [
    { id: 1, Cname: "LAVG" },
    { id: 2, Cname: "SWAS" },
    { id: 3, Cname: "MOAL" }
  ];
  const [delName, setDelName] = useState(names);
  const undoName = [];

  const handleDelete = (id) => {
    let deleted = delName.filter((del) => {
      return id !== del.id;
    });
    setDelName(deleted);
    console.log(deleted);
  };
  const handleUndo = () => {
    console.log({ delName });
    for (let i = 0; i < names.length; i++) {
      if (delName.indexOf(names[i]) < 0) {
        undoName.push(names[i]);
        setDelName(undoName);
      }
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {delName.map((name) => (
        <div key={name.id}>
          {name.Cname}
          <button onClick={() => handleDelete(name.id)}>Delete</button>
        </div>
      ))}
      <br />
      <br />
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}
