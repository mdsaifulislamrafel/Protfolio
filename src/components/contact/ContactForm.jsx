import  { useRef, useState } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography, Alert } from '@mui/material';
import { CiLocationArrow1 } from "react-icons/ci";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [alert, setAlert] = useState({ message: '', severity: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          setAlert({ message: 'SUCCESS! Your email has been sent.', severity: 'success' });
          setClientName('');
          setClientEmail('');
          setProjectDetails('');
        },
        (error) => {
          setAlert({ message: 'FAILED: ' + error.text, severity: 'error' });
        },
      );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, maxWidth: '500px' }}>
      <Typography gutterBottom variant="h1" component="div" sx={{ fontSize: '30px', textAlign: 'center', mb: 5, fontFamily: 'Poppins' }}>
        Write me your project
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
        <Card sx={{ minWidth: '320px', textAlign: 'center', p: 3 }}>
          <CardContent>
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-name"
                label="Name"
                type='text'
                name="client_name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                id="outlined-email"
                label="Email"
                type='email'
                name="client_email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                id="outlined-multiline-static"
                label="Project"
                name="project_details"
                multiline
                rows={4}
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <Button
                variant="contained"
                type="submit"
                value="Send"
                sx={{
                  textTransform: 'none',
                  bgcolor: 'transparent',
                  fontFamily: 'Poppins',
                  boxShadow: 'none',
                  color: 'grayText',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    bgcolor: 'transparent',
                    color:'black',
                    boxShadow: 'none',
                    transform: 'scale(1.1)',
                  }
                }}
                endIcon={<CiLocationArrow1 />}
              >
                Send me
              </Button>
            </Box>
          </CardContent>
          {alert.message && (
          <Alert severity={alert.severity} sx={{ mt: 2 }}>
            {alert.message}
          </Alert>
        )}
        </Card>
      </Box>
    </Box>
  );
}

export default ContactForm;
