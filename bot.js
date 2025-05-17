
  // Basic initialization
  var chatConfig = KoreChatSDK.chatConfig;
  var chatWindow = KoreChatSDK.chatWindow;
  var chatWindowInstance = new chatWindow();

  // Bot configuration
  var botOptions = chatConfig.botOptions;
  botOptions.koreAPIUrl = "https://platform.kore.ai/api/";
  botOptions.JWTUrl = "https://mk2r2rmj21.execute-api.us-east-1.amazonaws.com/dev/users/sts";
  botOptions.userIdentity = "shivani.vellanki@staples.com";
  botOptions.botInfo = {
    name: "Reactive POC",
    _id: "st-cd7dc0d8-c4e2-58a8-be49-95e0d97dfffd",
    customData: {
      language: "french",
      tenant: "pronix",
      source: "website"
    }
  };
  botOptions.clientId = "cs-de247d47-4b00-54b7-9261-eddaa39a754e";
  botOptions.clientSecret = "e5WPiFqgun567KGjzq2LoUqvwnULI2q48/DrJnxdK1Q=";
  botOptions.openSocket = true; // enable WebSocket for real-time chat
  botOptions.enableThemes = true; // enable UI theming

  // Optional: default language settings
  chatConfig.i18n = { defaultLanguage: "en" };

  // Show the chat window
  chatWindowInstance.show(KoreChatSDK.chatConfig);

