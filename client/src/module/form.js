import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from'axios';

class EditComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userName: "",
      userFamilyName:"",
      userPassword:"",
      
      
    }
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
       
        
        <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Save</button>
      </div>
    );
  }
  sendSave(){


 
      const baseUrl= "http://localhost:3000/utilisateur/create"
    

      const datapost = {
        name : this.state.userName,
        family_name : this.state.userFamilyName,
        password : this.state.userPassword,
        
      
      }
 
      axios.post(baseUrl,datapost)
      .then(response=>{
        if (response.data.success===true) {
          alert(response.data.message)
        }
        else {
          alert(response.data.message)
        }
      }).catch(error=>{
        alert("Error 34 "+error)
      })
 
    }
 
  }


export default EditComponent;