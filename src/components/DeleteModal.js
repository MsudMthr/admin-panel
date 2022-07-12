import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({
  setIsOpen,
  isOpen,
  id,
  name,
  setIsDeletedData,
  path,
}) {
  const handleClose = () => setIsOpen(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const deleteUserHandler = () => {
    setIsDeleted(true);
    setTimeout(() => {
      axios.delete(`/${path}/${id}`).then((res) => {
        if (res.status === 200) {
          setIsDeletedData(true);
          setIsDeleted(false);
          setIsOpen(false);
        }
      });
    }, 1000);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are You Sure for Delete {name}
          </Typography>

          {/* //!  delete button */}
          {isDeleted && (
            <LoadingButton loading variant="outlined">
              Submit
            </LoadingButton>
          )}
          {!isDeleted && (
            <Button
              onClick={deleteUserHandler}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
}
