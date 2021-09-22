import React from 'react';

function UMLDiagram() {
    return (
      <>
        <h2>UML Diagrams</h2>

        <div id="structure_type" className="my-5">
            <h4>UML Structure Types</h4>

            <h5>Class Diagram</h5>
            <p>A class has three parts: name, attributes, operations/methods</p>
            
            <strong>Notations</strong>
            <ul>
                <li>0..* | *    - Zero to Many</li>
                <li>0..1        - Zero or One</li>
                <li>1..*        - One or More</li>
                <li>1           - One Only</li>
            </ul>

            <strong>Relationships</strong>
            <table className="mt-3 w-100 table table-striped">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Representation</th>
                        <th>Depiction</th>
                        <th>Example Image</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Association</td>
                        <td>Any logical connection or relationship</td>
                        <td>A simple line</td>
                        <td><img src='/images/Association-Relationship.jpeg' alt="Association UML Diagram" /></td>
                    </tr>
                    <tr>
                        <td>Directed Association</td>
                        <td>Directional relationship</td>
                        <td>A solid line with an arrow that represets the directional flow</td>
                        <td><img src='/images/Directed-Association-Relationship.jpeg' alt="Directed Association UML Diagram" /></td>
                    </tr>
                    <tr>
                        <td>Reflexive Association</td>
                        <td>Occurs when a class has many functions or responsibilties</td>
                        <td>A solid line that loops back to the class it came from</td>
                        <td><img src='/images/Reflexive-Association-Relationship.jpeg' alt="Reflexive Association UML Diagram" /></td>
                    </tr>
                    <tr>
                        <td>Multiplicity</td>
                        <td>Depicts how many objects may participate in the given relationship or the number of instances of the element</td>
                        <td>A solid line with 0..* on the side of the use cases</td>
                        <td><img src='/images/Multiplicity-Relationship.jpeg' alt="Multiplicity UML Diagram" /></td>
                    </tr>
                    <tr>
                        <td>Aggregation</td>
                        <td>The formation of a class as a result of another class being aggregated or built as a collection. In aggregation, the contained classes are not strongly dependent on the lifecycle of the container.</td>
                        <td>A solid line from the  child to the parent with a hollow diamond at the parent</td>
                        <td><img src='/images/Aggregation-Relationship.png' alt="Aggregation UML Diagram" /></td>
                    </tr>
                    <tr>
                        <td>Composition</td>
                        <td>Similar to the aggregation, but the contained classes are dependent on the life cycle of the container class</td>
                        <td>A solid line from the  child to the parent with a filled diamond at the parent</td>
                        <td><img src='/images/Composition-Relationship.png' alt="Composition UML Diagram" /></td>
                    </tr>
                    <tr>
                        <td>Inheritance/Generalization</td>
                        <td>A relationship where one associated class is a child of another by virtue of assuming the same functionalities of the parent class</td>
                        <td>A solid line from the child class to the parent class with a hollow arrowhead at the parent</td>
                        <td><img src='/images/Inheritance-Relationship.jpeg' alt="Inheritance/Generalization UML Diagram" /></td>
                    </tr>
                    <tr>
                        <td>Realization</td>
                        <td>Denotes the implementation of the functionality defined in one class by the other associated class(es)</td>
                        <td>A dotted line from the child class to the parent class with a hollow arrowhead at the parent</td>
                        <td><img src='/images/Realization-Relationship.jpeg' alt="Realization UML Diagram" /></td>
                    </tr>
                </tbody>
            </table>
        </div> 

        <div id="behavioral_types" className="my-5">
            <h4>UML Behavioral Type</h4>
        </div>
      </>
    );
}
 
export default UMLDiagram;