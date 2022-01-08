export default function Home(user) {
  console.log("user.user[0]", user.user[0]);
  return (
    <>
      <pre>{JSON.stringify(user.user, null, 2)}</pre>
    </>
  );
}
