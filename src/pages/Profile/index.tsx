import ProfileOwned from "./ProfileOwned";
// import PoolManaged from "./PoolsManaging";

const Profile: React.FC = () => {

  return (
    <div className="py-40px w-85% flex flex-col gap-y-24px">
      <div className="w-full flex flex-col gap-y-40px">
        <ProfileOwned />
      </div>
      {/* <div className="w-full flex flex-col gap-y-40px">
        <PoolManaged />
      </div> */}
    </div>
  );
};

export default Profile;
