import Box from '@mui/material/Box';
import {
    UserInfoField
  } from "./UserInfoElements";

// https://mui.com/components/text-fields/
const UserInfo = ({user}) => {

    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <UserInfoField
              type="email"
              id="outlined-required"
              label="Email"
              name="email"
              defaultValue={user.user_email}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <UserInfoField
              type="text"
              id="outlined-required"
              label="First name"
              name="firstName"
              defaultValue={user.user_first_name}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <UserInfoField
              id="outlined-required"
              label="Last name"
              name="lastName"
              defaultValue={user.user_last_name}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </div>
        </Box>
      );
}

export default UserInfo
