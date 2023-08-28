import { globalSwiper } from '$utils/globalSwiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  globalSwiper();
});
