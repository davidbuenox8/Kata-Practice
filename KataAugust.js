//turn seconds into readable time
function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600);
  let mm = Math.floor((seconds / 3600 - hh) * 60);
  let ss = Math.round(((seconds / 3600 - hh) * 60 - mm) * 60);

  hh < 10 ? (hh = `0${hh}`) : hh;
  mm < 10 ? (mm = `0${mm}`) : mm;
  ss < 10 ? (ss = `0${ss}`) : ss;

  return `${hh}:${mm}:${ss}`;
}
