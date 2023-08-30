import { globalSwiper } from '$utils/globalSwiper';
import { swiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  globalSwiper();
  // swiper();
});

/*<script defer src="https://cdn.jsdelivr.net/gh/niklashansson/squidmarket.se@32c821455da99bb416341948ff5ce0faf9abe1a6/dist/index.js"></script>*/
