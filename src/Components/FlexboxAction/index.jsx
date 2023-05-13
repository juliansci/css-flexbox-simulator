import React from "react";
import FlexboxActionModal from "../FlexboxActionModal";
import flexboxActionItemsData from "./itemsData.json";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "./index.module.css";

const FlexboxAction = ({
  updateValues,
  removeItem,
  addItem,
  simulatorData,
}) => {
  const onChangeOption = (style, value) => {
    console.log(value);
    updateValues({
      ...simulatorData,
      [style]: value,
    });
  };
  console.log("simulatorData: ", simulatorData);
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.title}>Container Properties</div>
          <div className={styles.buttonRemove} onClick={removeItem}>
            -
          </div>
          <div className={styles.buttonAdd} onClick={addItem}>
            +
          </div>
        </div>
        <div>
          {flexboxActionItemsData.map((flexboxActionItemData, index) => {
            return (
              <div className={styles.sectionItem} key={index}>
                <div className={styles.title}>
                  {flexboxActionItemData.title}:{" "}
                  <FlexboxActionModal
                    title={flexboxActionItemData.title}
                    description={flexboxActionItemData.documentation}
                  />
                </div>
                <div className={styles.options}>
                  <RadioGroup
                    row
                    aria-label={`radio-group-${flexboxActionItemData.id}`}
                    name={`radio-group-${flexboxActionItemData.id}`}
                    value={simulatorData[flexboxActionItemData.id]}
                    onChange={(event) =>
                      onChangeOption(
                        flexboxActionItemData.id,
                        event.target.value
                      )
                    }
                  >
                    {flexboxActionItemData.values.map(
                      (optionValue, indexValue) => {
                        return (
                          <FormControlLabel
                            value={optionValue}
                            control={<Radio color="primary" />}
                            label={optionValue}
                          />
                        );
                      }
                    )}
                  </RadioGroup>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlexboxAction;
