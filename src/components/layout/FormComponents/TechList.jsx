import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

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
});

export default function TechList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedTech = props.file.selected_tech;
  const unsavedFiles = localStorage.unsavedFiles === 'true';
  // let techArr = [];

  const getTech = () => {
    if (unsavedFiles && localStorage.selected_tech) {
      return(localStorage.selected_tech.split(',').map(id => Number(id)));
    } else {
      const techArr = props.file.selected_tech.map(tech => tech.id);
      return(techArr);
    }
  };

  const [checked, setChecked] = useState(getTech);
  const Languages = useSelector((store) => store.technologiesReducer.list);

  const updateTimeStamp = () => {
    localStorage.setItem('time_stamp', String(moment(Date.now()).format()));
  };

  function handleChange(event) {
    // The checkboxes return the value of the item both when checked and unchecked.
    // If you just make an array the values, checking and un-checking an item
    // Cause the array to have two of that item instead of just one.

    // To counter this, the handleChange function first checks to see if the
    // Value of the selected checkbox is already in the array using .indexOf()
    let i = checked.indexOf(Number(event.target.value));
    console.log(i);
    // If the index === -1 then it is not currently in the array and is one that
    // is intended by the user to be added to the array. To add it, it destructures
    // the array, sorts the values, then both sets the value of the array and
    // dispatches the same values. Dispatching the hook for the array itself causes
    // the dispatched array to be missing the last value selected. The purpose of
    // hook is more for keeping track of previously selected values.
    if (i === -1) {
      setChecked(
        [...checked, Number(event.target.value)].sort((a, b) => a - b),
      );
      let dispatchArray = [...checked, Number(event.target.value)].sort(
        (a, b) => a - b,
      );
      localStorage.setItem('selected_tech', dispatchArray);
      updateTimeStamp();
      dispatch({ type: 'FETCH_TECHNOLOGIES_SELECTED', payload: dispatchArray });
    } else {
      // If the value did have an index, it was checked then unchecked so it needs
      // to be removed. To do that the function makes a new array from the existing
      // checked array called dispatchArray then uses .splice() on it at the index
      // of the selected item to remove it, then setChecked() to alter the original
      // and dispatches the new array.
      let dispatchArray = checked;
      dispatchArray.splice(i, 1);
      console.log(dispatchArray);
      setChecked([...dispatchArray]);
      localStorage.setItem('selected_tech', [...dispatchArray]);
      updateTimeStamp();
      dispatch({ type: 'FETCH_TECHNOLOGIES_SELECTED', payload: dispatchArray });
    }
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_TECHNOLOGIES_LIST' });
  }, [dispatch]);

  return (
    <>
      <FormControl className={classes.iconRow}>
        {Languages.map((language) => {
          return (
            <div className={classes.techList} key={language.id}>
              <img
                className={classes.icon}
                value={language.id}
                src={`${language.icon}`}
                alt={`${language.name}`}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color='primary'
                    checked={checked.indexOf(language.id) !== -1 ? true : false}
                    onChange={handleChange}
                    value={language.id}
                  />
                }
                label={language.name}
              />
            </div>
          );
        })}
      </FormControl>
    </>
  );
}
