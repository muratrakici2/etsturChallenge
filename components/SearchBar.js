import { AutoComplete } from 'antd';
import { useState } from 'react';

const SearchBar = ({data}) => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
      const filter = data.filter(
          (event) =>
           event.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
            event.persons.find((i)=>i.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
        );
    setOptions(
      !searchText ? [] : filter,
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
    </>
  );
};

export default SearchBar;