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
      label: "ractive-player",
      items: ["css", "Audio", "hooks", "IdMap", "KeyMap", "Playback", "Player", "Script", "Utils", "Video"].map(_ => "reference/" + _)
    },
    /*{
      type: "category",
      label: "rp-recording",
      items: ["rp-recording"].map(_ => "extra/" + _)
    },*/
    {
      type: "category",
      label: "rp-master",
      items: ["render", "thumbs"].map(_ => "rp-master/" + _)
    }
  ],
};