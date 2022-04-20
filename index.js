const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [
    {
        id:1,
        name: "Bulbasaur",
        description:"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        type: "Grass",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
        id:2,
        name: "Charmander",
        description:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        type: "Fire",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    },
    {
        id:3,
        name: "Squirtle ",
        description:"When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        type: "Water",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    },
];

app.get("/", function (req, res) {
  res.render("index", {pokedex});
});

app.get("/home", (req, res)=> {
    res.send("Olá mundo do Express!");
  });

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
