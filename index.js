window.onload = function(){
  var btn1 = document.getElementsByTagName('button')[1];
    btn1.onclick = function(){
      let res = window.confirm('您确定要支付吗？');
      if(res){
        // 若是点击了确定，即res为true，即开始跳转页面
        location.href = './succ.html'
      }
    }
}