function getTranscript() {
  fetch("https://redventures.github.io/chatly-ifier/api/v1.json")
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(console.log(`Error: ${response.status}`));
      }
      const res = await response.json();
      createTranscript(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createTranscript(data) {
  const documentDate = document.getElementById("transcriptDate");
  documentDate.textContent = formatDate(data.conversationDate);

  const chatWindow = document.getElementById("chatWindow");
  const firstUser = data.messages[0].username;

  for (let message of data.messages) {
    const messageContainer = document.createElement("div");
    messageContainer.className = "messageContainer";
    if (message.focused) messageContainer.classList.add("focused");

    const userImg = document.createElement("img");
    userImg.src = message.image;
    userImg.className = "userImage";

    const messageTextElement = createPElement("messageText", message.message);

    const userClass =
      message.username === firstUser ? "firstUser" : "secondUser";
    const usernameElement = createPElement(userClass, message.username);

    const timestampElement = createPElement(
      "time",
      formatTime(message.timestamp)
    );

    const messageBodyElement = document.createElement("div");
    messageBodyElement.className = "messageBody";
    messageBodyElement.append(
      messageTextElement,
      usernameElement,
      timestampElement
    );

    message.username === firstUser
      ? messageContainer.append(userImg, messageBodyElement)
      : messageContainer.append(messageBodyElement, userImg);

    chatWindow.append(messageContainer);
  }
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

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString("en-US", {
    timeStyle: "short",
  });
}

function createPElement(className, content) {
  PElement = document.createElement("p");
  PElement.className = `${className}`;
  PElement.textContent = `${content}`;
  return PElement;
}

getTranscript();
