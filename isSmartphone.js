export default function() {
  const ua = navigator.userAgent;
  return (ua.indexOf("iPhone") >= 0 || ua.indexOf("iPad") >= 0 || ua.indexOf("Android") >= 0);
}
