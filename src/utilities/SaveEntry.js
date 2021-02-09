export const SaveEntry = (staff, entry) => {
  fetch(
    `https://face-recognition-siet.herokuapp.com/saveUser/${
      entry === "CheckIn" ? "checkIn" : "checkOut"
    }`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ Name: staff.Name }),
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
