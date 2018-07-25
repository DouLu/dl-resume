/**
 *author:doulu
 *create time:2018-07-23
 *description: ES6
 */
'use strict';
$(function () {
    var myFullpage = new fullpage('#fullPage', {
        //Navigation
        navigation:true,
        navigationColor:'#1086ee',
        //锚点定位
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        //Design
        controlArrows: true,
        verticalCentered: true,
        // sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#ef8200'],
        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        /*
        afterLoad: function(origin,destination,direction,index){

            if(destination.index == 1){
                $('.section2').find('p').delay(500).animate({
                    left: '0'
                }, 1500);
            }
            if(destination.index == 2){
                $('.section3').find('p').delay(500).animate({
                    bottom: '0'
                }, 1500);
            }
            if(destination.index == 3){
                $('.section4').find('p').fadeIn(2000);
            }
        },
        onLeave: function(origin,destination,direction,index){
            if(destination.index == '1'){
                $('.section2').find('p').delay(500).animate({
                    left: '-120%'
                }, 1500);
            }
            if(destination.index == '2'){
                $('.section3').find('p').delay(500).animate({
                    bottom: '-120%'
                }, 1500);
            }
            if(destination.index == '3'){
                $('.section4').find('p').fadeOut(2000);
            }
        }*/
    });

    //echart
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart'));
    // 指定图表的配置项和数据
    var option = {
        title : {
            text: 'web前端技能图',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                }
            }
        },
        calculable : true,
        series : [
            {
                name:'技能打分',
                type:'pie',
                radius : [20, 150],
                center : ['50%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {value:70, name:'html5'},
                    {value:55, name:'JavaScript'},
                    {value:80, name:'CSS3'},
                    {value:60, name:'JQuery'},
                    {value:50, name:'ES6'},
                    {value:70, name:'bootstrap4.0'},
                    {value:30, name:'node'},
                    {value:45, name:'react'}

                ]
            }
        ],
        color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    //标签云球https://blog.csdn.net/z960339491/article/details/70792217
    var entries = [
        { label: 'html5'},
        { label: 'CSS3'},
        { label: 'JavaScript'},
        { label: 'JQuery'},
        { label: 'ES6'},
        { label: 'react'},
        { label: 'webpack'},
        { label: 'nodeJS'},
        { label: 'bootstrap4.0'},
        { label: 'fullpage'},
        { label: 'swiper'},
        { label: 'three.js'},
        { label: '预加载'},
        { label: '懒加载'},
        { label: 'animation.css'},
        { label: 'MUI'},
        { label: 'ECharts'},
        { label: 'layer'},
        { label: 'jsplumb.js'},
        { label: 'jstree.js'},
        { label: 'react全家桶'}
    ];
    var settings = {
        entries: entries,
        width: 500,
        height: 500,
        radius: '60%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#fff',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontSize: '18',
        fontColor: '#000',
        fontWeight: 'normal',//bold
        fontStyle: 'normal'//italic

    };
    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'tagCloud'  ), settings );
    $( '#tagCloud' ).svg3DTagCloud( settings );

});
