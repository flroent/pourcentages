import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

class Calculs extends React.Component {
  state = {
    valeur: "",
    pourcentage: "",
    reduction: "",
    augmentation: "",
    variation: "",
    part: ""
  };

  handleChange = () => {
    return event => {
      const { value, name } = event.target;
      this.setState({ ...this.state, [name]: value.replace(",", ".") });
    };
  };

  render() {
    const pourcentageSimple = () => {
      const valeur = parseFloat(this.state.valeur);
      const pourcentage = parseFloat(this.state.pourcentage);
      const result = valeur * (pourcentage / 100);
      return result ? result : 0;
    };
    const pourcentageAugmentation = () => {
      const value = parseFloat(this.state.valeur);
      const augmentation = parseFloat(this.state.augmentation);
      const result = value + (value / 100) * augmentation;
      return isNaN(result) ? 0 : result;
    };
    const pourcentageReduction = () => {
      const value = parseFloat(this.state.valeur);
      const reduction = parseFloat(this.state.reduction);
      const result = value - (value / 100) * reduction;
      return isNaN(result) ? 0 : result;
    };
    const pourcentageVariation = () => {
      const value = parseFloat(this.state.valeur);
      const variation = parseFloat(this.state.variation);
      const result = ((variation - value) / value) * 100;
      return isNaN(result) ? 0 : result;
    };
    const pourcentageInverse = () => {
      const value = parseFloat(this.state.valeur);
      const part = parseFloat(this.state.part);
      const result = part / (value / 100);
      return isNaN(result) ? 0 : result;
    };
    const styles = {
      mainContainer: {
        backgroundColor: "lightGrey",
        borderRadius: "1em",
        padding: "1em"
      },
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "5em",
        marginBottom: "1em",
        borderBottom: "solid 1px grey"
      },
      downCol: {
        padding: "0",
        display: "flex",
        justifyContent: "flex-end"
      },
      inputGroup: {}
    };
    const addPercent = () => {
      return this.state.pourcentage + "%";
    };

    return (
      <Container style={styles.mainContainer} id="calculs">
        <Container style={styles.container}>
          <Row>Valeur</Row>
          <Row>
            <Form>
              <Form.Control
                name="valeur"
                value={this.state.valeur}
                onChange={this.handleChange()}
                placeholder="0"
                autocomplete="off"
              />
            </Form>
          </Row>
        </Container>
        <Container style={styles.container}>
          <Row>Pourcentages</Row>
          <Row>
            <Col style={{ padding: "0" }}>
              <Form>
                <InputGroup style={styles.inputGroup}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    value={this.state.pourcentage}
                    name="pourcentage"
                    onChange={this.handleChange()}
                    placeholder="0"
                    autocomplete="off"
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col style={styles.downCol}>
              <span>{pourcentageSimple()}</span>
            </Col>
          </Row>
        </Container>
        <Container style={styles.container}>
          <Row>Reduction</Row>
          <Row>
            <Col style={{ padding: "0" }}>
              <Form>
                <InputGroup style={styles.inputGroup}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    value={this.state.reduction}
                    name="reduction"
                    onChange={this.handleChange()}
                    placeholder="0"
                    autocomplete="off"
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col style={styles.downCol}>
              <span>{pourcentageReduction()}</span>
            </Col>
          </Row>
        </Container>
        <Container style={styles.container}>
          <Row>Augmentation</Row>
          <Row>
            <Col style={{ padding: "0" }}>
              <Form>
                <InputGroup style={styles.inputGroup}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    value={this.state.augmentation}
                    name="augmentation"
                    onChange={this.handleChange()}
                    placeholder="0"
                    autocomplete="off"
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col style={styles.downCol}>
              <span>{pourcentageAugmentation()}</span>
            </Col>
          </Row>
        </Container>
        <Container style={styles.container}>
          <Row>Variation</Row>
          <Row>
            <Col style={{ padding: "0" }}>
              <Form>
                <Form.Control
                  value={this.state.variation}
                  name="variation"
                  onChange={this.handleChange()}
                  placeholder="0"
                  autocomplete="off"
                />
              </Form>
            </Col>
            <Col style={styles.downCol}>
              <span>{pourcentageVariation()}</span>
              <span className="percentSign">%</span>
            </Col>
          </Row>
        </Container>
        <Container style={styles.container}>
          <Row>Pourcentage inversé</Row>
          <Row>
            <Col style={{ padding: "0" }}>
              <Form>
                <Form.Control
                  value={this.state.part}
                  name="part"
                  onChange={this.handleChange()}
                  placeholder="0"
                  autocomplete="off"
                />
              </Form>
            </Col>
            <Col style={styles.downCol}>
              <span>{pourcentageInverse()}</span>
              <span className="percentSign">%</span>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Calculs;
