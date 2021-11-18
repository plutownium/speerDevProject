export function getAll(setCards) {
  const url = "https://aircall-job.herokuapp.com/activities";
  fetch(url)
    .then((success) => {
      console.log(5);
      success.json();
    })
    .then((res) => {
      console.log(9);
      setCards(res);
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
