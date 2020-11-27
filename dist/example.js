window.addEventListener('load', () => {
  const first = document.querySelector('#first .emails-input');
  const second = document.querySelector('#second .emails-input');
  const emailAddresses = [
    'me@mattfinucane.com',
    'test@one.nl',
    'another@two.de',
    'three@four.ru',
    'five@six-seven.yu',
    'someone@somewhere.com',
  ];
  const randomNumberInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // initialise the component
  emailBoard.init(first, 'first');
  emailBoard.init(second, 'second');

  // add a random email
  document.querySelector('#first .add-email').addEventListener('click', function () {
    const index = randomNumberInRange(0, emailAddresses.length);

    emailBoard.addRandomEmail(emailAddresses[index], 'first');
  });

  document.querySelector('#second .add-email').addEventListener('click', function () {
    const index = randomNumberInRange(0, emailAddresses.length);

    emailBoard.addRandomEmail(emailAddresses[index], 'second');
  });

  // get email count
  document.querySelector('#first .get-count').addEventListener('click', function () {
    const emailBlockNodes = document.querySelectorAll('#first .emails-input div[data-testid="email-block"]');

    alert(emailBlockNodes.length);
  });
  document.querySelector('#second .get-count').addEventListener('click', function () {
    const emailBlockNodes = document.querySelectorAll('#second .emails-input div[data-testid="email-block"]');

    alert(emailBlockNodes.length);
  });

  window.elPollute = (listId, count = 100) => {
    for(let i = 0; i < count; i++) {
      setTimeout(() => {
        const index = randomNumberInRange(0, emailAddresses.length);

        emailBoard.addRandomEmail(emailAddresses[index], listId);
      }, 10);
    }
  };
});
