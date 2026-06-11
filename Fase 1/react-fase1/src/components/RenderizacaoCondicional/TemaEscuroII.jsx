import "./style.css";
import clsx from "clsx";

function TemaEscuroII({ tema }) {

 const classeFinal = clsx("barra-de-navegacao2", tema);

    return (
        <h3 className={classeFinal}> {tema} </h3>
    );
 
}

export default TemaEscuroII;