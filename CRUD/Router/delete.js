module.exports=((my_data,Deleting)=>{
    Deleting.delete('/delete_data/:_id',(req,res)=>{
        var _id=req.params._id        
        my_data.deleteOne({'_id':_id})
        .then(data=>{
            my_data.find()
            .then(data=>{
                res.send(data)
            }).catch(err=>{
                res.send(err.message)
            })
        }).catch(err=>{
            res.send(err.message)
        })
    })
})