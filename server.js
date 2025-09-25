const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'aliahmedyus@gmail.com',
    pass:'axfy xyfp msqr wmci'
  }
})

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/admission-enquiry', async (req, res) => {
  
  try {
    const formData = req.body
    
   await transporter.sendMail({
      from:formData.email,
      to:'aliahmedyus@gmail.com',
      subject:'New Admission Query',
      html:`
        <h2>New Admission Enquiry</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Stream:</strong> ${formData.stream}</p>
        <p><strong>School:</strong> ${formData.school}</p>
        <p><strong></strong> ${formData.message}</p>
      `
    })
    return res.json({success:true, message:'Email sent successfully', email:formData.email})
  } catch (error) {
    console.log("error sending email", error)
    return res.status(401).json({success:false,message:error})
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
