import { useState } from "react";
import styles from "../styles/Filter.module.css";
import { DatePicker, Select, Button } from "antd";
import moment from "moment";
const { Option } = Select;

const Filter = ({ data, setActivity }) => {
  const [toggle, setToggle] = useState(false);
  const [selectDate, setselectDate] = useState("");
  const [selectPlace, setSelectPlace] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [selectCity, setSelectCity] = useState("");

  const place = [...new Set(data.map((i) => i.place))];
  const category = [...new Set(data.map((i) => i.category))];
  const city = [...new Set(data.map((i) => i.city.province))];

  const toggleFilter = () => {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const onChange = (date) => {
    date ? setselectDate(date.format("YYYY-MM-DD")) : setselectDate("");
  };
  const disabledDate = (current) => {
    return current && current < moment().subtract(1, "days");
  };
  const filterData = () => {
    if (
      selectDate !== "" &&
      selectPlace !== "" &&
      selectCategory !== "" &&
      selectCity !== ""
    ) {
      const first = data.filter(
        (activity) =>
          activity.place === selectPlace &&
          activity.category === selectCategory &&
          activity.city.province === selectCity
      );
      const filter = first.filter(
        (event) =>
          new Date(selectDate) <= new Date(event.startingDate) ||
          new Date(selectDate) <= new Date(event.endDate)
      );
      setActivity(filter);
    } else {
      alert("Filtre Alanında Eksiklik Var");
    }
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
            onChange={(value) => setSelectPlace(value)}
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
            onChange={(value) => setSelectCategory(value)}
          >
            {category.map((i, z) => (
              <Option key={z} value={i}>
                {i}
              </Option>
            ))}
          </Select>
          <Select
            defaultValue="Şehir Seç"
            style={{
              width: 250,
            }}
            onChange={(value) => setSelectCity(value)}
          >
            {city.map((i, z) => (
              <Option key={z} value={i}>
                {i}
              </Option>
            ))}
          </Select>
          <Button onClick={filterData} className={styles.antButton}>
            Ara
          </Button>
        </div>
      )}
    </div>
  );
};

export default Filter;
