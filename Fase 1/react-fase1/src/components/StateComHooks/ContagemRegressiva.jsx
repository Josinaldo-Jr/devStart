import { useState } from "react";

function Contagem() {

    const [contagem, setContagem] = useState(10);

    return <h2>{contagem} vezes restante</h2>;
}

export default Contagem;