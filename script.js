function getTranscript() {
  fetch("https://redventures.github.io/chatly-ifier/api/v1.json")
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(console.log(`Error: ${response.status}`));
      }

      const res = await response.json();

      const documentDate = document.getElementById("documentDate");
      documentDate.textContent = formatDate(res.data.conversationDate);

      const chatWindow = document.getElementById("chatWindow");
      const firstUser = res.data.messages[0].username;
      for (let message of res.data.messages) {
        const messageContainer = document.createElement("div");
        messageContainer.setAttribute("class", "messageContainer");

        const userImg = document.createElement("img");
        userImg.src = message.image;
        userImg.setAttribute("class", "userImage");

        const messageTextElement = document.createElement("p");
        messageTextElement.setAttribute("class", "messageText");
        messageTextElement.textContent = message.message;

        const usernameElement = document.createElement("p");
        const userClass =
          message.username === firstUser ? "firstUser" : "secondUser";
        usernameElement.setAttribute("class", userClass);
        usernameElement.textContent = message.username;

        const timestampElement = document.createElement("p");
        timestampElement.setAttribute("class", "time");
        timestampElement.textContent = message.timestamp;

        const messageBodyElement = document.createElement("div");
        messageBodyElement.append(
          messageTextElement,
          usernameElement,
          timestampElement
        );
        messageContainer.append(userImg, messageBodyElement);
        chatWindow.append(messageContainer);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function formatDate(conversationDate) {
  let date = new Date(conversationDate);
  let localeStringOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleString("en-US", localeStringOptions);
}

getTranscript();
