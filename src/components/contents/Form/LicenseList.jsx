import license from '../../assets/license.json'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import { useState } from 'react'

export default function LicenseList() {
  const [selected, setSelected] = useState(2);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(Number(event.target.value));
  }

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
                checkedIcon={
                  item.icon ? <img src={item.icon} height="24pt"/> : ''
                }
                icon={
                  item.icon ? <img src={item.inactive} height="24pt"/> : ''
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