import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                accent: '#ae2d2f', // noble red,
                success: '#666666',
            }
        }
    }
});
