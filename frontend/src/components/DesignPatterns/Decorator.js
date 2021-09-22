import React from 'react';

function Decorator() {
    return (
      <div id="decorator" className="design-pattern">
        <h2>Decorator</h2>
        <h5>Structural</h5>

        <p><strong>Description</strong></p>
        <p>Add behavior to an individual object without affecting the behavior of the other objects of the same class.</p>
        <p>Adheres to the Single Reponsibility Principle.</p>
        <p>Create a 'decorator' class which wraps the original class to extend its functionality while keeping class methods intact.</p>
        
        <p><strong>Motivations</strong></p>
        <ul>
            <li>Add or remove functionality/responsibilities at run-time</li>
            <li>Alternative to sub-classing</li>
        </ul>
        
        <p><strong>Use Cases</strong></p>
        <ul>
            <li>Apply/remove functionality depending on changes in an objects state. Useful in UI</li>
            <li>More memory efficient compared to sub-classing. Multi-leveled sub-classes can be complex and multiple inheritance causes unnecessary bloating of bottom-level children classes</li>
            <li>Decorators can wrap multiple objects as well. This is considered an augmentation of the Facade pattern which is used to design a simple interface for a complex system.</li>
        </ul>
        
        <p><strong>Drawbacks</strong></p>
        <ul>
            <li>Code maintainability when numerous similar decorators become difficult to distinguish</li>
        </ul>

        <p><strong>Alternatives</strong></p>
        <ul>
            <li>Adapter</li>
            <li>Facade</li>
        </ul>
      </div>
    );
}
 
export default Decorator;