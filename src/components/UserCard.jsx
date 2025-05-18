const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, about, photourl } = user;
  return (
    <>
      <div>
        <div className="flex justify-center my-6">
          <div className="card bg-base-300 w-96 h-96 shadow-sm ">
            <figure className="px-4 pt-4">
              <img
                src={photourl}
                alt="photourl"
                className="rounded-xl w-max  "
              />
            </figure>
            <div className="card-body  px-4">
              <h2 className="card-title">
                {" "}
                {firstName + " " + lastName}
                {age && "," + age}{" "}
              </h2>
              <p>{about}</p>
              <p>{gender}</p>
              <div className="card-actions flex justify-center">
                <button className="btn btn-secondary">Interested</button>
                <button className="btn btn-primary">Ignored</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default UserCard;
