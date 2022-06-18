const tweets = [
    {
      id: 10512,
      message: "Hello Twitter 👋",
      stats: {
        likes: 41,
        retweets: 54
      }
    },
    {
      id: 41241,
      message: "How do you keep track of your notes?",
      stats: {
        likes: 14,
        retweets: 20
      }
    }
  ];

  tweets.forEach(tweet => {
    const {likes, retweets} = tweet.stats;
    console.log(likes, retweets);
  });


  console.log(1+NaN);