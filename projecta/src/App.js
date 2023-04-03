import "./App.css";

const guy = [
  {
    job: "pro-gamer",
    age: 32,
    id: 1,
  },
  {
    job: "budowlaniec",
    age: 32,
    id: 2,
  },
  {
    job: "programista",
    age: 1023,
    id: 3,
  },
  {
    job: "informatyk",
    age: 22,
    id: 4,
  },
];

const guyInfo = guy.map((guy) => {
  return <OneItem guy={guy} key={guy.id} />;
});

function App() {
  return <div>{guyInfo}</div>;
}

function OneItem(props) {
  const { job, age } = props.guy;
  return (
    <div className="rounded-xl overflow-hidden flex relative p-4 text-black bg-white border border-gray-300 my-2 mx-5">
      <div className="flex flex-col">
        <div className="text-[#b7b5fd] w-52">Praca</div>
        <div className="text-[#3e20b2] text-2xl w-52">{job}</div>
      </div>
      <div className="flex flex-col">
        <div className="text-[#b7b5fd] w-52">Wiek</div>
        <div className="text-[#3e20b2] text-2xl w-52">{age}</div>
      </div>
    </div>
  );
}

export default App;
