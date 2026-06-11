import "./style.css";

function TemaEscuro({ tema }) {
  if (tema === "escuro") {
    return <h3 className={tema}>{tema}</h3>;
  } else {
    return <h3 className={tema}>{tema}</h3>;
  }
}

export default TemaEscuro;