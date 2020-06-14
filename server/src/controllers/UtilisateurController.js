const controller = {}

var sequelize = require('../model/database');
var Utilisateur = require('../model/utilisateurs');


sequelize.sync()


  controller.delete = async (req, res) => {
    
    const { id } = req.body;
  
    const del = await Utilisateur.destroy({
      where: { id: 1}
    })
    res.json({success:true,deleted:del,message:"User Deleted successful"});
  }


controller.update = async (req , res)=>{
  const { id } = req.params;
  const { name , family_name , password} = req.body;
  const data = await Utilisateur.update({
  name:name,
  family_name:family_name,
  password:password
  },
  {
    where: { id: id}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  }) 
  res.json({success:true, data:data, message:"User updated successful"});
}



controller.get = async (req , res)=>{

  const { id } = req.params;

  const data = await Utilisateur.findAll({
    where: { id: id }

  })

  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  })
  res.json({success:true,data:data});
}



controller.list = async (req , res) => {

  const data = await Utilisateur.findAll()
  .then(function(data){
    return data ;
  })

  .catch(error =>{
    return error;
  })
  res.json({ success : true , data:data});
}


controller.create = async (req,res) =>{

const { name , family_name , password} = req.body;

const data = await Utilisateur.create({

  name:name,
  family_name:family_name,
  password:password
})
.then(function(data){

  return data ;
})
.catch(error=>{
  console.log(error)
  return error;
})

res.status(200).json({
  success:true,
  data: data,
  message:"saved successfully"
});
}


controller.login =(req,res)=>{
  Utilisateur.findOne({
    where: {
      name: req.body.name
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })


  }

module.exports = controller;
