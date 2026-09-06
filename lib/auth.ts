import { demoUser } from "@/data/user";

export function validateCredentials(
  customerId: string,
  password: string,
): boolean {
  return (
    customerId === demoUser.customerId &&
    password === demoUser.password
  );
}
