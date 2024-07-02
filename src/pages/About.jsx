/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Button, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Qualification from './Qualification';

const About = () => {

  return (
    <Box id="about" sx={{ flexGrow: 1}}>
      {/* ------------------------------ About section ----------------------------- */}
      <Box sx={{textAlign:'center',mb:6}}>
        <Typography component="div" variant="h4" sx={{letterSpacing:'.2rem',fontFamily:'Poppins',fontWeight:{xs:'400',sm:'400',md:'600'}}}>
          About Me
        </Typography>
        <Typography variant="subtitle2" color="text.secondary"  component="div" sx={{fontFamily:'Poppins'}}>
          My Introduction
        </Typography>
      </Box>
      <Box sx={{height:'auto',width:'100vw',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',mt:2,gap:'50px',p:5 }}>
        <Box sx={{width:"250px",pb:{xs:0,sm:0,md:12}}}>
          <Avatar
            alt="Remy Sharp"
            src="portfolio.png"
            sx={{width:'250px',height:'250px' }}
            variant="rounded"
          />
        </Box>
        <Box sx={{maxWidth:'700px'}} >
          <Box sx={{display:'flex',justifyContent:'space-around',gap:'10px'}}>
            <Card sx={{ width: '110px',textAlign:'center' }}>
              <CardActionArea>
                <CardContent>
                  <VerifiedIcon/>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'15px'} }}>
                    Experience
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    1+ Years
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth:{xs:'100px',md:'150px'},textAlign:'center' }}>
              <CardActionArea>
                <CardContent>
                  <BusinessCenterIcon/>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'15px'} }}>
                    Completed
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    10+ Projects
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 150,textAlign:'center' }}>
              <CardActionArea>
                <CardContent> 
                  <HeadsetMicIcon/>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontSize:{xs:'15px'} }}>
                    Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Online 24/7
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <CardContent sx={{ letterSpacing:'.2rem',fontFamily:'Poppins' }}>
            <Typography variant="subtitle1" color="text.secondary"  component="div" sx={{maxWidth:{md:'600px',xs:'350px',sm:'500px'},ml:{xs:'15px'}}} >
              "🚀Welcome to the digital realm where creativity meets functionality! I am <span style={{fontWeight:'bold',color:'black' }}>MD.SAIFUL ISLAM RAFEL</span>, a passionate MERN developer on a mission to craft immersive and seamless web experiences. With a palette of MongoDB, Express.js, React, and Node.js, I breathe life into ideas, turning concepts into captivating digital realities. Join me on a journey where innovation converges with technology, and every line of code tells a unique story. Let's build the future, one pixel at a time! ✨"
            </Typography>
            <Button 
              variant="contained" 
              endIcon={<FileDownloadIcon />}
              sx={{
                mt:2,
                mb:5,
                ml:{xs:'15px'},
                fontFamily:'Poppins',
                bgcolor:'black',
                '&:hover': {
                  bgcolor: 'GrayText',
                }
              }} 
              href="/MERN_Stack_Developer_resume_of_Rafel.pdf"
              download="MERN_Stack_Developer_resume_of_Rafel.pdf" 
            >
              Download Resume
            </Button>
          </CardContent>
        </Box>
      </Box>
      {/* ------------------------------ Qualification section ----------------------------- */}
      <Qualification/>
    </Box>
  )
}

export default About;
