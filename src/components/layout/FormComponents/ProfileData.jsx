import Collapse from '@material-ui/core/Collapse';
import grey from '@material-ui/core/colors/grey';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import moment from 'moment';
import { useState } from 'react';
import { theme } from '../../../Theme/Theme';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '67%',
  },
  spacing: {
    margin: 10,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    alignItems: 'center',
    color: theme.palette.primary.main,
    transition: 'all 1s ease',
    '&:hover': {
      backgroundColor: grey[200],
      boxShadow: '0 0 5px 5px' + grey[200],
    },
  },
}));

export default function ProjectOverview(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [githubId, setGithubId] = useState(
    localStorage.time_stamp && localStorage.github_user
      ? localStorage.github_user
      : props.file.github_user,
  );
  const [linkedInId, setLinedInId] = useState(
    localStorage.time_stamp && localStorage.linkedin
      ? localStorage.linkedin
      : props.file.linkedin,
  );
  const [email, setEmail] = useState(
    localStorage.time_stamp && localStorage.email
      ? localStorage.email
      : props.file.email,
  );
  const [toggle, setToggle] = useState(false);
  const unsavedFiles = localStorage.time_stamp ? true : false;
  localStorage.setItem('unsavedFiles', unsavedFiles);

  const style = {
    transform: toggle ? 'rotate(-180deg)' : '',
    transition: 'transform 500ms ease',
  };

  const updateTimeStamp = () => {
    localStorage.setItem('time_stamp', String(moment(Date.now()).format()));
  };

  const handleChange = (e) => {
    console.log(e);
    switch (e.target.id) {
      case 'github_user':
        setGithubId(e.target.value);
        dispatch({ type: 'UPDATE_GITHUB', payload: { github_user: e.target.value }})
        break;
        case 'linkedin':
          setLinedInId(e.target.value);
          dispatch({ type: 'UPDATE_LINKEDIN', payload: { linkedin: e.target.value }})
          break;
          case 'email':
            setEmail(e.target.value);
            dispatch({ type: 'UPDATE_EMAIL', payload: { email: e.target.value }})
        break;
      default:
        break;
    }
    localStorage.setItem(`${e.target.id}`, `${e.target.value}`);
    updateTimeStamp();
  };

  // const handleChangeLinkedInId = (e) => {
  //   setLinedInId(e.target.value);
  //   localStorage.setItem('linkedin', `${e.target.value}`);
  //   updateTimeStamp();
  // };

  // const handleChangeEmail = (e) => {
  //   setEmail(e.target.value);
  //   localStorage.setItem('email', `${e.target.value}`);
  //   updateTimeStamp();
  // };

  return (
    <Container className={classes.column}>
      <Container className={classes.title} onClick={() => setToggle(!toggle)}>
        <Typography variant='h3'>Profile Data</Typography>
        <ArrowCircleDownIcon style={style} fontSize='large' />
      </Container>
      <Divider />
      <Collapse in={toggle}>
        <Typography variant='body1'>
          This is information is initially retrieved from your user profile. In
          most projects it will be the same however there may be situations
          where you will want to change this. For example if you are writing a
          readme for a joint project with another person and the repository is
          stored in the other person's Github account you will want to change
          the Github username to their username so it generates the correct
          shields. Otherwise they will all read either "0" or "none" depending
          on which shield it is. Updating your profile does NOT change the
          values for existing readme files. It only updates what will be used
          when creating a new readme after you make the change to your profile.
        </Typography>
      </Collapse>
      {props.file ? (
        <>
          <TextField
            className={classes.spacing}
            variant='outlined'
            id='github_user'
            value={githubId}
            label='Github Username'
            onChange={handleChange}
          />
          <TextField
            className={classes.spacing}
            variant='outlined'
            id='linkedin'
            value={linkedInId}
            label='LinkedIn URL'
            onChange={handleChange}
          />
          <TextField
            className={classes.spacing}
            variant='outlined'
            id='email'
            value={email}
            label='Email'
            onChange={handleChange}
          />
        </>
      ) : (
        ''
      )}
    </Container>
  );
}
