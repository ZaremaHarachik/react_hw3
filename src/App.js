// 1
// Отримати всі user з jsonplaceholder та вивести їх. до кожного user зробити кнопку при натисканні
// якої виводяться всі пости поточного юзера в межах Users компоненти
// State lifting + events task

import Users from "./components/users/Users";

export default function App() {
  return (
    <div>
   <Users/>

    </div>
  );
}
