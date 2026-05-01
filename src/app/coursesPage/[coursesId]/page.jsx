const courseDetails = async ({ params }) => {
  const { coursesId } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();

  const dataFind = data.find((d) => d.id == coursesId);
  console.log(dataFind);
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default courseDetails;
