/**
 *author:doulu
 *create time:2018-07-23
 *description:
 */
$(function () {
    var F_Word ={
        _formatWord:function(data){
            var wordObj = {word:[],color:[]};
            for(var i=0;i<data.length;i++){
                wordObj.word.push(data[i]['keyword']);
                switch(data[i]['senti_type']){
                    case 'pos':
                        wordObj.color.push('lt_fmPlWPos');
                        break;
                    case 'sin':
                        wordObj.color.push('lt_fmPlWSin');
                        break;
                    case 'big':
                        wordObj.color.push('lt_fmPlWBig');
                        break;
                    case 'gyh':
                        wordObj.color.push('lt_fmPlWGyh');
                        break;
                    default:break;
                }
            }
            return wordObj;
        }
    };
    function wordCloudShow(dom,words,callback,extraclass){
        var ratio = [];
        wordCloudObj = new WordCloud(dom, words, callback, extraclass, null, words.length, null, ratio);
    }
    //		$.get("./game.json",function(json){
    //          	var data = json.data
    var jdata = {"data":{"senti_date_distri":[
        {"data_date":"2017-01-30","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-01-31","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-01","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-02","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-03","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-04","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-05","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-06","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-07","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-08","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-09","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-10","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-11","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-12","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-13","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-14","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-15","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-16","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-17","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-18","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-19","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-20","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-21","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-22","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-23","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-24","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-25","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-26","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-27","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534},
        {"data_date":"2017-02-28","pos_num":922,"sin_num":308,"gyh_num":334,"big_num":534}],
        "senti_word_distri":[
            {"senti_type":"gyh","keyword":"工业化","num":2080},
            {"senti_type":"gyh","keyword":"互联网","num":1080},
            {"senti_type":"gyh","keyword":"海云协同","num":2080},
            {"senti_type":"gyh","keyword":"行业网","num":1080},
            {"senti_type":"gyh","keyword":"航天","num":2080},
            {"senti_type":"gyh","keyword":"国家风","num":1080},
            {"senti_type":"gyh","keyword":"物联网","num":2080},
            {"senti_type":"gyh","keyword":"智慧生产","num":1080},
            {"senti_type":"sin","keyword":"3D打印","num":1080},
            {"senti_type":"sin","keyword":"当下企业","num":2080},
            {"senti_type":"sin","keyword":"中国制造","num":1080},
            {"senti_type":"pos","keyword":"云平台","num":68},
            {"senti_type":"pos","keyword":"标准化","num":68},
            {"senti_type":"pos","keyword":"BAT","num":68},
            {"senti_type":"big","keyword":"阿里云","num":68},
            {"senti_type":"big","keyword":"智慧化","num":68},
            {"senti_type":"big","keyword":"工业4.0","num":68},
            {"senti_type":"big","keyword":"大数据","num":68}]},"return_code":0,"return_message":""};
    var data= jdata.data;
    console.log(111,data);
    if(data.senti_word_distri && data.senti_word_distri.length > 0){
        console.log('senti_word_distri:');
        var wordObj = F_Word._formatWord((data.senti_word_distri));
        console.log(wordObj);
        wordCloudShow($('#words'),wordObj.word,null,wordObj.color);
        // F_Pop._detail('appWord');
    }
    //		});
    $(document).click(function(){
        wordCloudObj.resume()
    });
    $('#words').css('transform-origin','0 0');

    $(window).resize(function(){
        ciqu();
    });
    ciqu();
    function ciqu(){
        if($('#words').parent().width()<500){
            var xis = ($('#words').parent().width()-70)/$('#words').width();
            $('#words').css('transform',"scale("+xis+") translate(16%)");
        }
    }
});