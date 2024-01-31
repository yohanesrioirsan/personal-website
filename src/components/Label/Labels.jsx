function Labels({ label, width }) {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#E6FF00",
          width: width,
          fontSize: "17px",
          height: "38px",
          fontWeight: "500",
          borderRadius: "0.5rem",
        }}
      >
        <p style={{ margin: "0" }}>{label}</p>
      </div>
    </>
  );
}

export default Labels;
