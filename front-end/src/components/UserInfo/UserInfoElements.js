import styled from "styled-components";
import TextField from '@mui/material/TextField';

// https://mui.com/components/text-fields/
// https://stackoverflow.com/questions/63118013/textfield-style-using-styed-components-and-material-ui-withstyles
export const UserInfoField = styled(TextField)`
    & .MuiOutlinedInput-root {
        & fieldset {
        border-color: white;
        }
        &:hover fieldset {
        border-color: white;
        }
        &.Mui-focused fieldset {
        border-color: white;
        }
    }
    color: white;
  }
`;