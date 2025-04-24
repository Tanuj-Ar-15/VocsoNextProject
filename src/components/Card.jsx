import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function MediaCard({ item }) {

  const [coordinates, setCoordinates] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = async (location) => {

    try {
      const response = await axios.get('http://api.positionstack.com/v1/forward', {
        params: {
          access_key: 'd518fe8188052c02c4ad08d62cd8a31a',
          query: location,
          limit: 1
        }
      });

      if (response.data.data.length > 0) {
        const result = response.data.data[0];
        setCoordinates({ latitude: result.latitude, longitude: result.longitude });


      } else {
        alert('No results found');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
    setOpen(true);
  };

  // console.log(coordinates);

  const handleClose = async () => {


    setOpen(false);
  };
  return (
    <>
      <div className='col-lg-3'>
        <div class="card main-card">
          {/* <img src="https://eycrk5cno2n.exactdn.com/wp-content/uploads/2022/02/The-Importance-of-High-Quality-Real-Estate-Photos-v3.jpg" class="card-img-top" alt="..." /> */}
          <img src={item.image ? item.image : item.imageSrc} className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text"><b>Location</b> : {item.location}</p>
            <p class="card-text"><b>Price</b> : {item.price}</p>
            <p class="card-text"><b>Builder</b> : {item.builder.slice(0, 30) + "..."}</p>
            <button type='button' className="btn btn-primary" onClick={() => handleOpen(item.location)}>
            <i class="fa-solid fa-location-dot me-2"></i> See on map
            </button>
          </div>
        </div>
      </div>


      <React.Fragment>
        {/* <Button onClick={() => handleOpen(item.location)}>Open Child Modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 800 }}>
            <h2 id="child-modal-title">Location of Property</h2>
            <iframe
              width="700"
              height="300"
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${coordinates?.latitude},${coordinates?.longitude}&z=15&output=embed`}>
            </iframe>
            <Button onClick={handleClose}>Close Map</Button>
          </Box>
        </Modal>
      </React.Fragment>
    </>
  );
}
