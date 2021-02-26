module.exports = {
  docs: [
    {
      type: "doc",
      id: "getting-started",
    },
    {
      type: "category",
      label: "Guide",
      items: ["overview", "authoring", "recording", "mastering", "packages"].map(_ => `guide/${_}`),
    },
    {
      type: "category",
      label: "Reference",
      items: ["css", "Audio", "hooks", "IdMap", "KeyMap", "Playback", "Player", "Script", "Utils", "Video"].map(_ => "reference/" + _)
    }
  ],
};