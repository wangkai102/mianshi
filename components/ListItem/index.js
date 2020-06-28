export default ({ itemData }) => {
  const { question, answer } = itemData;
  return (
    <div>
      <div>{question}</div>
      <div>
        {Array.isArray(answer) ? (
          answer.map((v, i) => <p key={i.toString()}>{v}</p>)
        ) : (
          <p>{answer}</p>
        )}
      </div>
    </div>
  );
};
