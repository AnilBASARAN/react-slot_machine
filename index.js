class App extends React.Component{

    render(){
        
        return(
            <div>
                <h1>SLOT MACHINES</h1>
                <Machine  bang = {10} />
                <Machine  bang = {5} />
                <Machine  />
                
                
            </div>
        );

    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));