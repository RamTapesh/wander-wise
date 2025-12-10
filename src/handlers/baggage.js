import {Schema, Model} from 'mongoose';

const baggageSchema = new Schema({
    name: {
        type: String,        
        required: true,
        trim: true,
    },    
    description: {
        type: String,        
        required: true,
        trim: true,        
    },    
    completed: {
        type: Boolean,        
        default: false,        
    },            
},
{
    timestamps: true,
});

export default new Model('Baggage', baggageSchema); 
export { baggageSchema };