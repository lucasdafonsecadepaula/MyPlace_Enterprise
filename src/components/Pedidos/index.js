import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "../../Link";

export default function Pedidos() {
  const classes = useStyles();
  const nDeMesa = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {nDeMesa.map((e) => (
          <Grid item xs={6} md={3} lg={3} key={e}>
            <Link href={`/pedidos/mesa/${e}`} style={{textDecoration:"none"}}>
              <Paper elevation={3} style={{ borderRadius: "16px" }}>
                <Box border={1} borderColor="primary.main" borderRadius={16}>
                  <ListItem className={classes.paper} button>
                    {"Mesa: "}
                    {e}
                  </ListItem>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
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
}));
