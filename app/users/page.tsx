import { userApi } from '@/features/user/api/user.api';
import { ApiError } from '@/shared/lib/api/error';
import UsersTemplate from '@/features/user/templates/UsersTemplate';

const page = async () => {

  const users = await userApi.fetchUser();

  if (!users)
    throw new ApiError("Failed to load users", 500)

  const userData = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    company: user.company.name
  }));

  return (
      <UsersTemplate userData={userData} />
  )
}

export default page
