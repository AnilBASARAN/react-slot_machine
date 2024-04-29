

class Machine extends React.Component{

    static defaultProps = {
        bang: 1
    }

    render(){
        let items = ["⚽️","🏀","🏈"];
        let first = items[Math.floor(Math.random()*items.length)];
        let second = items[Math.floor(Math.random()*items.length)];
        let third = items[Math.floor(Math.random()*items.length)];
        let result = ((first == second) && (second == third)) ? `WİN` : `LOSE`;
        let classes = result ==`WİN` ? "win": "lose";
        classes += " machine";
        return(
            <div>
                <h1 className = {classes}>YOU {result}{"!".repeat(this.props.bang)}</h1>
                <h1>{first} {second} {third}</h1>
                
            </div>
        );
    }
}



