const BASE_URL = "https://www.youtube.com";

export default function useHero() {
  const id = "Ew44w6_Xxr4";
  const params = new URLSearchParams({
    controls: 0,
    fs: 0,
    mute: 1,
    autoplay: 1,
    loop: 1,
    playlist: id,
  });
  return `${BASE_URL}/embed/${id}?${params.toString()}`;
}
