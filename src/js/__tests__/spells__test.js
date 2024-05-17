import { getSpells } from '../spells';

describe('spells', () => {
	test.each([
		[{
			name: 'Лучник',
			type: 'Bowman',
			health: 50,
			level: 3,
			attack: 40,
			defence: 10,
			special: [
				{
					id: 8,
					name: 'Двойной выстрел',
					icon: 'http://...',
					description: 'Двойной выстрел наносит двойной урон'
				}
			]
		},
		{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон'
		},
		],
		[{
			name: 'Лучник',
			type: 'Bowman',
			health: 50,
			level: 3,
			attack: 40,
			defence: 10,
			special: [
				{
					id: 9,
					name: 'Нокаутирующий удар',
					icon: 'http://...'
				}
			]
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...',
			description: 'Описание недоступно'
		},
		],
	])('testing', (input, output)=>{
		expect(getSpells(input).toString()).toEqual(output.toString());
	});
})