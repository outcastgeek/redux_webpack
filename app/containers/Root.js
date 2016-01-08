/**
 * Created by outcastgeek on 1/6/16.
 */

import prodRoot from './Root.prod';
import devRoot from './Root.dev';

if (process.env.NODE_ENV === 'production') {
    module.exports = prodRoot;
} else {
    module.exports = devRoot;
}
