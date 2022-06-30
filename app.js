function WelcomeFunc({name, children}){
   return <div>
       <h1>Bonjour {name}</h1>
       <p>
           {children}
       </p>
   </div>
    
}
class Welcome extends React.Component{
    render() {
        return <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>
    }
}

class Clock extends React.Component {

    constructor (props){
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }

    componentDidMount (){
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmount (){
        window.clearInterval(this.timer)
    }
    tick(){
        this.setState({date: new Date()})
    }
    render (){
        const date = new Date()
        return <div>
            Il est {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {
    constructor (props){
        super(props)
        this.state = {n: props.start}
        this.timer = null
    }
    componentDidMount (){
        this.play()

    }
    componentwillUnmount (){
        window.clearInterval(this.state.timer)
    }

    increment (){
        this.setState((state, props) => ({n: state.n + props.step}))
    }

    pause (){
        window.clearInterval(this.state.timer)
        this.setState({
            timer:null
        })

    }
    play (){
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    render(){
        return <div>
            Valeur : {this.state.n}
            <button onClick={this.pause.bind(this)}>Pause</button>
            <button onClick={this.play.bind(this)}>Lecture</button>
            </div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}



function Home() {
    return <div>
        <Welcome name="Jean"/>
        <Welcome name="Dorothee"/>
        
        <Incrementer />
    </div>
}

ReactDOM.render(<Home/>,document.querySelector('#app'))