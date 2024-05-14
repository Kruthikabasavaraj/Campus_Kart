import Kart from "../model/kart.model.js"

export const getkart = async(req,res)=>{
try {
const kart = await Kart.find();
res.status(200).json(kart);
} catch (error) {
    console.log("error",error);
    res.status(500).json(error);
}






};