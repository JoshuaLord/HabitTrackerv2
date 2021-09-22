import React from 'react';

function DependencyInjection() {
    return (
      <div id="dependency_injection" className="design-pattern">
        <h2>DependencyInjection</h2>
        <h5>Creational</h5>

        <p><strong>Description</strong></p>
        <p>An object (client) is passed other objects (services) that it depends on. The code that passes the services to the client is called the injector, and the injector tells the client which service to use.</p>
        <p>A service is a part of the client's state. The design pattern is based on the service being passed to the client. Not having the client build or find the service.</p>
        <p>Dependency Injection is a form of inversion of control. The client wants to call services but should not know how to construct those services. It instead delegates to external code (injector). The client is not aware of the injector, and the injector may or may not construct the service itself.</p>
        <p>The client only needs to know the interface of the service because that defines how the client can use the service. This reinforces the separation of responsibility from using the service and constructing the service.</p>

        <p><strong>Motivations</strong></p>
        <ul>
            <li>Separate the construction of the services and the use of the service</li>
            <li>Keeps a class independent from its dependencies, also known as decreased coupling</li>
            <li>Ease of unit-testing</li>
            <li>Reduces boilerplate code since dependency creation is handled by a singular compenent</li>
            <li>Allows concurrent development</li>
        </ul>

        <p><strong>Drawbacks</strong></p>
        <ul>
            <li>Code can become difficult to trace from client to injector to service</li>
            <li>Requires more upfront development</li>
            <li>Implemented with reflection or dynamic programming</li>
            <li>Encourages dependence on a framework</li>
            <li>Forces complexity out of classes, but puts complexity into the links between classes which can be harder to manage</li>
        </ul>
        
        <p><strong>Types</strong></p>
        <ul>
            <li>Constructor - dependencies are provided through client class's constructor</li>
            <li>Setter - client exposes a setter method that the injector uses to inject the dependency</li>
            <li>Interface - dependency's interface provides an injector method that will inject the dependency into any client passed to it</li>
        </ul>        

        <p><strong>Alternatives</strong></p>
        <ul>
            <li>Strategy</li>
        </ul>
      </div>
    );
}
 
export default DependencyInjection;