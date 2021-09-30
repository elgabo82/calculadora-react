import './DisplayComponent.css';


function DisplayComponent ({texto, resultado}) {    
    return (
        <div className="display">
            <div className="resultado">
                <h1>{resultado}</h1>
            </div>            
            <div className="texto">
                <h3>{texto}</h3>
            </div>
        </div>
    );
}


export { DisplayComponent };