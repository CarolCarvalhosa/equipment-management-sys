import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

export const FormControlContainer = styled(FormControl)`
  & label, & svg, & div {
    color: #ffffff;
  }

  & .MuiInputBase-root fieldset {
    border: 0.5px solid #ffffff;
  }

  & .MuiInputBase-root:hover fieldset {
    border: 1px solid #ffffff;
  }

  & .Mui-focused, .Mui-focused label {
    color: #238636 !important;
  }

  & .Mui-focused fieldset {
    border: 1.5px solid #238636 !important;
  }
`;