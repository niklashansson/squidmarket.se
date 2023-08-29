import { globalSwiper } from '$utils/globalSwiper';
import { swiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  globalSwiper();
  // swiper();
});

/*https://cdn.jsdelivr.net/gh/niklashansson/squidmarket.se@fa470167854f9cd52c0c9dd387d9b88da9d001d6/dist/index.js*/
