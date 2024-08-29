

const {form} = require("../database/fourmScema")

const formData = async (req , res)=>{
    try {
        const { name, email, problemType, message } = req.body;

        const newForm = new form({
            name,
            email,
            problemType,
            message,
        });

        await newForm.save();
        res.status(200).send('Data saved successfully');
    } catch (error) {
        res.status(500).send('Error saving data');
        console.log(error)
    }
}

module.exports = {formData};