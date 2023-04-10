import { BNavItem } from "bootstrap-vue";

function Card({ nameProp }) {
  // Child component has to grab the prop from the parent component
  return (
    <div className="card w-96 glass">
      <figure>
        <img
          className="h-36"
          src={`https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/${nameProp}.png`}
          alt="pokemon"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{nameProp}</h2>
      </div>
    </div>
  );
}

export default Card;
