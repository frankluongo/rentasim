const BASE_URL = "https://www.youtube.com";

export default function useHero() {
  const id = "Ew44w6_Xxr4";
  const params = new URLSearchParams({
    autoplay: 1, // autoplay
    controls: 0, // hide controls
    disablekb: 1, // disable keyboard controls
    fs: 0, // disable fullscreen
    iv_load_policy: 3, // disable annotations
    loop: 1, // loop video
    mute: 1, // mute video
    playlist: id, // loop video
  });
  return `${BASE_URL}/embed/${id}?${params.toString()}`;
}
