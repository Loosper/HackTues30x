import React from 'react'
import { Row } from 'react-bootstrap';

export default function Search() {
  return (
    <Row className='search'>
		  <input placeholder='Search for an event...'  className="field"/>
		  <div id="magnifyer-icon" ></div>
    </Row>
	
  )
}
