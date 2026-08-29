import { TextAttributes } from "@opentui/core";

export function StatusBar() {
  return (
    <box flexDirection="row" gap={1}>
      <text fg="cyan">Build</text>
      <text fg="gray" attributes={TextAttributes.DIM}>
        &gt;
      </text>
      <text>Opus 4.6</text>
    </box>
  );
}
