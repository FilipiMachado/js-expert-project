import VideoProcessor from "./videoProcessor.js";

const qvgaContraints = {
  width: 320,
  height: 240,
};

const vgaConstraints = {
  width: 640,
  height: 480,
};
const hdConstraints = {
  width: 1280,
  height: 720,
};

const encoderConfig = {
  ...qvgaContraints,
  bitrate: 10e6,
  // WebM
  codec: "vp09.00.10.08",
  pt: 4,
  hardwareAcceleration: "prefer-software",

  // MP4
  /* codec: "avc1.42002A",
  pt: 1,
  hardwareAcceleration: "prefer-hardware",
  avc: {format: 'annexb'} */
};

const videoProcessor = new VideoProcessor();

onmessage = (data) => {
  debugger;
  setTimeout(() => {
    self.postMessage({
      status: "done",
    });
  }, 2000);
};
