import { Box,Typography } from '@mui/material'
import QuickContact from '../components/contact/QuickContact';
import ContactForm from '../components/contact/ContactForm';



const Contact = () => {
  return (
    <>
      <Box id="contact" sx={{ textAlign: 'center',mb:6,fontFamily:'Poppins' }}>
        <Typography component="div" variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
          Contact Me
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontFamily: 'Poppins' }}>
          Get in touch
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 5, flexWrap: 'wrap', p: 5,pb:10 }}>
          <QuickContact/>
          {/* <ContactForm/> */}
      </Box>
    </>
  )
}

export default Contact