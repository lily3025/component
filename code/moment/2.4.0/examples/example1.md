# 基本用法2

## Formatting dates

```js
moment().format('MMMM Do YYYY, h:mm:ss a');
moment().format('dddd');
moment().format("MMM Do YY");
moment().format('YYYY [escaped] YYYY');
moment().format('L');
moment().format();
```

<div id="output-1"> </div>

## Timeago

```js
moment("20111031", "YYYYMMDD").fromNow();
moment("20120620", "YYYYMMDD").fromNow();
moment().startOf('day').fromNow();
moment().endOf('day').fromNow();
moment().startOf('hour').fromNow();
```

<div id="output-2"> </div>

## Calendar Time

```js
moment().subtract('days', 10).calendar();
moment().subtract('days', 6).calendar();
moment().subtract('days', 3).calendar();
moment().subtract('days', 1).calendar();
moment().calendar();
moment().add('days', 1).calendar();
moment().add('days', 3).calendar();
moment().add('days', 10).calendar();
```

<div id="output-3"> </div>

<script>
    require(['{{module}}'], function(moment) {
        moment.lang('zh-cn');

        function formatArray(array) {
            return array.join('<br/>');
        }

        function formatHtml() {
            var arr = [];
            arr.push(moment().format('MMMM Do YYYY, h:mm:ss a'));
            arr.push(moment().format('dddd'));
            arr.push(moment().format("MMM Do YY"));
            arr.push(moment().format('YYYY [escaped] YYYY'));
            arr.push(moment().format('L'));
            arr.push(moment().format());
            return formatArray(arr);
        }

        function fromHtml() {
            var arr = [];
            arr.push(moment("20111031", "YYYYMMDD").fromNow());
            arr.push(moment("20120620", "YYYYMMDD").fromNow());
            arr.push(moment().startOf('day').fromNow());
            arr.push(moment().endOf('day').fromNow());
            arr.push(moment().startOf('hour').fromNow());
            return formatArray(arr);
        }

        function calendarHtml() {
            var arr = [];
            arr.push(moment().subtract('days', 10).calendar());
            arr.push(moment().subtract('days', 6).calendar());
            arr.push(moment().subtract('days', 3).calendar());
            arr.push(moment().subtract('days', 1).calendar());
            arr.push(moment().calendar());
            arr.push(moment().add('days', 1).calendar());
            arr.push(moment().add('days', 3).calendar());
            arr.push(moment().add('days', 10).calendar());
            return formatArray(arr);
        }

        $('#output-1').html(formatHtml());
        $('#output-2').html(fromHtml());
        $('#output-3').html(calendarHtml());
    });
</script>
