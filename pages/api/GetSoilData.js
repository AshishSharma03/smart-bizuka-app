import firebase from 'firebase/app';
import admin from '../../firebase/FireAdmin';


export default async function handler(req, res) {

    const ab =  admin.database()
    const ref =  ab.ref('/test')  
    ref.once("value",(snapshot)=> 
        res.status(200).json(snapshot.val())
    )
        
    
}
  