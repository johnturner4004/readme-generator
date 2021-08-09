import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import license from '../../assets/license.json'

const useStyles = makeStyles(() => ({
  rows: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  space: {
    paddin: '10px',
    width: 'calc(50% - 20px)',
  },
}));

export default function LicenseList() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [selected, setSelected] = useState(2);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(Number(event.target.value));
    makeLicenseTag(Number(event.target.value))
  }

  const makeLicenseTag = (index) => {
    let licenseIcon = license[index].icon;
    let licenseLink = license[index].url;
    let licenseName = license[index].name;
    let licenseTag = `
## License

<a href="${licenseLink}"><img src="${licenseIcon}" height=40 />${licenseName}</a>`
dispatch({ type: 'UPDATE_LICENSE', payload: licenseTag });
  }

  useEffect(() => {
    makeLicenseTag(selected);
  }, []);

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
                  <img src={item.icon} height="48px"/>
                }
                icon={
                  <img src={item.inactive} height="48px"/>
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