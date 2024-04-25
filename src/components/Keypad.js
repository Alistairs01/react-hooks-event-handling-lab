// Code Keypad Component Here



function Keypad (){
    //handleSubmit 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(` ${event.target.name} : ${ event.target.value}.`)

    }
    //handleChange
    function handleChange(event) {
        console.log('Entering password...')

    }
    return (
        <>
        <form onSubmit={handleSubmit} >
            <input type= "password"
                   name= "password"
                   onChange={handleChange}
                   placeholder="Enter password"
                   />
            <button>Login</button>
        </form>
        </>
    )
}

export default Keypad;