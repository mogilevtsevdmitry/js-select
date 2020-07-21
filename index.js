import { Select } from "./select/select";
import "./select/styles.scss";

const select = new Select("#select", {
  placeholder: "Выберите элемент",
  selectItem: true, //true
  //selectedID: "1",
  data: [
    { id: "1", value: "Понедельник" },
    { id: "2", value: "Вторник" },
    { id: "3", value: "Среда" },
    { id: "4", value: "Четверг" },
    { id: "5", value: "Пятница" },
    { id: "6", value: "Суббота" },
    { id: "7", value: "Воскресенье" },
  ],
  onSelect(item) {
    console.log("Selected item", item);
  },
});

window.s = select;
