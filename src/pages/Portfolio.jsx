
import { useState, useEffect, useRef } from "react"
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Typography,
  Modal,
  Fade,
  Backdrop,
  Chip,
  IconButton,
  Divider,
  Tooltip,
} from "@mui/material"
import { TbWorldWww } from "react-icons/tb"
import { IoLogoGithub } from "react-icons/io5"
import { FaMarkdown } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Houses Sale",
    img: "houses-sale.png",
    categories: ["ReactJs"],
    livelink: "https://houses-sale.netlify.app/",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/Residential-Auth-React",
    backendGithubLink: "",
    description: "A real estate platform for browsing and purchasing houses, built with React.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
  },
  {
    id: 2,
    title: "School",
    img: "school.png",
    categories: ["ReactJs"],
    livelink: "https://thakurgaon-sugar-mills-high-school.netlify.app/",
    details: "",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/Tsm-school",
    backendGithubLink: "",
    description: "A school management website showcasing features, faculty, and academic programs.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Material UI"],
  },
  {
    id: 3,
    title: "Book Vibe",
    img: "book.png",
    categories: ["ReactJs"],
    livelink: "https://books-vibs.netlify.app/",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/books-review",
    backendGithubLink: "",
    description: "An online platform for book reviews and recommendations.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
  },
  {
    id: 4,
    title: "Doctor",
    img: "doctor.png",
    categories: ["ReactJs"],
    livelink: "https://doctor-services-pro.netlify.app/",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/doctor",
    backendGithubLink: "",
    description: "A healthcare platform for connecting with doctors and medical services.",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
  },
  {
    id: 5,
    title: "Art and craft store",
    img: "art.png",
    categories: ["ReactJs", "Full-Stack"],
    livelink: "https://art-and-craft-store.netlify.app/",
    details: "",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/art-craft-client",
    backendGithubLink: "https://github.com/mdsaifulislamrafel/art-craft-server",
    description: "An e-commerce platform for buying and selling art and craft products.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
  },
  {
    id: 6,
    title: "Hotels room bookings",
    img: "room.png",
    categories: ["ReactJs", "Full-Stack"],
    livelink: "https://hotels-bookings-room.netlify.app/",
    details: "",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/room-booking-client",
    backendGithubLink: "https://github.com/mdsaifulislamrafel/room-booking-server",
    description: "A hotel room booking system with user authentication and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    id: 7,
    title: "Teachable class",
    img: "teacher.png",
    categories: ["ReactJs", "Full-Stack"],
    livelink: "https://teachable-class.netlify.app/",
    details: "https://github.com/mdsaifulislamrafel/Teachable-calint-side/blob/main/README.md",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/Teachable-calint-side",
    backendGithubLink: "https://github.com/mdsaifulislamrafel/Teachable-server-side",
    description: "An online learning platform for creating and attending virtual classes.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 8,
    title: "velo city",
    img: "valocity.png",
    categories: ["NextJs", "Full-Stack"],
    livelink: "https://velocity-1.netlify.app/",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/velocity-client",
    backendGithubLink: "https://github.com/mdsaifulislamrafel/velocity-server",
    description: "This is the backend service for the Velocity Car Shop project, a role-based e-commerce platform for buying and selling cars. It handles user authentication, product & order management, secure payments, and admin/user dashboards. Built with Node.js, Express, TypeScript, and MongoDB.",
    technologies: ["Next.js", "React", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "Material UI", "Mongoss"],
  },
  {
    id: 9,
    title: "feedme.",
    img: "feedme.png",
    categories: ["NextJs", "Full-Stack"],
    livelink: "https://feedme-sigma.vercel.app/",
    frontendGithubLink: "https://github.com/mdsaifulislamrafel/feedme-client",
    backendGithubLink: "https://github.com/mdsaifulislamrafel/feedme-server",
    description: "FeedMe is a Meal Planning & Delivery Web Application that allows users to personalize their meal plans and schedule deliveries based on their dietary preferences. Customers can browse available meal options, select meals based on their preferences, and schedule delivery. Meal providers can manage menus, respond to customer orders, and track deliveries.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Material UI","Mongoss"],
  },
]

