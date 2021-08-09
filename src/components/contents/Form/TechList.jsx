import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Languages from '../../assets/languages.json';

const useStyles = makeStyles({
  techList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  iconRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    width: 40,
    height: 40,
  },
})

export default function TechList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);

  function handleChange(event) {
    let i = checked.indexOf(event.target.value);
    if (i === -1) {
      setChecked(([...checked, event.target.value]).sort((a, b) => a - b));
      makeTechTag(([...checked, event.target.value]).sort((a, b) => a - b));
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
  }

  const makeTechTag = (indexArr) => {
    let tagList = '';
    for (let i = 0; i < indexArr.length; i++) {
      let icon = Languages[Number(indexArr[i])].icon;
      let url = Languages[Number(indexArr[i])].url;
      tagList += `<a href="${url}"><img src="${icon}" height="40px" width="40px" /></a>`;
      console.log(icon, tagList);
    }

    let techList =
`## Built With

${tagList}`;

    dispatch ({ type: 'UPDATE_ICONS' , payload: techList });
  }

  return(
    <>
      <FormControl className={classes.iconRow}>
      {Languages.map(language => {
        return (
          <div className={classes.techList} key={language.id}>
            <img className={classes.icon} src={language.icon} alt={language.name} />
            <FormControlLabel 
              control={<Checkbox color="primary" 
                onChange={handleChange} 
                value={language.id} 
              />} 
              label={language.name} 
            />
          </div>
      )})}
      </FormControl>
    </>
  )
}