import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/login');
  };

  return (
    <AppBar color='primary' position='relative'>
      <Typography variant='h1'>README.md Generator</Typography>
      <Button variant='outlined' onClick={() => handleClick()}>
        Log out
      </Button>
    </AppBar>
  );
}
