import { useState } from "react";
import styles from "../styles/Filter.module.css";
import { DatePicker, Select, Button } from "antd";
import moment from "moment";
const { Option } = Select;

const Filter = ({ data, setActivity }) => {
  const [toggle, setToggle] = useState(false);

  const place = [...new Set(data.map((i) => i.place))];
  const category = [...new Set(data.map((i) => i.category))];

  const toggleFilter = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const onChange = (date, dateString) => {
    console.log(dateString);
  };
  const disabledDate = (current) => {
    return current && current < moment().subtract(1, "days");
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.container}>
      <button onClick={toggleFilter} className={styles.filterButton}>
        Filtrele
      </button>
      {toggle && (
        <div className={styles.filter}>
          <DatePicker
            onChange={onChange}
            format="DD-MM-YYYY"
            disabledDate={disabledDate}
            placeholder="Tarih Seç"
          />
          <Select
            defaultValue="Mekan Seç"
            style={{
              width: 250,
            }}
            onChange={handleChange}
          >
            {place.map((i, z) => (
              <Option key={z} value={i}>
                {i}
              </Option>
            ))}
          </Select>
          <Select
            defaultValue="Kategori Seç"
            style={{
              width: 250,
            }}
            onChange={handleChange}
          >
            {category.map((i, z) => (
              <Option key={z} value={i}>
                {i}
              </Option>
            ))}
          </Select>
          <Button className={styles.antButton}>Ara</Button>
        </div>
      )}
    </div>
  );
};

export default Filter;
