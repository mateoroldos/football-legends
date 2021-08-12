import playersFactory from "./objects-factories/playersFactory";


const gameData = (() => {
  const francescoli = playersFactory("Enzo", "Francescoli", "24/02/1995", "Uruguay", "francescoli")
  const maradona = playersFactory("Diego Armando", "Maradona", "24/02/1995", "Argentina", "maradona")
  const messi = playersFactory("Lionel", "Messi", "24/02/1995", "Argentina", "messi")
  const ronaldinho = playersFactory("", "Ronaldinho", "24/02/1995", "Brazil", "ronaldinho")
  const gonzalez = playersFactory("Tata", "Gonzalez", "24/02/1995", "Uruguay", "gonzalez")
  const beckenbauer = playersFactory("Franz", "Beckenbauer", "24/02/1995", "Germany", "beckenbauer")
  const cruyff = playersFactory("Johan", "Cruyff", "24/02/1995", "Holland", "cruyff")
  const maldini = playersFactory("Paolo", "Maldini", "24/02/1995", "Italy", "maldini")
  const suarez = playersFactory("Luis", "Suarez", "24/02/1995", "Uruguay", "suarez")
  const pele = playersFactory("", "Pele", "24/02/1995", "Brazil", "pele")
  const platini = playersFactory("Michel", "Platini", "24/02/1995", "France", "platini")
  const puyol = playersFactory("Carles", "Puyol", "24/02/1995", "Spain", "puyol")
  const ronaldo = playersFactory("", "Ronaldo", "24/02/1995", "Brazil", "ronaldo")
  const zidane = playersFactory("Zidanine", "Zidane", "24/02/1995", "France", "zidane")
  const cristiano = playersFactory("Cristiano", "Ronaldo", "24/02/1995", "Protugal", "cristiano")

  const playersArray = [
    francescoli, 
    maradona, 
    messi, 
    ronaldinho, 
    suarez, 
    gonzalez, 
    beckenbauer, 
    cruyff, 
    maldini, 
    pele, 
    platini, 
    puyol, 
    ronaldo, 
    zidane, 
    cristiano
  ]

  return {
    playersArray,
  };
})();

export default gameData
