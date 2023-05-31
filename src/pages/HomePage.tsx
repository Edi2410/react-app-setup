import React from "react";
import { useGetPokemonsList } from "hooks";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export const HomePage = () => {
  const { data } = useGetPokemonsList();
  const navigate = useNavigate();

  const pokemonSelected = (index: number) => {
    navigate(`/details/${index}`);
  };

  return (
    <Container className="mt-4 mb-4 text-center">
      <Row>
        <Col sm></Col>
        <Col sm>
          <ListGroup>
            {data?.results?.map((item: any, index: number) => (
              <ListGroup.Item
                key={index}
                action
                onClick={() => pokemonSelected(index)}
              >
                {item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm></Col>
      </Row>
    </Container>
  );
};
