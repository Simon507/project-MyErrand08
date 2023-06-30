import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function Calendar({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={["DatePicker"]}> */}
      <DatePicker
        value={value}
        onChange={onChange}
        sx={{
          fontSize: "10px",
          marginBottom: "14px",
        }}
      />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}
