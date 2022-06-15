import { useEffect, useState } from "react";
import Loading from "../Loading";
import { server } from "../../utils/server";
import { AdminPageContainer, AdminPageTitle } from "./AdminPageElements";
import Helmet from "react-helmet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AdminUserList from "../AdminUserList";
import AdminPendingReviews from "../AdminPendingReviews";
import AdminAlbumList from '../AdminAlbumList';
import AdminCreateAlbum from '../AdminCreateAlbum';
import AdminCreateArtist from '../AdminCreateArtist';
import AdminArtistList from '../AdminArtistList';


const AdminPage = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const userFromServer = await fetchUser();
      setUser(userFromServer);
      setShow(true);
    };
    getUser();
  }, []);

  const fetchUser = async () => {
    const res = await fetch("http://" + server.HOST + "/api/user", {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    return data;
  };

  const beforeLoading = () => {
    return <Loading />;
  };

  const afterLoading = () => {
    return (
      <>
        <Helmet>
          <title>{user.user_first_name}'s Page</title>
        </Helmet>
        <AdminPageContainer>
          <Navbar />
          <AdminPageTitle>{user.user_first_name}'s Admin Page</AdminPageTitle>
          <AdminUserList />
          <AdminPendingReviews />
          <AdminAlbumList />
          <AdminArtistList />
          <h1>Create album / artist</h1>
          <AdminCreateAlbum />
          <AdminCreateArtist />
        </AdminPageContainer>
        <Footer />
      </>
    );
  };

  return (
    <>{show && user.user_role_id == 2 ? afterLoading() : beforeLoading()}</>
  );
};

export default AdminPage;
