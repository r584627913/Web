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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState } from 'react';

const SettingsView = () => {
  const [orderList, setOrderList] = useState();
  let dateGap = {
    startDate: '2016-01-02',
    endDate: '2018-12-25'
  };

  const changeHandler = (e) => {
    dateGap = {
      ...dateGap,
      [e.target.name]: e.target.value
    };
    console.log(dateGap);
  };

  const search = () => {
    fetch('https://fs.mis.kuas.edu.tw/~s1106137135/webFinalPHP/searchOrder.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dateGap)
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    search();
  }, []);

  let tableContent = (<></>);
  if (orderList) {
    const arr = orderList.orderList;
    if (arr) {
      tableContent = (arr.map((order) => (
        <TableRow key={order.OrderId.concat(order.OrderDate, order.ProdId, order.Qty)}>
          <TableCell>{order.OrderId}</TableCell>
          <TableCell>{order.EmpId}</TableCell>
          <TableCell>{order.CustId}</TableCell>
          <TableCell>{order.OrderDate}</TableCell>
          <TableCell>{order.Descript}</TableCell>
          <TableCell>{order.ProdId}</TableCell>
          <TableCell>{order.Qty}</TableCell>
          <TableCell>{order.Discount}</TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="secondary"
              value={order.OrderId}
            // onClick={deleteProduct}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))
      );
    }
  }
  return (
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
                      name="startDate"
                      label="Start Date"
                      type="date"
                      defaultValue="2016-01-02"
                      onChange={changeHandler}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="endDate"
                      label="End Date"
                      type="date"
                      defaultValue="2018-12-25"
                      onChange={changeHandler}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={search}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ pt: 3 }}>
            <Card>
              <CardContent>
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Empolyee ID</TableCell>
                        <TableCell>Customer ID</TableCell>
                        <TableCell>Order Date</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableContent}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SettingsView;
