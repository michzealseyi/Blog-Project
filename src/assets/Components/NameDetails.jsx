import React from "react";
import useFetch from "./CustomHook";
import { useNavigate, useParams } from "react-router-dom";

function NameDetails() {
  const { id } = useParams();
  const {
    info: name,
    error,
    isLoading,
  } = useFetch("http://localhost:3000/names/" + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch("http://localhost:3000/names/" + name.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="name-details">
      {isLoading && <div>loading....</div>}
      {error && <div>{error}</div>}
      {name && (
        <article>
          <h2>{name.name}</h2>
          What you need to know;
          <div>{name.about}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}

export default NameDetails;
