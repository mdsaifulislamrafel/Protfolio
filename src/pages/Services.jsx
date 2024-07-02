import { Box, Card, CardActionArea, CardContent, Grid,Typography } from '@mui/material'



const services = [
  { des:'Transform your ideas into fully functional and visually stunning web applications with my expertise in the MERN stack. From concept to deployment, I handle every aspect of development, ensuring a seamless user experience.',label: 'Full-Stack Web Development'},
  { des:'Create engaging and responsive user interfaces with the power of React.js. I specialize in building interactive and dynamic frontends that provide a modern and intuitive user experience.',label: 'React.js Frontend Development'},
  { des:'Leverage the speed and scalability of Node.js for your backend needs. I design and implement server-side logic that powers your applications, ensuring high performance and seamless integration with frontend technologies.',label: 'Node.js Backend Development'},
  { des:'Build APIs that suit your specific project requirements. Whether you prefer the simplicity of RESTful APIs , I have the expertise to design and implement solutions that meet your needs.',label: ' RESTful'},
  { des:'Optimize data storage and retrieval with MongoDB. I design scalable and efficient database architectures, ensuring your application handles data seamlessly while maintaining flexibility for future growth.',label: 'MongoDB Database Design'}
]


const Services = () => {

  return (
        <Box id="services" sx={{ flexGrow: 1,mt:4}}>
              <Box sx={{textAlign:'center',mb:7}}>
                <Typography component="div" variant="h4" sx={{letterSpacing:'.2rem',fontFamily:'Poppins',fontWeight:{xs:'400',sm:'400',md:'600'}}}>
                  Services
                </Typography>
                <Typography variant="subtitle2" color="text.secondary"  component="div" sx={{fontFamily:'Poppins'}}>
                  What I offer
                </Typography>
              </Box>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Box sx={{maxWidth:"800px",display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',gap:'25px' }}>
                {services.map((page, index) => (
                  <Box sx={{width:"350px"}} key={index}>
                    <Card sx={{ width: 350 ,mb:{xs:3},height:'200px'}}>
                      <CardActionArea sx={{height:'200px'}}>
                        <CardContent>
                          <>
                              <Typography gutterBottom variant="h6" component="div">
                                {page.label}
                              </Typography>
                             <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'350px'}}>
                                  <Grid item xs={10} sx={{}}>
                                    {page.des}
                                  </Grid>
                                </Box>
                             </Grid>
                            </>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box> 
                  ))}
                </Box>
                </Box>
        </Box>
  )
}

export default Services