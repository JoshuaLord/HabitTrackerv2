import React from 'react';
import Adapater from './Adapter';
import Decorator from './Decorator';
import DependencyInjection from './DependencyInjection';

function DesignPatternManager() {
    return (
      <>
        <Adapater/>
        <Decorator/>
        <DependencyInjection/>
      </>
    );
}
 
export default DesignPatternManager;