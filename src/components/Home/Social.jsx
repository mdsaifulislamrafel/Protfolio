import { green, blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';

export const Social = () => {
  const openGitHubProfile = () => {
    window.open('https://github.com/mdsaifulislamrafel', '_blank');
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/mdsaifulislamrafel', '_blank');
  };

  const openWhatsAppProfile = () => {
    window.open('https://wa.me/+8801319101783', '_blank');
  };

  return (
    <Stack direction="column" spacing={2} sx={{height:'100vh',pb:6,pl:{xs:1,sm:4,md:6},display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Button onClick={openGitHubProfile}>
        <Avatar sx={{ bgcolor:'black' }}>
            <GitHubIcon />
        </Avatar>
      </Button>
      <Button onClick={openLinkedInProfile}>
        <Avatar sx={{ bgcolor: blue[700] }}>
            <LinkedInIcon />
        </Avatar>
      </Button>
      <Button onClick={openWhatsAppProfile}>
        <Avatar sx={{ bgcolor: green[700] }}>
            <WhatsAppIcon />
        </Avatar>
      </Button>
    </Stack>
  )
}
