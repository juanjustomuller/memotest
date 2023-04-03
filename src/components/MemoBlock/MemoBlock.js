import './MemoBlock.css';

const MemoBlock = ({animating, handleMemoClick, memoBlock}) => (
    <div className="memo-block" onClick={() => (!memoBlock.flipped && !animating) && handleMemoClick(memoBlock)}>
        <div className={`memo-block-inner ${memoBlock.flipped && 'memo-block-flipped'}`}>
            <div className="memo-block-front">
            </div>
            <div className="memo-block-back">
                {memoBlock.emoji}
            </div>
        </div>
    </div>
)

export default MemoBlock;



/*Creamos el componente en si con el nombre memoBlock y lo exportamos al final del file.
La estructura del bloque es un div contenedor con la clase memo-block y dentro un frente del bloque con la
clase memo block front y una parte de atras con la clase memo block back , la parte de atras tiene la 
imagen por eso le pasamos el memoblock.emoji para que tenga ya la imagen.
Ahora necesitamos la logica para que se muestre o no la imagen dependiendo de la interaccion
del usuario con el bloque, para eso agregamos la propiedad flip a cada uno de los bloques.
Al segundo dic le colocamos la clase memo block inner y le vamos a agregar otra clase
dependiendo si esta dado vuelta o no, dentro de una string con `` ponemos memoblock.flip, solo si esto es true entonces agregamos la clase memo-block-flip y si es false
la clase nos agrega. esto lo agregamos con el doble ampersand.
*/
/*Ahora aca agregamos las dos props y al div que esta por fuera de todo le ponemos un listener
onclick al que le pasamos una funcion y decimos, si el bloque no esta flipped, es decir si todavia esta en juefo y no fue resuelto o
ese bloque ya seleccionado y no estamos en medio de una animacion entonces ejecutamos la prop hanldeMemoClick.
*/

