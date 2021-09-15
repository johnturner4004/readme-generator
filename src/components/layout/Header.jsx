import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <AppBar color='primary' position='relative'>
      <Typography variant='h1'>README.md Generator</Typography>
      <Button variant='outlined' onClick={() => handleClick()}>Log out</Button>
    </AppBar>
  );
};