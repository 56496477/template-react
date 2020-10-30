import React from 'react';
import { render } from 'react-dom';
import Template from 'src/view/template.jsx';
import { TemplateContainer } from 'src/container/layout';
import { Button } from 'src/component/Button';

import 'assets/style/index.less';

class Root extends React.PureComponent {

    constructor(props) {
        super(props);
    }
    
    render()  {
        return (
            <TemplateContainer>
                <Template />
                <Button type="primary">按钮</Button>
            </TemplateContainer>
        );
    }
}

render(
    <Root />,
    document.getElementById('root')
);

module.hot && module.hot.accept();
