import React from "react";
import SingleUser from "../SingleUser/SingleUser";

const UserList = () => {
  const data = [
    {
      name: "naima",
      pic: "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829213?k=20&m=530829213&s=612x612&w=0&h=EvvEYltc4Rc5dbVpXTj1lYlDDMUVju_OM3y8cTYgVSc=",
    },
    {
      name: "naima",
      pic: "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829213?k=20&m=530829213&s=612x612&w=0&h=EvvEYltc4Rc5dbVpXTj1lYlDDMUVju_OM3y8cTYgVSc=",
    },
    {
      name: "naima",
      pic: "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829213?k=20&m=530829213&s=612x612&w=0&h=EvvEYltc4Rc5dbVpXTj1lYlDDMUVju_OM3y8cTYgVSc=",
    },
  ];

  return (
    <div>
      <div>
        <div class="container" style={{marginTop: 120}}>
        <div style={{    display: 'flex', justifyContent: 'center'}}>
        <button style={{marginBottom: 40,backgroundColor: "var(--color-primary)" , borderColor: "var(--color-primary)"}} class="btn btn-danger pull-right">Remove All</button>
        </div>
            {data.map((el) => (
              <SingleUser el={el} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default UserList;
