import { Button, Heading, Flex } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

export default function App() {
  const { signOut, user } = useAuthenticator();

  return (
    <Flex direction="column" alignItems="center">
      <Heading level={1}>My Profile</Heading>
      <Heading level={3}>{user?.signInDetails?.loginId}</Heading>
      <Button onClick={signOut}>Sign Out</Button>
    </Flex>
  );
}
