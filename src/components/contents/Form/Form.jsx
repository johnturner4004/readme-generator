import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/styles/makeStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GettingStarted from './GettingStarted';
import ProjectOverview from './ProjectOverview';
import Shields from './Shields';
import TechList from './TechList';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  formCard: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
});


export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [linkedInId, setLinkedInId] = useState('johnturner4004');


  const handleBlur = () => {
    let code = (
 
//shields
//project overview
//built with
`## Usage

## License

## Acknowledgements

## Contacts

<a href="https://www.linkedin.com/in/${linkedInId}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>`
);
dispatch({ type: 'UPDATE_TEXT' , payload: { code: code } })
}
  
  useEffect(() => {
    handleBlur()
  }, []);

  return (
    <Card className={classes.formCard}>
      <ProjectOverview />
      <Divider className={classes.divider} />
      <Shields />
      <Divider className={classes.divider} />
      <TechList />
      <Divider className={classes.divider} />
      <GettingStarted />
      <Divider className={classes.divider} />
      <TextField onChange={(event)  => setLinkedInId(event.target.value)} onBlur={() => handleBlur()} label="LinkedIn Username" />
    </Card>
  )
}