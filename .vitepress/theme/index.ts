// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue';
import ToggleBaseURL from './components/ToggleBaseURL.vue';
import './style.css';

export default {
  Layout,
  enhanceApp({ app /* router, siteData */ }) {
    app.component('ToggleBaseURL', ToggleBaseURL);
  },
};
