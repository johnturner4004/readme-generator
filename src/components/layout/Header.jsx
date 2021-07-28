import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

export default function Header() {
  return (
    <AppBar color='primary' position='relative'>
      <Typography variant='h1'>README.md Generator</Typography>
    </AppBar>
  );
};