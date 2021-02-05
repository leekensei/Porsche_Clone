import ListItem from '../components/ListItem';
import { User } from '../interfaces';

type Props = {
  items: User[]
}

const List = ({ items }: Props) => {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
