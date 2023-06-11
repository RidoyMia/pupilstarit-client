function Ami() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div>
        {/* Your form content here */}
        <button onClick={handlePrint}>Print</button>
      </div>
    </>
  );
}
export default Ami;
