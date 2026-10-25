// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { existsSync } from "node:fs";
import { Config } from "@remotion/cli/config";

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// Claude Code cloud sessions can't download Remotion's Chrome; use the preinstalled one when present.
const cloudChromium = "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome";
if (existsSync(cloudChromium)) {
  Config.setBrowserExecutable(cloudChromium);
}
