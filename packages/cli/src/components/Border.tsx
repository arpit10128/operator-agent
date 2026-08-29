export const EmptyBorder = {
  topLeft: "",
  bottomLeft: "",
  vertical: "",
  topRight: "",
  bottomRight: "",
  horizontal: "",
  bottomT: "",
  topT: "",
  cross: "",
  leftT: "",
  rightT: "",
};

export const splitBorder = {
  border: ["left" as const, "right" as const],
  customBorderchars: {
    ...EmptyBorder,
    vertical: "\u2503",
  },
};
