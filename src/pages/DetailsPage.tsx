import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonDetails } from "hooks";
import { OffCanvas } from "components";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const DetailsPage = () => {
  const { id } = useParams();
  const { data: pokemonDetails } = useGetPokemonDetails(Number(id) + 1);

  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col sm>
          <h1>
            {pokemonDetails?.name.charAt(0).toUpperCase() +
              pokemonDetails?.name.slice(1)}{" "}
            <em>
              {pokemonDetails?.types?.map((item: any, index: number) => (
                <span key={index} className="m-1 fs-3">
                  {item.type.name.charAt(0).toUpperCase() +
                    item.type.name.slice(1)}
                </span>
              ))}
            </em>
          </h1>
          <div>
            <span>Abilities:</span>
            {pokemonDetails?.abilities?.map((item: any, index: number) => (
              <Badge key={index} bg="warning" className="m-1">
                {item.ability.name}
              </Badge>
            ))}
          </div>

          <Table striped size="sm" className="me-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Move name</th>
                <th>Version group details</th>
              </tr>
            </thead>
            <tbody>
              {pokemonDetails?.moves?.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td> {item.move.name}</td>
                  <td>
                    <OffCanvas data={item.version_group_details} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col sm></Col>
      </Row>
    </Container>
  );
};
