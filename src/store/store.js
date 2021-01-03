import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// getters 可根据需要使用
const getters = {};

// actions 跟 mutations 作用相同，不过是异步操作
const actions = {};

/**
 * 需要全组件共享的变量
 */
const state = {
    /**
     * 参数
     */
    year: 2000,
    month: 1,
    day: 1,
    weekday: 1,
    name: '',
    isChart: false,
    rating: 1.0,

    /**
     * res
     */
    movieList: [],
    count: 0, // 记录总数
    duration: 0,
    aaList: [],
    adList: [],
    percentageList: [],
    dimDuration: 0,
    neo4jDuration: 0,
    hiveDuration: 0,
    careerList: []
};

/**
 * 修改全组件共享变量
 */
const mutations = {
    setYear(state, year) {
        state.year = year;
    },
    setMonth(state, month) {
        state.month = month;
    },
    setDay(state, day) {
        state.day = day;
    },
    setName(state, name) {
        state.name = name;
    },
    setIsChart(state, isChart) {
        state.isChart = isChart;
    },
    setMovieList(state, movieList) {
        state.movieList = movieList;
        for (let i = 0; i < movieList.length; i ++ ) {
            let val = movieList[i].movie_is_positive;
            movieList[i].movie_is_positive = (val === 1? '是': '否');
        }
    },
    setCount(state, count) {
        state.count = count;
    },
    setDuration(state, duration) {
        state.duration = duration;
    },
    setWeekday(state, weekday) {
        state.weekday = weekday;
    },
    setAAList(state, aaList) {
        state.aaList = aaList;
    },
    setADList(state, adList) {
        state.adList = adList;
    },
    setRating(state, rating) {
        state.rating = rating;
    },
    setPercentageList(state, percentageList) {
        state.percentageList = [];
        for (let i = 0; i < percentageList.length; i ++ ) {
            state.percentageList.push({
                value: percentageList[i].count,
                name: percentageList[i].rating + '星'
            });
        }
    },
    setdimDuration(state, duration) {
        state.dimDuration = duration;
    },
    setneo4jDuration(state, duration) {
        state.neo4jDuration = duration;
    },
    sethiveDuration(state, duration) {
        state.hiveDuration = duration;
    },
    setCareerList(state, careerList) {
        state.careerList = [];
        for (let i = 0; i < careerList.length; i ++ ) {
            if (careerList[i].movies.length !== 0) {
                let serial = '';
                for (let j = 0; j < careerList[i].movies.length; j ++ ) {
                    serial += careerList[i].movies[j];
                    if (j !== careerList[i].movies.length - 1) {
                        serial += ' 与 ';
                    }
                }
                state.careerList.push({
                    year: careerList[i].year.toString(),
                    movies: serial
                });
            }

        }
    }

};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
