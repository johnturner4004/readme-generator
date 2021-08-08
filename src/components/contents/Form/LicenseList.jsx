import license from '../../assets/license.json'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function LicenseList() {
  const dispatch = useDispatch()
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

<a src="${licenseLink}"><img src="${licenseIcon}" />${licenseName}</a>`
dispatch({ type: 'UPDATE_LICENSE', payload: licenseTag });
  }

  useEffect(() => {
    makeLicenseTag(selected);
  }, []);

  return(
    <FormControl component="fieldset">
      <FormLabel component="legend">License</FormLabel>
      <RadioGroup 
        aria-label="license" 
        name="license" 
        value={selected} 
        onClick={handleChange}
      >
        {license.map(item => {return(  
          <FormControlLabel 
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