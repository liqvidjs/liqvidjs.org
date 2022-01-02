module.exports = {
  docs: [
    {
      type: "doc",
      id: "getting-started",
    },
    {
      type: "category",
      label: "Guide",
      items: ["overview", "animation", "interactivity", "mobile", "recipes", "recording", "mastering", "packages"].map(_ => `guide/${_}`),
    },
    {
      type: "category",
      label: "API Reference",
      items:
        ["css", "Audio", "Controls", "hooks", "IdMap", "KeyMap", "Playback", "Player", "Script"].map(_ => "reference/" + _)
        .concat({
          type: "category",
          label: "Utils",
          items: ["animation", "authoring", "interactivity", "media", "misc", "mobile", "react", "replayData", "time"].map(_ => `reference/Utils/${_}`)
        })
        .concat("reference/Video")
    },
    {
      type: "category",
      label: "CLI Reference",
      items: ["tool", "macros", "audio", "build", "render", "serve", "thumbs"].map(_ => "cli/" + _)
    }
  ]
};
