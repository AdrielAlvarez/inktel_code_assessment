$(document).ready(() => {
  $.getJSON("./js/data.json", (data) => {
    for (i in data.campaigns) {
      if (i % 3 == 0 && i != 0) {
        $("#campaingCol3").append(
          `<div class="row"><input type="checkbox" id="${data.campaigns[i].campaignId}" name="${data.campaigns[i].campaignId}">${data.campaigns[i].campaignId}${data.campaigns[i].campaignName}</input></div>`
        );
      } else if (i % 2 == 0 && i != 0) {
        $("#campaingCol2").append(
          `<div class="row"><input type="checkbox" id="${data.campaigns[i].campaignId}" name="${data.campaigns[i].campaignId}">${data.campaigns[i].campaignId}${data.campaigns[i].campaignName}</input></div>`
        );
      } else if (i % 1 == 0) {
        $("#campaingCol1").append(
          `<div class="row"><input type="checkbox" id="${data.campaigns[i].campaignId}" name="${data.campaigns[i].campaignId}">${data.campaigns[i].campaignId}${data.campaigns[i].campaignName}</input></div>`
        );
      }
    }
    for (i in data.groupShifts) {
      $("#groupShiftCol").append(
        `<div class="row"><input type="checkbox" id="${data.groupShifts[i].GroupShiftId}" name="${data.groupShifts[i].GroupShiftId}">${data.groupShifts[i].GroupShiftId}${data.groupShifts[i].GroupShiftName}</input></div>`
      );
    }
    for (i in data.agentStatus) {
      $("#agentStatusCol").append(
        `<div class="row"><input type="checkbox" id="${data.agentStatus[i].agentId}" name="${data.agentStatus[i].agentId}">${data.agentStatus[i].agentId}${data.agentStatus[i].agentStatusName}</input></div>`
      );
    }
    for (i in data.users) {
      $("#usersCol1").append(
        `<div class="row"><a href="" class="${data.users[i].userId}" >${data.users[i].userId}${data.users[i].userId}</a></div></br>`
      );
      $("#usersCol2").append(
        `<div class="row"><span class="${data.users[i].userId}" >${data.users[i].userFullName}</span></div></br>`
      );
      $("#usersCol3").append(
        `<div class="row"><span class="${data.users[i].userId}" >${data.users[i].userLevel}</span></div></br>`
      );
      if (!data.users[i].active) {
        $("#usersCol4").append(
          `<div class="row"><span class="${data.users[i].userId}" >N</span></div></br>`
        );
      } else {
        $("#usersCol4").append(
          `<div class="row"><span class="${data.users[i].userId}" >Y</span></div></br>`
        );
      }
    }
  });

  let urlParams = new URLSearchParams(window.location.search);
  $(".username").html(urlParams.get("user"));
  var day;
  Date.prototype.today = function () {
    return (
      (this.getMonth() + 1 < 10 ? "0" : "") +
      (this.getMonth() + 1) +
      "/" +
      (this.getDate() < 10 ? "0" : "") +
      this.getDate() +
      "/" +
      this.getFullYear()
    );
  };
  Date.prototype.timeNow = function () {
    return (
      (this.getHours() < 10 ? "0" : "") +
      (this.getHours() > 12 ? this.getHours() - 12 : this.getHours()) +
      ":" +
      (this.getMinutes() < 10 ? "0" : "") +
      this.getMinutes() +
      ":" +
      (this.getSeconds() < 10 ? "0" : "") +
      this.getSeconds() +
      (this.getHours() > 12 ? "PM" : "AM")
    );
  };
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  setInterval(() => {
    $(".timeStamp").html(
      day + "  " + new Date().today() + "  " + new Date().timeNow()
    );
  }, 1000);
});
