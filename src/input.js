import guy from "./guy";
import React from "react";

const Input = () => {
  const [people, setPeople] = React.useState(guy);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const removeAllItems = () => {
    setPeople([]);
  };
  const addItem = () => {
    const inputAge = document.querySelector(".inputAge").value;
    const inputJob = document.querySelector(".inputJob").value;

    if (inputAge !== "" && inputJob !== "") {
      people.push({
        job: inputJob,
        age: inputAge,
        id: Math.round(Math.random() * 100),
      });
    } else {
      return;
    }
    const newPeople = people.filter((person) => person);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person) => {
        const { job, age, id } = person;
        return (
          <div key={id}>
            <div className="rounded-xl overflow-hidden flex relative p-4 text-black bg-white border border-gray-300 my-2 mx-5">
              <div className="flex flex-col">
                <div className="text-[#b7b5fd] w-52">Praca</div>
                <div className="text-[#3e20b2] text-2xl w-52">{job}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#b7b5fd] w-52">Wiek</div>
                <div className="text-[#3e20b2] text-2xl w-52">{age}</div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => removeItem(id)}
                  className="bg-red-500 rounded-full p-4 text-white hover:bg-red-400"
                ></button>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <button
          onClick={removeAllItems}
          className="bg-[#361d95] rounded-xl p-2 text-white mx-2 px-8 hover:bg-[#4c28d9]"
        >
          remove all
        </button>
        <button
          onClick={addItem}
          className="bg-[#361d95] rounded-xl p-2 text-white mx-2 px-8 hover:bg-[#4c28d9]"
        >
          add my input
        </button>
        <div>
          <input className="inputAge border-2 border-gray-300 focus:outline-none focus:border-[#3e20b2] rounded" />
          <input className="inputJob border-2 border-gray-300 focus:outline-none focus:border-[#3e20b2] rounded" />
        </div>
      </div>
    </div>
  );
};
export default Input;
