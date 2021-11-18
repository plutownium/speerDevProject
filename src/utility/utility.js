export function getAll(setCards) {
  const url = "https://aircall-job.herokuapp.com/activities";
  fetch(url)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log(9, data);
      setCards(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getById(id) {
  fetch("https://aircall-job.herokuapp.com/activities/" + id)
    .then((success) => {
      console.log(success);
      return "success";
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateById(id) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      is_archived: true,
    }),
  };
  fetch("https://aircall-job.herokuapp.com/activities/" + id, options)
    .then((success) => {
      console.log(success);
      return "success";
    })
    .catch((err) => {
      console.log(err);
    });
}
