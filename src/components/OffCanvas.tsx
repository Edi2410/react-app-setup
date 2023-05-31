import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Table from "react-bootstrap/Table";
interface Props {
  data: any;
}

export const OffCanvas = ({ data }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="warning" onClick={() => setShow(true)} className="me-2">
        Open details
      </Button>
      <Offcanvas show={show} placement={"end"} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Version group details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table>
            <thead>
              <tr>
                <th>Learned level</th>
                <th>Learn method</th>
                <th>Version group</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item: any, index: number) => (
                <tr key={index}>
                  <td> {item.level_learned_at}</td>
                  <td>{item.move_learn_method.name}</td>
                  <td>{item.version_group.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
