import React from 'react';
import { RouteComponentProps } from '@reach/router';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';

import { certData } from './certData';

interface InfoState {
  src: string;
  title: string;
}

interface InfoAction {
  type: string;
  src: string;
  title: string;
}

export const Certifications = (props: RouteComponentProps) => {
  const red = (state: InfoState, action: InfoAction): InfoState => {
    switch (action.type) {
      case 'SET_SRC_AND_TITLE':
        return { ...state, src: action.src, title: action.title };
      default:
        return state;
    }
  };

  const [info, dispatch] = React.useReducer(red, {
    src: '',
    title: '',
  });

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const udacityPdf = (id: string): string =>
    `https://graduation-api.udacity.com/api/certificate/${id}/download`;
  const udacityLink = (id: string): string =>
    `https://graduation.udacity.com/confirm/${id}`;
  const courseraPdf = (id: string): string =>
    `https://www.coursera.org/api/certificate.v1/pdf/${id}`;
  const courseraLink = (id: string): string =>
    `https://www.coursera.org/account/accomplishments/verify/${id}`;
  const iversityLink = (id: string): string =>
    `https://iversity.org/verify/${id}`;
  const iversityPdf = (id: string): string =>
    `https://iversity.org/verify/${id}`;

  return (
    <Container>
      {certData.map((c, index) => {
        const { title, platform, certificate } = c;
        let src: string = '';
        let link: string = '';

        switch (platform) {
          case 'udacity':
            src = udacityPdf(certificate);
            link = udacityLink(certificate);
            break;
          case 'coursera':
            src = courseraPdf(certificate);
            link = courseraLink(certificate);
            break;
          case 'iversity':
            src = iversityPdf(certificate);
            link = iversityLink(certificate);
            break;
          default:
            break;
        }
        return (
          <Card className="single-certificate-view" key={certificate}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '12px' }}>{platform.toUpperCase()}</span>
              <h2>{title}</h2>
            </div>

            <ButtonGroup size="sm" className="mb-2">
              <Button
                variant="success"
                onClick={() => {
                  window.open(link);
                }}
              >
                Verify
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch({ type: 'SET_SRC_AND_TITLE', src, title });
                  handleShow();
                }}
              >
                Preview
              </Button>
            </ButtonGroup>
          </Card>
        );
      })}

      <Modal
        centered
        size={'lg'}
        dialogClassName="modal-90w"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{info.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ minHeight: '500px' }}>
          <embed
            style={{ width: '100%', height: '500px' }}
            title="iframe"
            src={info.src}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
