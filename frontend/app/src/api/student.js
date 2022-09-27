// call api
const getStudentList = async () => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:3000/products`,
  });
  return res.data;
};

const getStudentDetail = async (id) => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:3000/products/${id}`,
  });
  return res.data;
};

const createStudent = async (student) => {
  const res = await axios({
    method: "POST",
    url: `http://localhost:3000/products`,
    data: student,
  });
  console.log(res.data);
  return res.data;
};

const updateStudent = async (id, student) => {
  const res = await axios({
    method: "PUT",
    url: `http://localhost:3000/products/${id}`,
    data: student,
  });
  return res.data;
};

const deleteStudent = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:3000/products/${id}`,
  });
  return res.data;
  //   $("#modalMessage").modal("show");
  //   await getStudentList();
};

export {
  getStudentList,
  getStudentDetail,
  createStudent,
  updateStudent,
  deleteStudent,
};
