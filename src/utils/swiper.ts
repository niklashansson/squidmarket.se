export const swiper = async function () {
  const fetchSwipers = async function () {
    const res = await fetch('/swipers');
    const html = await res.text();

    const parser = new DOMParser();
    const page = parser.parseFromString(html, 'text/html');
    console.log(page);

    const swiperOptions = page.querySelector('script[type="application/json"]');
    console.log(swiperOptions);
  };

  fetchSwipers();
};
