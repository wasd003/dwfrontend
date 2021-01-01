const Mock = require('mockjs');
/**
 * 注意要使用mock不能换源
 */

const mockMovieList = Mock.mock({
    "code": 200,
    "data": {
        "count|1-100": 100,
        "duration|1-10": 10,
        "reslist|30-50": [{
            "movie_id|+1": 1,
            "movie_name": 'Harry Potter 1',
            "movie_rating|1-5": 5,
            "type_bridge_id|1-100": 1,
            "time_id|1-25": 347,
            "movie_neg_count|1-1000": 4,
            "movie_pos_count|1-1000": 27,
            "movie_is_positive|0-1": 1
        }]
    }
});

const mockAAList = Mock.mock({
   "code": 200,
   "data": {
       "duration|1-10": 10,
       "reslist|30-50": [{
           "movie_id|+1": 1,
           "movie_name": 'Harry Potter 1',
           "movie_rating|1-5": 5,
           "type_bridge_id|1-100": 1,
           "time_id|1-25": 347,
           "movie_neg_count|1-1000": 4,
           "movie_pos_count|1-1000": 27,
           "movie_is_positive|0-1": 1
       }]
   }
});

const mockADList = Mock.mock({
    "code": 200,
    "data": {
        "duration|1-10": 10,
        "reslist|30-50": [{
            "movie_id|+1": 1,
            "movie_name": 'Harry Potter 1',
            "movie_rating|1-5": 5,
            "type_bridge_id|1-100": 1,
            "time_id|1-25": 347,
            "movie_neg_count|1-1000": 4,
            "movie_pos_count|1-1000": 27,
            "movie_is_positive|0-1": 1
        }]
    }
});

const mockMoviePercentage = Mock.mock({
    "code": 200,
    "data": {
        "duration|1-10": 10,
        "reslist|5": [{
            "rating|+1": 1,
            "count|10000-100000": 10000
        }]
    }
});

// 1. xx年有多少电影
Mock.mock(RegExp('/apiurl/dim/time/year' + '.*'), 'get', option => {
    console.log('mock receive:' + option.url);
    return mockMovieList;
});

// 2. xx月xx日有多少电影
Mock.mock(RegExp('/apiurl/dim/time/month_day' + '.*'), 'get', option => {
    console.log('mock receive:' + option.url);
    return mockMovieList;
});

// 3. 周二新增多少电影
Mock.mock(RegExp('/apiurl/dim/time/weekday' + '.*'), 'get', option => {
    console.log('mock receive: ' + option.url);
    return mockMovieList;
});

// 4. xx导演导过的片
Mock.mock(RegExp('/apiurl/dim/director/movie_count' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockMovieList;
});

// 5. xx演员拍过的片
Mock.mock(RegExp('/apiurl/dim/actor/movie_count' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockMovieList;
});
// 6. 经常合作的演员
Mock.mock(RegExp('/apiurl/dim/actor/cooperation' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockAAList;
});
// 7. 经常合作的演员和导演
Mock.mock(RegExp('/apiurl/dim/actor/director' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockADList;
});

// 8. 按照电影类别查询
Mock.mock(RegExp('/apiurl/dim/movie/type' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockMovieList;
});
// 9. x分以上的电影
Mock.mock(RegExp('/apiurl/dim/movie/rating' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockMovieList;
});
// 10. 包含正面评价的电影
Mock.mock(RegExp('/apiurl/dim/movie/positive' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockMovieList;
});
// 11. xx分以上的xx类型电影
Mock.mock(RegExp('/apiurl/dim/movie/rating/type' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockMovieList;
});
// 12. xx导演的xx分以上电影
Mock.mock(RegExp('/apiurl/dim/movie/director/rating' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockMovieList;
});
// 13. xx电影的所有版本
Mock.mock(RegExp('/apiurl/dim/movie/version' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockMovieList;
});
// 14. 1-5分的电影百分比
Mock.mock(RegExp('/apiurl/dim/movie/percentage' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    console.log('send:');
    console.log(mockMoviePercentage);
    return mockMoviePercentage;
});
// 15. xx演员的职业生涯
