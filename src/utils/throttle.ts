const throttle = function (callback: (e: Event) => void, waitTime: number) {
  let timerId: NodeJS.Timeout | null = null;
  return (e: Event) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

export default throttle;
