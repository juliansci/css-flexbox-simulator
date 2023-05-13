/* eslint-disable react/jsx-key */
import React from "react";
import flexboxActionItemsData from "./itemsData.json";
import styles from "./index.module.css";
import FlexboxActionModal from "../FlexboxActionModal";

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
  console.log(simulatorData);
  console.log(flexboxActionItemsData);
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
                <div className="mt-4 flex gap-2 flex-wrap">
                  {flexboxActionItemData.values.map((optionValue) => {
                    return (
                      <div className="flex gap-1">
                        <input
                          id={`${flexboxActionItemData.id}-${optionValue}`}
                          type="radio"
                          name={`radio-group-${flexboxActionItemData.id}}`}
                          value={optionValue}
                          label={optionValue}
                          onChange={(event) =>
                            onChangeOption(
                              flexboxActionItemData.id,
                              event.target.value
                            )
                          }
                        />
                        <label
                          for={`${flexboxActionItemData.id}-${optionValue}`}
                        >
                          {optionValue}
                        </label>
                      </div>
                    );
                  })}
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
