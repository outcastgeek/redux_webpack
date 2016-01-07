/**
 * Created by outcastgeek on 1/6/16.
 */

import prodConfStore from './configureStore.prod';
import devConfStore from './configureStore.dev';

// Use ProvidePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
if (process.env.NODE_ENV === 'production') {
    module.exports = prodConfStore;
} else {
    module.exports = devConfStore;
}
