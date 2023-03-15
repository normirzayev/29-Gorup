function TestFile({ data, consoleTest }) {
  return (
    <>
      {data.map((item, index) => (
        <button key={index} onClick={() => consoleTest(index)}>
          {item}
        </button>
      ))}
    </>
  );
}
export default TestFile;
