import {useState} from "react";
import "./App.css";
import Card from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { TextField} from '@material-ui/core';
import axios from "axios";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});



export default function App() {
  const classes = useStyles();
  const [ads, setAds] = useState([]);
  const getData = async (e) =>{
    const ads = await axios.get("http://localhost:5000/search?keyword="+e.target.value);
    setAds(ads.data.info);
  }
  return (
    <div>
      <Box
      style={{
        textAlign:"center"
      }}
      sx={{
        width: 500,
        maxWidth: '100%',

      }}
    >
      <TextField  label="Search" defaultValue={"salesforce"} id="Search"  onChange={getData}/>
    </Box>
      <Grid container spacing={4} className={classes.gridContainer}>
        {ads.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              primaryText = {item.primaryText}
              headline = {item.headline}
              CTA = {item.CTA}
              imageUrl = {item.imageUrl}
              companyName = {item.complete_info[0].name}
              companyUrl = {item.complete_info[0].url}
            />
          </Grid>
        ))}
          
      </Grid>
    </div>
  );
}
