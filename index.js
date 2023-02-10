const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

async function main() {
  const users = await getUsers();
  const Samantha = users.find((user) => user.username === 'Samantha');
  console.log(Samantha);

  const newArr = [...users, Samantha];
  console.log(newArr);
}

main();
