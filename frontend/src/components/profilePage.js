import userInventory from "./auth";

const ProfilePage = () => {
  const userInventoryFunction = userInventory.map((inventory) => {
    return <div>{inventory}</div>;
  });
};

export default ProfilePage;
