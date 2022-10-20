import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContentText";

const BuyDialog = ({ buyingPopup, handleBuy, handleClose }) => {
  return (
    <Dialog
      open={buyingPopup}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="formFonts"
    >
      <DialogTitle id="alert-dialog-title">{"Buying?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Do you really wish to buy this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button className="shopButton" onClick={handleBuy}>
          BUY
        </button>
        <button className="shopButton" onClick={handleClose}>
          CANCEL
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default BuyDialog;
