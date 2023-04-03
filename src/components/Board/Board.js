import MemoBlock from '../MemoBlock/MemoBlock';
import './Board.css';

const Board = ({animating, handleMemoClick, memoBlocks}) => {
    return (
        <main className="board">
            {memoBlocks.map( (memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
            })}
        </main>
    );
}

export default Board;


/*creamos el componente con el nombre Board y la prop que recibe es
memoblocks que es el listado de bloques mezclados, al final del file exportamos el componente.
El board va a devolver un main con la clase board y vamos a iterar cada uno de los bloques
con memoblocks.map, esta iteracion va a devolver un array de componentes memoblock,
dentro de cada memoblock vamos a pasar una key (que es algo que necesita react para renderizar elementos integrados),
usamos el index q obtenemos del map y el emoji de esta manera tenemos un identificador unico para cada bloque.
Ademas le pasamos el memoblock con toda la informacion del bloque*/
/*Entre las props de board agreamos animating y handleMemoClick, y asi como estan las agregamos
al memoblock pq en definitiva es el bloque el que va a estar esperando los clicks.*/