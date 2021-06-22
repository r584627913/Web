import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent
} from '@material-ui/core';
// import SettingsNotifications from 'src/components/settings/SettingsNotifications';
// import SettingsPassword from 'src/components/settings/SettingsPassword';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <TextField
                    placeholder="Product Name"
                    variant="outlined"
                    name="ProdName"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Product ID"
                    variant="outlined"
                    name="ProdID"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Unit Price"
                    variant="outlined"
                    name="UnitPrice"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    placeholder="Cost"
                    variant="outlined"
                    name="Cost"
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                  >
                    Add new product
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ pt: 3 }}>
          {/* <SettingsPassword /> */}
        </Box>
      </Container>
    </Box>
  </>
);

export default SettingsView;
