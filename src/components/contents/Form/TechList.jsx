import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import Languages from '../../assets/languages.json';
import { useSelector } from 'react-redux';

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
  const Languages = useSelector(store => store.technologiesReducer.list)
  
  function handleChange(event) {
    // The checkboxes return the value of the item both when checked and unchecked. 
    // If you just make an array the values, checking and un-checking an item
    // Cause the array to have two of that item instead of just one.
    
    // To counter this, the handleChange function first checks to see if the 
    // Value of the selected checkbox is already in the array using .indexOf()
    let i = checked.indexOf(event.target.value);
    
    // If the index === -1 then it is not currently in the array and is one that
    // is intended by the user to be added to the array. To add it, it destructures
    // the array, sorts the values, then both sets the value of the array and
    // dispatches the same values. Dispatching the hook for the array itself causes
    // the dispatched array to be missing the last value selected. The purpose of
    // hook is more for keeping track of previously selected values.
    if (i === -1) {
      setChecked(([...checked, event.target.value]).sort((a, b) => a - b));
      let dispatchArray = (([...checked, event.target.value]).sort((a, b) => a - b));
      console.log(dispatchArray);
      dispatch({ type: 'FETCH_TECHNOLOGIES_SELECTED', payload: dispatchArray });
    } else {
      // If the value did have an index, it was checked then unchecked so it needs
      // to be removed. To do that the function makes a new array from the existing
      // checked array called dispatchArray then uses .splice() on it at the index
      // of the selected item to remove it, then setChecked() to alter the original
      // and dispatches the new array. 
      let dispatchArray = checked;
      dispatchArray.splice(i, 1);
      setChecked(dispatchArray);
      dispatch({ type: 'FETCH_TECHNOLOGIES_SELECTED', payload: dispatchArray });
    }
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_TECHNOLOGIES_LIST' });
  }, [dispatch])
  
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
      {Languages ? Languages.map(language => {
        return (
          <div className={classes.techList} key={language.id}>
            <img className={classes.icon} value={language.id}src={`${language.icon}`} alt={`${language.name}`} />
            <FormControlLabel 
              control={<Checkbox color="primary" 
                onChange={handleChange} 
                value={language.id} 
              />} 
              label={language.name} 
            />
          </div>
      )}):''}
      </FormControl>
    </>
  )
}