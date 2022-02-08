const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate(value) {
                if(!validator.isEmail(value)) {
                    throw new Error("Invalid email")
                }
            }
        },
        phone: {
            type: Number,
            min: 10,
            max: 10,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;