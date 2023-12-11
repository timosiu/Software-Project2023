import ListItem from "./ListItem";

// Component handling list data
const List = ({ data, type }) => {
  if (!data.length) {
    return <h3>No {type} items found</h3>;
  }

  return (
    <div className="grid grid-cols-3 mt-5 place-items-center bg-light-bg dark:bg-dark-bg rounded-t-3xl min-h-screen w-full p-10 divide-y divide-light-text dark:divide-dark-text gap-0">
      {data.map((item) => (
        <ListItem key={item.id} item={item} type={type} />
      ))}
    </div>
  );
};

export default List;
