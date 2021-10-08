function getTranscript() {
  fetch("https://redventures.github.io/chatly-ifier/api/v1.json")
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(console.log(`Error: ${response.status}`));
      }
      const res = await response.json();
      const documentDate = document.getElementById("documentDate");
      documentDate.textContent = res.data.conversationDate;
      const chatWindow = document.getElementById("chatWindow");
      for (let message of res.data.messages) {
        const messageContainer = document.createElement("div");
        messageContainer.setAttribute("class", "messageContainer");
        const userImg = document.createElement("img");
        userImg.src = message.image;
        const messageBody = document.createElement("div");
        const messageText = document.createElement("p");
        messageText.textContent = message.message;
        const username = document.createElement("p");
        username.textContent = message.username;
        const timestamp = document.createElement("p");
        timestamp.textContent = message.timestamp;
        messageBody.append(messageText, username, timestamp);
        messageContainer.append(userImg, messageBody);
        chatWindow.append(messageContainer);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

getTranscript();
