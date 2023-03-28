const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on(
        "before:browser:launch",
        (
          browser = {
            name: "",
            family: "chromium",
            channel: "",
            displayName: "",
            version: "",
            majorVersion: "",
            path: "",
            isHeaded: false,
            isHeadless: false,
          },
          launchOptions
        ) => {
          if (browser.family === "chromium" && browser.name !== "electron") {
            launchOptions.args.push("--use-fake-ui-for-media-stream");
            launchOptions.args.push("--use-fake-device-for-media-stream");
          }

          return launchOptions;
        }
      );
    },
    video: true,
  },
});
