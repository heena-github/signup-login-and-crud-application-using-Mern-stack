const model=require('../Model/employees')
const Employee=model.Employee

exports.createEmployee = async (req,res)=>{
const newEmployee=new Employee(req.body)
newEmployee.save()
.then((doc)=>{
console.log(doc)
res.status(201).json(doc)
})
.catch((err)=>{
console.log(err)
res.status(400).json(err.message)
})
}

exports.allEmployees=async (req,res)=>{
    const employees=await Employee.find()
    .then((doc)=>{
      res.status(200).json(doc)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
}

exports.singleEmployee=async(req,res)=>{
    const id=req.params.id
    const employee=await Employee.findOne({_id:id})
    .then((doc)=>{
        res.status(200).json(doc)
      })
      .catch((err)=>{
          res.status(400).json(err)
      })

}

exports.updateEmployee=async(req,res)=>{
    const id=req.params.id
    const updatedemployee = await Employee.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.json(updatedemployee);
}

exports.replaceEmployee=async(req,res)=>{
    const id=req.params.id
    const replacedemployee = await Employee.findOneAndReplace({_id:id},req.body,{new:true})
    res.json(replacedemployee);
}

exports.deleteEmployee=async(req,res)=>{
    const id=req.params.id;
    const deletedEmployee=await Employee.findByIdAndDelete({_id:id})
    res.status(200).json(deletedEmployee);
}