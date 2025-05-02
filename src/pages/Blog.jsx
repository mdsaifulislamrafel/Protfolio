"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  InputAdornment,
  Divider,
  Avatar,
  Button,
} from "@mui/material"
import { IoSearch } from "react-icons/io5"
import { FaCalendarAlt } from "react-icons/fa"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to create your first component.",
    image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    category: "React",
    date: "May 02, 2025",
    author: "Md Saiful Islam Rafel",
    authorAvatar: "portfolio.png",
  },
  {
    id: 2,
    title: "Building Responsive UIs with Material UI",
    excerpt: "Discover how to create beautiful user interfaces using Material UI components.",
    image: "https://tillitsdone.com/_astro/Accessible-UIs-with-Material-UI-1732633167696-595a5ce721d69c9272de896ebc80c5a4.Dt0D60fF_FcDsb.webp",
    category: "UI/UX",
    date: "May 02, 2025",
    author: "Md Saiful Islam Rafel",
    authorAvatar: "portfolio.png",
  },
  {
    id: 3,
    title: "Next.js: The React Framework for Production",
    excerpt: "Explore the features that make Next.js the ideal framework for React applications.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTd1mK7KNQwtDYyM30oYRFPtLGSWsggwRgMw&s",
    category: "Next.js",
    date: "May 05, 2025",
    author: "Md Saiful Islam Rafel",
    authorAvatar: "portfolio.png",
  },
  {
    id: 4,
    title: "State Management with Redux",
    excerpt: "Learn how to manage application state effectively using Redux.",
    image: "https://dropinblog.net/34256781/files/featured/learn-redux-toolkit-for-state-management-in-react.png",
    category: "React",
    date: "May 05, 2025",
    author: "Md Saiful Islam Rafel",
    authorAvatar: "portfolio.png",
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox",
    excerpt: "Understanding when to use CSS Grid and when to use Flexbox for layouts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WYjgW_yz284bhQqnj3D82as1W2aWNonJHA&s",
    category: "CSS",
    date: "May 08, 2025",
    author: "Mike Brown",
    authorAvatar: "portfolio.png",
  },
  {
    id: 6,
    title: "TypeScript Best Practices",
    excerpt: "Improve your TypeScript code with these best practices and tips.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHjywifRmaDFdPnP-DSQbt0LylfrmnswiRg&s",
    category: "TypeScript",
    date: "May 07, 2025",
    author: "Md Saiful Islam Rafel",
    authorAvatar: "portfolio.png",
  },
]

// Get unique categories
const categories = [...new Set(blogPosts.map((post) => post.category))]

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Box id="blog" sx={{ flexGrow: 1, mt: 10, pb: 5, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              mb: 2,
              backgroundImage: "linear-gradient(45deg, #333, #666)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Blog
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: "700px", mx: "auto" }}>
            Explore our latest articles, tutorials, and insights on web development, design, and technology.
          </Typography>
        </Box>

        {/* Search and Filter */}
        <Box sx={{ mb: 5 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoSearch size={20} />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: 2, bgcolor: "white" },
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip
                  label="All"
                  onClick={() => setSelectedCategory("All")}
                  sx={{
                    bgcolor: selectedCategory === "All" ? "#333" : "#f0f0f0",
                    color: selectedCategory === "All" ? "white" : "#555",
                    fontWeight: 500,
                    "&:hover": { bgcolor: selectedCategory === "All" ? "#222" : "#e0e0e0" },
                  }}
                />
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    onClick={() => setSelectedCategory(category)}
                    sx={{
                      bgcolor: selectedCategory === category ? "#333" : "#f0f0f0",
                      color: selectedCategory === category ? "white" : "#555",
                      fontWeight: 500,
                      "&:hover": { bgcolor: selectedCategory === category ? "#222" : "#e0e0e0" },
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <Grid container spacing={4}>
            {filteredPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
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
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          bgcolor: "#333",
                          color: "white",
                          fontWeight: 500,
                        }}
                      />
                      <Box sx={{ display: "flex", alignItems: "center", color: "#777", fontSize: "0.8rem" }}>
                        <FaCalendarAlt size={12} style={{ marginRight: "4px" }} />
                        {post.date}
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        mb: 1.5,
                        lineHeight: 1.3,
                        height: "3.9rem",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 3,
                        height: "4.5rem",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {post.excerpt}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar src={post.authorAvatar} sx={{ width: 30, height: 30, mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {post.author}
                        </Typography>
                      </Box>
                      <Button
                        size="small"
                        sx={{
                          color: "#333",
                          fontWeight: 500,
                          "&:hover": {
                            bgcolor: "rgba(0,0,0,0.05)",
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No articles found matching your search.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#333",
                "&:hover": { bgcolor: "#222" },
                borderRadius: 2,
              }}
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </Box>
        )}

        {/* Pagination */}
      </Container>
    </Box>
  )
}

export default Blog
