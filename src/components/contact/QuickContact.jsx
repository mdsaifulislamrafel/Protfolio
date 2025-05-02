import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa6';
import { SiTelegram } from 'react-icons/si';

const info = [
  { icon: <MdOutlineMail />, name: 'Email', contact: 'mdsaifulisalmrafel@gmail.com' },
  { icon: <FaWhatsapp />, name: 'WhatsApp', contact: '+8801319101783' },
  { icon: <SiTelegram />, name: 'Telegram', contact: '@mdsaifulislamrafel' }
];

const openWhatsApp = () => {
  window.open('https://wa.me/+8801319101783', '_blank');
};

const openTelegram = () => {
  window.open('https://t.me/mdsaifulislamrafel', '_blank');
};

const QuickContact = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, maxWidth: '500px' }}>
      <Typography gutterBottom variant="h1" component="div" sx={{ fontSize: '30px', textAlign: 'center', mb: 5, fontFamily: 'Poppins' }}>
        Talk to me
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
        {
          info.map((data, index) => (
            <Card key={index} sx={{ minWidth: '320px', textAlign: 'center' }}>
              <CardContent>
                {data.icon}
                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '15px' }, fontFamily: 'Poppins' }}>
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Poppins' }}>
                  {data.contact}
                </Typography>
              </CardContent>
              {data.name === 'WhatsApp' ?
                <Button 
                  sx={{
                    textTransform: 'none',
                    fontFamily: 'Poppins',
                    boxShadow: 'none',
                    color: 'grayText',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      color:'black'
                    }
                  }} 
                  endIcon={<FaLongArrowAltRight />}
                  onClick={openWhatsApp}
                >
                  Write me
                </Button>
                :
                data.name === 'Telegram' ?
                <Button 
                  sx={{
                    textTransform: 'none',
                    fontFamily: 'Poppins',
                    boxShadow: 'none',
                    color: 'grayText',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      color:'black'
                    }
                  }} 
                  endIcon={<FaLongArrowAltRight />}
                  onClick={openTelegram}
                >
                  Write me
                </Button>
                :
                <a href={`mailto:${data.contact}`}>
                  <Button 
                    sx={{
                      textTransform: 'none',
                      fontFamily: 'Poppins',
                      boxShadow: 'none',
                      color: 'grayText',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        color:'black'
                      }
                    }} 
                    endIcon={<FaLongArrowAltRight />}
                  >
                    Write me
                  </Button>
                </a>
              }
            </Card>
          ))
        }
      </Box>
    </Box>
  )
}

export default QuickContact;
