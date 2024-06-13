import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllUsers } from "../lib/actions";

export default async function App() {
  const users = await getAllUsers();

  return (
    <section className=" w-full">
      <div className="flex flex-col lg:flex-row gap-2 ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Create User</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            Content
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button>Add User</Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

      </div>

      <div>
        <ul>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>



    </section>
  );
}
