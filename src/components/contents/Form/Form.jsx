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

const useStyles = makeStyles({
  formCard: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  techList: {
    display: 'flex',
    flexDirection: 'column',
  },
});


export default function Form() {
  const [checked, setChecked] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [linkedInId, setLinkedInId] = useState('johnturner4004');
  const techIcon = useSelector(state => state.iconList);


  const handleBlur = () => {
    let code = (
 
//shields
//project overview
`

## Built With

${techIcon}

## Getting Started

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
  
  function handleChange(event) {
    let i = checked.indexOf(event.target.name);
    if (i === -1) {
      setChecked([...checked, event.target.name]);
      makeTechTag([...checked, event.target.name]);
    } else {
      let temp = [];
      for (let j = 0; j < checked.length; j++) {
        if (j !== i) {
          temp.push(checked[j]);
        }
        setChecked(temp);
        makeTechTag(temp);
      }
    }
    handleBlur();
  }
  
  const makeTechTag = (indexArr) => {
    let tagList = '';
    for (let i = 0; i < indexArr.length; i++) {
      let link = Languages[Number(indexArr[i])].image;
      tagList += `<img src="${link}" height="40" width="40" />`;
      console.log(link, tagList);
    }
    dispatch ({ type: 'UPDATE_ICONS' , payload: tagList });
  }
  
  useEffect(() => {
    handleBlur()
  }, []);

  return (
    <Card className={classes.formCard}>
      <ProjectOverview />
      <Shields />
      <TextField onChange={(event)  => setLinkedInId(event.target.value)} onBlur={() => handleBlur()} label="LinkedIn Username" />
      <FormControl>
      {Languages.map(language => {
        return (
          <div className={classes.techList} key={language.id}>
            <img src={language.image} alt={language.name} />
            <FormControlLabel 
              control={<Checkbox color="primary" 
                onChange={handleChange} 
                name={language.id} 
              />} 
              label={language.name} 
            />
          </div>
      )})}
      </FormControl>
      {JSON.stringify(techIcon)}
    </Card>
  )
}