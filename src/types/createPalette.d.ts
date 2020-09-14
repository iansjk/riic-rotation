// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    tradingPost?: PaletteColorOptions;
    factory?: PaletteColorOptions;
    powerPlant?: PaletteColorOptions;
  }

  interface Palette {
    tradingPost: PaletteColor;
    factory: PaletteColor;
    powerPlant: PaletteColor;
  }
}
