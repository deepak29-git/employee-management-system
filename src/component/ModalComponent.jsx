import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/features/user/userSlice";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "500px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ModalComponent({ open, setOpen, selectedUser }) {
  const userData = useSelector((state) => state.users.user);

  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const shortListHandler = () => {
    const checkUser = userData.some((item) => item.id === selectedUser.id);
    if (checkUser) {
      alert("already exist");
    } else {
      dispatch(setUser(selectedUser));
    }
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Candidate Information
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Button variant="contained" onClick={shortListHandler}>
            Shortlist
          </Button>
          <div>name:{selectedUser.firstName}</div>
          <div>Age:{selectedUser.age}</div>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
