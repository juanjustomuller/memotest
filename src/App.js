import './App.css';
import { useEffect, useState } from 'react';
import Board from './components/Board/Board'

const emojiList = [...'💣🐘🧠🥽🎩⚽🎸🍟'];

const App = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect( () => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({ index: i, emoji, flipped: false}) ));
  }, []);

  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleMemoClick = memoBlock => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if(selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if(selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  }

  return (
    <Board memoBlocks={shuffledMemoBlocks} animating={animating}  handleMemoClick={handleMemoClick} />
  );
}

export default App;



/* la variable suffledMemoBlocks es donde vamos a guardar
las imagenes desordenadas que siempre aparezcan en lugares aleatorios.
inicializamos la variable en un array vacio y vamos a usar
setShuffledMemoBlocks para modicar esta variable mas adelante.
Para poder mezclar las imagnes ya vamos a dejar preparada una funcion shuffleArray, 
que lo que hace es recibir un array y devolver ese mismo arrat pero con sus valores en posiciones aleatorias,
*/
/*Dsp usamos el hook useEffect que tiene como parametro una funcion y un array de dependencias, 
el array de dependencias lo dejamos vacio indicando que tenemos q hacer que se ejecute
una sola vez, la primera vez que el componente se renderiza. Dentro de la funcion creamos
la constante suffledEmojiList donde vamos a guardar el resultado de llamar a nuestra funcion para
mezclar arrays pasandole como argumento un array con la lista de emojis dos veces (dos veces pq necesitamos que las imagenes
esten dos veces para que el usuario pueda encontrar las parejas).
*/
/*Luego seteamos nuestros memoblocks mezclados con setSuffledMemoBlocks y vamos a hacerlo de manera que
cada memoblock tenga toda la informacion que necesitamos.
a la suffledEmojiList que acabamos de crear le hacemos un map y devolvemos un memoblock con un emoji, 
si esta dado vuelta, para empezar esto va a ser false, pq todos los bloques empiezan boca a bajo
y un index i para saber de que memoblock se trata.
*/
/*El segundo parametro de map nos va a dar el index que vamos a utilizar.
ya tenemos casi todo lo que necesita el componente, al final del mismo vamos a poner el return que debe
renderizar App, vamos a devolver un board (q vamos a crear) pasandole la lista mezclada de bloques
*/
/* para trabajar en el click de cada uno de los bloques: empezamos creando dos variables con useState,
la primera es selectMemoBlock, que es donde vamos a guardar cual es el bloque seleccionado cuando el usuario hace click
en alguno de los bloques, lo seteamos en null para empezar y el segundo animating, que es para saber
si aun estamos haciendo al animacion para que el usuario no pueda hcaer clic en el bloque cuando aun se esta animando
el click anterior, es decir acaba de clickear dos bloques como no eran iguales tenemos q esperar un segundo para que vea el error
y se den vuelta los bloques.
Ahora vamos a crear la funcion handleMemoClick que vamos a ejecutar cada vez que se hace clic en un bloque, 
va a recibir un memo block, dentro de la funcion lo primero que hacemos es crear una constante con el bloque que fue clickeado
pero seteando el flip en true, es decir lo damos vuelta y segundo hacemos una copia de la lista de bloques que vamos a usar en un momento, 
en la copia q creamos reemplazamos el bloque seleccionado por el bloque dado vuelta con splice, pasamos el indice que queremos reemplazar,1, solo es un elementp
a reemplazar y el elemento que queremos poner en su lugar con el setShuffledMemoBlocks seteamos el nuevo listado de bloques con el bloque dado vuelta.
Ahora tenemos 3 posibilidades a la hora de que el usuario seleccione un bloque:
o bien no habia un bloque seleccionado cuyo caso simplemente seteamos el bloque seleccionado con setSelectedMemoBlock igual al bloque clickeado,
o bien la seleccion es correcta es decir las imagenes de los emojis del bloque seleccionado y el bloque creado son iguales, en este caso dejamos todo como esta y seteamos
el selectedMemoBlock a null para que el usuario pueda seguir jugando.
Por ultimo esta el caso en que habia un bloque seleccionado pero no hay coincidencia con las imagines, el usuario no acerto, en este caso queremos hacer la
animacion de los bloques volviendo a su lugar pero despues de que el usuario haya visto el error que cometio, 
para eso empezamos seteando animating a true, que es lo que vamos a usar para bloquear los botones y seguimos usando un settimeout para la animacion, 
le vamoa a dar un tiempo de un segundo que es el delay hasta que los bloques se dan vuelta. cuando pase el segundo queremos ahora hacer lo mismo que hicimos mas arriba con
splice, reemplazando los dos bloques seleccionados por los mismos bloques pero dado vuelta, osea, con flip en false.
Seteamos la lista con los bloques cambiados y dejamos el selectedMemoBlock en null y animating en false pq ya termino la animacion.
Ahora solo neceistamos pasarle al Board lo que acabamos de crear, pasamos la prop animating y handleMemoClick de esta manera, con eso terminamos nuestro App.js
*/
