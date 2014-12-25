##简介

Moment是一个对时间进行相关操作的组件。其使用方法类似于js原生的Date对象。

Moment提供了比较丰富的对时间操作的方法，大概可以归为**构造、设置、变化、输出、判定**五个类别。

例：`moment().set('year',2012).add('month', 7).fromNow() // 5 months ago`

Moment还可以根据需求进行一些本地化的定制。如添加中文语言支持后：

`moment().lang('zh-cn').format('DD MMMM') // 03 十一月`

##一、解析，生成moment时间对象

###得到当前时间
**moment();**

同 `moment(new Date())`

###通过解析字符串获取时间。

参数：（时间字符串，格式化字符串或格式化字符串数组，区域标志，是否对格式化字符串严格匹配）

**moment(String);**

	moment("Dec 25, 1995");
	moment("2013-039T09:30:26 Z")

**moment(String, String);**

	moment("12-25-1995", "MM-DD-YYYY");
	moment("12\25\1995", "MM-DD-YYYY");

**moment(String, String, String);**

	moment('2012 July', 'YYYY MMM', 'en');

**moment(String, String, Boolean);**

	moment('It is 2012-05-25', 'YYYY-MM-DD').isValid();        // true
	moment('It is 2012-05-25', 'YYYY-MM-DD', true).isValid();  // false

**moment(String, String, String, Boolean);**

	moment('2012-10-14', 'YYYY-MM-DD', 'fr', true);

**moment(String, String[], String, Boolean);**

	moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);

###通过解析其他时间信息获取时间。

**moment(object)**

	moment({years: 2010, months: 3, days: 5, hours: 15, minutes: 10, seconds: 3, milliseconds: 123});

**moment(milliseconds)**

	moment(1318781876406);

**moment(seconds)**

	moment.unix(1318781876.721);

**moment(Date)**
	
	moment(new Date(2011, 9, 16));

**moment(Array)**

[year, month, day, hour, minute, second, millisecond]

	moment([2010, 1, 14, 15, 25, 50, 125]);

##二、获取或设置时间相关属性

	moment().get('year');
	moment().set('year', 2013);
	moment().year();
	moment().year(2013);

##三、时间相关操作

###增加时间 .add
	
	moment().add('day', 1);
	moment().add(1, 'day');
	moment().add(moment.duration({'days' : 1}));
	moment().add({days:7,months:1});

###减少时间 .subtract

同`add`

	moment().subtract(String, Number);
	moment().subtract(Number, String); 
	moment().subtract(Duration);
	moment().subtract(Object);

###设置为指定字段的开始时间 .startOf

会改变原moment对象

	moment([2013,10,28,20,38,12]).startOf('month').toString() // Fri Nov 01 2013 00:00:00 GMT+0800
	moment([2013,10,28,20,38,12]).startOf('minute').toString() // Thu Nov 28 2013 20:38:00 GMT+0800

###设置为指定字段的结束时间 .endOf

同`startOf`

	moment([2013,10,28,20,38,12]).endOf("year").toString() // Tue Dec 31 2013 23:59:59 GMT+0800

###返回较大的时间 .max

不会改变原moment对象

	moment().max(Moment|String|Number|Date|Array);

###返回较小的时间 .min

	moment().min(Moment|String|Number|Date|Array);

##四、格式化输出时间

###根据格式化字符串输出时间 .format [格式化字符表](http://momentjs.com/docs/#/displaying/format/)

	moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // Monday, October 28th 2013, 8:55:15 pm
	moment().format(); // 2013-10-28T20:55:35+08:00

###与现在的时间差表示 .fromNow [显示规则](http://momentjs.com/docs/#/displaying/fromnow/)

	moment([2007, 0, 29]).fromNow(); // 7 years ago
	moment([2007, 0, 29]).fromNow(true); // 7 years （无ago）

###与指定时间的时间差表示 .from

	moment().from(Moment|String|Number|Date|Array);
	moment().from(Moment|String|Number|Date|Array, Boolean);

###相对于现在对时间进行描述输出 .calendar（不同于 .fromNow）

	moment().add('day',-1).calendar(); // Yesterday at 5:43 PM

###获取时间差 .diff

参数（时间，输出单位，是否精确输出）

	moment().diff(Moment|String|Number|Date|Array, String, Boolean);
	a=moment();b=moment().add('day',37);a.diff(b,'month') // -1 (返回a-b)
	a=moment();b=moment().add('day',37);a.diff(b,'month') // -1.2258064516129032

###距 1970 年 1 月 1 日之间的毫秒数 .valueOf

类Date的getTime方法

	moment().valueOf(); // 1383040975521
	+moment(); // 1383040975521

###距 1970 年 1 月 1 日之间的秒数 .unix

	moment().unix(); // 1383041055

###返回所处月份的天数 .daysInMonth

	moment("2012-02", "YYYY-MM").daysInMonth() // 29
	moment("2012-01", "YYYY-MM").daysInMonth() // 31

###返回js的Date对象 .toDate

改变返回的date对象，相应的moment对象也会变化。可先使用clone方法对moment对象进行克隆再返回date对象

	moment().toDate();

###返回数组形式的时间表示 .toArray

	moment().toArray(); // [2013, 1, 4, 14, 40, 16, 154];

###返回ISO8601形式的时间表示 .toISOString

将moment对象进行JSON序列化时，会以该形式进行输出。

	moment().toISOString() // 2013-02-04T22:44:30.652Z

##五、对时间进行比较和判定

###是否在指定时间前 .isBefore

	moment().isBefore(Moment|String|Number|Date|Array, String);

	moment('2010-10-20').isBefore('2010-10-21'); // true
	moment('2010-10-20').isBefore('2010-12-31', 'year'); // false
	moment().isBefore(); // false

###是否和指定时间相同 .isSame

	moment().isSame(Moment|String|Number|Date|Array, String);

	moment('2010-10-20').isSame('2010-10-20'); // true
	moment('2010-10-20').isSame('2010-01-01', 'year'); // true
	moment().isSame(); // true

###是否在指定时间后 .isAfter

	moment().isAfter(Moment|String|Number|Date|Array, String);

	moment('2010-10-20').isAfter('2010-10-19'); // true
	moment('2010-10-20').isAfter('2010-01-01', 'year'); // false
	moment().isAfter(); // false

###是否是闰年 .isLeapYear 

	moment([2000]).isLeapYear() // true

###是否是moment对象 #isMoment

	moment.isMoment(obj);

	moment.isMoment(moment()) // true