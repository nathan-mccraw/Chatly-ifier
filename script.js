function getChatTranscript() {
  fetch("https://redventures.github.io/chatly-ifier/api/v1.json")
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(console.log(`Error: ${response.status}`));
      }
      const res = await response.json();
      createChatTranscript(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createChatTranscript(chatTranscript) {
  appendDateElement("transcriptDate", chatTranscript.conversationDate);
  const chatWindow = document.getElementById("chatWindow");
  const firstUser = chatTranscript.messages[0].username;

  for (let msg of chatTranscript.messages) {
    const messageContainer = createMessageContainer();
    const userImg = createUserImageElement(msg.image);
    const msgTextElement = createPElement("messageText", msg.message);
    const usernameElement = createUsernameElement(firstUser, msg.username);
    const msgTimeElement = createPElement("time", formatTime(msg.timestamp));

    const msgFooterElement = createMsgFooter();
    msgFooterElement.append(usernameElement, msgTimeElement);

    const msgBodyElement = createMsgBodyElement(msg.focused);
    msgBodyElement.append(msgTextElement, msgFooterElement);

    msg.username === firstUser
      ? messageContainer.append(userImg, msgBodyElement)
      : messageContainer.append(msgBodyElement, userImg);

    chatWindow.append(messageContainer);
  }
}

//Create Element functions
function createMsgBodyElement(isfocused) {
  const msgBodyElement = document.createElement("div");
  msgBodyElement.className = "messageBody";
  msgBodyElement.onclick = () => {
    document.querySelector(".focused").classList.remove("focused");
    msgBodyElement.classList.add("focused");
  };
  if (isfocused) msgBodyElement.classList.add("focused");
  return msgBodyElement;
}

function createMsgFooter() {
  const msgFooterElement = document.createElement("div");
  msgFooterElement.className = "messageFooter";
  return msgFooterElement;
}

function createUsernameElement(firstUser, currentUser) {
  const userClass = currentUser === firstUser ? "firstUser" : "secondUser";
  return createPElement(userClass, currentUser);
}

function createUserImageElement(imageURL) {
  const userImg = document.createElement("img");
  userImg.src = imageURL;
  userImg.className = "userImage";
  userImg.alt = "User Image";
  return userImg;
}

function createMessageContainer() {
  messageContainerElement = document.createElement("div");
  messageContainerElement.className = "messageContainer";
  return messageContainerElement;
}

function appendDateElement(elementId, date) {
  const documentDate = document.getElementById(elementId);
  documentDate.textContent = formatDate(date);
  return documentDate;
}

//Helper functions
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

getChatTranscript();
