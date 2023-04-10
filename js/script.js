'use strict';

let NumberofFilms;

function start () {
	NumberofFilms = +prompt ('Сколько фильмов вы уже просмотрели?', '');

	while (NumberofFilms == '' || NumberofFilms == null || isNaN(NumberofFilms)) {
		NumberofFilms = +prompt ('Сколько фильмов вы уже просмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: NumberofFilms, 
	movies: {}, 
	actors: {}, 
	genres: [], 
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++){
		const a = prompt ('Один из послдкних просмотреных фильмов?',''),
			b = prompt ('На сколько оцените его?','');
		// number 2
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');    
		} else {
			console.log('error');
			i--;
		}   
	}
}

rememberMyFilms();

function detectPersonalLevel () {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольна мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы класичений зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB (hidden) {
	if (!hidden){
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i<= 3; i++){
		personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`, '');
	}
}

writeYourGenres();
// eslint-disable-next-line no-undef
a = 1;