import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationPage = () => {
  const { userId, orgId } = auth();
  return <div>Organization Page</div>;
};

export default OrganizationPage;
