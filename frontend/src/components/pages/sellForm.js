import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const SellForm = ({ nameRef, priceRef, descriptionRef }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <label>Name:</label>
      </Grid>
      <Grid item xs={7}>
        <TextField inputref={nameRef} variant="standard" required />
      </Grid>
      <br />
      <Grid item xs={3}>
        <label>Price:</label>
      </Grid>
      <Grid item xs={7}>
        <TextField inputref={priceRef} variant="standard" required />
      </Grid>
      <br />
      <Grid item xs={3}>
        <label>Description:</label>
      </Grid>
      <Grid item xs={7}>
        <TextField
          inputref={descriptionRef}
          variant="standard"
          multiline
          required
        />
      </Grid>
    </Grid>
  );
};

export default SellForm;
