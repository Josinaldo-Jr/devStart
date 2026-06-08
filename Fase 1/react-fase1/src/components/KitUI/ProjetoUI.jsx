export function Botao({ type, desabilitado, children }) {
  return (
    <button type={type} disabled={desabilitado} className="ui-button">
      {children}
    </button>
  );
}

export function Container({ children }) {
  return <div className="ui-container"> {children} </div>;
}

export function Input({ type = "text", placeholder, nome }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={nome}
      className="ui-textfield"
    />
  );
}

export function Link({ href, children }) {
  return (
    <a href={href} className="ui-link">
      {children}
    </a>
  );
}

export default { Botao, Container, Input, Link };