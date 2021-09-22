import React from 'react';

function Adapter() {
    return (
      <div id="adapter" className="design-pattern">
        <h2>Adapter</h2>
        <h5>Structural</h5>

        <p><strong>Description</strong></p>
        <p>Can be thought of as a link between an existing class and a client that cannot use the class's existing interface.</p>
        <p>Requires the adapter to adhere to a specific interface and must support polymophic behavior</p>

        <p><strong>Motivations</strong></p>
        <ul>
            <li>Clients don't know whether the target class is working through an adapter or a class directly</li>
            <li>Can repurpose existing code into new functionality</li>
        </ul>
        
        <p><strong>Use Cases</strong></p>
        <ul>
            <li>Define the adapter class to convert the incompatible adaptee class into another interface that the client/target requires</li>
            <li>Work through an adapter class to reuse classes with incompatible interfaces</li>
            <li>Can be used to encapsulate multiple classes</li>
        </ul>
        
        <p><strong>Drawbacks</strong></p>
        <ul>
            <li>Adapter class cannot be used with subclasses of the adaptee or target class</li>
            <li>In some languages, may require multiple inheritance to work (i.e. Java)</li>
        </ul>

        <p><strong>Alternatives</strong></p>
        <ul>
            <li>Decorator</li>
            <li>Facade</li>
        </ul>
      </div>
    );
}
 
export default Adapter;