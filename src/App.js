import { useEffect, useState } from "react";
import Person from "./components/Person";

const data = [
  {
    index: Date.now(),
    name: "Quang",
    age: 21,
    city: "NYC",
  },
]; //array

const App = () => {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState(0);
  const [personData, setPersonData] = useState(data);

  const deleteThisItem = (index) => {
    setPersonData(personData.filter((person) => person.index != index));
  };

  return (
    <div className="App">
      {/* <div>Count: {age} </div>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Increase Age
      </button> */}

      <Person name={"Quang"} age={20} city={"Houston"} />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        // value={city}
        // onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="number"
        // value={age}
        // onChange={(e) => setAge(e.target.value)}
      />

      <button
        onClick={() => {
          // setPersonData(
          //   personData.concat([
          //     {
          //       name,
          //       city,
          //       age,
          //     },
          //   ])
          // );

          setPersonData([
            ...personData,
            { name, age, city, index: Date.now() },
          ]);
        }}
      >
        Add new person
      </button>
      {personData.map((person) => {
        return (
          <Person name={person.name} age={person.age} city={person.city} />
        );
      })}
    </div>
  );
};

export default App;
