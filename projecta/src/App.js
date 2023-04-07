import "./App.css";
import guy from "./guy.js";

const guyInfo = guy.map((guy) => {
  return <OneItem guy={guy} key={guy.id} />;
});

function App() {
  return (
    <div>
      {guyInfo}
      <Input />
    </div>
  );
}
function inputAlert(e) {
  console.log(e.target.value);
}
function addNewGuy(e) {
  e.preventDefault();
  console.log("dodaje");
}

function Input() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <form onSubmit={addNewGuy}>
          <p className="text-[#b7b5fd]">Twoje aktualne stanowisko</p>
          <input
            onChange={inputAlert}
            className="border-2 border-gray-300 focus:outline-none focus:border-[#3e20b2] rounded"
            placeholder=""
          />
          <button
            type="submit"
            className="bg-[#361d95] rounded-xl p-2 text-white mx-2 px-8 hover:bg-[#4c28d9]"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
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
