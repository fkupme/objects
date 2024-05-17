import { sort } from '../sort';

describe('sort', () => {
	const obj = {dexterity: 80, mana: 45, skillpoints: 'none', name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }

	test('testin sorting', () => {
		expect(sort(obj, ["name", "level"]).toString()).toEqual([
			{ key: "name", value: "мечник" },
			{ key: "level", value: 2 },
			{ key: "attack", value: 80 },
			{ key: "defence", value: 40 },
			{ key: "dexterity", value: 80 },
			{ key: "health", value: 10 },
			{ key: "skillpoints", value: 'none' },
			{ key: "mana", value: 45 },
		].toString())
	})
})