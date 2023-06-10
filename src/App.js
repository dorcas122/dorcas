import { Component } from "react"
import UserInfo from "./Component/User.input/UserInfo"

class App extends Component{
 state = {
  person:[
    {Firstname:"Dorcas",Lastname:"adejumke",add:"adebayodorcas619@gmail.com",phone: "09067187397"},
    {firstname:"Dorcas",Lastname:"adejumke",add:"adebayodorcas619@gmail.com",phone: "09067187397"},
    {firstname:"Dorcas",Lastname:"adejumke",add:"adebayodorcas619@gmail.com",phone: "09067187397"},
    {firstname:"Dorcas",Lastname:"adejumke",add:"adebayodorcas619@gmail.com",phone: "09067187397"},
  ],
 }
}
  
render(){
  return(
    <div className="App">
<person firstname= {this.state.person[0].name} Lastname={this.state.person[0].name} add={this.state.person[0].name} phone={this.state.person[0].name} />
<person lastname= {this.state.person[1].name} Lastname={this.state.person[1].name} add={this.state.person[1].name} phone={this.state.person[1].name} />
<person add= {this.state.person[2].name} Lastname={this.state.person[2].name} add={this.state.person[2].name} phone={this.state.person[2].name} />
<person phone= {this.state.person[3].name} Lastname={this.state.person[3].name} add={this.state.person[3].name} phone={this.state.person[3].name} />

    </div>
);
}


  
  

  


export default App
