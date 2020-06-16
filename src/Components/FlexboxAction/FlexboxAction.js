import React, { Component } from 'react';
import {
  FlexboxActionContainer,
  FlexboxActionSection,
  FlexboxActionSectionTitle,
  FlexboxActionSectionItemsContainer,
  FlexboxActionSectionItem,
  FlexboxActionSectionItemTitle,
  FlexboxActionSectionItemOptions
} from './styled';
import { RadioGroup, ReversedRadioButton } from '../RadioButton/RadioButton';
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class FlexboxAction extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      'justifyContent': 'flex-start',
      'alignItems': 'flex-start',
      'flexDirection': 'row',
      'flexWrap': 'wrap'
    };
  }

  async onChangeOption(style, value) {
    await this.setState({
      [style]: value
    });
    this.props.updateValues(this.state);
  }

  render() {
    return (
      <FlexboxActionContainer>
        <FlexboxActionSection>
          <FlexboxActionSectionTitle>Container</FlexboxActionSectionTitle>
          <FlexboxActionSectionItemsContainer>
            <FlexboxActionSectionItem>
              <FlexboxActionSectionItemTitle>
                Justify Content:
                <Popup trigger={<FontAwesomeIcon icon={faTwitter}/>} modal>
                  {close => (
                    <div className="modal">
                      <a className="close" onClick={close}>
                        &times;
                      </a>
                      <div className="header"> Modal Title </div>
                      <div className="content">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                      </div>
                      <div className="actions">
                                <button
                                  className="button"
                                  onClick={() => {
                                    console.log("modal closed ");
                                    close();
                                  }}
                                >
                                  Entendido!
                                </button>
                              </div>
                            </div>
                          )}
                        </Popup>
              </FlexboxActionSectionItemTitle>
              <FlexboxActionSectionItemOptions>
              <RadioGroup onChange={ (value) => this.onChangeOption('justifyContent', value) } value={this.state.justifyContent} horizontal>
                  <ReversedRadioButton value="flex-start">
                    flex-start
                  </ReversedRadioButton>
                  <ReversedRadioButton value="flex-end" >
                    flex-end
                  </ReversedRadioButton>
                  <ReversedRadioButton value="center">
                    center
                  </ReversedRadioButton>
                  <ReversedRadioButton value="space-between">
                    space-between
                  </ReversedRadioButton>
                  <ReversedRadioButton value="space-around">
                    space-around
                  </ReversedRadioButton>
              </RadioGroup>
              </FlexboxActionSectionItemOptions>
            </FlexboxActionSectionItem>
            <FlexboxActionSectionItem>
              <FlexboxActionSectionItemTitle>
                Flex Wrap:
              </FlexboxActionSectionItemTitle>
              <FlexboxActionSectionItemOptions>
              <RadioGroup onChange={ (value) => this.onChangeOption('flexWrap', value) } value={this.state.flexWrap} horizontal>
                  <ReversedRadioButton value="wrap" >
                    wrap
                  </ReversedRadioButton>
                  <ReversedRadioButton value="nowrap">
                    nowrap
                  </ReversedRadioButton>
                  <ReversedRadioButton value="wrap-reverse">
                    wrap-reverse
                  </ReversedRadioButton>
              </RadioGroup>
              </FlexboxActionSectionItemOptions>
            </FlexboxActionSectionItem>
            <FlexboxActionSectionItem>
              <FlexboxActionSectionItemTitle>
                Align Items:
              </FlexboxActionSectionItemTitle>
              <FlexboxActionSectionItemOptions>
              <RadioGroup onChange={ (value) => this.onChangeOption('alignItems', value) } value={this.state.alignItems} horizontal>
                  <ReversedRadioButton value="flex-start">
                    flex-start
                  </ReversedRadioButton>
                  <ReversedRadioButton value="flex-end" >
                    flex-end
                  </ReversedRadioButton>
                  <ReversedRadioButton value="center">
                    center
                  </ReversedRadioButton>
                  <ReversedRadioButton value="baseline">
                    baseline
                  </ReversedRadioButton>
                  <ReversedRadioButton value="stretch">
                    stretch
                  </ReversedRadioButton>
              </RadioGroup>
              </FlexboxActionSectionItemOptions>
            </FlexboxActionSectionItem>
            <FlexboxActionSectionItem>
              <FlexboxActionSectionItemTitle>
                Flex Direction:
              </FlexboxActionSectionItemTitle>
              <FlexboxActionSectionItemOptions>
              <RadioGroup onChange={ (value) => this.onChangeOption('flexDirection', value) } value={this.state.flexDirection} horizontal>
                  <ReversedRadioButton value="row">
                    row
                  </ReversedRadioButton>
                  <ReversedRadioButton value="row-reverse" >
                    row-reverse
                  </ReversedRadioButton>
                  <ReversedRadioButton value="column">
                    column
                  </ReversedRadioButton>
                  <ReversedRadioButton value="column-reverse">
                    column-reverse
                  </ReversedRadioButton>
              </RadioGroup>
              </FlexboxActionSectionItemOptions>
            </FlexboxActionSectionItem>
          </FlexboxActionSectionItemsContainer>
        </FlexboxActionSection>
      </FlexboxActionContainer>

    );
  }
}

export default FlexboxAction;
