import React, { Component } from 'react';
import {
  FlexboxActionContainer,
  FlexboxActionSection,
  FlexboxActionSectionTitle,
  FlexboxActionSectionItemsContainer,
  FlexboxActionSectionItem,
  FlexboxActionSectionItemTitle,
  FlexboxActionSectionItemOptions,
  FlexboxActionSectionOption
} from './styled';
import { RadioGroup, ReversedRadioButton } from '../RadioButton/RadioButton';

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
