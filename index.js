
import React from 'react';
import {render} from 'react-dom';

var h1 = React.createElement('h1', null, 'Hello react ')
render(
    h1, 
    document.getElementById('content')
)