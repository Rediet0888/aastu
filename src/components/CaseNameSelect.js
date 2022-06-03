import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CaseNameSelect() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Case Name
      </Button>
      <FormControl  variant='outlined' className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Name</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={name}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Case1</em>
          </MenuItem>
          <MenuItem value={1}>Case1</MenuItem>
          <MenuItem value={2}>Case2</MenuItem>
          <MenuItem value={3}>Case3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