const icons = [
  { id: 1, icon: <TbWorldWww size={24} />, color: "#007bff", label: "Live", key: "livelink" },
  { id: 2, icon: <FaMarkdown size={22} />, color: "#6c757d", label: "Details", key: "details" },
  { id: 3, icon: <IoLogoGithub size={24} />, color: "#333", label: "GitHub", key: "frontendGithubLink" },
  { id: 4, icon: <IoLogoGithub size={24} />, color: "#333", label: "Backend", key: "backendGithubLink" },
]

// Define technology color mapping
const techColors = {
  React: "#61dafb",
  JavaScript: "#f7df1e",
  CSS: "#264de4",
  HTML: "#e34c26",
  Firebase: "#ffca28",
  "Node.js": "#68a063",
  Express: "#000000",
  MongoDB: "#13aa52",
  "Material UI": "#0081cb",
  Stripe: "#6772e5",
  Mongoss: "#010101",
  "Next.js": "#000000",
  TypeScript: "#3178c6",
  "Tailwind CSS": "#06b6d4",
  Prisma: "#2D3748",
  PostgreSQL: "#336791",
  "Framer Motion": "#0055FF",
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [openModal, setOpenModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const imageRef = useRef(null)
  const maxScroll = 100 // Maximum scroll amount in pixels

  const handleFilter = (category) => {
    setSelectedCategory(category)
  }

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setOpenModal(true)
    // Reset scroll position when opening modal
    setScrollPosition(0)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Auto-scroll effect for the image in modal
  useEffect(() => {
    let animationId
    let direction = 1 // 1 for down, -1 for up

    const autoScroll = () => {
      if (openModal && imageRef.current) {
        // Update scroll position with increased speed
        setScrollPosition((prev) => {
          // Increased speed from 0.5 to 2.0
          const newPosition = prev + 5 * direction

          // Change direction when reaching top or bottom limits
          if (newPosition >= maxScroll) {
            direction = -1
            return maxScroll
          } else if (newPosition <= 0) {
            direction = 1
            return 0
          }

          return newPosition
        })

        // Use a shorter timeout for faster updates
        animationId = requestAnimationFrame(autoScroll)
      }
    }

    if (openModal) {
      animationId = requestAnimationFrame(autoScroll)
    }

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [openModal])

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.categories.includes(selectedCategory))

  const allCategories = [...new Set(projects.flatMap((project) => project.categories))]

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  // Get contrasting text color based on background
  const getContrastColor = (hexColor) => {
    // Default to white text for unknown technologies
    if (!hexColor) return "#ffffff"

    // Convert hex to RGB
    const r = Number.parseInt(hexColor.slice(1, 3), 16)
    const g = Number.parseInt(hexColor.slice(3, 5), 16)
    const b = Number.parseInt(hexColor.slice(5, 7), 16)

    // Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000

    // Return black or white based on brightness
    return brightness > 155 ? "#000000" : "#ffffff"
  }

  return (
    <Box id="portfolio" sx={{ flexGrow: 1, mt: 10, pb: 5, backgroundColor: "#f9f9f9" }}>
      <Box
        sx={{
          textAlign: "center",
          mb: 5,
          pt: 5,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 4,
            backgroundColor: "#333",
            borderRadius: 2,
          },
        }}
      >
        <Typography
          component="div"
          variant="h4"
          sx={{
            letterSpacing: ".2rem",
            fontFamily: "Poppins",
            fontWeight: { xs: "500", sm: "500", md: "600" },
            backgroundImage: "linear-gradient(45deg, #333, #666)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Portfolio
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontFamily: "Poppins", mt: 1 }}>
          Showcasing my creative work
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          mb: 5,
          px: 2,
        }}
      >
        <ButtonGroup
          variant="contained"
          sx={{
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Button
            sx={{
              fontSize: { xs: "11px", sm: "13px" },
              py: 1.5,
              color: selectedCategory === "All" ? "white" : "#555",
              borderColor: "transparent",
              backgroundColor: selectedCategory === "All" ? "#333" : "#f0f0f0",
              "&:hover": {
                backgroundColor: selectedCategory === "All" ? "#222" : "#e0e0e0",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              },
              transition: "all 0.3s ease",
            }}
            onClick={() => handleFilter("All")}
          >
            All Projects
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              sx={{
                fontSize: { xs: "11px", sm: "13px" },
                py: 1.5,
                color: selectedCategory === category ? "white" : "#555",
                borderColor: "transparent",
                backgroundColor: selectedCategory === category ? "#333" : "#f0f0f0",
                "&:hover": {
                  backgroundColor: selectedCategory === category ? "#222" : "#e0e0e0",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                },
                transition: "all 0.3s ease",
              }}
              onClick={() => handleFilter(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <Box
        sx={{
          height: "auto",
          flexGrow: 1,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          px: { xs: 2, sm: 3, md: 5 },
          py: 3,
          gap: { xs: "15px", sm: "20px", md: "30px" },
        }}
      >
        {filteredProjects.map((project, index) => (
          <Box
            component={motion.div}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%", lg: "22%" },
              height: "100%",
            }}
            key={project.id}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: 200,
                  cursor: "pointer",
                }}
                onClick={() => handleOpenModal(project)}
              >
                <Avatar
                  alt={project.title}
                  src={`${project.img}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  variant="square"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    p: 1.5,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      color: "white",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Box>

              <CardContent
                sx={{
                  p: 2,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      height: "40px",
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
                    {project.categories.map((category) => (
                      <Chip
                        key={category}
                        label={category}
                        size="small"
                        sx={{
                          fontSize: "0.7rem",
                          bgcolor:
                            category === "NextJs"
                              ? "#000000"
                              : category === "ReactJs"
                                ? "#61dafb"
                                : category === "Full-Stack"
                                  ? "#7e57c2"
                                  : "#333",
                          color: category === "ReactJs" ? "#000000" : "white",
                          "&:hover": {
                            bgcolor:
                              category === "NextJs"
                                ? "#333333"
                                : category === "ReactJs"
                                  ? "#4fa8d8"
                                  : category === "Full-Stack"
                                    ? "#6a46b0"
                                    : "#444",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 1,
                      bgcolor: "#333",
                      textTransform: "none",
                      borderRadius: 2,
                      "&:hover": {
                        bgcolor: "#222",
                      },
                    }}
                    onClick={() => handleOpenModal(project)}
                  >
                    View Details
                  </Button>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      mt: 2,
                      pt: 1,
                      borderTop: "1px solid #eee",
                    }}
                  >
                    {icons.map(
                      (iconSymbol) =>
                        project[iconSymbol.key] && (
                          <Tooltip key={iconSymbol.id} title={iconSymbol.label}>
                            <IconButton
                              href={project[iconSymbol.key]}
                              target="_blank"
                              size="small"
                              sx={{
                                color: iconSymbol.color,
                                "&:hover": {
                                  transform: "scale(1.2)",
                                  color: "#007bff",
                                },
                                transition: "all 0.2s ease",
                              }}
                            >
                              {iconSymbol.icon}
                            </IconButton>
                          </Tooltip>
                        ),
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Project Details Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 4 },
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              width: { xs: "95%", sm: "85%", md: "70%", lg: "60%" },
              maxHeight: "90vh",
              bgcolor: "white", // Changed to explicit white for better contrast
              borderRadius: 3,
              boxShadow: 24,
              overflow: "hidden", // Using hidden for the main container
              display: "flex",
              flexDirection: "column",
            }}
          >
            {selectedProject && (
              <>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      height: "auto",
                      maxHeight: { xs: 250, sm: 400, md: 450 },
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: "#f5f5f5",
                    }}
                  >
                    <Avatar
                      ref={imageRef}
                      alt={selectedProject.title}
                      src={`${selectedProject.img}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: 0,
                        bgcolor: "#111",
                        transform: `translateY(-${scrollPosition}px)`,
                        transition: "transform 0.3s ease-out",
                      }}
                      variant="square"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
                      }}
                    />
                    <IconButton
                      onClick={handleCloseModal}
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        color: "white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.7)",
                        },
                      }}
                    >
                      <IoClose size={24} />
                    </IconButton>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        p: { xs: 2, sm: 3 },
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                          color: "white",
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" },
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        {selectedProject.title}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                        {selectedProject.categories.map((category) => (
                          <Chip
                            key={category}
                            label={category}
                            size="small"
                            sx={{
                              bgcolor:
                                category === "NextJs"
                                  ? "#000000"
                                  : category === "ReactJs"
                                    ? "#61dafb"
                                    : category === "Full-Stack"
                                      ? "#7e57c2"
                                      : "white",
                              color:
                                category === "ReactJs"
                                  ? "#000"
                                  : category === "NextJs"
                                    ? "#fff"
                                    : category === "Full-Stack"
                                      ? "#fff"
                                      : "#333",
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    background: "linear-gradient(to bottom, #fff, #f7f7f7)",
                    overflow: "auto", // This makes only the content section scrollable
                    maxHeight: { xs: "calc(90vh - 250px)", sm: "calc(90vh - 400px)", md: "calc(90vh - 450px)" }, // Adjust based on image height
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: "Poppins",
                      mb: 2,
                      color: "#1976d2",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '""',
                        display: "inline-block",
                        width: 4,
                        height: 24,
                        backgroundColor: "#1976d2",
                        marginRight: 1.5,
                        borderRadius: 1,
                      },
                    }}
                  >
                    Project Overview
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "#555",
                      lineHeight: 1.6,
                      fontSize: "1.05rem",
                      pl: 1,
                    }}
                  >
                    {selectedProject.description}
                  </Typography>

                  <Divider sx={{ my: 3, background: "linear-gradient(to right, #1976d2, transparent)", height: 2 }} />

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: "Poppins",
                      mb: 2,
                      color: "#1976d2",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '""',
                        display: "inline-block",
                        width: 4,
                        height: 24,
                        backgroundColor: "#1976d2",
                        marginRight: 1.5,
                        borderRadius: 1,
                      },
                    }}
                  >
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3, pl: 1 }}>
                    {selectedProject.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          bgcolor: techColors[tech] || "#f0f0f0",
                          color: getContrastColor(techColors[tech]),
                          fontWeight: 500,
                          "&:hover": { transform: "translateY(-3px)", transition: "transform 0.2s" },
                        }}
                      />
                    ))}
                  </Box>

                  <Divider sx={{ my: 3, background: "linear-gradient(to right, #1976d2, transparent)", height: 2 }} />

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: "Poppins",
                      mb: 2,
                      color: "#1976d2",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '""',
                        display: "inline-block",
                        width: 4,
                        height: 24,
                        backgroundColor: "#1976d2",
                        marginRight: 1.5,
                        borderRadius: 1,
                      },
                    }}
                  >
                    Project Links
                  </Typography>
                  <Grid container spacing={2} sx={{ pl: 1 }}>
                    {icons.map(
                      (iconSymbol) =>
                        selectedProject[iconSymbol.key] && (
                          <Grid item xs={12} sm={6} key={iconSymbol.id}>
                            <Button
                              variant="contained"
                              startIcon={iconSymbol.icon}
                              fullWidth
                              href={selectedProject[iconSymbol.key]}
                              target="_blank"
                              sx={{
                                textTransform: "none",
                                bgcolor: iconSymbol.color,
                                color: iconSymbol.color === "#333" ? "white" : getContrastColor(iconSymbol.color),
                                "&:hover": {
                                  bgcolor:
                                    iconSymbol.color === "#007bff"
                                      ? "#0069d9"
                                      : iconSymbol.color === "#6c757d"
                                        ? "#5a6268"
                                        : iconSymbol.color === "#333"
                                          ? "#222"
                                          : iconSymbol.color,
                                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                },
                                justifyContent: "flex-start",
                                py: 1.5,
                                boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                                borderRadius: 2,
                              }}
                            >
                              {iconSymbol.label} Site
                            </Button>
                          </Grid>
                        ),
                    )}
                  </Grid>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    borderTop: "1px solid #eee",
                    display: "flex",
                    justifyContent: "flex-end",
                    background: "#f8f9fa",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={handleCloseModal}
                    sx={{
                      bgcolor: "#1976d2",
                      "&:hover": {
                        bgcolor: "#1565c0",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      },
                      textTransform: "none",
                      borderRadius: 2,
                      px: 3,
                    }}
                  >
                    Close
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  )
}

export default Portfolio
