import ListItem from '../ListItem';

export default ({ data, title }) => {
  return (
    <div>
      <p>{title}</p>
      {data &&
        data.length > 0 &&
        data.map((v) => <ListItem key={v.id} data={v} />)}
    </div>
  );
};
