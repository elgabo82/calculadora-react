import "./BotonComponent.css";


function BotonComponent ( { simbolo, color, hClic }) {
    return (
        <div
            onClick={() => hClic(simbolo)} 
            className="boton" 
            style={{ backgroundColor: color }}
        >
            {simbolo}
        </div>
    )
}

export { BotonComponent };

