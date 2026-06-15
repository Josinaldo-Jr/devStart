import { useState } from "react";

function Contador() {

    const [segundos, setSegundos] = useState(0);

    return <h2>{segundos} segundos decorridos</h2>;
}

export default Contador;