import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({
  children,
  label,
  title,
  Buttons,
  open: propOpen,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!open && propOpen) {
    // HACK: Allows passing a prop to toggle the open state
    setOpen(true);
  }

  return (
    <Fragment>
      {label ? (
        <Button variant="outlined" onClick={handleClickOpen}>
          {label}
        </Button>
      ) : null}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...rest}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent className="dialog-body">
          <DialogContentText id="alert-dialog-description">
            {typeof children === "function"
              ? children({ handleClose })
              : children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>{(Buttons && <Buttons />) || null}</DialogActions>
      </Dialog>
    </Fragment>
  );
}
