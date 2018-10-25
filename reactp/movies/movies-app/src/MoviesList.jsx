import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
export default function MoviesList(props){
        return(
              <div>
                 
              <Container>
              <h3>Movies</h3>
                  <Row>
                  {
                        props.movie.map(
                          movielist =>(
                           <div> 
                                 <hr/>
                          <Col sm={4}>{movielist.title}</Col> 
                          <hr/>
                          </div>  
                          )
                        )
                  }
                    </Row>
                </Container>   
                </div>                          
        );  
           
}