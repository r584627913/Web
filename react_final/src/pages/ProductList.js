import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  Container,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Search as SearchIcon } from 'react-feather';
import { useState, useEffect } from 'react';
// import products from 'src/__mocks__/products';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductList = () => {
  const classes = useStyles();
  const [productList, setProductList] = useState();
  useEffect(() => {
    fetch('https://fs.mis.kuas.edu.tw/~s1106137135/webFinalPHP/searchProduct.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((err) => {
        setProductList(err);
      });
  }, []);
  let list = (<></>);
  if (productList !== undefined) {
    const arr = productList.product;
    list = (arr.map((product) => (
      <TableRow key={product.ProdID}>
        <TableCell>{product.ProdName}</TableCell>
        <TableCell>{product.ProdID}</TableCell>
        <TableCell>{product.UnitPrice}</TableCell>
        <TableCell>{product.Cost}</TableCell>
      </TableRow>
    ))
    );
  }
  return (
    <>
      <Helmet>
        <title>Products | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Button
                variant="contained"
              >
                Add new product
              </Button>
              <Button
                sx={{ mx: 2 }}
                variant="contained"
              >
                Update products
              </Button>
              <Button
                variant="contained"
                color="secondary"
              >
                Delete products
              </Button>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Box>
                <Card>
                  <CardContent>
                    <Box sx={{ maxWidth: 500 }}>
                      <TextField
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SvgIcon
                                fontSize="small"
                                color="action"
                              >
                                <SearchIcon />
                              </SvgIcon>
                            </InputAdornment>
                          )
                        }}
                        placeholder="Search product"
                        variant="outlined"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Button
                  variant="contained"
                >
                  Search products
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ pt: 3 }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product ID</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;
