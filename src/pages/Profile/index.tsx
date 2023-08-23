import ProfileOwned from "./ProfileOwned";

const Profile: React.FC = () => {
  return (
    <div className="w-85% flex flex-col">
      <div className="font-medium text-32px leading-40px mb-24px">Profiles Owned</div>
      <div className="w-full flex flex-col gap-y-40px">
        <ProfileOwned />
      </div>
    </div>
  );
};

export default Profile;
