import Collapse from '@material-ui/core/Collapse';
import grey from '@material-ui/core/colors/grey';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useEffect, useState } from 'react';
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

  // const file = useSelector((store) => store.readme.selected[0]);
  const file = props.file;
  console.log(file);

  const [githubRepo, setGithubRepo] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [prerequisites, setPrerequisites] = useState('');
  const [installation, setInstillation] = useState('');
  const [usage, setUsage] = useState('');
  const [acknowledgments, setAcknowledgments] = useState('');
  const [toggle, setToggle] = useState(false);
  const unsavedFiles = localStorage.unsavedFiles === 'true';

  useEffect(() => {
    if (unsavedFiles) {
      setGithubRepo(localStorage.githubRepo);
      setDescription(localStorage.description);
      setImageUrl(localStorage.setImageUrl);
      setPrerequisites(localStorage.prerequisites);
      setInstillation(localStorage.installation);
      setUsage(localStorage.usage);
      setAcknowledgments(localStorage.acknowledgments);
    } else {
      localStorage.setItem('github_repository_name',`${file.github_repository_name}`);
      localStorage.setItem('description', `${file.description}`);
      localStorage.setItem('image_url', `${file.image_url}`);
      localStorage.setItem('prerequisites', `${file.prerequisites}`);
      localStorage.setItem('installation', `${file.installation}`);
      localStorage.setItem('usage', `${file.usage}`);
      localStorage.setItem('acknowledgments', `${file.acknowledgments}`);
    }
  }, [file, unsavedFiles]);

  const style = {
    transform: toggle ? 'rotate(-180deg)' : '',
    transition: 'transform 500ms ease',
  };

  const handleChange = (e) => {
    console.log(e);
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
          you want multiple paragraphs or list items.
        </Typography>
      </Collapse>
      <TextField
        className={classes.spacing}
        variant='outlined'
        id='githubRepo'
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
      />
      <TextField
        className={classes.spacing}
        variant='outlined'
        id='imageUrl'
        label='Image URL'
        value={imageUrl}
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
      />
      <TextField
        multiline
        minRows={5}
        className={classes.spacing}
        variant='outlined'
        id='acknowledgments'
        label='Acknowledgments'
        placeholder='Who helped you make this project a reality? Friends? Family? Contributors? Instructors?'
        value={acknowledgments}
      />
    </Container>
  );
}
