module.exports=(my_data,updating)=>{
    updating.put('/update_data/:_id',(req,res)=>{
        var _id=req.params._id
        var data=req.body                
        my_data.findByIdAndUpdate(_id,data)
        .then((data)=>{
            my_data.find({'_id':_id})
            .then(data=>{
                res.send(data)
            }).catch(err=>{
                res.send(err.message)
            })
        }).catch(err=>{
            res.send(err.message)
        })
    })
}