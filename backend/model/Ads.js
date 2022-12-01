import mongoose from 'mongoose';
import Companies from './Companies';

const Schema = mongoose.Schema;

const adsSchema = new Schema({
    companyId:{
        type: mongoose.Types.ObjectId,
        ref: "Companies",
        required: true
    },
    primaryText:{
        type: String,
        required: true
    },
    headline:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    CTA:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
   
});

export default mongoose.model("Ads",adsSchema);