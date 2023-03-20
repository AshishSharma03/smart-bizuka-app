import dbConnect from "../../lib/dbConnect";
import cropModel from "../../lib/model/cropModel";

export default async function handler(req, res) {
     const { method } = req
     const { id_ } = req.query  
     console.log(id_)
    await dbConnect()
    switch(method){
      case 'GET' : 
      try{
        const CropPost = await cropModel.findById(id_)
        
        res.status(200).json({success : true , data : CropPost})
      }catch(error){
        res.status(400).json({success:false})
      }

    break
    default :  
    }
  }
  