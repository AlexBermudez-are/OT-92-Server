import React, { useEffect, useState } from "react";
import "./MembersList.css";
import { useHistory } from "react-router-dom";
import { membersService } from "../../../Services/privateApiService";
import Swal from "sweetalert2";
const Members = () => {
  const [membersList, setMembersList] = useState("");
  useEffect(() => {
    membersService
      .getMembers()
      .then((res) => setMembersList(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const history = useHistory();

  const deleteMember = (id) => {
    Swal.fire({
      title: "Seguro quieres eliminar este miembro?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminalo! ",
    }).then((result) => {
      if (result.isConfirmed) {
        membersService.deleteMember(id).then(
          membersService
            .getMembers()
            .then((res) => setMembersList(res.data.data))
            .catch((err) => console.log(err))
        );
        Swal.fire(
          "Eliminado!",
          "Se ha eliminado el miembro con exito.",
          "success"
        ).then(window.location.reload());
      }
    });
  };
  const editMember = (id) => {
    history.push(`/backoffice/editmember/${id}`);
  };

  if (!membersList) return "loading...";
  return (
    <>
      <div className="container">
        <p className="h1 my-3 customize-title">Lista de Miembros </p>
        <button
          onClick={() => history.push("/backoffice/members/create")}
          className="button-text ml-4 my-4 h2"
        >
          {" "}
          Agregar nuevo Miembro{" "}
        </button>
        <div className="row">
          <ul className="list-group">
            {membersList.map((member) => {
              return (
                <div className="col-12">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap">
                    <h5 className="text-muted text-form text-break w-25"> {member.name}</h5>
                    <div className="col ">
                      <div className="customize-icons">
                        <a
                          onClick={() => editMember(member.id)}
                          className="pointer"
                        >
                          {" "}
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>{" "}
                        </a>
                      </div>
                      <div className="customize-icons ml-3">
                        <a
                          onClick={() => deleteMember(member.id)}
                          className="pointer"
                        >
                          <svg
                            className="w-6 h-6 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div className="image-container">
                        {" "}
                        <img
                          className="img-fluid customize-image"
                          src={member.image}
                        />{" "}
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Members;
