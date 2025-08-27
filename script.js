const cardContainer = document.querySelector(".card-container");
let heartCount = parseInt(document.querySelector("#heart-count").innerHTML);
const coinsNumber = document.querySelector(".coinsNumber");
let converCoinsNumber = parseInt(coinsNumber.innerHTML);
const historyList = document.querySelector(".history-list");
const clearBtn = document.querySelector(".clear-btn");
const copyCount = document.querySelector(".copyCount");
console.log(copyCount);
let converCopyCount = parseInt(copyCount.innerHTML);

cardContainer.addEventListener("click", (e) => {
  if (e.target.closest(".fa-heart")) {
    heartCount++;
    document.querySelector("#heart-count").innerHTML = heartCount;
  }
  if (e.target.closest(".btn-call")) {
    callingFun(e);
  }
  if (e.target.closest(".copy-btn")) {
    copyFunc(e);
  }
});

clearBtn.addEventListener("click", (e) => {
  historyList.innerHTML = "";
});

function callingFun(e) {
  const parentDiv = e.target.closest(".card");
  const serviceName = parentDiv.querySelector("h2").innerHTML;
  const serviceNumber = parentDiv.querySelector("h3").innerHTML;
  if (converCoinsNumber > 0) {
    alert(`Calling ${serviceName} ${serviceNumber}`);

    coinsNumber.innerHTML = converCoinsNumber -= 20;

    const historyBox = document.createElement("div");
    historyBox.classList.add("flex", "justify-between", "items-center", "mt-5");
    historyBox.innerHTML = `
    <div>
              <h3 class="text-[17px] font-bold w-[180px]">
                ${serviceName}
              </h3>
              <p class="text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <p>${new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}</p>   
    `;
    historyList.append(historyBox);
  } else {
    alert(
      "You don't have enough coins. To make a call, you need at least 20 coins."
    );
  }
}

function copyFunc(e) {
  const cardBox = e.target.closest(".card");

  const serviceNumber = cardBox.querySelector("h3").innerHTML;
  console.log(serviceNumber);
  navigator.clipboard.writeText(serviceNumber).then(() => {
    alert(`Copied ${serviceNumber}`);
    converCopyCount++;
    copyCount.innerHTML = converCopyCount;
  });
}
