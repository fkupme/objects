export const getSpells = (object) => {
	const { special } = object; // изначально я выполнил это прям в аргументе но линт выдал ошибку как быть
	special.forEach(item => {
		if(!item.description){
			item.description = 'Описание недоступно';
		}
	})
	return special
};
