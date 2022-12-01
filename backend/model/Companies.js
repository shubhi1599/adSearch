import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const companiesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
});

export default mongoose.model("Companies",companiesSchema);