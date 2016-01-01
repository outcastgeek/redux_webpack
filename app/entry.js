/**
 * Created by outcastgeek on 12/31/15.
 */

require('./style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Text from './content';

ReactDOM.render(
    <h1>{Text} | For Real!!</h1>,
    document.getElementById('content')
);
