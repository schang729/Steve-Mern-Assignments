const Word = (props) => {
    return ( 
        <div style={{backgroundColor: props.color}}>
        <h1 style={{color: props.wordColor}}>The Word is: {props.word}</h1>
        </div>




     );
}
 
export default Word;