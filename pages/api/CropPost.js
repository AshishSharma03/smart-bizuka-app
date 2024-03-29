import dbConnect from "../../lib/dbConnect";
import cropModel from "../../lib/model/cropModel";

export default async function handler(req, res) {
     const { method } = req
     const { limit } = req.query
    await dbConnect()
    switch(method){
      case 'GET' : 

      try{
        const CropPost = await cropModel.find({})
        
        res.status(200).json({success : true , data : CropPost.slice(0,+(`${limit}`)?? CropPost.length )})
      }catch(error){
        res.status(400).json({success:false})
      }

    break
      case 'POST' :
      try{
          const NewPost = await cropModel.create(req.body)
          res.status(200).json({success :true, data: NewPost})
      }catch(error){
          res.status(400).json({ success: false })
      }
    
    break
    default :  
    }
  }
  