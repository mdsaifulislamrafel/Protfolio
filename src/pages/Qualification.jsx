import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';

const education = [
    {
        label: 'Diploma in Computer Engineering',
        description: `Munshigonj Polytechnic Institute`,
    },
    {
        label: 'Programming Language:',
        description: 'Good understanding of JavaScript',
    }
    
];

const experience = [
    {
        label: 'Frontend Development:',
        description: `Strong knowledge of React.js and Next.js`,
    },
    {
        label: 'Backend Development:',
        description: `Good understanding of Node.js, Express.js & MongoDB`,
    },
    {
        label: 'Web Services:',
        description: `RESTful API development and integration`,
    },
    {
        label: 'Problem Solving:',
        description: 'Ability to troubleshoot and solve complex technical issues efficiently.',
    },
    {
        label: 'Multitasking:',
        description: `Have ability to manage multiple projects simultaneously.`,
    }
];

const Qualification = () => {
    const [activeSection, setActiveSection] = useState('education');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <Box id="qualification" sx={{ textAlign: 'center', mt: 7,mb:7, fontFamily: 'Poppins' }}>
                <Typography component="div" variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
                    Qualification
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontFamily: 'Poppins' }}>
                    My Personal Journey
                </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                    sx={{
                      letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' },
                      mx: 1 ,
                      fontSize:'12px',
                      color: activeSection === "education" ? 'white' : 'black',
                      borderColor: activeSection === "education" ? 'black' : 'black',
                      backgroundColor: activeSection === "education" ? 'black' : 'white',
                      '&:hover': {
                        backgroundColor: activeSection === "education" ? 'black' : 'grey.300',
                      }
                    }} 
                    variant="p"
                    component="div"
                     onClick={() => handleSectionChange('education')}>
                    Education
                </Button>
                <Typography variant="p" sx={{ textAlign: 'center', mt: 7, letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
                   &
                </Typography>
                <Button
                  sx={{
                    letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' },
                    mx: 1 ,
                    fontSize:'12px',
                    color: activeSection === "experience" ? 'white' : 'black',
                    borderColor: activeSection === "experience" ? 'black' : 'black',
                    backgroundColor: activeSection === "experience" ? 'black' : 'white',
                    '&:hover': {
                      backgroundColor: activeSection === "experience" ? 'black' : 'grey.300',
                    }
                  }}
                  variant="p"
                  component="div"
                  onClick={() => handleSectionChange('experience')}>
                    Experience
                </Button>
            </Box>
            <Box sx={{ width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                <Box sx={{ maxWidth: 1000, pb: 15,ml:{xs:4,sm:0,md:8}, mt: 5, display: 'flex', gap: 7, flexWrap: 'wrap', justifyContent: { xs: 'center' } }}>
                    {activeSection === 'education' && (
                        <Stepper orientation="vertical" activeStep={-1}>
                            {education.map((step) => (
                                <Step key={step.label}>
                                    <StepLabel sx={{ maxWidth:'400px',pr:2  }}>
                                        <Box sx={{ color: 'black', fontWeight: 'bold' }}>
                                            {step.label}
                                        </Box>
                                        <Box sx={{ fontStyle: 'italic' }}>
                                            {step.description}
                                        </Box>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    )}
                    {activeSection === 'experience' && (
                        <Stepper orientation="vertical" activeStep={-1}>
                            {experience.map((step) => (
                                <Step key={step.label}>
                                    <StepLabel sx={{ maxWidth:'400px',pr:2 }}>
                                        <Box sx={{ color: 'black', fontWeight: 'bold' }}>
                                            {step.label}
                                        </Box>
                                        <Box sx={{ fontStyle: 'italic' }}>
                                            {step.description}
                                        </Box>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default Qualification;
