import * as React from "react";
import { Button, DropDownButton } from "@progress/kendo-react-buttons";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { Input, MaskedTextBox, NumericTextBox } from "@progress/kendo-react-inputs";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import axios from "axios";

export interface Props {
  path: string;
}

export interface State {
  selected: number;
  content: string;
  data: object;
}

const items = ["Windows", "Linux", "OSX"];
export class ButtonPage extends React.Component<Props> {
  state = {
    selected: 0,
    content: "",
    data: {},
  };

  handleSelect = (event: any): void => {
    this.setState({ selected: event.selected });
  };

  handleClick = (...args: any): void => {
    this.setState({
      content: "Which Operating system do you like to run cypress?",
    });
  };

  handleItemClick = (event: any) => {
    console.log(event);
    this.setState({
      content: `I would like to workwith cypress in ${event.item} OS`,
    });
  };

  saveData = async (): Promise<void> => {
    const response = await axios.post("/save/data", this.state.data);
    console.log(response.data);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <TabStrip onSelect={this.handleSelect} selected={this.state.selected}>
            <TabStripTab title="Single Button">
              <br />
              <h6 className="mb-5">Ways of testing a button</h6>
              <br />
              <h6 data-cy="result">{this.state.content && this.state.content}</h6>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <Button onClick={this.handleClick}>Single Button</Button>
                </div>
                <div className="col-md-6">
                  <DropDownButton text="I Would Like..." items={items} onItemClick={this.handleItemClick} />
                </div>
              </div>
            </TabStripTab>
            <TabStripTab title="Inputs and Form elements">
              <h6>Ways of testing form elements</h6>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <label>
                    What it is your name?
                    <Input />
                  </label>
                </div>
                <div className="col-md-4">
                  <label>
                    What it is your age
                    <NumericTextBox />
                  </label>
                </div>
                <div className="col-md-4">
                  <label>
                    Type your CPF numebr
                    <MaskedTextBox mask="999.999.999-99" />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label>
                    What is your birthday?
                    <DatePicker />
                  </label>
                </div>
                <div className="col-md-4">
                  <label>
                    Favorite operating system?
                    <ComboBox data={items} />
                  </label>
                </div>
              </div>
              <br />
              <Button onClick={this.saveData}>Save!</Button>
            </TabStripTab>
          </TabStrip>
        </div>
      </div>
    );
  }
}
