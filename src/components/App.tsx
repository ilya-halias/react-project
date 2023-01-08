import {Input, Button} from "./common";
export const App = () =>  {
    return (
        <div className="App">
            <Input value= "Аноним"/>
            <Button onClick={ () => alert("Когда нибудь добавлю")}>Добавить пользователя </Button>
        </div>
    )
}



