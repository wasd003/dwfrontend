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

const mockJson = Mock.mock(
    {
        "code": 200,
        "data": {
            "duration": 0.025,
            "reslist": [
                {
                    "year": 1977,
                    "movies": []
                },
                {
                    "year": 1978,
                    "movies": []
                },
                {
                    "year": 1979,
                    "movies": []
                },
                {
                    "year": 1980,
                    "movies": []
                },
                {
                    "year": 1981,
                    "movies": []
                },
                {
                    "year": 1982,
                    "movies": []
                },
                {
                    "year": 1983,
                    "movies": []
                },
                {
                    "year": 1984,
                    "movies": []
                },
                {
                    "year": 1985,
                    "movies": []
                },
                {
                    "year": 1986,
                    "movies": []
                },
                {
                    "year": 1987,
                    "movies": []
                },
                {
                    "year": 1988,
                    "movies": []
                },
                {
                    "year": 1989,
                    "movies": []
                },
                {
                    "year": 1990,
                    "movies": []
                },
                {
                    "year": 1991,
                    "movies": []
                },
                {
                    "year": 1992,
                    "movies": []
                },
                {
                    "year": 1993,
                    "movies": []
                },
                {
                    "year": 1994,
                    "movies": []
                },
                {
                    "year": 1995,
                    "movies": []
                },
                {
                    "year": 1996,
                    "movies": []
                },
                {
                    "year": 1997,
                    "movies": [
                        "Video DVDs for use with Intermediate Algebra"
                    ]
                },
                {
                    "year": 1998,
                    "movies": [
                        "Jacob",
                        "Passion for His Presence",
                        "New English File"
                    ]
                },
                {
                    "year": 1999,
                    "movies": [
                        "Turning Vision Into Action: Defining and Putting Into Practice the Unique Vision God Has for Your Ministry",
                        "Student DVD",
                        "Goldilocks and the Three Bears",
                        "The Girl's Still Got It: Take a Walk with Ruth and the God Who Rocked Her World"
                    ]
                },
                {
                    "year": 2000,
                    "movies": [
                        "Cathedral Quartet: A Reunion",
                        "The Donut Man: Jesus Shows Us God's Love with Brochure(s)"
                    ]
                },
                {
                    "year": 2001,
                    "movies": [
                        "Mother Goose Gospel Vol 1"
                    ]
                },
                {
                    "year": 2002,
                    "movies": [
                        "The Miracle of Our Lady of Fatima",
                        "Stormie Omartian's First Step"
                    ]
                },
                {
                    "year": 2003,
                    "movies": [
                        "Witnesses of Jehovah"
                    ]
                },
                {
                    "year": 2004,
                    "movies": [
                        "Praise Aerobics",
                        "Waltons the Homecoming",
                        "The Juggler of Notre Dame",
                        "Anne of Green Gables",
                        "Video Lecture: Basic College Mathematics, 2nd Edition",
                        "Video DVD to accompany Basic College Mathematics: A Real-World Approach"
                    ]
                },
                {
                    "year": 2005,
                    "movies": []
                },
                {
                    "year": 2006,
                    "movies": []
                },
                {
                    "year": 2007,
                    "movies": [
                        "Breaking Intimidation: How to Overcome Fear and Release the Gifts of God in Your Life",
                        "Out of the Tombs"
                    ]
                },
                {
                    "year": 2008,
                    "movies": []
                },
                {
                    "year": 2009,
                    "movies": [
                        "Steps to Freedom in Christ",
                        "Stormie Omartian's Low Impact Aerobic Workout Video",
                        "New Headway Pre-Intermediate. DVD (New Headway First Edition) (Spanish Edition)"
                    ]
                },
                {
                    "year": 2010,
                    "movies": [
                        "Can He, Could He, Would He",
                        "Wallace and Gromit: A Close Shave DVD (an English Language Teaching Adaptation)"
                    ]
                },
                {
                    "year": 2011,
                    "movies": [
                        "Passion According to Luke",
                        "Side by Side"
                    ]
                },
                {
                    "year": 2012,
                    "movies": [
                        "50 Years of Thorns and Roses",
                        "The Stableboy's Christmas",
                        "A Close Shave"
                    ]
                }
            ],
            "count": 32
        }

    });

// 1. xx年有多少电影
Mock.mock(RegExp('/apiurl/dim/time/year' + '.*'), 'get', option => {
    console.log('mock receive:' + option.url);
    return mockMovieList;
});

Mock.mock(RegExp('/apiurl/neo4j/time/year' + '.*'), 'get', option => {
    console.log('mock receive:' + option.url);
    return mockMovieList;
});

Mock.mock(RegExp('/apiurl/hive/time/year' + '.*'), 'get', option => {
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
    return mockMoviePercentage;
});
// 15. xx演员的职业生涯

// 16. 手写sql
Mock.mock(RegExp('/apiurl/dim/sql' + '.*'), 'get', option => {
    console.log('mock option: ' + option.url);
    return mockJson;
});
