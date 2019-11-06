import React from 'react';
import { render } from 'react-dom';
import Template from 'src/view/template.jsx';

import 'assets/style/index.less';

class Root extends React.PureComponent {

    constructor(props) {
        super(props);
    }
    
    render()  {
        return (
            <Template />
        );
    }
}

render(
    <Root />,
    document.getElementById('root')
);

module.hot && module.hot.accept();
