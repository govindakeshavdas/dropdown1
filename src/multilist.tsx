import * as React from "react";
import { render } from "react-dom";
import { List, arrayMove, arrayRemove } from "react-movable";

const deletebuttonStyles = {
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  cursor: "pointer",
  background: "transparent",
  flex: "1"
};

const RemovableIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#555"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-x-circle"
  >
    <title>Remove</title>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

class FormList extends React.Component<{}, { items: string[] }> {
  state = {
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "800px",
          margin: "0px auto",
          backgroundColor: "#F7F7F7",
          padding: "3em"
        }}
      >
        <List
          values={this.state.items}
          onChange={({ oldIndex, newIndex }) =>
            this.setState((prevState: { items: string[] }) => ({
              items: arrayMove(prevState.items, oldIndex, newIndex)
            }))
          }
          renderList={({ children, props, isDragged }) => (
            <ul
              {...props}
              style={{ padding: 0, cursor: isDragged ? "grabbing" : undefined }}
            >
              {children}
            </ul>
          )}
          renderItem={({ value, props, isDragged, isSelected, index }) => (
            <li
              {...props}
              style={{
                ...props.style,
                padding: "1.5em",
                margin: "0.5em 0em",
                listStyleType: "none",
                cursor: isDragged ? "grabbing" : "grab",
                border: "2px solid #CCC",
                boxShadow: "3px 3px #AAA",
                color: "#333",
                borderRadius: "5px",
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                backgroundColor: isDragged || isSelected ? "#EEE" : "#FFF"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "right"
                }}
              >
                <button
                  style={{
                    ...deletebuttonStyles
                  }}
                  onClick={() => {
                    if (typeof index !== "undefined") {
                      arrayRemove(this.state.items, index);
                      // this.state.items.splice(index, 1);
                      // arrayRemove(this.state.items, index);
                      // console.log(this.state.items);
                      // this.items.splice(index, 1);
                      // arrayRemove(items, index);
                    } else {
                      // setItems(items);
                    }
                  }}
                >
                  <RemovableIcon />
                </button>
              </div>
              {value}
              {index === 0 && <span data-movable-handle />}
            </li>
          )}
        />
      </div>
    );
  }
}

export default FormList;
