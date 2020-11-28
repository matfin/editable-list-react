window.addEventListener('load', async () => {
  const randomEmails = [
    'me@mattfinucane.com',
    'test@one.nl',
    'another@two.de',
    'three@four.ru',
    'five@six-seven.yu',
    'someone@somewhere.com',
    'random@email.ie',
    'science@uni.su',
    'compapp@dcu.ie',
    'matfin@gmail.com',
  ];
  const randomNumberInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // initialise the optimised component
  const optimisedEl = document.querySelector('#optimised .emails-input');
  const optimisedAddButton = document.querySelector('#optimised .add-email');
  const optimisedCountButton = document.querySelector('#optimised .get-count');
  const optimised = await emailBoard.init(optimisedEl, true);

  // initialise the control component
  const controlEl = document.querySelector('#control .emails-input');
  const controlAddButton = document.querySelector('#control .add-email');
  const controlCountButton = document.querySelector('#control .get-count');
  const control = await emailBoard.init(controlEl, false);

  // add a large number of emails to the optimised list
  optimisedAddButton.addEventListener('click', () => {
    for (let i = 0; i < 400; i++) {
      setTimeout(() => {
        const index = randomNumberInRange(0, randomEmails.length);

        optimised.addEmailAddress(randomEmails[index]);
      }, 5);
    }
  });
  // get the count
  optimisedCountButton.addEventListener('click', () =>
    alert(optimised.getEmailCount())
  );

  // add a large number of emails to the control list
  controlAddButton.addEventListener('click', () => {
    for (let i = 0; i < 400; i++) {
      setTimeout(() => {
        const index = randomNumberInRange(0, randomEmails.length);

        control.addEmailAddress(randomEmails[index]);
      }, 5);
    }
  });
  // get the count
  controlCountButton.addEventListener('click', () =>
    alert(control.getEmailCount())
  );
});
