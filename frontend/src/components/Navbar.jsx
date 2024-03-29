import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DetailedInfo from "./Card"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height:'90%',
  bgcolor: '#bdd0fb',
  border: '2px solid #565BEA',
  boxShadow: 24,
  borderRadius:10,
  p: 2,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}></Button><br/>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <DetailedInfo cityInfo={props.cityInfo}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}