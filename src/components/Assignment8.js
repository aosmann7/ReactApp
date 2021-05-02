import React, {useState} from "react";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// set the url
// const publiURl = '';
// const getLocationUrlData = () =>{
//     return {
//         url:publiURl,
//         has: `${window.location.hash}`
//     };
// };

// const servicePath = '/echo';
function GetRandomStrings(props){
    const [enteredStrings, setInputValue] = useState("");
    const [ret, setRet] = useState("");
    const [strings, setStrings] = useState([]);

    function handleChange(e){
        setInputValue(e.target.value);
        console.log(enteredStrings.toString());
    }

    function clearString() {
        setInputValue("");
        setStrings([]);
        setRet("");
    }

    function submitString(e){
        var stringList = enteredStrings.split(" ");

        let randomNumber = Math.floor(Math.random() * stringList.length);

        let randomString = stringList[randomNumber];
        setStrings(stringList);
        setRet(randomString);
        
    }
    return (
        <div>
            <header>
                <h1>Welcome to Random String Generator!</h1>
            </header>
            <div>
                <h2>Awad Osman, David Do, Sri Kundala</h2>
            </div>
            <form>
            <div>
                <h5>Enter your strings separated by spaces like so: "Dog Cat Mouse"</h5>
                <TextField
                    value={enteredStrings}
                    onChange={handleChange}
                    >
                </TextField>
            </div>
            <br></br>

            <Button onClick={submitString} variant={"contained"} color={"primary"} data-something={"submit"} >
                <div>Submit</div></Button>
            <Button onClick={clearString} variant={"contained"} color={"primary"} data-something={"submit"} >
                Clear Strings</Button>
            </form>
            <br></br>
            <Paper>
                Your Random String: {ret}
            </Paper>
            <br></br>
            <br></br>
            
        </div>
    )
}

export default GetRandomStrings