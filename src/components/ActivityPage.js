import React from 'react';
import { Container, Grid, Typography, Box, Card, CardActionArea, CardContent, CardMedia, Button } from '@mui/material';

import Swimmers from '../../src/assets/images/swimmers.svg';
import Fighters from '../../src/assets/images/fighters.svg';
import Riding from '../../src/assets/images/riding.svg';

const ActivityPage = () => {
  return (
    <Container maxWidth="false" sx={{ height: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ width: '636px', height: '134px', mt: '20px', ml: '40px' }}>
            </Box>
            <Box sx={{ width: '426px', height: '48px', mt: '14px', ml: '40px' }}>
            </Box>
            <Card sx={{ width: '513px', height: '288px', mt: '96px', ml: '62px', borderRadius: '10px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Swimmers}
                  alt="Swim"
                  sx={{ backgroundSize: 'cover', height: '100%' }}
                />
                <CardContent sx={{ position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
                  <Box position="absolute" top="0" left="0" width="100%" height="100%" />
                  <Box
                    position="relative"
                    zIndex={1}
                    height="100px"
                    width="40%"
                    padding="5px 0 0 50px"
                    color="white"
                    textAlign="start"
                  >
                    <Typography variant="h5" gutterBottom>
                      Swimming
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      22 Acres, Pollution-Free,
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      World-Class
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            <Button variant="contained" sx={{ mt: '161px', ml: '50px', width: '371px', height: '49px', borderRadius: '30px' }}>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
                SEE ALL ACTIVITIES
              </Typography>
            </Button>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30%' }}>
            <Card sx={{ width: '513px', height: '288px', mt: '20%', ml: '14%', borderRadius: '10px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Fighters}
                  alt="Fighter"
                  sx={{ backgroundSize: 'cover', height: '100%' }}
                />
                <CardContent sx={{ position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
                  <Box position="absolute" top="0" left="0" width="100%" height="100%" />
                  <Box
                    position="relative"
                    zIndex={1}
                    height="100px"
                    width="40%"
                    padding="5px 0 0 50px"
                    color="white"
                    textAlign="start"
                  >
                    <Typography variant="h5" gutterBottom>
                      Taekwondo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of Taekwondo activity...
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: '513px', height: '288px', mt: '20%', ml: '14%', borderRadius: '10px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Riding}
                  alt="Riding"
                  sx={{ backgroundSize: 'cover', height: '100%' }}
                />
                <CardContent sx={{ position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
                  <Box position="absolute" top="0" left="0" width="100%" height="100%" />
                  <Box
                    position="relative"
                    zIndex={1}
                    height="100px"
                    width="40%"
                    padding="5px 0 0 50px"
                    color="white"
                    textAlign="start"
                  >
                    <Typography variant="h5" gutterBottom>
                      Horse Riding
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description of Horse Riding activity...
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ActivityPage;
