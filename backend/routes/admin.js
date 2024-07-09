const{db}=require("./key");
const express=require("express")
const admin=express();
admin.use(express.json());



admin.put("/course", async function(req,res){
    const { week, title, no_challenges, img_src, new_field } = req.body;
    try{
        const res=await db.collection('course').doc('week').set(data);
        console.log("sucess");
    }
    catch{
        console.log("fail")
    }
   
})

