import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
const baseUrl= "http://localhost:3000";
class EditComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userName: "",
      userFamilyName:"",
      userPassword:"",
    }
  }

  componentDidMount(){

    let userId = this.props.match.params.id;
    const url = baseUrl+"/utilisateur/get/"+userId
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        this.setState({
          userName: data.name,
          userFamilyName:data.family_name,
          userPassword:data.password,
          
        
          
        })
       
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  }
  
 render(){
   
  
   return (
    <div>
     <div class="form-row justify-content-center">
          <div class="form-group col-md-6">
            <label for="inputPassword4">Name </label>
            <input type="text" class="form-control"  placeholder="Name" value={this.state.userName} onChange={(value)=> this.setState({userName:value.target.value})}/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Family Name</label>
            <input type="text" class="form-control"  placeholder="Family Name" value={this.state.userFamilyName} onChange={(value)=> this.setState({userFamilyName:value.target.value})}/>
          </div>
        </div>
      
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="text" class="form-control"  placeholder="Password"  value={this.state.userPassword} onChange={(value)=> this.setState({userPassword:value.target.value})}/>
          </div>
    
    <button type="submit" class="btn btn-primary" onClick={()=>this.sendUpdate()}>Update User</button>
  </div>
       
   );
 }
 sendUpdate(){
  let userId = this.props.match.params.id;

  const baseUrl = "http://localhost:3000/utilisateur/update/"+userId

  const datapost = {
    name : this.state.userName,
    family_name : this.state.userFamilyName,
    pasword : this.state.userPassword,
 
  }

  axios.post(baseUrl,datapost)
  .then(response=>{
    if (response.data.success===true) {
      alert(response.data.message)
    }
    else {
      alert("Error")
    }
  }).catch(error=>{
    alert("Error 34 "+error)
  })

 }

 }



export default EditComponent;