console.log("hello");
/*
let usuario = {
    nome,
    telefone,
    sexo,
    ofertas
};*/

let user = {
  name: "John",
  age: 30,
};

console.log(user.name);

let produtos = [
  {
    id: "1xd32",
    tipo: "Computador",
    fabricante: "Dell",
    memoria: "8Gb",
    peso: "1.2kg",
    importado: false,
  },
  {
    id: "1s42",
    tipo: "Mouse",
    fabricante: "C3",
    peso: "100g",
    importado: true,
  },
  {
    id: "dz85x",
    tipo: "Teclado",
    fabricante: "Microsoft",
    peso: "250g",
    importado: true,
  },
];

for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i]); //cuidado
}
produtos.forEach((p) => {
  p.fabricante = p.fabricante.toUpperCase();
  console.log(p);
});
produtos.forEach((item) => console.log(item.fabricante));
console.log("------------------");

let fabricantes = produtos.map((p) => {
  return p.fabricante;
});
console.log(fabricantes);
