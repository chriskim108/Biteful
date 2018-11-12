import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Navigation from '../../components/Navigation/Navigation';

import './Landing.css';

class Landing extends Component {
    render(){
        return(
            <Aux>
                <Navigation />
            </Aux>
        )
    }
}

export default Landing;