import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import TextField from "@material-ui/core/TextField";

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    width: drawerWidth,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 240,
    fontSize: 30,
  },
  fixedHeight: {
    height: 240,
  },
}));

const pratos = [
  {
    photo: "https://foodish-api.herokuapp.com/images/biryani/biryani4.jpg",
    nome: "Sla1",
    preço: 14.99,
    id: "1",
    quantidade: 0,
  },
  {
    photo:
      "https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken16.jpg",
    nome: "Sla2",
    preço: 52.99,
    id: "2",
    quantidade: 0,
  },
  {
    photo: "https://foodish-api.herokuapp.com/images/dosa/dosa10.jpg",
    nome: "Enroladinho",
    preço: 5.99,
    id: "3",
    quantidade: 0,
  },
  {
    photo: "https://foodish-api.herokuapp.com/images/burger/burger13.jpg",
    nome: "Ramburgue",
    preço: 11.99,
    id: "4",
    quantidade: 0,
  },
  {
    photo: "https://foodish-api.herokuapp.com/images/biryani/biryani61.jpg",
    nome: "Comida",
    preço: 2.99,
    id: "5",
    quantidade: 0,
  },
  {
    photo: "https://foodish-api.herokuapp.com/images/rice/rice17.jpg",
    nome: "Comida2",
    preço: "7,00",
    id: "6",
    quantidade: 0,
  },
  {
    photo: "https://foodish-api.herokuapp.com/images/pizza/pizza76.jpg",
    nome: "Pitsa",
    preço: 10.0,
    id: "7",
    quantidade: 0,
  },
  {
    photo: "https://foodish-api.herokuapp.com/images/samosa/samosa7.jpg",
    nome: "Coxinha",
    preço: 1.99,
    id: "8",
    quantidade: 0,
  },
  {
    photo:
      "https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken12.jpg",
    nome: "Sla4",
    preço: 2.99,
    id: "9",
    quantidade: 0,
  },
  {
    photo: "https://foodish-api.herokuapp.com/images/burger/burger24.jpg",
    nome: "Ramburgue2",
    preço: 20.99,
    id: "10",
    quantidade: 0,
  },
];

export default function mesas() {
  const classes = useStyles();
  const router = useRouter();
  const [id, setId] = useState();
  const [open, setOpen] = useState(true);

  const [pedidos, setPedidos] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setId(router.query);
  }, [router.query]);

  return (
    <>
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBarShift}>
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {id ? <>Mesa: {id.mesas}</> : <></>}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" className={classes.drawerPaper}>
          <div className={classes.toolbarIcon}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Pedidos:
            </Typography>
          </div>

          <Divider />
          <List style={{ height: "100%", overflowY: "scroll" }}>
            {pedidos.map((e) => (
              <div key={e.id}>
                <Paper elevation={3} style={{ borderRadius: "16px" }}>
                  <Box border={1} borderColor="primary.main" borderRadius={16}>
                    <ListItem button>
                      <img
                        src={e.photo}
                        style={{ width: "100px", height: "75px" }}
                      />
                      <div style={{ display: "block" }}>
                        <Typography variant="h5" component="h2">
                          {e.nome}
                        </Typography>
                        <Typography variant="h5" component="h2">
                          R$ {e.preço}
                        </Typography>
                      </div>
                      <div style={{ display: "block" }}>
                        <h5>Quantidade: {e.quantidade}</h5>
                        <DeleteOutlinedIcon />
                      </div>
                    </ListItem>
                  </Box>
                </Paper>
                <div style={{ height: "10px" }} />
              </div>
            ))}
          </List>

          <Divider />
          <Button variant="contained" style={{backgroundColor: "#00e676"}}>
            Finalizar o Pedido
          </Button>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              {pratos.map((e) => (
                <Grid item xs={6} md={3} lg={3} key={e.id}>
                  <Paper elevation={3} style={{ borderRadius: "16px" }}>
                    <Box
                      border={1}
                      borderColor="primary.main"
                      borderRadius={16}
                    >
                      <ListItem
                        className={classes.paper}
                        button
                        onClick={() => {
                          if (pedidos.length === 0) {
                            const x = { ...e, quantidade: 1 };
                            setPedidos(pedidos.concat(x));
                          }

                          {
                            pedidos.map((res) => {
                              if (res.id === e.id) {
                                res.quantidade += 1;
                              } else {
                                const x = { ...e, quantidade: 1 };
                                setPedidos(pedidos.concat(x));
                              }
                            });
                          }
                        }}
                      >
                        <img
                          src={e.photo}
                          style={{ width: "170px", height: "100px" }}
                        />
                        <Typography gutterBottom variant="h5" component="h2">
                          {e.nome}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                          R$ {e.preço}
                        </Typography>
                      </ListItem>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
}
