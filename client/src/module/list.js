import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import {Link} from 'react-router-dom';



class listComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state ={
      listUtilisateur:[]
    }
  }


  componentDidMount(){


    const url = "http://192.168.1.15:3000/utilisateur/list"
    axios.get(url)
    .then(res=>{
       if(res.data.success){
        const data = res.data.data
        this.setState({listUtilisateur:data})
       }  
     else {
       alert("Error web service ")
     }
    })
    .catch(error=>{
      alert("Error server"+error)
    })
  }
  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
          <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Family Name</th>
            <th scope="col">Password</th>
            <th scope="col">last Login</th>
            <th scope="col">created at </th>
            <th colspan="col">updated at </th>
            <th colspan="col">actions </th>
          </tr>
         </thead>
        <tbody>
          
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }
  loadFillData(){
    return this.state.listUtilisateur.map((data)=>{

      return(
       
      <tr>
        <th>{data.id}</th>
        <th>{data.name}</th>
        <td>{data.family_name}</td>
        <td>{data.password}</td>
        <td>{data.last_login_date}</td>
        <th>{data.createdAt}</th>
        <th>{data.updatedAt}</th>
        <td>
         
          <Link class="btn btn-outline-info" to={"/edit/"+data.id}> Edit</Link>
        </td>
        <td>
        <button class="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}> Delete </button></td>  
      </tr>
      )
    })
  }
  onDelete(userId){
  
   const baseUrl = "http://localhost:3000/utilisateur/delete" 
 
   axios.post(baseUrl,{
     id:userId
   })
   .then(response =>{
    if (response.data.success) {
     
     
      
    }
  })
  .catch ( error => {
    alert("Error 325 ")
  })
}
  }


export default listComponent;