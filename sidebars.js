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
      label: "Integrations",
      items: ["three", "katex", "mathjax", "xyjax"].map(_ => `integrations/${_}`)
    },
    {
      type: "category",
      label: "API Reference",
      items:
        ["css", "Audio", "Controls", "hooks", "IdMap", "Keymap", "Playback", "Player", "Script"].map(_ => "reference/" + _)
        .concat({
          type: "category",
          label: "Utils",
          items: ["animation", "authoring", "interactivity", "json", "media", "misc", "mobile", "react", "replayData", "svg", "time"].map(_ => `reference/Utils/${_}`)
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
