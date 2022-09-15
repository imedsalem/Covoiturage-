import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  // const data = {
  //   fullName: "alex moderidch",
  //   pic: "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829213?k=20&m=530829213&s=612x612&w=0&h=EvvEYltc4Rc5dbVpXTj1lYlDDMUVju_OM3y8cTYgVSc=",
  //   des: "stockphoto.com/v ectors/profile-icon- male-avatar-portrait- casual-person -vector-id5 sto ckphoto.com/vec tors/p rofile-icon-ma le-avatar-po rtrait -casual -perso n-vecto r-id5 stockphoto.com/vectors /prof ile-icon-m ale-avatar-portrait-c asual-person-v ector- id5 stock photo.com/ve ctors/pro file-ico n-male-avatar - portrait -cas ual-pers on-v ector -id5 ",
  //   MemberSince: "20/12/2002",
  //   age: "35",
  //   ridesPublished: "23",
  //   VerifiedID: "false",
  //   ConfirmedEmail: "false",
  //   ConfirmedPhoneNumber: "true",
  // };

  const { profile } = useSelector(
    (state) => state.profile
  );
  
  const data = profile
  console.log(data)
  return (
    <div
      style={{
        marginTop: "125px",
        textAlign: "center",
        maxWidth: 600,
        margin: "125px auto 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column ",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "var(--fontSize-text-titlep)",

              color: "var(--color-primary)",
            }}
            className="fw-bold fst-italic"
          >
            {data.idUser.fullName}
          </span>
          <span
            style={{
              fontSize: "var(--fontSize-text-p)",
            }}
          >
            {data.age} y/o
          </span>
        </div>
        <span>
          <img
            style={{
              width: 150,
              borderRadius: "50%",
            }}
            src={data.picture.url}
            alt="pic"
          />
        </span>
      </div>
        <div>
          <div
            style={{
              width: "100%",
              height: 5,
              backgroundColor: "var(--color-primary)",
              margin: "30px 0",
            }}
          ></div>
          <div>
            <h2>{data.fullName} has a Verified Profile</h2>
              <div
                style={{
                  fontSize: "var(--fontSize-text-p)",

                  color: "var(--color-primary)",
                }}
                className="fw-bold fst-italic"
              >{`Verified ID: ${data.VerifiedID}`}</div>
              <div
                style={{
                  fontSize: "var(--fontSize-text-p)",

                  color: "var(--color-primary)",
                }}
                className="fw-bold fst-italic"
              >{`Confirmed Email: ${data.ConfirmedEmail}`}</div>
              <div
                style={{
                  fontSize: "var(--fontSize-text-p)",
                  color: "var(--color-primary)",
                }}
                className="fw-bold fst-italic"
              >{`Confirmed Phone Number: ${data.ConfirmedPhoneNumber}`}</div>
          </div>
        </div>
      <div
        style={{
          width: "100%",
          height: 5,
          backgroundColor: "var(--color-primary)",
          margin: "30px 0",
        }}
      ></div>
      <div>
        <h2>About {data.fullName}</h2>
        <div style={{ margin: "0 20px" }}>{data.des}</div>
      </div>
      <div
        style={{
          width: "100%",
          height: 5,
          backgroundColor: "var(--color-primary)",
          margin: "30px 0",
        }}
      ></div>
      <div>
        <div
          style={{
            fontSize: "var(--fontSize-text-p)",

            color: "var(--color-primary)",
          }}
          className="fw-bold fst-italic"
        >
          {data.ridesPublished} rides published
        </div>
        <div>Member since {data.createdAt.split("-")[1]} {data.createdAt.split("-")[0]}</div>
      </div>
    </div>
  );
};

export default Profile;
