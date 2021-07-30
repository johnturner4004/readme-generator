import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/styles/makeStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Languages from '../../assets/languages.json';
import ProjectOverview from './ProjectOverview';
import Shields from './Shields';
import TechList from './TechList';

const useStyles = makeStyles({
  formCard: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});


export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [linkedInId, setLinkedInId] = useState('johnturner4004');
  const techIcon = useSelector(state => state.iconList);


  const handleBlur = () => {
    let code = (
 
//shields
//project overview
//built with
`## Getting Started

### Prerequisites

### Installation

## Usage

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
      <ProjectOverview /><br />
      <Shields /><br />
      <TechList /><br />
      <TextField onChange={(event)  => setLinkedInId(event.target.value)} onBlur={() => handleBlur()} label="LinkedIn Username" />
      
      {JSON.stringify(techIcon)}
    </Card>
  )
}