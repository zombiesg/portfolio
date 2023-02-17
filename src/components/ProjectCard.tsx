import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import { Project } from "../types/configTypes";
//https://stackoverflow.com/questions/68251172/how-to-pass-an-object-as-a-prop-in-react-using-typescript
//https://stackoverflow.com/questions/8468066/child-inside-parent-with-min-height-100-not-inheriting-height
//https://stackoverflow.com/questions/8468066/child-inside-parent-with-min-height-100-not-inheriting-height
function ProjectCard(props: { item: Project }) {
  return (
    <Card
      sx={{
        minHeight: "300px",
        borderColor: "#747fe0",
        borderWidth: "thick",
        display: "flex",
        flexDirection: "column",
      }}
      variant="outlined"
    >
      <Grid container sx={{ flexGrow: 1 }} columnSpacing={2}>
        <Grid
          item
          sm={4}
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <CardMedia sx={{ height: "100%" }} image={props.item.image} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="h5">{props.item.title}</Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {props.item.desc}
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: "16px" }}>
            {props.item.linkDemo !== "" ? (
              <Button
                href={props.item.linkDemo}
                target="_blank"
                variant="contained"
                sx={{ backgroundColor: "#747fe0" }}
              >
                Demo
              </Button>
            ) : null}
            {props.item.linkSrcCode !== "" ? (
              <Button
                href={props.item.linkSrcCode}
                target="_blank"
                variant="outlined"
                sx={{ color: "#747fe0" }}
              >
                Source
              </Button>
            ) : null}
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProjectCard;
