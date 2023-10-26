onmessage = (data) => {
  setTimeout(() => {
    self.postMessage({
      status: "done",
    });
  }, 2000);
};
