export function getAll(setCards) {
  const url = "https://aircall-job.herokuapp.com/activities";
  fetch(url, {
    method: "get",
    dataType: "json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((success) => {
      return success.json();
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
  console.log("archiving...", id);
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

export function resetAll(setCards, resetShowCards) {
  const url = "https://aircall-job.herokuapp.com/reset";
  fetch(url, {
    method: "get",
    dataType: "json",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((success) => {
      return success.json();
    })
    .then((data) => {
      getAll(setCards);
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => {
      console.log(err);
    });
}
