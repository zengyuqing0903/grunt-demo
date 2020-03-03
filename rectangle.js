$(function(){
    // get dom ele
    var $width = $('#width'),
        $height = $('#height'),
        $btn = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /**
     * 小数点后面保留第 n 位
     *
     * @param x 做近似处理的数
     * @param n 小数点后第 n 位
     * @returns {undefined}近似处理后的数 
     */
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    /**calc button click event */
    $btn.click(function(){
        // get value
        var w = Number($width.val()),
            h = Number($height.val());
        // calculate
        /*
        var p = 2 * (w + h),
            a = w * h;
        */
        var rect = rectangle();

        // decimalsave
        var p = roundFractional(rect.perimeter(w,h),2);
        var a = roundFractional(rect.area(w,h),2);
        // output
        $perimeter.val(p);
        $area.val(a);
    });

});