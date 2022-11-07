import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./components/data";
console.log(data);

function App() {
  const cards = data.map((item) => {
    return <Card item={item} key={item.id} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
