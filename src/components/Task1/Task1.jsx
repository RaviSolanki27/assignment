import './Task1.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Task1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inptext: "",
            str: "",
            space: "",
            something: "",
            name: "",
            replace: "",
            find: "",
            index: 0,
            concatedstr: "",
            concat: "",
            inpstr: "",
            setstr: "",
            reversed: "",
        };
    }



    render() {


        return (
            <div>
                <Link to="/task2">
                    <button>
                        Go to Task 3
                    </button>
                </Link>
                <h2>Task : 1</h2>
                <pre>
                    {`
                    1. " hello there , how are you "
                    - remove white space ,
                    - replace "there" with your name ,
                    - find "are" index ,
                    - concat "abc" at the end of the string
                    `}
                </pre>
                <hr />
                <h3>1. Remove Space</h3>
                <div className='string'>
                    <div className='left-div'>
                        <input type="text" onChange={(event) => this.setState({ inptext: event.target.value })} />
                        <button onClick={() => this.setState({ str: this.state.inptext })}>
                            Set String
                        </button>
                        <h1>{this.state.str}</h1>
                    </div>
                    <div className='right-div'>

                        {/* This works too */}
                        {/* <button onClick={() => this.setState({ space: this.state.str.replace(/ /g, '') })}>  */}

                        <button onClick={() => this.setState({ space: this.state.str.split(" ").join("") })}>
                            Remove  Space
                        </button>
                        <h1> {this.state.space} </h1>
                    </div>
                </div>
                <hr />
                <h3>2. Replace with name</h3>
                <div className='string'>
                    <div className='left-div'>
                        <h5>Replace <input type="text" placeholder='For ex: "Something"' onChange={(event) => this.setState({ something: event.target.value })} /> &nbsp; &nbsp; with <input type="text" placeholder='Your name' onChange={(event) => this.setState({ name: event.target.value })} /></h5>
                    </div>
                    <div className='right-div'>
                        <button onClick={() => this.setState({
                            // This method will work too.
                            // replace: this.state.str.replace(this.state.something, this.state.name)
                            replace: this.state.str.trim().split(this.state.something).join(this.state.name)
                        })}>Replace</button>
                        <h1>
                            {this.state.replace}
                        </h1>
                    </div>
                </div>

                <hr />
                <h3>3. Find index</h3>
                <div className='string'>
                    <div className='left-div'>
                        <h5>Find the index of <input type="text" placeholder='For ex: "are"' onChange={(event) => this.setState({ find: event.target.value })} /></h5>
                    </div>
                    <div className='right-div'>
                        <button onClick={() => this.setState({ index: this.state.str.search(this.state.find) + 1 })}>
                            Find</button>
                        <h1>
                            {this.state.index ? this.state.index : ""}
                        </h1>
                    </div>
                </div>


                <hr />
                <h3>4. Concat string</h3>
                <div className='string'>
                    <div className='left-div'>
                        <h5>Concate the string  <input type="text" placeholder='For ex: "are"' onChange={(event) => this.setState({ concat: event.target.value })} /></h5>
                    </div>
                    <div className='right-div'>
                        <button onClick={() => this.setState({
                            concatedstr: this.state.str + this.state.concat
                        })}>Concat</button>
                        <h1>
                            {this.state.concatedstr}
                        </h1>
                    </div>
                </div>


                <hr />
                <hr />

                <h2>Task : 2</h2>
                <pre>
                    {`
                   2. String reverse programs (do not use reverse function) 
                   - ex: "Hello world" : “dlr”,
                   - ex: "123sda45678sdd9"
                   
                    `}
                </pre>


                <hr />
                <h3>1. Reverse String</h3>
                <div className='string'>
                    <div className='left-div'>
                        <input type="text" onChange={(event) => this.setState({ inpstr: event.target.value })} />
                        <button onClick={() => this.setState({ setstr: this.state.inpstr })}>
                            Set String
                        </button>
                        <h1>{this.state.setstr}</h1>
                    </div>
                    <div className='right-div'>

                        {/* <button onClick={() => this.setState({ reversed: this.state.setstr.split(" ").join("") })}> */}
                        <button onClick={ () => {

                            var r = "";
                            for (var i = this.state.setstr.length - 1; i >= 0; i--) {
                                // var a = /{0,1}[\d]/g
                                // if(this.state.setstr.charAt(i) === a){
                                //     console.log("EMptu");
                                //     continue;
                                // }
                                r += this.state.setstr.charAt(i);
                            }
                            this.setState({reversed: r})
                            // console.log(r,this.state.reversed);
                        }}>
                            Reverse String
                        </button>
                        <h1> {this.state.reversed} </h1>
                    </div>
                </div>

            </div>
        )
    }
}
