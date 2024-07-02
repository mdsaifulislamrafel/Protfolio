import { Box, Card, CardActionArea, CardContent, Grid,Typography } from '@mui/material'

/* ----------------------------- Frontend icons ----------------------------- */
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiBootstrapFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

/* ------------------------------ Backend icons ----------------------------- */
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

/* ------------------------------- tools icon ------------------------------- */
import { PiTerminalFill } from "react-icons/pi";
import { TbBrandVscode } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNpmjsFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";
import { FaChrome } from "react-icons/fa";
import { PiParagraphDuotone } from "react-icons/pi";






const frontend = [
  { label: 'Html',icon: <AiOutlineHtml5/>},
  { label: 'Css',icon: <FaCss3Alt/>},
  { label: 'Javascript',icon: <IoLogoJavascript/>},
  { label: 'Bootstrap',icon: <RiBootstrapFill/>},
  { label: 'Tailwind',icon: <SiTailwindcss/>},
  { label: 'React',icon: <SiReact/>},
  { label: 'MUI',icon: <SiMui/>},
  { label: 'Next.js',icon: <TbBrandNextjs/>},
  { label: 'React Router',icon: <SiReactrouter/>},
  { label: 'Firebase',icon: <IoLogoFirebase />}


]

const backend = [
  { label: 'Node.js',icon: <FaNode/>},
  { label: 'Express.js',icon: <SiExpress/>},
  { label: 'MongoDb',icon: <SiMongodb/>}

]

const tools = [
  { label: 'Terminal',icon: <PiTerminalFill/>},
  { label: 'Vs Code',icon: <TbBrandVscode/>},
  { label: 'Git',icon: <FaGit/>},
  { label: 'Github',icon: <FaGithub/>},
  { label: 'NPM',icon: <RiNpmjsFill/>},
  { label: 'Chrome DevTools',icon: <FaChrome/>},
  { label: 'Figma',icon: <IoLogoFigma/>},
  { label: 'PHD TO HTML',icon: <PiParagraphDuotone />},
  { label: 'Vercel',icon: <IoLogoVercel/>},
  

]

const Skills = () => {

  return (
        <Box id="skills" sx={{ flexGrow: 1}}>
              <Box sx={{textAlign:'center',mb:4}}>
                <Typography component="div" variant="h4" sx={{letterSpacing:'.2rem',fontFamily:'Poppins',fontWeight:{xs:'400',sm:'400',md:'600'}}}>
                  Skills
                </Typography>
                <Typography variant="subtitle2" color="text.secondary"  component="div" sx={{fontFamily:'Poppins'}}>
                  My Technical Level
                </Typography>
              </Box>
                <Box sx={{width:'100vw',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',p:5,gap:{xs:'1px',sm:'20px',md:'40px'} }}>
                  <Box sx={{maxWidth:"400px"}}>
                    <Card sx={{ width: 350 ,mb:{xs:5},height:'173px'}}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Frontend
                          </Typography>

                          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {frontend.map((page, index) => (
                                <Grid item xs={6} key={index} >
                                    <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:1}}>
                                      {page.icon}
                                      <Typography variant="body2" color="text.secondary">
                                          {page.label}
                                      </Typography>
                                    </Box>
                                </Grid>
                            ))}
                          </Grid>
                          
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                  <Box sx={{maxWidth:"400px"}}>
                    <Card sx={{ width: 350 ,mb:{xs:5},height:'173px'}}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Backend
                          </Typography>
                          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {backend.map((page, index) => (
                                <Grid item xs={12} key={index} >
                                    <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:1}}>
                                      {page.icon}
                                      <Typography variant="body2" color="text.secondary">
                                          {page.label}
                                      </Typography>
                                    </Box>
                                </Grid>
                            ))}
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                  <Box sx={{maxWidth:"400px"}}>
                    <Card sx={{ width: 350 ,mb:{xs:5},height:'173px'}}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Tools
                          </Typography>
                          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {tools.map((page, index) => (
                                <Grid item xs={6} key={index} >
                                    <Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:1}}>
                                      {page.icon}
                                      <Typography variant="body2" color="text.secondary">
                                          {page.label}
                                      </Typography>
                                    </Box>
                                </Grid>
                            ))}
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>            
                </Box>
        </Box>
  )
}

export default Skills