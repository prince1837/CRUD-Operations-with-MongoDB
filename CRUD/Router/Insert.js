module.exports=((my_data,inserting)=>{
    inserting.post('/insert',(req,res)=>{
        var data=req.body
        var s1= new my_data({
            name:data.name,
            age:data.age,
            status:data.status
        })
        s1.save(function (err, student) {
            if (err) return console.error(err);
            console.log(student.name + " saved to students collection.");
            res.send(student.name + " saved to students collection.")
          });
    })
})