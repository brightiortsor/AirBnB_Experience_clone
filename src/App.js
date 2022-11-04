import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./components/data";
console.log(data);

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
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

// const names = ["alice", "bob", "charlie", "daniel"];
// const newName = names.map(function (item) {
//   return item[0].toUpperCase() + item.slice(1);
// });
// console.log(newName);

// const pokemon = ["Bulbasaur", "Charmander", "squirtle"];

// const newPokemon = pokemon.map((pokemon) => {
//   return `<p>${pokemon}</p>`;
// });

// console.log(newPokemon);
