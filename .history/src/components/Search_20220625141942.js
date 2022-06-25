import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState } from 'react';

export default function FreeSolo() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
    <div style={{ width: 300 }}>


     
      <Autocomplete
        freeSolo
        id="search"
        disableClearable
        //options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params} 
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}
