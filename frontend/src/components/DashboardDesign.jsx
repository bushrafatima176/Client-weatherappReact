import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppField from './Fields';
import BasicTextFields from './Inputfields';


export default function MediaCard() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card sx={{
          maxWidth: 500, maxHeight: "35%", borderRadius: "10px",
          boxShadow: "0 14px 28px rgba(0,0,0,0.25)", marginRight: "2%", marginLeft: "2%"
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <BasicTextFields />
            </Typography>

          </CardContent>

        </Card>
        <Card sx={{
          maxWidth: 500, maxHeight: "35%", borderRadius: " 10px",
          boxShadow: "0 14px 28px rgba(0,0,0,0.25)", overflowY: "auto"
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <AppField />
            </Typography>

          </CardContent>

        </Card>
      </div>
    </>

  );
}