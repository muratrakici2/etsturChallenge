import styles from "../styles/SearchDate.module.css";
import { DatePicker, Space } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const SearchDate = ({ data, setActivity }) => {
  const disabledDate = (current) => {
    return current && current < moment().subtract(1, "days");
  };
  const onDate = (event) => {
    const firstDate = new Date(event[0].format("YYYY-MM-DD"));
    const secondDate = new Date(event[1].format("YYYY-MM-DD"));
    const deneme = new Date("2022-06-24");
    const filter = data.filter(
      (event) =>
      
          firstDate <= new Date(event.startingDate) ||
          firstDate <= new Date(event.endDate)
      
    );
    setActivity(filter);
  };
  return (
    <div className={styles.date}>
      <p>Tarihe Göre Ara:</p>
      <Space size={12}>
        <RangePicker
          disabledDate={disabledDate}
          onChange={onDate}
          format="DD-MM-YYYY"
          className={styles.datePicker}
          placeholder={["Başlangıç Tarihi", "Bitiş Tarihi"]}
        />
      </Space>
    </div>
  );
};

export default SearchDate;
