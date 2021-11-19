export function getAll(setCards, showCardsByStringInt) {
  // setCards: sets the card data into state mgmt
  // showCardsByStringInt handles processing is_archived into client side mgmt of archival state.
  // why not just handle it from setCards you ask? because changing the value of the is_archived key is too difficult
  // while its in state. If I'm wrong & its a simple job please show me...
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
      console.log("###########################");
      console.log("here is the ccard data from api...", data);
      let cardsToShow = [];
      for (let i = 0; i < data.length; i++) {
        let cardIsArchivedAlready = data[i].is_archived;
        console.log(data[i].from, data[i].is_archived, "24");
        if (cardIsArchivedAlready) {
          // ... nothing because we don't want to show this card (explicit > implicit for readability)
        } else {
          cardsToShow.push(i.toString());
        }
      }
      console.log("settig cards to show...", cardsToShow); // correct state shown
      showCardsByStringInt(cardsToShow); // should only be onPageLoad
      console.log("###########################");
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
      getAll(setCards, setShowCardsByStringInt);
    })
    .catch((err) => {
      console.log(err);
    })
    .catch((err) => {
      console.log(err);
    });
}
