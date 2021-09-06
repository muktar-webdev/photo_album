import "./App.css";
import {
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
//--import material-ui style file --//
import useStyles from "./Styles";

function App() {
  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6"> Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              guttersBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone! This is a Photo Album & I'm trying to make this
              sentence as long as possible .So we can see how does it look like
              on the Screen
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                  <Button variant="outlined" color="primay">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* --Container for making Card Element -- */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {/* --Card Item 1-- */}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    title="Images Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography variant="">
                      This is a media card.You can use this section describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <fotter>
        <Typography variant="h6" align="center" guttorBottom>
          Nisht Hasan Muktar
        </Typography>
      </fotter>
    </>
  );
}

export default App;
