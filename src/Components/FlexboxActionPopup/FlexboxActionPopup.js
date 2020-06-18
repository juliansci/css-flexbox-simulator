import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  FlexboxActionPopupContainer,
  FlexboxActionPopupHeader,
  FlexboxActionPopupContent,
  FlexboxActionPopupActionClose,
  FlexboxActionPopupGlobalDescription,
  FlexboxActionPopupGlobalValuesDescription,
  FlexboxActionPopupGlobalValueDescription,
  FlexboxActionPopupGlobalValueDescriptionLabel,
  FlexboxActionPopupGlobalValueDescriptionContent,
} from './styled';

class FlexboxActionPopup extends Component {

  render() {
    return (
      <Popup trigger={<FontAwesomeIcon icon={faInfoCircle} />} modal>
        {close => (
          <FlexboxActionPopupContainer>
            <FlexboxActionPopupActionClose onClick={close}> <FontAwesomeIcon icon={faTimes} /> </FlexboxActionPopupActionClose>
            <FlexboxActionPopupHeader> {this.props.title} </FlexboxActionPopupHeader>
            <FlexboxActionPopupContent>
              <FlexboxActionPopupGlobalDescription dangerouslySetInnerHTML={{ __html: this.props.description.globalDescription }} />
              <FlexboxActionPopupGlobalValuesDescription>
                  {this.props.description.valuesDescription.map((valueDescription, indexValue) => {
                    return (<FlexboxActionPopupGlobalValueDescription key={indexValue}>
                      <FlexboxActionPopupGlobalValueDescriptionLabel>{valueDescription.id}:</FlexboxActionPopupGlobalValueDescriptionLabel>
                      <FlexboxActionPopupGlobalValueDescriptionContent dangerouslySetInnerHTML={{ __html: valueDescription.description }} />
                    </FlexboxActionPopupGlobalValueDescription>);
                    })}
              </FlexboxActionPopupGlobalValuesDescription>
            </FlexboxActionPopupContent>
          </FlexboxActionPopupContainer>
        )}
      </Popup>
    );
  }
}

export default FlexboxActionPopup;
