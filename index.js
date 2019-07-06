const colors = {
  lightBlack: "#403f53",
  black: "#403f53",
  lightBlue: "#288ed7",
  blue: "#288ed7",
  lightCyan: "#2AA298",
  cyan: "#2AA298",
  lightGreen: "#08916a",
  green: "#08916a",
  lightMagenta: "#d6438a",
  magenta: "#d6438a",
  lightRed: "#de3d3b",
  red: "#de3d3b",
  lightWhite: "#F0F0F0",
  white: "#F0F0F0",
  lightYellow: "#daaa01",
  yellow: "#E0AF02",
}

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor: "#F6F6F6",
    foregroundColor: colors.black,
    borderColor: colors.white,
    cursorColor: "#90A7B2",
    cursorAccentColor: "#ffffff",
    selectionColor: "#E0E0E0",
    colors,
    css: `
      ${config.css}
      .tabs_nav {
        background:${colors.white};
      }
      .tabs_title {
        color: ${colors.black};
      }
      .tab_active {
        color: ${colors.black};
        background: #F6F6F6;
      }
    `
  });
