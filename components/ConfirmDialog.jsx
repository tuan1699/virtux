import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const ConfirmDialog = (props) => {
  const { confirmDialog, setConfirmDialog } = props;

  return (
    <div>
      <Dialog
        open={confirmDialog.isOpen}
        onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
      >
        <DialogTitle>{confirmDialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{confirmDialog.subTitle}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() =>
              setConfirmDialog({ ...confirmDialog, isOpen: false })
            }
          >
            Disagree
          </Button>
          <Button autoFocus onClick={confirmDialog.onConfirm}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
