import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  rows: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  space: {
    padding: '10px',
    width: 'calc(50% - 30px)',
  },
}));

export default function LicenseList(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const file = props.file;
  const unsavedFiles = localStorage.unsavedFiles === 'true';

  const license = useSelector(store => store.licensesReducer.list);

  useEffect(() => {
    dispatch({ type: 'FETCH_LICENSE_LIST' });
  }, [dispatch])

  const getLicense = () => {
    if (unsavedFiles && localStorage.licenseid) {
      return Number(localStorage.licenseid);
    } else {
      return file.licenseid;
    }
  }

  const [selected, setSelected] = useState(getLicense);

  const updateTimeStamp = () => {
    localStorage.setItem('time_stamp', String(moment(Date.now()).format()));
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    let selected = Number(event.target.value);
    setSelected(selected);
    localStorage.setItem('licenseid', String(selected));
    dispatch({ type: 'FETCH_SELECTED_LICENSE', payload: selected });
    updateTimeStamp();
  }

  return(
    <FormControl component="fieldset">
      <FormLabel component="legend">License</FormLabel>
      <RadioGroup 
        className={classes.rows}
        aria-label="license" 
        name="license" 
        value={selected} 
        onClick={handleChange}
      >
        {license.map(item => {return(  
          <FormControlLabel
            className={classes.space} 
            key={item.id} 
            value={item.id} 
            control={
              <Radio
                color="primary" 
                checkedIcon={
                  <img src={item.icon} alt={item.name} height="48px"/>
                }
                icon={
                  <img src={item.inactiveicon} alt={item.name} height="48px"/>
                } 
              />
            } 
            label={item.name} 
            height="24pt"
          />
        )})}
      </RadioGroup>
    </FormControl>
  )
}