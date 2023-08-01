import { useState } from "react";
import { DateInput } from "@mantine/dates";

function Date() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label=""
      placeholder="DD/MM/YYYY"
      maw={400}
      mx="start"
      style={{
        width: "220px",
        fontSize: "",
        color: "red",
      }}
    />
  );
}

export default Date;
