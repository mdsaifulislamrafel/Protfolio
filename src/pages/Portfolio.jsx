import { Avatar, Box, Button, ButtonGroup, Card, CardContent, Grid, Typography, Link } from '@mui/material';
import { useState } from 'react';
import { TbWorldWww } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { FaMarkdown } from "react-icons/fa";

const projects = [
  { id: 1, title: 'houses sale', img: 'houses-sale.png', categories: ['ReactJs'], livelink: "https://houses-sale.netlify.app/", frontendGithubLink: "https://github.com/mdsaifulislamrafel/Residential-Auth-React", backendGithubLink: "" },
  { id: 2, title: 'School', img: 'school.png', categories: ['ReactJs'], livelink: "https://thakurgaon-sugar-mills-high-school.netlify.app/", details: "", frontendGithubLink: "https://github.com/mdsaifulislamrafel/Tsm-school", backendGithubLink: "" },
  { id: 3, title: 'Book Vibe', img: 'book.png', categories: ['ReactJs'], livelink: "https://books-vibs.netlify.app/", frontendGithubLink: "https://github.com/mdsaifulislamrafel/books-review", backendGithubLink: "" },
  { id: 4, title: 'Doctor', img: 'doctor.png', categories: ['ReactJs'], livelink: "https://doctor-services-pro.netlify.app/", frontendGithubLink: "https://github.com/mdsaifulislamrafel/doctor", backendGithubLink: "" },
  { id: 5, title: 'Art and craft store', img: 'art.png', categories: ['ReactJs', 'Full-Stack'], livelink: "https://art-and-craft-store.netlify.app/", details: "", frontendGithubLink: "https://github.com/mdsaifulislamrafel/art-craft-client", backendGithubLink: "https://github.com/mdsaifulislamrafel/art-craft-server" },
  { id: 6, title: 'Hotels room bookings', img: 'room.png', categories: ['ReactJs', 'Full-Stack'], livelink: "https://hotels-bookings-room.netlify.app/", details: "", frontendGithubLink: "https://github.com/mdsaifulislamrafel/room-booking-client", backendGithubLink: "https://github.com/mdsaifulislamrafel/room-booking-server" },
  { id: 7, title: 'Teachable class', img: 'teacher.png', categories: ['ReactJs', 'Full-Stack'], livelink: "https://teachable-class.netlify.app/", details: "https://github.com/mdsaifulislamrafel/Teachable-calint-side/blob/main/README.md", frontendGithubLink: "https://github.com/mdsaifulislamrafel/Teachable-calint-side", backendGithubLink: "https://github.com/mdsaifulislamrafel/Teachable-server-side" },
  
];

const icons = [
  { id: 1, icon: <TbWorldWww />, color: '#7dc5f5', label: "Live", key: "livelink" },
  { id: 2, icon: <FaMarkdown />, color: '#767674', label: "Details", key: "details" },
  { id: 3, icon: <IoLogoGithub />, color: 'black', label: "GitHub", key: "frontendGithubLink" },
  { id: 4, icon: <IoLogoGithub />, color: 'black', label: "Backend", key: "backendGithubLink" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  const allCategories = [...new Set(projects.flatMap((project) => project.categories))];

  return (
    <Box id="portfolio" sx={{ flexGrow: 1, mt: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography component="div" variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
          Portfolio
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontFamily: 'Poppins' }}>
          My recent work
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', mb: 3 }}>
        <ButtonGroup sx={{ px: 1 }}>
          <Button
            sx={{
              fontSize: '12px',
              color: selectedCategory === 'All' ? 'white' : 'black',
              borderColor: 'black',
              backgroundColor: selectedCategory === 'All' ? 'black' : 'white',
              '&:hover': {
                backgroundColor: selectedCategory === 'All' ? 'black' : 'grey.300',
              }
            }}
            onClick={() => handleFilter('All')}
          >
            All
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              sx={{
                fontSize: '12px',
                color: selectedCategory === category ? 'white' : 'black',
                borderColor: 'black',
                backgroundColor: selectedCategory === category ? 'black' : 'white',
                '&:hover': {
                  backgroundColor: selectedCategory === category ? 'black' : 'grey.300',
                }
              }}
              onClick={() => handleFilter(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box sx={{ height: 'auto', flexGrow: 1, width: '100vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', p: 3, gap: '20px' }}>
        {filteredProjects.map((project) => (
          <Card sx={{ width: { xs: '90%', sm: '70%', md: '30%' }, mb: 5, height: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} key={project.id}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <Typography gutterBottom variant="h6" component="div" sx={{ letterSpacing: '.1rem', fontFamily: 'Poppins', textAlign: 'center' }}>
                {project.title}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar
                  alt={project.title}
                  src={`${project.img}`}
                  sx={{ width: '25%', height: 'auto', maxWidth: '300px', borderRadius: 2 }}
                  variant="rounded"
                />
              </Box>
              <Grid container spacing={2} sx={{ mt: 'auto' }}>
                {icons.map((iconSymbol) => (
                  project[iconSymbol.key] && (
                    <Grid item xs={6} key={iconSymbol.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box component={Link} href={project[iconSymbol.key]} target='_blank' sx={{ fontSize: 20, color: iconSymbol.color, cursor: 'pointer', display: 'flex', gap: 1, px: 4 }}>
                        {iconSymbol.icon} <span style={{ fontSize: 13 }}>{iconSymbol.label}</span>
                      </Box>
                    </Grid>
                  )
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
