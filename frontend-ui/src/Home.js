
import { Component } from 'react';
import './App.css';

function Home() {
  return (
    <div className="Home">
     <h3>Enter SMS text here:</h3>
     <JsonForm/>
    </div>
  );
}

export default Home;

class JsonForm extends Component{
  constructor(props){
    super(props);
    this.state={sms:"Hello.",classify:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    //console.log(event.target.name+' '+event.target.value);
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit(event){
    //alert(this.state.sms);
    event.preventDefault();
    //this.setState({classify:1});
    const url="http://127.0.0.1:8000/predictJson";
  
    const bodyData = JSON.stringify({
      "sms":this.state.sms
    });
    const reqOpt ={method:"POST",headers:{"Content-type": "application/json"},body:bodyData};
    fetch(url,reqOpt)
    .then((resp) => resp.json())
    .then((respJ) => this.setState({classify:respJ.classify}) )

  }


  render(){
    return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.sms} name="sms" onChange={this.handleChange}></textarea>
            <br></br>
            <input type="submit" value="Submit"></input>
          </form>

          <div><h2>The sms entered is a {this.state.classify} message</h2></div>
        </div>
        
        
    );
  }
}