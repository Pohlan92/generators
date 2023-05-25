import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Team from '../Team';

test('тестирование класса Team', () => {
  const player1 = new Daemon('Lena');
  const player2 = new Bowman('Ivan');
  const myTeam = new Team(player1, player2);

  let i = 0;
  for (const player of myTeam) {
    i += 1;
    if (i <= myTeam.players.length) {
      expect(player).toEqual(myTeam.players[i - 1]);
    }
  }
});
