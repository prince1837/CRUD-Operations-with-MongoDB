
var mongoes=require('mongoose')
mongoes.connect('mongodb://localhost:27017/students_data',{ useUnifiedTopology: true, useNewUrlParser: true, });
var db = mongoes.connection;
if (!db){
    console.log("error in Db creating");
    
}
var data_table=mongoes.Schema({
    name:String,
    age:Number,
    status:String
})

var student_data=mongoes.model('student_data',data_table,"students")



module.exports=student_data
