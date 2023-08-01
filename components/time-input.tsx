import { useRef } from "react";
import { ActionIcon } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";

function Time() {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <TimeInput
      label=""
      ref={ref}
      rightSection={
        <ActionIcon onClick={() => ref?.current?.showPicker()}>
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      maw={400}
      mx="start"
      style={{ width: "220px" }}
    />
  );
}
export default Time;
