import React from 'react';
import './App.css';
import { data } from "./data.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Grid from "@material-ui/core/Grid";
import { Container, makeStyles, createStyles } from '@material-ui/core';

function App() {
  const useStyles = makeStyles(theme =>
    createStyles({
      cardGrid: {
        flexGrow: 1,
        paddingTop: 16
      }
    }),
  );
  return (
    <div>
      <h1 style={{ marginTop: "30px", marginLeft: "57px", color: "brown", fontStyle: "italic" }}>Car Dealership Catalog</h1>
      <Container className={useStyles.cardGrid} maxWidth="xl" style={{ marginTop: "80px" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          spacing={2}
        >
          {
            data.map((product) =>
              <Card
                style={{
                  width: 400,
                  direction: "row",
                  justifyContent: "space-evenly",
                  alignItems: "stretch",
                  marginBottom: 40
                }}
                key={product.name}
              >
                <CardContent>
                  <Typography
                    style={{ fontSize: 14 }}
                    color="textSecondary"
                    gutterBottom
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    style={{
                      marginBottom: 12,
                    }}
                    color="textSecondary"
                  >
                    <img src={product.image} height={200} width={300}></img>
                  </Typography>
                  <Typography variant="body2" component="p">
                    {product.price}
                  </Typography>

                </CardContent>
              </Card>
            )
          }

        </Grid>
      </Container>
    </div >
  );
}

export default App;
