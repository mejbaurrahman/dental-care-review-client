import React from 'react'
import { Accordion } from 'react-bootstrap'
import useTitle from '../../Components/hooks/useTitle'

export default function Blog() {
    useTitle('Blog');
  return (
    <div className='container'>
    <div className='mt-3'>
        <h1 className='text-primary text-start text-uppercase'>Blog</h1>
        <hr className='text-primary'/> 
    </div>
    <div className='my-3'>
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
        <Accordion.Body className='text-start'>
        SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
        <Accordion.Body className='text-start'>
        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
        <Accordion.Body className='text-start'>
        For executing JavaScript on the server, Node.js is a bridge, open-source Js runtime environment. JavaScript code can now execute outside of the browser, thanks to Node.js. Node.js has many components and is primarily used for web development. It may run on various operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing highly scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O.
        Javascript is a simple object-oriented programming language for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. The program can only be executed and run in an internet browser because it is interpreted as scripting. To run and execute the code outside the browser, we can utilize Node.js
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
        <Accordion.Body className='text-start'>
        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
  )
}
