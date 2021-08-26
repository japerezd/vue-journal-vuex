export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), // 123132
      date: new Date().toDateString(), //sat 26, july
      text:
        'Minim ecercitation ad nulla occaecat eismod qui enim amet volptate incididun esse.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000, // 123132
      date: new Date().toDateString(), //sat 26, july
      text:
        'Lorem ecercitation ad nulla occaecat eismod qui enim amet volptate incididun esse.',
      picture: null,
    },
    {
        id: new Date().getTime() + 2000, // 123132
        date: new Date().toDateString(), //sat 26, july
        text:
          'Expecto patronum ecercitation ad nulla occaecat eismod qui enim amet volptate incididun esse.',
        picture: null,
      },
  ],
});
