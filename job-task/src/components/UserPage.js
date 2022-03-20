import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const [estates, setEstates] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchUserEstates = async () => {
      const config = {
        headers: {
          authorization: '123123',
        },
      };
      const { data } = await axios.get(
        `https://dev.volvox.rs/api/generic_source/src/estate?user_id=${id}`,
        config
      );

      setEstates(data.estates);
    };
    fetchUserEstates();
  }, []);

  return (
    <div>
      {estates?.map(e => (
        <p>{e.address}</p>
      ))}
    </div>
  );
};

export default UserPage;
