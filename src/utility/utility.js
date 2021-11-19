export function getAll() {
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

export function resetAll(setCards, setShowCardsByStringInt) {
  // setCards && setShowCards is passed thru into the next function.

  // note if the challenge was to keep backend & client side archival state in alignment, I would've done that.
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
      getAll();
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => {
      console.log(err);
    });
}
