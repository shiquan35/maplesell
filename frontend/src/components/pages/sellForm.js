import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const SellForm = ({
  name,
  price,
  description,
  handleListingName,
  handleListingPrice,
  handleListingDescription,
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <label>Name:</label>
      </Grid>
      <Grid item xs={7}>
        <TextField
          value={name}
          onChange={handleListingName}
          variant="standard"
          required
        />
      </Grid>
      <br />
      <Grid item xs={3}>
        <label>Price:</label>
      </Grid>
      <Grid item xs={7}>
        <TextField
          value={price}
          onChange={handleListingPrice}
          variant="standard"
          required
        />
      </Grid>
      <br />
      <Grid item xs={3}>
        <label>Description:</label>
      </Grid>
      <Grid item xs={7}>
        <TextField
          value={description}
          onChange={handleListingDescription}
          variant="standard"
          multiline
          required
        />
      </Grid>
    </Grid>
  );
};

export default SellForm;
