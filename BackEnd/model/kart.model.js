import mongoose from "mongoose";

const KartSchema = mongoose.Schema({
   name:String,
   price:String,
   category:String,
   title:String,
   image:String,

})
const Kart= mongoose.model("Kart",KartSchema); //in the kartschema every data is stored in collection called book
export default Kart;