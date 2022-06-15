import { useParams } from "react-router-dom";
import AlbumInformation from "../components/AlbumInformation";

const AlbumInformationPage = () => {

    const { id } = useParams();
  return (
    <>
      <AlbumInformation id={id}/>
      
    </>
  );
};

export default AlbumInformationPage;
