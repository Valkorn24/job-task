import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const config = {
        headers: {
          authorization: '123123',
        },
      };
      const { data } = await axios.get(
        'https://dev.volvox.rs/api/generic_source/src/user_search',
        config
      );

      setUsers(data.results);
    };
    fetchUsers();
  }, []);

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = users.filter(item => {
        return Object.values(item.name)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(users);
    }
  };

  return (
    <div>
      <input
        icon='search'
        placeholder='Search...'
        onChange={e => searchItems(e.target.value)}
      />

      {searchInput &&
        filteredResults.slice(0, 10).map(item => {
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
