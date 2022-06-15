import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { server } from "../../utils/server";
import Button from "@mui/material/Button";
import AdminEditUser from "../AdminEditUser";

const AdminUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchAllUser();
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  const fetchAllUser = async () => {
    const res = await fetch("http://" + server.HOST + "/api/admin/users", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return await data;
  };

  const handleClickDeleteUser = (id) => {
    deleteUser(id);
  };

  const deleteUser = async (id) => {
    const res = await fetch("http://" + server.HOST + "/api/admin/user/" + id, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await res.json();
    if(data.status = 200) {
      window.location.reload();
    }
  };

  // https://mui.com/components/tables/
  const createUserTable = () => {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">First name</TableCell>
                <TableCell align="center">Last name</TableCell>
                <TableCell align="center">User role</TableCell>
                <TableCell align="center">Update name</TableCell>
                <TableCell align="center">Delete name</TableCell>
              </TableRow>
            </TableHead>
            {users.length > 0 && (
              <TableBody>
                {Object.values(users).map((user, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="user">
                      {user.user_id}
                    </TableCell>
                    <TableCell align="center">{user.user_email}</TableCell>
                    <TableCell align="center">{user.user_first_name}</TableCell>
                    <TableCell align="center">{user.user_last_name}</TableCell>
                    <TableCell align="center">{user.user_role_id}</TableCell>
                    <TableCell align="center">
                      <AdminEditUser user={user} />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() =>
                          handleClickDeleteUser(
                            user.user_id
                          )
                        }
                      >
                        Delete user
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </>
    );
  };

  return (
    <>
      <h2>Users</h2>
      {!!users && createUserTable()}
    </>
  );
};

export default AdminUserList;
