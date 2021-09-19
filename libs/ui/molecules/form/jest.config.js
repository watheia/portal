module.exports = {
  displayName: "ui-molecules-form",
  preset: "../../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../../coverage/libs/ui/molecules/form"
}
