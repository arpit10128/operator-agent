import { TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";

export function StatusBar() {
  const { colors } = useTheme();

  return (
    <box flexDirection="row" gap={1}>
      <text fg={colors.primary}>Build</text>
      <text
        fg={colors.dimSeparator}
        attributes={TextAttributes.DIM}
      >
        &gt;
      </text>
      <text>Opus 4.6</text>
    </box>
  );
}
