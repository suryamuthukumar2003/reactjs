function Button(props){
    const openAlert=()=>{
        alert(props.message);
    }
    return(
        <div>
            <button onClick={()=>{openAlert()}}>{props.name}</button>
        </div>
    );
}
export default Button;