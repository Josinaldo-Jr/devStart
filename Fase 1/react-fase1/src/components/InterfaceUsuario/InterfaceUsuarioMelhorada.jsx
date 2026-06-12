function Botao({ className = "", children, ...rest}) {

    const classes = `ui-button ${className}`.trim();
    return (
        <button className={classes} {...rest}>{children}</button>
    ); 
 
}
 
function Container({ className = "", children, ...rest }) {

    const classes = `ui-container ${className}`.trim();
    return (
        <div className={classes} {...rest}>{children}</div>
    );
 
}
 
function Input({ className = "", type = "text", ...rest }) {

    const classes = `ui-textfield ${className}`.trim();
    return (
        <input type={type} className={classes} {...rest} />
    );
 
}
 
function Link({ className="", children, ...rest }) {

    const classes = `ui-link ${className}`.trim();
 return (
     <a className={classes} {...rest}>{children}</a>
 );
}
 
export { Botao, Container, Input, Link };