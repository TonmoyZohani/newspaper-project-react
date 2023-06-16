import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const NewsCard = ({ news }) => {
  console.log(news);

  const { _id, title, details, author, image_url, rating } = news;
  console.log(_id, title, details);

  return (
    <Card sx={{ maxWidth: 700 }}>
      <Box sx={{display:'flex',alignItems:'center',gap:'10px',p:'10px 0px 10px 15px',bgcolor:'#C2E8DA'}}>
        <img
          src={author.img}
          style={{ width: "60px", height: "60px", borderRadius: "50px" }}
        />
        <Box>
          <Typography>{author.name}</Typography>
          <Typography>{author.published_date}</Typography>
        </Box>
      </Box>

      <Typography
        sx={{ fontSize: "25px", fontWeight: "bold", mb: "10px", p: "15px" }}
      >
        {title}
      </Typography>

      <CardMedia
        component="img"
        height="150"
        image={image_url}
        alt="Paella dish"
      />

      <CardContent>
        <Typography sx={{ fontSize: "15px" }}>{details}</Typography>

        <Box sx={{ borderBottom: "2px solid pink", mt: "10px" }}></Box>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "10px" }}
        >
          <Box sx={{ display: "flex" }}>
            <Rating name="read-only" value={rating.number} readOnly />
            <Typography sx={{ pl: "10px" }}>{rating.number}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <RemoveRedEyeIcon />
            <Typography sx={{ pl: "10px" }}>499</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
