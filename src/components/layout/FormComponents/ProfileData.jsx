import Collapse from '@material-ui/core/Collapse';
import grey from '@material-ui/core/colors/grey';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { theme } from '../../../Theme/Theme';

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
  divider: {
    // background: ,
  },
}));

export default function ProjectOverview(props) {
  // const dispatch = useDispatch();
  const classes = useStyles();

  const file = props.file;

  // const user = useSelector((store) => store.user);
  // const file = useSelector((store) => store.readme.selected[0]);

  const [githubId, setGithubId] = useState('');
  const [linkedInId, setLinedInId] = useState('');
  const [email, setEmail] = useState('');
  // const [timestamp, setTimestamp] = useState('');
  const [toggle, setToggle] = useState(false);
  const unsavedFiles = localStorage.time_stamp ? true : false;
  localStorage.setItem('unsavedFiles', unsavedFiles)
  console.log(localStorage.unsavedFiles);

  useEffect(() => {
    if (file) {
      if (unsavedFiles) {
        if (localStorage.github_user) {
          setGithubId(localStorage.github_user);
        }
        if (localStorage.linkedin) {
          setLinedInId(localStorage.linkedin);
        }
        if (localStorage.email) {
          setEmail(localStorage.email);
        }
      } else {
        localStorage.setItem('github', `${file.github_user}`);
        localStorage.setItem('linkedin', `${file.github}`);
        localStorage.setItem('github', `${file.github}`);
      }
    }
  }, [file, unsavedFiles]);

  const style = {
    transform: toggle ? 'rotate(-180deg)' : '',
    transition: 'transform 500ms ease',
  };

  const updateTimeStamp = () => {
    localStorage.setItem('time_stamp', String(moment(Date.now()).format()));
  };

  const handleChangeGithub = (e) => {
    setGithubId(e.target.value);
    localStorage.setItem('github', `${e.target.value}`);
    updateTimeStamp();
  };

  const handleChangeLinkedInId = (e) => {
    setLinedInId(e.target.value);
    localStorage.setItem('linkedin', `${e.target.value}`);
    updateTimeStamp();
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    localStorage.setItem('email', `${e.target.value}`);
    updateTimeStamp();
  };

  return (
    <Container className={classes.column}>
      <Container className={classes.title} onClick={() => setToggle(!toggle)}>
        <Typography variant='h3'>Profile Data</Typography>
        <ArrowCircleDownIcon style={style} fontSize='large' />
      </Container>
      <Divider />
      <Collapse in={toggle}>
        <Typography variant='body1'>
          This is information stored in your user profile. In most projects it
          will be the same however there may where there may be an exception to
          that. For instance if you are writing a readme for a joint project
          that is stored in someone elses Github account you will want to change
          the Github username to their username so it generates the correct
          shields. Otherwise they will all read either "0" or "none" depending
          on which shield it is.
        </Typography>
      </Collapse>
      <TextField
        className={classes.spacing}
        variant='outlined'
        id='githubId'
        value={githubId}
        label='Github Username'
        onChange={handleChangeGithub}
      />
      <TextField
        className={classes.spacing}
        variant='outlined'
        id='linkedInId'
        value={linkedInId}
        label='LinkedIn URL'
        onChange={handleChangeLinkedInId}
      />
      <TextField
        className={classes.spacing}
        variant='outlined'
        id='email'
        value={email}
        label='Email'
        onChange={handleChangeEmail}
      />
    </Container>
  );
}
