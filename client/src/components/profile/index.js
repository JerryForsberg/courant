import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Col } from "../Grid";
import API from "../../utils/API";
import { useCourantContext } from "../../utils/CourantContext"

function profile({ children }) {
    const {logout } = useCourantContext();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        API.getUser(id)
          .then((res) => {
            if (res.data.isAuthenticated === false) {
              return logout(history);
            }
          })
          .catch((err) => console.log(err));
      }, []);

    return (
        <>
            <section>{children}</section>
        </>
    );
}

export default profile;
