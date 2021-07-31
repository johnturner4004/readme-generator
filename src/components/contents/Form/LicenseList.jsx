import license from '../../assets/license.json'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'


export default function LicenseList() {
  return(
    <FormControl component="fieldset">
      <FormLabel>License</FormLabel>
      <RadioGroup aria-label="license" name="license" onChange={handleChange}>
        {/* {license.map(item => (  
          <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.name} /> */}
      </RadioGroup>
    </FormControl>
  )
}