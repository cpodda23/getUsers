const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

async function main() {
  const users = await getUsers();
  const newUsers = [
    ...users.filter((user) => user.username !== 'Samantha'),
    users.find((user) => user.username === 'Samantha'),
  ];

  console.log(newUsers);
}

main();

async function main2() {
  const users = await getUsers();
  const i = users.findIndex((user) => user.username === 'Samantha');
  const newUsers = [
    ...users.slice(0, i),
    ...users.slice(i + 1),
    ...users.slice(i, i + 1),
  ];
  console.log(newUsers);
}
main2();
