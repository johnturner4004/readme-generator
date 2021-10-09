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

const useStyles = makeStyles(() => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '67%',
  },
  spacing: {
    margin: '10px',
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
  key: {
    borderRadius: '3px',
    padding: '2px',
    color: '#fff',
    backgroundColor: '#000',
  },
}));

//project name

// DONE  github repo
// DONE description
// DONE image url
// CHANGE TO HEADER getting started
// DONE prerequisites
// DONE installation
// DONE usage
// DONE acknowledgements

export default function ProjectData(props) {
  const classes = useStyles();

  const [githubRepo, setGithubRepo] = useState(
    localStorage.time_stamp && localStorage.github_repository_name
      ? localStorage.github_repository_name
      : props.file.github_repository_name,
  );
  const [description, setDescription] = useState(
    localStorage.time_stamp && localStorage.description
      ? localStorage.description
      : props.file.description,
  );
  const [imageUrl, setImageUrl] = useState(
    localStorage.time_stamp && localStorage.image_url
      ? localStorage.image_url
      : props.file.image_url,
  );
  const [prerequisites, setPrerequisites] = useState(
    localStorage.time_stamp && localStorage.prerequisites
      ? localStorage.prerequisites
      : props.file.prerequisites,
  );
  const [installation, setInstillation] = useState(
    localStorage.time_stamp && localStorage.installation
      ? localStorage.installation
      : props.file.installation,
  );
  const [usage, setUsage] = useState(
    localStorage.time_stamp && localStorage.usage
      ? localStorage.usage
      : props.file.usage,
  );
  const [acknowledgements, setAcknowledgements] = useState(
    localStorage.time_stamp && localStorage.acknowledgements
      ? localStorage.acknowledgements
      : props.file.acknowledgements,
  );
  const [toggle, setToggle] = useState(false);

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
      case 'github_repository_name':
        setGithubRepo(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'image_url':
        setImageUrl(e.target.value);
        break;
      case 'prerequisites':
        setPrerequisites(e.target.value);
        break;
      case 'installation':
        setInstillation(e.target.value);
        break;
      case 'usage':
        setUsage(e.target.value);
        break;
      case 'acknowledgements':
        setAcknowledgements(e.target.value);
        break;
      default:
        break;
    }
    localStorage.setItem(`${e.target.id}`, e.target.value);
    updateTimeStamp();
  };

  return (
    <Container className={classes.column}>
      <Container className={classes.title} onClick={() => setToggle(!toggle)}>
        <Typography variant='h3'>Project Data</Typography>
        <ArrowCircleDownIcon style={style} fontSize='large' />
      </Container>
      <Divider />
      <Collapse in={toggle}>
        <Typography variant='body1'>
          This is data specific to this project. Use as much detail as possible.
          The better you describe how to install and use your product, the
          easier it will be for people to use it. All multiline sections will
          auto expand if you need more space. Using{' '}
          <kbd className={classes.key}>Enter</kbd> or{' '}
          <kbd className={classes.key}>return</kbd> will give you a new line if
          you want to use multiple paragraphs or to make a list of items.
        </Typography>
      </Collapse>
      <TextField
        className={classes.spacing}
        variant='outlined'
        id='github_repository_name'
        label='Github Repository Name'
        value={githubRepo}
        onChange={handleChange}
      />
      <TextField
        multiline
        minRows={5}
        className={classes.spacing}
        variant='outlined'
        id='description'
        label='Description'
        value={description}
        onChange={handleChange}
      />
      <TextField
        className={classes.spacing}
        variant='outlined'
        id='imageUrl'
        label='Image URL'
        value={imageUrl}
        onChange={handleChange}
      />
      <TextField
        multiline
        minRows={5}
        className={classes.spacing}
        variant='outlined'
        id='prerequisites'
        label='Prerequisites'
        placeholder='List any software, installation instructions for that software, and/or sources for that software that a person would need to install before attempting to replicate your project'
        value={prerequisites}
        onChange={handleChange}
      />
      <TextField
        multiline
        minRows={5}
        className={classes.spacing}
        variant='outlined'
        id='installation'
        label='Installation'
        placeholder='List the instructions a person would need to follow to get your project up and running'
        value={installation}
        onChange={handleChange}
      />
      <TextField
        multiline
        minRows={5}
        className={classes.spacing}
        variant='outlined'
        id='usage'
        label='Usage'
        placeholder='Tell a person how to use your project. List steps if necessary to use your project'
        value={usage}
        onChange={handleChange}
      />
      <TextField
        multiline
        minRows={5}
        className={classes.spacing}
        variant='outlined'
        id='acknowledgements'
        label='Acknowledgements'
        placeholder='Who helped you make this project a reality? Friends? Family? Contributors? Instructors?'
        value={acknowledgements}
        onChange={handleChange}
      />
    </Container>
  );
}
