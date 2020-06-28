import ListItem from '../ListItem';

export default ({ data }) => {
  const { list, title } = data;
  return (
    <div>
      <p>{title}</p>
      {list &&
        list.length > 0 &&
        list.map((v, i) => <ListItem key={i.toString()} itemData={v} />)}
    </div>
  );
};
