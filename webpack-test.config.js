/**
 * Created by outcastgeek on 12/31/15.
 */

'use strict';

var context = require.context('./tests', true, /_test\.js$/);

context.keys().forEach(context);
