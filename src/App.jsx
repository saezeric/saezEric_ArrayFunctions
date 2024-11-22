import "./App.css";
import { EncontrarDestino } from "./Components/EncontrarDestino";
import { ListaDestinos } from "./Components/ListaDestinos";
import { ListaDestinosEconomicos } from "./Components/ListaDestinosEconomicos";
import { LoguearDestinos } from "./Components/LoguearDestinos";
import { PrecioTotal } from "./Components/PrecioTotal";
import { VerificarPrecios } from "./Components/VerificarPrecios";

function App() {
  return (
    <>
      <h1>Este es el ejercicio Array Functions de Saez Eric</h1>
      <ListaDestinos />
      <PrecioTotal />
      <EncontrarDestino />
      <VerificarPrecios />
      <LoguearDestinos />
      <ListaDestinosEconomicos />
    </>
  );
}

export default App;
