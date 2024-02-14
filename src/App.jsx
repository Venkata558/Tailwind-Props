import "./App.css";
import Cards from "./Cards";

function App() {
  return (
    <>
      <h1 className="text-green-700 bg-black font-serif p-4 mb-5 rounded-lg">
        Tailwind
      </h1>
      <Cards username="Venkata Sai" src="https://images.pexels.com/photos/12812698/pexels-photo-12812698.jpeg?auto=compress&cs=tinysrgb&w=600 " para="I'm a web developer." buttontxt="click me!!"/>
      <Cards username="Venkata558" src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600" para="This is my GitHub."/>
    </>
  );
}

export default App;
