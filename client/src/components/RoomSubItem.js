import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import { Button, ListItemText } from "@material-ui/core";

const styles = {
  item: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginTop: 5,
    marginBottom: 5,
    color: "blue",
  },
  delete: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    color: "red",
  },
};

const RoomSubItem = () => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <div style={styles.item} className="d-flex flex-column text-center">
        <Button style={{ color: "blue" }}>
          <EditRoundedIcon />
        </Button>
      </div>
      <div style={styles.item} className="d-flex flex-column text-center">
        <Button style={{ color: "blue" }}>
          <PersonAddRoundedIcon />
        </Button>
      </div>
      <div style={styles.delete} className="d-flex flex-column text-center">
        <Button style={{ color: "red" }}>
          <DeleteRoundedIcon />
        </Button>
      </div>
    </div>
  );
};

export default RoomSubItem;
