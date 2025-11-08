import { z } from "zod";

const UserSchema = z.object({
  email: z.string(),
  password: z.string()
});

export default UserSchema;
